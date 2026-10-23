import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, sendPasswordResetEmail, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, addDoc, collection, getDocs,
  query, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuração do projeto codex-elementalis (não é segredo; a segurança vem das regras do Firestore)
const firebaseConfig = {
  apiKey: "AIzaSyAXtYUUrwBDyF8t8FjpVT3yW_LAcvajUww",
  authDomain: "codex-elementalis.firebaseapp.com",
  projectId: "codex-elementalis",
  storageBucket: "codex-elementalis.firebasestorage.app",
  messagingSenderId: "154362351860",
  appId: "1:154362351860:web:5593c0c086fe92cba3cea1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let usuarioAtual = null;   // { uid, nome, papel }
let registrando = false;   // true enquanto a conta nova está sendo criada
let modo = 'login';

/* ---------- Mensagens ---------- */
function erroAmigavel(e) {
  const c = (e && e.code) || '';
  const credenciais = 'E-mail ou senha incorretos.';
  const mapa = {
    'auth/invalid-credential': credenciais,
    'auth/wrong-password': credenciais,
    'auth/user-not-found': credenciais,
    'auth/invalid-email': 'Esse e-mail não parece válido.',
    'auth/email-already-in-use': 'Esse e-mail já tem conta. Use a aba Entrar (ou "Esqueci minha senha"). Se o seu acesso foi removido, peça ao professor para reativar.',
    'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
    'auth/too-many-requests': 'Muitas tentativas. Espere alguns minutos e tente de novo.',
    'auth/network-request-failed': 'Sem conexão com a internet.',
    'auth/operation-not-allowed': 'O login por e-mail e senha não está ativado no Firebase.',
    'auth/invalid-api-key': 'A chave (apiKey) do Firebase no arquivo está incorreta.',
    'auth/unauthorized-domain': 'Este endereço não está autorizado no Firebase (Authentication > Configurações > Domínios autorizados).',
    'conta-bloqueada': 'O acesso desta conta foi removido. Peça ao professor para reativar e entre de novo.',
    'permission-denied': 'O banco recusou o acesso. Confira as regras de segurança do Firestore.',
    'unavailable': 'Não consegui falar com o banco. Tente de novo.'
  };
  return mapa[c] || ('Algo deu errado (' + (c || (e && e.message) || 'erro desconhecido') + ').');
}

function setMsg(texto, tipo) {
  const m = $('authMsg');
  m.textContent = texto || '';
  m.className = 'auth-msg ' + (tipo || '');
}

function setSave(estado) {
  const el = $('saveState');
  el.textContent = estado === 'saving' ? 'Salvando…'
    : estado === 'ok' ? 'Progresso salvo'
    : estado === 'err' ? 'Não consegui salvar o último resultado' : '';
  el.style.color = estado === 'err' ? '#e08a6a' : '';
}

/* ---------- Telas de login ---------- */
function setModo(m) {
  modo = m;
  const cadastro = m === 'signup';
  $('tabLogin').classList.toggle('on', !cadastro);
  $('tabSignup').classList.toggle('on', cadastro);
  $('fieldNome').hidden = !cadastro;
  $('fieldTurma').hidden = !cadastro;
  $('btnAuth').textContent = cadastro ? 'Criar conta' : 'Entrar';
  $('inSenha').autocomplete = cadastro ? 'new-password' : 'current-password';
  $('btnReset').hidden = cadastro;
  setMsg('');
}

function mostrarAuth() {
  $('bootCover').hidden = true;
  $('authOverlay').hidden = false;
  $('inSenha').value = '';
}

$('tabLogin').addEventListener('click', () => setModo('login'));
$('tabSignup').addEventListener('click', () => setModo('signup'));

/* ---------- Sessão ---------- */
async function criarFichaAluno(ref, user, nome, turma) {
  await setDoc(ref, {
    papel: 'aluno',
    nome: nome || user.displayName || (user.email || 'Aluno').split('@')[0],
    email: user.email || '',
    turma: turma || '',
    xp: 0, ouro: 100, sinteses: 0, receitas: [], rank: 'Iniciado',
    criadoEm: serverTimestamp(), atualizadoEm: serverTimestamp()
  });
}

async function iniciarSessao(user) {
  const ref = doc(db, 'usuarios', user.uid);
  let snap = await getDoc(ref);
  if (!snap.exists()) {
    await criarFichaAluno(ref, user);
    snap = await getDoc(ref);
  }
  const d = snap.data();
  if (d.bloqueado) throw { code: 'conta-bloqueada' };
  usuarioAtual = { uid: user.uid, nome: d.nome || user.displayName || user.email, papel: d.papel };

  $('authOverlay').hidden = true;
  $('bootCover').hidden = true;

  if (d.papel === 'professor') {
    $('sessionBar').hidden = true;
    $('tUser').textContent = usuarioAtual.nome;
    $('teacherOverlay').hidden = false;
    await carregarPainel();
  } else {
    window.RPG.setState(d);
    $('sessionName').textContent = usuarioAtual.nome;
    setSave('');
    $('sessionBar').hidden = false;
  }
}

async function criarConta(nome, email, senha, turma) {
  registrando = true;
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);
    await updateProfile(cred.user, { displayName: nome });
    await criarFichaAluno(doc(db, 'usuarios', cred.user.uid), cred.user, nome, turma);
    registrando = false;
    await iniciarSessao(cred.user);
  } finally {
    registrando = false;
  }
}

