<div align="center">
  <h1>🧙 Codex Elementalis</h1>
  <p>
    Plataforma web interativa desenvolvida como parte de um ecossistema educacional gamificado (RPG), projetada para gerir elementos, progressão e consultas de jogadores e estudantes de forma visual e intuitiva.
  </p>
</div>

<hr />

<h2>🚀 Funcionalidades</h2>
<ul>
  <li><strong>Mecânica de Elementos e Alquimia:</strong> Consulta e conjuração de essências elementares com controlo de quantidades e cálculo de valores em bazares[cite: 3].</li>
  <li><strong>Autenticação e Gestão de Contas:</strong> Painel com suporte para autenticação de utilizadores, verificação de e-mail e recuperação ou visualização de credenciais[cite: 3, 4].</li>
  <li><strong>Interface Gamificada:</strong> Modais interativos, efeitos sonoros e visuais, e cartas descritivas do universo do jogo (<em>lore</em>)[cite: 3].</li>
  <li><strong>Integração com Nuvem:</strong> Estruturado para sincronização e alojamento através dos serviços Firebase[cite: 3, 4].</li>
</ul>

<hr />

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+)[cite: 3, 4]</li>
  <li><strong>Backend / Serviços:</strong> Firebase (Authentication, Hosting)[cite: 3, 4]</li>
  <li><strong>Controlo de Versão:</strong> Git e GitHub[cite: 3, 4]</li>
</ul>

<hr />

<h2>📂 Estrutura de Ficheiros</h2>
<pre>
codex-elementalis/
├── .firebase/             # Configurações de cache e execução do Firebase
├── 404.html               # Página de erro customizada
├── contas.js              # Lógica de administração e gestão de contas
├── dados-atomicos.js      # Base de dados em memória dos elementos alquímicos
├── estilo.css             # Estilos visuais e regras de layout responsivo
├── firebase.json          # Ficheiro de configuração do Firebase Hosting
├── index.html             # Interface principal da aplicação
├── jogo.js                # Lógica principal de mecânicas de jogo e eventos
├── ver-senha.js           # Utilitário de visibilidade de palavras-passe
└── verificar-email.js     # Fluxo de validação de e-mails de utilizadores
</pre>

<hr />

<h2>💻 Como Executar Localmente</h2>
<ol>
  <li>
    Clone o repositório:
    <pre><code>git clone https://github.com/Edinaldo-long/codex-elementalis.git</code></pre>
  </li>
  <li>
    Aceda à pasta do projeto:
    <pre><code>cd codex-elementalis</code></pre>
  </li>
  <li>
    Abra o ficheiro <code>index.html</code> no seu navegador web ou utilize a extensão <strong>Live Server</strong> no Visual Studio Code para execução em tempo real.
  </li>
</ol>

<hr />


