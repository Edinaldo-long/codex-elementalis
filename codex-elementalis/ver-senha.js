// Botão de olho para mostrar ou ocultar a senha no login e no cadastro.
(function () {
  var campo = document.getElementById('inSenha');
  if (!campo) return;
  var rotulo = campo.closest('label');
  if (!rotulo) return;

  // Esconde o olho nativo do Edge/IE para não ficar com dois ícones
  var estilo = document.createElement('style');
  estilo.textContent = '#inSenha::-ms-reveal, #inSenha::-ms-clear { display: none; }';
  document.head.appendChild(estilo);

  rotulo.style.position = 'relative';
  campo.style.paddingRight = '48px';

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = '👁';
  btn.title = 'Mostrar ou ocultar a senha';
  btn.setAttribute('aria-label', 'Mostrar senha');
  btn.setAttribute('aria-pressed', 'false');
  btn.style.cssText =
    'position:absolute;right:6px;bottom:4px;width:38px;height:35px;' +
    'background:none;border:none;cursor:pointer;font-size:1.2rem;line-height:1;opacity:.75;';
  rotulo.appendChild(btn);

  function definir(mostrar) {
    campo.type = mostrar ? 'text' : 'password';
    btn.textContent = mostrar ? '🙈' : '👁';
    btn.setAttribute('aria-pressed', String(mostrar));
    btn.setAttribute('aria-label', mostrar ? 'Ocultar senha' : 'Mostrar senha');
  }

  btn.addEventListener('click', function () {
    definir(campo.type === 'password');
    campo.focus();
  });

  // Ao enviar o formulário ou trocar de aba, volta a ocultar
  var form = document.getElementById('authForm');
  if (form) form.addEventListener('submit', function () { definir(false); });
  ['tabLogin', 'tabSignup'].forEach(function (id) {
    var t = document.getElementById(id);
    if (t) t.addEventListener('click', function () { definir(false); });
  });
})();