$('authForm').addEventListener('submit', async ev => {
  ev.preventDefault();
  const nome = $('inNome').value.trim();
  const turma = $('inTurma').value.replace(/\s+/g, ' ').trim();
  const email = $('inEmail').value.trim();
  const senha = $('inSenha').value;

  if (modo === 'signup' && nome.length < 2) return setMsg('Escreva seu nome para o professor reconhecer você.', 'err');
  if (modo === 'signup' && !turma) return setMsg('Informe sua turma (ex.: 1º A).', 'err');
  if (!email) return setMsg('Digite seu e-mail.', 'err');
  if (senha.length < 6) return setMsg('A senha precisa ter pelo menos 6 caracteres.', 'err');

  $('btnAuth').disabled = true;
  setMsg(modo === 'signup' ? 'Criando sua conta…' : 'Entrando…');
  try {
    if (modo === 'signup') await criarConta(nome, email, senha, turma);
    else await signInWithEmailAndPassword(auth, email, senha);
  } catch (e) {
    setMsg(erroAmigavel(e), 'err');
  } finally {
    $('btnAuth').disabled = false;
  }
});

$('btnReset').addEventListener('click', async () => {
  const email = $('inEmail').value.trim();
  if (!email) return setMsg('Digite seu e-mail acima e clique de novo em "Esqueci minha senha".', 'err');
  try {
    await sendPasswordResetEmail(auth, email);
    setMsg('Enviamos um link para criar uma nova senha. Olhe também a caixa de spam.', 'ok');
  } catch (e) {
    setMsg(erroAmigavel(e), 'err');
  }
});

async function sair() {
  await signOut(auth);
  location.reload();
}
$('btnLogout').addEventListener('click', sair);
$('btnTLogout').addEventListener('click', sair);

onAuthStateChanged(auth, async user => {
  window.__fbReady = true;
  if (registrando) return;
  if (!user) {
    usuarioAtual = null;
    $('sessionBar').hidden = true;
    $('teacherOverlay').hidden = true;
    mostrarAuth();
    return;
  }
  try {
    await iniciarSessao(user);
  } catch (e) {
    console.error(e);
    mostrarAuth();
    setMsg(erroAmigavel(e), 'err');
    await signOut(auth);
  }
});

/* ---------- Salvar o progresso e o resultado de cada síntese ---------- */
let filaSalvar = Promise.resolve();
window.RPG.onSynthesis = r => {
  if (!usuarioAtual) return;
  const uid = usuarioAtual.uid;
  const nome = usuarioAtual.nome;
  const st = window.RPG.getState();
  const rank = window.RPG.rankOf(st.xp);
  setSave('saving');
  filaSalvar = filaSalvar.then(async () => {
    try {
      await updateDoc(doc(db, 'usuarios', uid), {
        xp: st.xp, ouro: st.ouro, sinteses: st.sinteses, receitas: st.receitas,
        rank, atualizadoEm: serverTimestamp()
      });
      await addDoc(collection(db, 'resultados'), {
        uid, nome,
        tipo: r.tipo, item: r.item, formula: r.formula, reagentes: r.reagentes,
        deltaXp: r.deltaXp, deltaOuro: r.deltaOuro, primeira: r.primeira,
        xpTotal: st.xp, rank, data: serverTimestamp()
      });
      setSave('ok');
    } catch (e) {
      console.error(e);
      setSave('err');
    }
  });
};

