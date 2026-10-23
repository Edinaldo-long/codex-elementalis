(function () {
  // ===== CSS =====
  var css = document.createElement('style');
  css.textContent = `
    /* Modal */
    .modal-card { max-height: 92vh; overflow-y: auto; }
    .atom-grid {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 8px; margin-bottom: 12px;
    }
    .atom-stat {
      background: #c8ad81; border: 1px solid #ab8f62; border-radius: 10px;
      padding: 8px 6px; text-align: center;
    }
    .atom-stat span {
      display: block; font-size: 0.7rem; text-transform: uppercase;
      letter-spacing: 0.5px; color: #522a0c;
    }
    .atom-stat strong {
      font-family: 'Cinzel Decorative', cursive; font-size: 1.1rem; color: #2b1808;
    }
    .atom-config { margin-bottom: 14px; }
    .atom-config p { margin-top: 4px; }
    @media (max-width: 520px) { .atom-grid { grid-template-columns: repeat(2, 1fr); } }

    /* Tabela: quadrados com espaço para a distribuição eletrônica na vertical */
    .table-container { max-width: 1400px; }
    .periodic-grid {
      grid-template-columns: repeat(18, 64px);
      grid-template-rows: repeat(7, 84px) 24px repeat(2, 84px);
      min-width: 1230px;
    }
    .element-slot { width: 64px; height: 84px; }
    .element-rune { font-size: 1rem; }
    .element-cfg {
      font-family: 'Philosopher', serif;
      text-align: center;
      color: #3b200b;
      width: 100%;
      white-space: pre;
      line-height: 1.05;
      margin-top: 1px;
    }
    .element-cfg.l1, .element-cfg.l2 { font-size: 0.74rem; }
    .element-cfg.l3 { font-size: 0.64rem; }
    .element-cfg.l4 { font-size: 0.56rem; }
  `;
  document.head.appendChild(css);

  // ===== HTML dentro do modal (antes do quadro de "Registos do Antigo Mestre") =====
  var lore = document.querySelector('.modal-card .lore-card');
  if (!lore) { console.error('dados-atomicos.js: não achei o modal.'); return; }
  lore.insertAdjacentHTML('beforebegin', `
    <div class="atom-grid">
      <div class="atom-stat"><span>Prótons</span><strong id="mP">1</strong></div>
      <div class="atom-stat"><span>Nêutrons</span><strong id="mN">0</strong></div>
      <div class="atom-stat"><span>Elétrons</span><strong id="mE">1</strong></div>
      <div class="atom-stat"><span>Massa atômica</span><strong id="mMass">1,008 u</strong></div>
    </div>
    <div class="info-card atom-config">
      <h4>🧬 Distribuição Eletrônica</h4>
      <p id="mCfg">1s¹</p>
      <p id="mShells">K = 1</p>
    </div>
  `);

  // ===== DADOS ATÔMICOS =====
  // Massa atômica em u, de Z = 1 a 118.
  // Sem isótopo estável: número de massa do isótopo mais estável conhecido.
  var ATOMIC_MASS = [
    1.008, 4.0026, 6.94, 9.0122, 10.81, 12.011, 14.007, 15.999, 18.998, 20.180,
    22.990, 24.305, 26.982, 28.085, 30.974, 32.06, 35.45, 39.948,
    39.098, 40.078, 44.956, 47.867, 50.942, 51.996, 54.938, 55.845, 58.933, 58.693,
    63.546, 65.38, 69.723, 72.630, 74.922, 78.971, 79.904, 83.798,
    85.468, 87.62, 88.906, 91.224, 92.906, 95.95, 98, 101.07, 102.906, 106.42,
    107.868, 112.414, 114.818, 118.710, 121.760, 127.60, 126.904, 131.293,
    132.905, 137.327,
    138.905, 140.116, 140.908, 144.242, 145, 150.36, 151.964, 157.25, 158.925,
    162.500, 164.930, 167.259, 168.934, 173.045, 174.967,
    178.486, 180.948, 183.84, 186.207, 190.23, 192.217, 195.084, 196.967,
    200.592, 204.38, 207.2, 208.980, 209, 210, 222,
    223, 226,
    227, 232.038, 231.036, 238.029, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 266,
    267, 268, 269, 270, 277, 278, 281, 282, 285, 286, 289, 290, 293, 294, 294
  ];

  var SUBSHELLS = [['1s',2],['2s',2],['2p',6],['3s',2],['3p',6],['4s',2],['3d',10],['4p',6],
    ['5s',2],['4d',10],['5p',6],['6s',2],['4f',14],['5d',10],['6p',6],['7s',2],['5f',14],['6d',10],['7p',6]];

  // Exceções ao preenchimento padrão (configurações experimentais)
  var CFG_EXC = {
    24:{'4s':1,'3d':5}, 29:{'4s':1,'3d':10},
    41:{'5s':1,'4d':4}, 42:{'5s':1,'4d':5}, 44:{'5s':1,'4d':7}, 45:{'5s':1,'4d':8},
    46:{'5s':0,'4d':10}, 47:{'5s':1,'4d':10},
    57:{'4f':0,'5d':1}, 58:{'4f':1,'5d':1}, 64:{'4f':7,'5d':1},
    78:{'6s':1,'5d':9}, 79:{'6s':1,'5d':10},
    89:{'5f':0,'6d':1}, 90:{'5f':0,'6d':2}, 91:{'5f':2,'6d':1}, 92:{'5f':3,'6d':1},
    93:{'5f':4,'6d':1}, 96:{'5f':7,'6d':1}, 103:{'6d':0,'7p':1},
    110:{'7s':1,'6d':9}, 111:{'7s':1,'6d':10}
  };
  var NOBLES = [[86,'Rn'],[54,'Xe'],[36,'Kr'],[18,'Ar'],[10,'Ne'],[2,'He']];
  var supNum = function (n) { return String(n).replace(/\d/g, function (d) { return '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]; }); };

  function configOf(z) {
    var left = z, m = {};
    SUBSHELLS.forEach(function (s) { m[s[0]] = Math.min(s[1], left); left -= m[s[0]]; });
    return Object.assign(m, CFG_EXC[z] || {});
  }
  // Lista de subníveis ocupados (ex.: ['2s²', '2p³']), sem os que já estão no gás nobre
  function cfgList(m, skip) {
    return SUBSHELLS.map(function (s) { return s[0]; })
      .filter(function (k) { return m[k] > 0 && !(skip && skip[k] > 0); })
      .map(function (k) { return k + supNum(m[k]); });
  }
  function shellsOf(m) {
    var L = 'KLMNOPQ', out = [];
    SUBSHELLS.forEach(function (s) { var n = +s[0][0] - 1; out[n] = (out[n] || 0) + m[s[0]]; });
    var txt = [];
    for (var i = 0; i < out.length; i++) if (out[i] > 0) txt.push(L[i] + ' = ' + out[i]);
    return txt.join(' · ');
  }

  ELEMENTS.forEach(function (e) {
    var mass = ATOMIC_MASS[e.z - 1];
    var instavel = e.z === 43 || e.z === 61 || (e.z >= 84 && [90, 91, 92].indexOf(e.z) === -1);
    var cfg = configOf(e.z);
    var core = NOBLES.find(function (n) { return n[0] < e.z; });
    var lista = cfgList(cfg, core ? configOf(core[0]) : null);
    e.p = e.z;
    e.e = e.z;
    e.n = Math.round(mass) - e.z;
    e.massTxt = (instavel ? '[' + Math.round(mass) + ']' : String(mass).replace('.', ',')) + ' u';
    // Texto em linha única (modal e dica) e em linhas separadas (quadrado da tabela)
    e.cfgTxt = (core ? '[' + core[1] + '] ' : '') + lista.join(' ');
    e.cfgLines = core ? ['[' + core[1] + '] ' + lista[0]].concat(lista.slice(1)) : lista;
    e.shellsTxt = shellsOf(cfg);
  });

  // ===== Distribuição eletrônica na vertical, dentro de cada quadrado =====
  ELEMENTS.forEach(function (e) {
    var slot = document.getElementById('slot-' + e.s);
    if (!slot) return;
    var linha = document.createElement('span');
    linha.className = 'element-cfg l' + Math.min(e.cfgLines.length, 4);
    linha.textContent = e.cfgLines.join('\n');
    slot.appendChild(linha);
    slot.title = e.latin + '\nDistribuição: ' + e.cfgTxt + '\nCamadas: ' + e.shellsTxt;
  });

  // ===== Preencher o modal quando um elemento é aberto =====
  var abrirOriginal = window.openElementModal;
  window.openElementModal = function (el) {
    abrirOriginal(el);
    document.getElementById('mP').innerText = el.p;
    document.getElementById('mN').innerText = el.n;
    document.getElementById('mE').innerText = el.e;
    document.getElementById('mMass').innerText = el.massTxt;
    document.getElementById('mCfg').innerText = el.cfgTxt;
    document.getElementById('mShells').innerText = 'Camadas: ' + el.shellsTxt;
  };
})();