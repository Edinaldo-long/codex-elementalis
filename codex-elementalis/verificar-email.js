(function () {
  // ===== COLE AQUI A URL DO APPS SCRIPT (termina em /exec) =====
  var URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbwB9B9m_psmH0z8ATMexNmdke1r7OdE-7dXeWwPP0_Kr36btniXsAuYGfQt2H-nrdDH/exec';
  var VALIDADE_MIN = 10;
  var ESPERA_REENVIO_S = 30;

  var $ = function (id) { return document.getElementById(id); };
  var form = $('authForm');
  if (!form) { console.error('verificar-email.js: não achei o formulário.'); return; }

  var estado = null;      // { email, ultimoEnvio }
  var verificado = null;  // e-mail já confirmado
  var timer = null;

  // ===== Visual do campo de código =====
  var css = document.createElement('style');
  css.textContent = `
    .cod-box { margin: 4px 0 12px; padding: 12px; background: rgba(255,255,255,0.35);
      border: 1.5px dashed var(--parchment-border); border-radius: 6px; }
    .cod-box[hidden] { display: none; }
    .cod-box p { font-size: 0.92rem; color: #4a280f; margin-bottom: 8px; line-height: 1.3; }
    .cod-box input { text-align: center; font-size: 1.6rem; letter-spacing: 0.5em; padding-left: 0.5em; }
    .cod-box .auth-link:disabled { opacity: 0.55; cursor: default; text-decoration: none; }
  `;
  document.head.appendChild(css);

  var box = document.createElement('div');
  box.className = 'cod-box';
  box.hidden = true;
  box.innerHTML =
    '<p id="codTexto"></p>' +
    '<label class="auth-field" style="margin-bottom:0"><span>Código de 4 dígitos</span>' +
    '<input id="inCodigo" type="text" inputmode="numeric" maxlength="4" autocomplete="one-time-code" placeholder="0000"></label>' +
    '<button type="button" class="auth-link" id="btnReenviar">Reenviar código</button>';
  $('btnAuth').insertAdjacentElement('beforebegin', box);

  // ===== Funções de apoio =====
  function msg(texto, tipo) {
    var m = $('authMsg');
    m.textContent = texto || '';
    m.className = 'auth-msg ' + (tipo || '');
  }
  function emailOk(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
  function ehCadastro() { return $('tabSignup').classList.contains('on'); }
  function configurado() { return URL_SCRIPT && URL_SCRIPT.indexOf('COLE') !== 0; }

  function esconder(restaurarRotulo) {
    clearInterval(timer);
    estado = null;
    box.hidden = true;
    $('inCodigo').value = '';
    if (restaurarRotulo && ehCadastro()) $('btnAuth').textContent = 'Criar conta';
  }

  function contagem() {
    var b = $('btnReenviar');
    clearInterval(timer);
    function tick() {
      if (!estado) { clearInterval(timer); return; }
      var falta = Math.ceil((estado.ultimoEnvio + ESPERA_REENVIO_S * 1000 - Date.now()) / 1000);
      if (falta > 0) { b.disabled = true; b.textContent = 'Reenviar código (' + falta + 's)'; }
      else { b.disabled = false; b.textContent = 'Reenviar código'; clearInterval(timer); }
    }
    tick();
    timer = setInterval(tick, 500);
  }

  // Chama o Apps Script (sem cabeçalhos extras, para o navegador não bloquear)
  function chamar(dados) {
    return fetch(URL_SCRIPT, { method: 'POST', body: JSON.stringify(dados) })
      .then(function (r) { return r.json(); });
  }

  // ===== Pedir o código por e-mail =====
  function enviar(email, nome) {
    if (!configurado()) {
      msg('Falta colocar a URL do Apps Script no arquivo verificar-email.js.', 'err');
      return;
    }
    var btn = $('btnAuth');
    btn.disabled = true;
    msg('Enviando o código para ' + email + '…');
    chamar({ acao: 'enviar', email: email, nome: nome })
      .then(function (r) {
        if (!r.ok) {
          msg(r.erro === 'aguarde' ? 'Aguarde alguns segundos para pedir outro código.'
            : r.erro === 'email_invalido' ? 'Esse e-mail não parece válido.'
            : 'Não consegui enviar o e-mail. Confira o endereço e tente de novo.', 'err');
          return;
        }
        estado = { email: email, ultimoEnvio: Date.now() };
        $('codTexto').textContent = 'Enviamos um código de 4 dígitos para ' + email +
          '. Digite abaixo (vale ' + VALIDADE_MIN + ' minutos; olhe também o spam).';
        box.hidden = false;
        $('inCodigo').value = '';
        $('inCodigo').focus();
        btn.textContent = 'Confirmar código';
        msg('Código enviado!', 'ok');
        contagem();
      })
      .catch(function (e) {
        console.error(e);
        msg('Não consegui falar com o servidor de confirmação. Tente de novo.', 'err');
      })
      .then(function () { btn.disabled = false; });
  }

  // ===== Conferir o código digitado =====
  function conferir() {
    var dig = $('inCodigo').value.trim();
    if (!/^\d{4}$/.test(dig)) { msg('Digite os 4 números do código.', 'err'); return; }
    var btn = $('btnAuth');
    var email = estado.email;
    btn.disabled = true;
    msg('Conferindo…');
    chamar({ acao: 'conferir', email: email, codigo: dig })
      .then(function (r) {
        btn.disabled = false;
        if (r.ok) {
          verificado = email;
          esconder(true);
          msg('E-mail confirmado!', 'ok');
          form.requestSubmit(); // segue para a criação da conta
          return;
        }
        if (r.erro === 'expirado') {
          esconder(true);
          msg('O código expirou. Clique em Criar conta para receber outro.', 'err');
        } else if (r.erro === 'tentativas') {
          esconder(true);
          msg('Muitas tentativas erradas. Clique em Criar conta para receber um novo código.', 'err');
        } else {
          msg('Código incorreto. Tentativas restantes: ' + (r.restantes != null ? r.restantes : '?') + '.', 'err');
        }
      })
      .catch(function (e) {
        console.error(e);
        btn.disabled = false;
        msg('Não consegui conferir o código. Tente de novo.', 'err');
      });
  }

  // ===== Intercepta o envio do formulário de cadastro =====
  form.addEventListener('submit', function (ev) {
    if (!ehCadastro()) return;
    var nome = $('inNome').value.trim();
    var email = $('inEmail').value.trim();
    var senha = $('inSenha').value;
var turma = $('inTurma').value.trim();
if (nome.length < 2 || !turma || !email || senha.length < 6) return; 
    if (verificado === email) return;                          // já confirmado: cria a conta

    ev.preventDefault();
    ev.stopImmediatePropagation();

    if (!emailOk(email)) { msg('Esse e-mail não parece válido.', 'err'); return; }
    if (estado && estado.email === email) conferir();
    else enviar(email, nome);
  }, true);

  $('btnReenviar').addEventListener('click', function () {
    if (estado) enviar(estado.email, $('inNome').value.trim());
  });

  // Mudou o e-mail ou trocou de aba: recomeça a confirmação
  $('inEmail').addEventListener('input', function () {
    var v = this.value.trim();
    if (estado && v !== estado.email) esconder(true);
    if (v !== verificado) verificado = null;
  });
  $('tabLogin').addEventListener('click', function () { esconder(false); });
  $('tabSignup').addEventListener('click', function () { esconder(false); });
})();