/* ---------- Painel do professor ---------- */
let alunos = [];
let atividade = [];
let turmaSel = '';   // '' = todas, '__sem' = sem turma, ou o nome da turma

function fmtData(ts) {
  try {
    const d = ts && ts.toDate ? ts.toDate() : null;
    return d ? d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';
  } catch { return '—'; }
}

const alunosVisiveis = () => alunos.filter(a =>
  !turmaSel ? true : turmaSel === '__sem' ? !a.turma : (a.turma || '') === turmaSel);

function montarFiltroTurma() {
  const sel = $('tFiltroTurma');
  const turmas = [...new Set(alunos.map(a => a.turma || '').filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
  const semTurma = alunos.some(a => !a.turma);
  sel.innerHTML = '<option value="">Todas as turmas</option>' +
    turmas.map(t => '<option value="' + esc(t) + '">' + esc(t) + '</option>').join('') +
    (semTurma ? '<option value="__sem">Sem turma</option>' : '');
  const valido = turmaSel === '' || turmas.includes(turmaSel) || (turmaSel === '__sem' && semTurma);
  sel.value = valido ? turmaSel : '';
  turmaSel = sel.value;
}

function turmasExistentes() {
  return [...new Set(alunos.map(a => a.turma || '').filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
}

function seletorTurma(a) {
  const atual = a.turma || '';
  return '<select data-turma="' + esc(a.id) + '">' +
    '<option value=""' + (!atual ? ' selected' : '') + '>Sem turma</option>' +
    turmasExistentes().map(t => '<option value="' + esc(t) + '"' + (t === atual ? ' selected' : '') + '>' + esc(t) + '</option>').join('') +
    '<option value="__nova">➕ Nova turma…</option>' +
    '</select>';
}

async function alterarTurma(sel) {
  const a = alunos.find(x => x.id === sel.dataset.turma);
  if (!a) return;
  let nova = sel.value;
  if (nova === '__nova') {
    const nome = prompt('Nome da nova turma (ex.: 1º A):');
    nova = (nome || '').replace(/\s+/g, ' ').trim().slice(0, 30);
    if (!nova) { renderAlunos(); return; }   // cancelou: volta ao valor anterior
  }
  sel.disabled = true;
  try {
    await updateDoc(doc(db, 'usuarios', a.id), { turma: nova });
    a.turma = nova;
    montarFiltroTurma();
    renderResumo();
    renderAlunos();
  } catch (e) {
    console.error(e);
    alert('Não consegui alterar a turma (' + (e.code || e.message) + ').');
    renderAlunos();
  }
}

function renderResumo() {
  const lista = alunosVisiveis();
  const n = lista.length;
  const somaXp = lista.reduce((t, a) => t + (Number(a.xp) || 0), 0);
  const somaSint = lista.reduce((t, a) => t + (Number(a.sinteses) || 0), 0);
  $('tStudents').textContent = n;
  $('tAvgXp').textContent = n ? Math.round(somaXp / n) : 0;
  $('tCrafts').textContent = somaSint;
}

function renderAlunos() {
  const box = $('tAlunosLista');
  const lista = alunosVisiveis();
  if (!lista.length) {
    box.innerHTML = '<p class="t-empty">Nenhum aluno encontrado nesta turma.</p>';
    return;
  }
  box.innerHTML = '<table class="t-table"><thead><tr>' +
    '<th>Aluno</th><th>Turma</th><th>Mestria</th><th class="num">XP</th><th class="num">Ouro</th>' +
    '<th class="num">Sínteses</th><th class="num">Receitas</th><th>Última atividade</th></tr></thead><tbody>' +
    lista.map(a =>
      '<tr><td><strong>' + esc(a.nome || '(sem nome)') + '</strong><br><small>' + esc(a.email || '') + '</small></td>' +
      '<td>' + seletorTurma(a) + '</td>' +
      '<td>' + esc(a.rank || 'Iniciado') + '</td>' +
      '<td class="num">' + esc(a.xp || 0) + '</td>' +
      '<td class="num">' + esc(a.ouro ?? 0) + '</td>' +
      '<td class="num">' + esc(a.sinteses || 0) + '</td>' +
      '<td class="num">' + esc(Array.isArray(a.receitas) ? a.receitas.length : 0) + '</td>' +
      '<td>' + fmtData(a.atualizadoEm) + '</td></tr>'
    ).join('') + '</tbody></table>';
}

function montarFiltro() {
  const sel = $('tFiltro');
  const atual = sel.value;
  sel.innerHTML = '<option value="">Todos os alunos</option>' +
    alunos.map(a => '<option value="' + esc(a.id) + '">' + esc(a.nome || a.email || a.id) + '</option>').join('');
  sel.value = alunos.some(a => a.id === atual) ? atual : '';
}

function renderAtividade() {
  const filtro = $('tFiltro').value;
  const lista = atividade.filter(r => !filtro || r.uid === filtro);
  const box = $('tAtividadeLista');
  if (!lista.length) {
    box.innerHTML = '<p class="t-empty">Nenhuma transmutação registrada ainda.</p>';
    return;
  }
  const tag = { ok: ['tag-ok', 'Sucesso'], fail: ['tag-fail', 'Falha'], none: ['tag-neutral', 'Sem reação'] };
  box.innerHTML = '<table class="t-table"><thead><tr>' +
    '<th>Quando</th><th>Aluno</th><th>Resultado</th><th>Item</th><th>Reagentes</th><th class="num">XP</th></tr></thead><tbody>' +
    lista.map(r => {
      const t = tag[r.tipo] || ['tag-neutral', esc(r.tipo || '—')];
      const dxp = Number(r.deltaXp) || 0;
      return '<tr><td>' + fmtData(r.data) + '</td>' +
        '<td>' + esc(r.nome || '—') + '</td>' +
        '<td class="' + t[0] + '">' + t[1] + (r.primeira ? ' ✨' : '') + '</td>' +
        '<td>' + esc(r.item || '—') + (r.formula ? '<br><small>' + esc(r.formula) + '</small>' : '') + '</td>' +
        '<td>' + esc(r.reagentes || '') + '</td>' +
        '<td class="num">' + (dxp > 0 ? '+' : '') + dxp + '</td></tr>';
    }).join('') + '</tbody></table>';
}

async function carregarPainel() {
  try {
    const [us, rs] = await Promise.all([
      getDocs(collection(db, 'usuarios')),
      getDocs(query(collection(db, 'resultados'), orderBy('data', 'desc'), limit(300)))
    ]);
    alunos = us.docs.map(d => ({ id: d.id, ...d.data() }))
      .filter(u => u.papel === 'aluno' && !u.bloqueado)
      .sort((a, b) => (Number(b.xp) || 0) - (Number(a.xp) || 0));
    atividade = rs.docs.map(d => ({ id: d.id, ...d.data() }));
    montarFiltroTurma();
    renderResumo();
    renderAlunos();
    montarFiltro();
    renderAtividade();
  } catch (e) {
    console.error(e);
    $('tAlunosLista').innerHTML = '<p class="t-empty">' + esc(erroAmigavel(e)) + '</p>';
  }
}

$('btnTRefresh').addEventListener('click', carregarPainel);
$('tFiltro').addEventListener('change', renderAtividade);
$('tAlunosLista').addEventListener('change', ev => {
  const sel = ev.target.closest('select[data-turma]');
  if (sel) alterarTurma(sel);
});
$('tFiltroTurma').addEventListener('change', e => {
  turmaSel = e.target.value;
  renderResumo();
  renderAlunos();
});
$('tTabAlunos').addEventListener('click', () => {
  $('tTabAlunos').classList.add('on'); $('tTabAtividade').classList.remove('on');
  $('tPanelAlunos').hidden = false; $('tPanelAtividade').hidden = true;
});
$('tTabAtividade').addEventListener('click', () => {
  $('tTabAtividade').classList.add('on'); $('tTabAlunos').classList.remove('on');
  $('tPanelAtividade').hidden = false; $('tPanelAlunos').hidden = true;
});