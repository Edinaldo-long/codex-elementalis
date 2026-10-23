// Administração do Codex Elementalis (só para o e-mail admin):
//  - aba "Contas": alocar aluno em turma, criar turma, trocar Aluno/Professor e excluir contas
//  - botão "Jogar RPG": o admin joga e depois volta ao painel
import { getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, collection, getDocs, updateDoc, deleteDoc, query, where, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ADMIN_EMAIL = 'esatakeu@gmail.com';

const app = getApp();
const auth = getAuth(app);
const db = getFirestore(app);

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let montado = false;
let todos = [];
let aba, painel;

// Turmas que já existem (as que têm pelo menos um aluno)
function listaTurmas() {
  return [...new Set(todos.map(u => u.turma || '').filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
}

function seletorTurma(u) {
  const atual = u.turma || '';
  const turmas = listaTurmas();
  return '<select data-turma="' + esc(u.id) + '">' +
    '<option value=""' + (!atual ? ' selected' : '') + '>Sem turma</option>' +
    turmas.map(t => '<option value="' + esc(t) + '"' + (t === atual ? ' selected' : '') + '>' + esc(t) + '</option>').join('') +
    '<option value="__nova">➕ Nova turma…</option>' +
    '</select>';
}

function render() {
  if (!todos.length) {
    painel.innerHTML = '<p class="t-empty">Nenhuma conta encontrada.</p>';
    return;
  }
  const meuUid = auth.currentUser && auth.currentUser.uid;
  painel.innerHTML =
    '<p style="margin:2px 6px 6px;font-size:.9rem;color:#6a4724">' +
    'Para <strong>criar uma turma</strong>, escolha “➕ Nova turma…” no aluno e digite o nome (ex.: 1º A). ' +
    'Ela passa a aparecer na lista dos outros alunos e no filtro do painel.</p>' +
    '<p style="margin:2px 6px 10px;font-size:.9rem;color:#6a4724">' +
    '“Remover acesso” apaga o histórico de sínteses e <strong>bloqueia a entrada</strong> da pessoa no jogo. ' +
    'O e-mail dela continua cadastrado no Firebase; para liberar o e-mail de novo, apague-o em ' +
    '<strong>Console do Firebase → Authentication → Usuários</strong>.</p>' +
    '<table class="t-table"><thead><tr><th>Conta</th><th>Turma</th><th>Papel</th><th>Ações</th></tr></thead><tbody>' +
    todos.map(u => {
      const eu = u.id === meuUid;
      const turma = (eu || u.papel === 'professor' || u.bloqueado) ? '—' : seletorTurma(u);
      const papel = eu
        ? '<strong>Administrador (você)</strong>'
        : u.bloqueado ? '<strong style="color:#8a1c0c">🚫 Acesso bloqueado</strong>'
        : '<select data-uid="' + esc(u.id) + '">' +
          '<option value="aluno"' + (u.papel === 'aluno' ? ' selected' : '') + '>Aluno</option>' +
          '<option value="professor"' + (u.papel === 'professor' ? ' selected' : '') + '>Professor</option>' +
          '</select>';
      const acao = eu ? '—'
        : u.bloqueado ? '<button type="button" class="mini-btn" data-reativar="' + esc(u.id) + '">Reativar</button>'
        : '<button type="button" class="mini-btn" data-del="' + esc(u.id) + '">Remover acesso</button>';
      return '<tr><td><strong>' + esc(u.nome || '(sem nome)') + '</strong><br><small>' + esc(u.email || '') + '</small></td>' +
        '<td>' + turma + '</td><td>' + papel + '</td><td>' + acao + '</td></tr>';
    }).join('') + '</tbody></table>';
}

async function carregar() {
  painel.innerHTML = '<p class="t-empty">Carregando…</p>';
  try {
    const snap = await getDocs(collection(db, 'usuarios'));
    todos = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (a.nome || '').localeCompare(b.nome || ''));
    render();
  } catch (e) {
    console.error(e);
    painel.innerHTML = '<p class="t-empty">Não consegui carregar as contas (' + esc(e.code || e.message) + '). Confira as regras do Firestore.</p>';
  }
}

function abrirAba() {
  $('tTabAlunos').classList.remove('on');
  $('tTabAtividade').classList.remove('on');
  aba.classList.add('on');
  $('tPanelAlunos').hidden = true;
  $('tPanelAtividade').hidden = true;
  painel.hidden = false;
  carregar();
}

function fecharAba() {
  aba.classList.remove('on');
  painel.hidden = true;
}

async function alterarTurma(sel) {
  const u = todos.find(x => x.id === sel.dataset.turma);
  if (!u) return;
  let nova = sel.value;
  if (nova === '__nova') {
    const nome = prompt('Nome da nova turma (ex.: 1º A):');
    nova = (nome || '').replace(/\s+/g, ' ').trim().slice(0, 30);
    if (!nova) { render(); return; }   // cancelou: volta ao valor anterior
  }
  sel.disabled = true;
  try {
    await updateDoc(doc(db, 'usuarios', u.id), { turma: nova });
    u.turma = nova;
    render();                          // atualiza a lista de turmas em todos os seletores
    $('btnTRefresh').click();          // atualiza o painel principal (filtro e contagens)
  } catch (e) {
    console.error(e);
    alert('Não consegui alterar a turma (' + (e.code || e.message) + ').');
    await carregar();
  }
}

async function excluirConta(btn) {
  const u = todos.find(x => x.id === btn.dataset.del);
  if (!u || u.id === auth.currentUser.uid) return;
  const nome = u.nome || u.email || u.id;
  if (!confirm('Remover o acesso de "' + nome + '"?\n\nIsso apaga o histórico de sínteses e bloqueia a entrada dessa pessoa no jogo. Você pode reativar depois pelo botão Reativar (o histórico não volta).')) return;
  btn.disabled = true;
  try {
    const rs = await getDocs(query(collection(db, 'resultados'), where('uid', '==', u.id)));
    for (let i = 0; i < rs.docs.length; i += 400) {
      const lote = writeBatch(db);
      rs.docs.slice(i, i + 400).forEach(d => lote.delete(d.ref));
      await lote.commit();
    }
    await updateDoc(doc(db, 'usuarios', u.id), {
      bloqueado: true, turma: '', xp: 0, ouro: 100, sinteses: 0, receitas: [], rank: 'Iniciado'
    });
    $('btnTRefresh').click();   // recarrega o painel principal e esta aba
  } catch (e) {
    console.error(e);
    alert('Não consegui remover o acesso (' + (e.code || e.message) + ').');
    btn.disabled = false;
  }
}

async function reativarConta(btn) {
  btn.disabled = true;
  try {
    await updateDoc(doc(db, 'usuarios', btn.dataset.reativar), { bloqueado: false });
    $('btnTRefresh').click();
  } catch (e) {
    console.error(e);
    alert('Não consegui reativar (' + (e.code || e.message) + ').');
    btn.disabled = false;
  }
}

function montarJogar() {
  const jogar = document.createElement('button');
  jogar.type = 'button';
  jogar.className = 'mini-btn';
  jogar.id = 'btnTJogar';
  jogar.textContent = '🎮 Jogar RPG';
  $('btnTRefresh').insertAdjacentElement('beforebegin', jogar);

  const voltar = document.createElement('button');
  voltar.type = 'button';
  voltar.className = 'mini-btn';
  voltar.id = 'btnVoltarPainel';
  voltar.textContent = '← Voltar ao painel';
  $('btnLogout').insertAdjacentElement('beforebegin', voltar);

  jogar.addEventListener('click', async () => {
    jogar.disabled = true;
    try {
      const snap = await getDoc(doc(db, 'usuarios', auth.currentUser.uid));
      const d = snap.data() || {};
      window.RPG.setState(d);
      $('sessionName').textContent = (d.nome || auth.currentUser.email) + ' (admin)';
      $('saveState').textContent = '';
      $('teacherOverlay').hidden = true;
      $('sessionBar').hidden = false;
      window.scrollTo(0, 0);
    } catch (e) {
      console.error(e);
      alert('Não consegui abrir o jogo (' + (e.code || e.message) + ').');
    } finally {
      jogar.disabled = false;
    }
  });

  voltar.addEventListener('click', () => {
    $('sessionBar').hidden = true;
    $('teacherOverlay').hidden = false;
    $('btnTRefresh').click();
  });
}

function montar() {
  if (montado) return;
  const tabAtividade = $('tTabAtividade');
  const painelAtividade = $('tPanelAtividade');
  if (!tabAtividade || !painelAtividade) return;
  montado = true;

  aba = document.createElement('button');
  aba.type = 'button';
  aba.className = 'auth-tab';
  aba.id = 'tTabContas';
  aba.textContent = 'Contas';
  tabAtividade.insertAdjacentElement('afterend', aba);

  painel = document.createElement('div');
  painel.className = 't-panel';
  painel.id = 'tPanelContas';
  painel.hidden = true;
  painelAtividade.insertAdjacentElement('afterend', painel);

  aba.addEventListener('click', abrirAba);
  $('tTabAlunos').addEventListener('click', fecharAba);
  $('tTabAtividade').addEventListener('click', fecharAba);
  $('btnTRefresh').addEventListener('click', () => { if (!painel.hidden) carregar(); });

  painel.addEventListener('change', async ev => {
    const selTurma = ev.target.closest('select[data-turma]');
    if (selTurma) { await alterarTurma(selTurma); return; }

    const sel = ev.target.closest('select[data-uid]');
    if (!sel) return;
    sel.disabled = true;
    try {
      await updateDoc(doc(db, 'usuarios', sel.dataset.uid), { papel: sel.value });
      const u = todos.find(x => x.id === sel.dataset.uid);
      if (u) u.papel = sel.value;
      sel.disabled = false;
      render();
      $('btnTRefresh').click();   // atualiza contagens do painel principal
    } catch (e) {
      console.error(e);
      alert('Não consegui alterar o papel (' + (e.code || e.message) + ').');
      await carregar();
    }
  });

  painel.addEventListener('click', ev => {
    const btn = ev.target.closest('button[data-del]');
    if (btn) { excluirConta(btn); return; }
    const re = ev.target.closest('button[data-reativar]');
    if (re) reativarConta(re);
  });

  montarJogar();
}

onAuthStateChanged(auth, user => {
  if (user && (user.email || '').toLowerCase() === ADMIN_EMAIL) montar();
});