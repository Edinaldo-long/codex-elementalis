    const ELEMENTS = [{"z": 1, "s": "H", "rune": "🜁", "col": 1, "row": 1, "cat": "Não-Metal", "tier": "Tier I", "price": "15 PO", "latin": "HYDROGENIUM", "name": "Hidrogénio (Sopro Celestial)", "af": "Éter / Vento Arcano", "po": "Poção dos Saltos Leves e Alívio de Miasmas", "fo": "Alivia em 40% o peso de mantos e elmos", "rk": "Detonação violenta sob chamas mágicas", "lore": "\"O elemento primordial que pairava sobre as águas.\""}, {"z": 2, "s": "He", "rune": "☉", "col": 18, "row": 1, "cat": "Gás Nobre", "tier": "Tier I", "price": "25 PO", "latin": "HELIUM", "name": "Hélio (Solaris)", "af": "Luz Celestial", "po": "Flutuação e imunidade a atordoamento", "fo": "Ligas incandescentes douradas", "rk": "Dispersão inerte veloz", "lore": "\"Capturado dos primeiros raios solares no topo das torres.\""}, {"z": 3, "s": "Li", "rune": "🜍", "col": 1, "row": 2, "cat": "Metal Alcalino", "tier": "Tier I", "price": "20 PO", "latin": "LITHIUM", "name": "Lítio (Chama Pálida)", "af": "Chama Viva & Foco", "po": "Bênção de Fúria e Equilíbrio Mental", "fo": "Condução ágil de relâmpagos", "rk": "Inflamação espontânea perante água", "lore": "\"O sal mais leve, capaz de acender o ânimo dos convalescentes.\""}, {"z": 4, "s": "Be", "rune": "🜔", "col": 2, "row": 2, "cat": "Alcalino-Terroso", "tier": "Tier II", "price": "45 PO", "latin": "BERYLLIUM", "name": "Berílio (Esmeralda Bruta)", "af": "Terra Astral", "po": "Visão Arcana Aguçada", "fo": "Endurece cristais de cajados mágicos", "rk": "Toxina pulmonar cáustica", "lore": "\"Minerado nas veias de berilo onde dormem os dragões.\""}, {"z": 5, "s": "B", "rune": "⚚", "col": 13, "row": 2, "cat": "Semimetal", "tier": "Tier II", "price": "30 PO", "latin": "BORIUM", "name": "Boro (Resistência Térmica)", "af": "Fogo Neutro", "po": "Resistência ao Calor Extremo", "fo": "Vidro arcano inquebrável para elixires", "rk": "Fratura vítrea abrasiva", "lore": "\"A argamassa primordial das fornalhas dos anões.\""}, {"z": 6, "s": "C", "rune": "🜂", "col": 14, "row": 2, "cat": "Não-Metal", "tier": "Tier I", "price": "10 PO", "latin": "CARBONEUM", "name": "Carbono (Origem Orgânica)", "af": "Vida & Trevas", "po": "Absorve toxinas e purifica o sangue", "fo": "Forja o autêntico Aço de Damasco", "rk": "Fumaça asfixiante densa", "lore": "\"O alicerce de tudo o que caminha, arde ou vira cinzas.\""}, {"z": 7, "s": "N", "rune": "🜄", "col": 15, "row": 2, "cat": "Não-Metal", "tier": "Tier I", "price": "12 PO", "latin": "NITROGENIUM", "name": "Nitrogénio (Sopro Glacial)", "af": "Gelo Arcano", "po": "Congelamento instantâneo de tecidos", "fo": "Têmpera ultra-rápida de lâminas", "rk": "Expansão criogênica violenta", "lore": "\"O sopro gelado extraído dos picos perpetuamente nevados.\""}, {"z": 8, "s": "O", "rune": "🜃", "col": 16, "row": 2, "cat": "Não-Metal", "tier": "Tier I", "price": "10 PO", "latin": "OXYGENIUM", "name": "Oxigénio (Vitalis)", "af": "Vida / Fogo Ativo", "po": "Restauração de Vigor e Cura de Feridas", "fo": "Alimenta o fogo das grandes forjas", "rk": "Combustão incontrolável", "lore": "\"Sem este fôlego, nem magias nem homens permanecem sobre a terra.\""}, {"z": 9, "s": "F", "rune": "🜏", "col": 17, "row": 2, "cat": "Halogéneo", "tier": "Tier II", "price": "40 PO", "latin": "FLUORUM", "name": "Flúor (Corrosão Esmeralda)", "af": "Ácido Abissal", "po": "Dissolução de barreiras de pedra", "fo": "Gravador indelével de runas", "rk": "Necrose imediata em contacto", "lore": "\"Mais corrosivo que a saliva do basilisco mais faminto.\""}, {"z": 10, "s": "Ne", "rune": "☼", "col": 18, "row": 2, "cat": "Gás Nobre", "tier": "Tier II", "price": "35 PO", "latin": "NEON", "name": "Néon (Clarão Rubro)", "af": "Ilusão & Fogo Fátuo", "po": "Clarão ofuscante para despistar inimigos", "fo": "Tubos luminosos de sinalização", "rk": "Cegueira temporária", "lore": "\"A luminescência vibrante que guarda passagens secretas.\""}, {"z": 11, "s": "Na", "rune": "🜕", "col": 1, "row": 3, "cat": "Metal Alcalino", "tier": "Tier I", "price": "15 PO", "latin": "NATRIUM", "name": "Sódio (Sal Vivo)", "af": "Fogo Hidráulico", "po": "Equilíbrio físico e alívio de fadiga", "fo": "Purificação de escórias de minério", "rk": "Explosão imediata em contacto líquido", "lore": "\"Cuidado ao lavá-lo: a água desperta a sua ira explosiva.\""}, {"z": 12, "s": "Mg", "rune": "⛢", "col": 2, "row": 3, "cat": "Alcalino-Terroso", "tier": "Tier II", "price": "28 PO", "latin": "MAGNESIUM", "name": "Magnésio (Clarão Solar)", "af": "Luz Ofuscante", "po": "Granada de fumaça luminescente", "fo": "Ligas ultraleves para escudos", "rk": "Chama solar inextinguível", "lore": "\"Uma só faísca transforma a noite escura em meio-dia pleno.\""}, {"z": 13, "s": "Al", "rune": "🜛", "col": 13, "row": 3, "cat": "Metal Pós-Transição", "tier": "Tier II", "price": "30 PO", "latin": "ALUMINIUM", "name": "Alumínio (Metal das Plumas)", "af": "Ar & Voo", "po": "Estabilizador de compostos voláteis", "fo": "Armaduras ágeis que nunca oxidam", "rk": "Deformação sob impactos colossais", "lore": "\"O metal argênteo que não conhece o desgaste dos séculos.\""}, {"z": 14, "s": "Si", "rune": "🜞", "col": 14, "row": 3, "cat": "Semimetal", "tier": "Tier II", "price": "32 PO", "latin": "SILICIUM", "name": "Silício (Cristal Ancestral)", "af": "Adivinhação & Relâmpago", "po": "Comunicação mental e foco", "fo": "Lentes mágicas e núcleos de cetros", "rk": "Fragmentação em lascas afiadas", "lore": "\"A areia que aprendeu a canalizar os fluxos arcanos.\""}, {"z": 15, "s": "P", "rune": "🜚", "col": 15, "row": 3, "cat": "Não-Metal", "tier": "Tier II", "price": "35 PO", "latin": "PHOSPHORUS", "name": "Fósforo (Portador da Luz)", "af": "Fogo Espectral", "po": "Visão na escuridão profunda", "fo": "Projéteis incendiários de fósforo", "rk": "Queimadura persistente inextinguível", "lore": "\"Resplandece nas sombras como o olhar vigilante de uma coruja.\""}, {"z": 16, "s": "S", "rune": "🜍", "col": 16, "row": 3, "cat": "Não-Metal", "tier": "Tier I", "price": "18 PO", "latin": "SULPHUR", "name": "Enxofre (Brimstone Infernal)", "af": "Chamas Abissais", "po": "Veneno sufocante de peste", "fo": "Pólvora arcana para bombas de cerco", "rk": "Vapores asfixiantes mortais", "lore": "\"O aroma deixado pelos enviados do abismo nas encruzilhadas.\""}, {"z": 17, "s": "Cl", "rune": "🜖", "col": 17, "row": 3, "cat": "Halogéneo", "tier": "Tier I", "price": "20 PO", "latin": "CHLORUM", "name": "Cloro (Bruma Tóxica)", "af": "Veneno Aéreo", "po": "Miasma paralisante de tropas", "fo": "Refino e separação de ouro nativo", "rk": "Corrosão respiratória severa", "lore": "\"Uma bruma verde e densa que rasteja pelo solo roubando o ar.\""}, {"z": 18, "s": "Ar", "rune": "🜘", "col": 18, "row": 3, "cat": "Gás Nobre", "tier": "Tier II", "price": "40 PO", "latin": "ARGON", "name": "Árgon (Escudo Inerte)", "af": "Barreira Elemental", "po": "Isola o invocador de magias hostis", "fo": "Solda pura de armaduras de mithril", "rk": "Asfixia por ausência de ar", "lore": "\"O guardião silencioso que se recusa categoricamente a reagir.\""}, {"z": 19, "s": "K", "rune": "🜠", "col": 1, "row": 4, "cat": "Metal Alcalino", "tier": "Tier I", "price": "22 PO", "latin": "KALIUM", "name": "Potássio (Cinza Rúnica)", "af": "Terra & Seiva", "po": "Bálsamo regenerador de estamina", "fo": "Fertilizante alquímico de plantas raras", "rk": "Reação violenta com ácido", "lore": "\"Extraído das cinzas dos bosques sagrados dos druidas.\""}, {"z": 20, "s": "Ca", "rune": "🜟", "col": 2, "row": 4, "cat": "Alcalino-Terroso", "tier": "Tier I", "price": "15 PO", "latin": "CALCIUM", "name": "Cálcio (Estrutura Óssea)", "af": "Necromancia Branca", "po": "Fortificação instantânea de ossos", "fo": "Argamassa de fortalezas inexpugnáveis", "rk": "Calcificação tecidual rígida", "lore": "\"O cimento branco que sustenta a carcaça de homens e bestas.\""}, {"z": 21, "s": "Sc", "rune": "🝀", "col": 3, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "50 PO", "latin": "SCANDIUM", "name": "Escândio (Viga Leve)", "af": "Equilíbrio Físico", "po": "Elixir de postura inabalável", "fo": "Reforço aero-estrutural de lâminas", "rk": "Oxidação térmica lenta", "lore": "\"Raro filão escondido nas montanhas escandinavas esquecidas.\""}, {"z": 22, "s": "Ti", "rune": "🝁", "col": 4, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "75 PO", "latin": "TITANIUM", "name": "Titânio (Força dos Titãs)", "af": "Proteção Titânica", "po": "Poção de couraça inquebrável", "fo": "Armaduras hiper-resistentes e leves", "rk": "Solda complexa e custosa", "lore": "\"Nomeado em honra aos titãs que ergueram a abóbada celeste.\""}, {"z": 23, "s": "V", "rune": "🝂", "col": 5, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "60 PO", "latin": "VANADIUM", "name": "Vanádio (Bênção de Vanadis)", "af": "Resiliência Dúctil", "po": "Poção de flexibilidade reflexiva", "fo": "Confere tenacidade suprema ao aço", "rk": "Vapores tóxicos na têmpera", "lore": "\"Inspirado na deusa da beleza e tenacidade das florestas.\""}, {"z": 24, "s": "Cr", "rune": "🝃", "col": 6, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "45 PO", "latin": "CHROMIUM", "name": "Crómio (Espelho Polido)", "af": "Ilusão & Reflexo", "po": "Poção de pele espelhada contra feitiços", "fo": "Garante brilho eterno e dureza a armas", "rk": "Corrosão ácida cromada", "lore": "\"O metal das cores que reflete os olhares dos feiticeiros.\""}, {"z": 25, "s": "Mn", "rune": "🝄", "col": 7, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "35 PO", "latin": "MANGANUM", "name": "Manganês (Imã Obscuro)", "af": "Força Magnética", "po": "Elixir de resistência a fadiga extrema", "fo": "Desoxigena o aço na forja de armas lendárias", "rk": "Manganismo e tremor", "lore": "\"Irmão sombrio do ferro com propriedades magnéticas misteriosas.\""}, {"z": 26, "s": "Fe", "rune": "♂", "col": 8, "row": 4, "cat": "Metal de Transição", "tier": "Tier I", "price": "8 PO", "latin": "FERRUM", "name": "Ferro (Força de Marte)", "af": "Força & Terra", "po": "Elixir de Pele de Pedra", "fo": "Espadas robustas, machados e cotas de malha", "rk": "Vulnerável à ferrugem mágica", "lore": "\"O osso de ferro do mundo, onde reside o espírito de Marte.\""}, {"z": 27, "s": "Co", "rune": "🝅", "col": 9, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "65 PO", "latin": "COBALTUM", "name": "Cobalto (Duende das Minas)", "af": "Mística & Magnetismo", "po": "Pigmento de visão etérea noturna", "fo": "Ligas resistentes a calor extremo e fricção", "rk": "Gera miasmas de arsénico se impuro", "lore": "\"Batizado pelos mineiros em honra aos travessos kobolds.\""}, {"z": 28, "s": "Ni", "rune": "🝆", "col": 10, "row": 4, "cat": "Metal de Transição", "tier": "Tier II", "price": "40 PO", "latin": "NICCOLUM", "name": "Níquel (Cobre Falso)", "af": "Tenacidade Metálica", "po": "Poção de imunidade à ferrugem", "fo": "Revestimento que impede a oxidação de relíquias", "rk": "Dermatite abrasiva", "lore": "\"Chamado de cobre falso pelos mineiros enganados pelo seu brilho.\""}, {"z": 29, "s": "Cu", "rune": "♀", "col": 11, "row": 4, "cat": "Metal de Transição", "tier": "Tier I", "price": "12 PO", "latin": "CUPRUM", "name": "Cobre (Vénus / Harmonia)", "af": "Condutância & Vida", "po": "Cura de febres e bálsamos de alívio", "fo": "Fios condutores de báculos e anéis", "rk": "Azinhavre tóxico se oxidado", "lore": "\"Consagrado a Vénus, canaliza com docilidade as correntes da vida.\""}, {"z": 30, "s": "Zn", "rune": "🝇", "col": 12, "row": 4, "cat": "Metal de Transição", "tier": "Tier I", "price": "18 PO", "latin": "ZINCUM", "name": "Zinco (Latão Brilhante)", "af": "Proteção & Cicatrização", "po": "Pomada para fechar feridas e cortes", "fo": "Fundição de latão e armaduras douradas", "rk": "Febre dos fumos na fundição", "lore": "\"O metal denteado que confere proteção galvânica ao ferro.\""}, {"z": 31, "s": "Ga", "rune": "🝈", "col": 13, "row": 4, "cat": "Metal Pós-Transição", "tier": "Tier II", "price": "55 PO", "latin": "GALLIUM", "name": "Gálio (Metal Fluido da Mão)", "af": "Transmutação Térmica", "po": "Poção para derreter grilhões ao toque", "fo": "Quebra ligas de alumínio dos inimigos", "rk": "Inutilidade sob frio", "lore": "\"Derrete na palma da mão pelo simples calor do corpo.\""}, {"z": 32, "s": "Ge", "rune": "🝉", "col": 14, "row": 4, "cat": "Semimetal", "tier": "Tier II", "price": "70 PO", "latin": "GERMANIUM", "name": "Germânio (Cristal de Ressonância)", "af": "Clarividência & Foco", "po": "Elixir de precisão óptica à distância", "fo": "Lentes de visão térmica em báculos", "rk": "Fragilidade a choques físicos", "lore": "\"Um semicondutor arcano que capta energias térmicas invisíveis.\""}, {"z": 33, "s": "As", "rune": "🝊", "col": 15, "row": 4, "cat": "Semimetal", "tier": "Tier I", "price": "25 PO", "latin": "ARSENICUM", "name": "Arsénio (Pó dos Herdeiros)", "af": "Veneno Letal", "po": "Veneno insidioso inodoro para adagas", "fo": "Endurece o chumbo em munições de besta", "rk": "Necrose letal e vômito", "lore": "\"A substância silenciosa que encerrou linhagens reais inteiras.\""}, {"z": 34, "s": "Se", "rune": "🝋", "col": 16, "row": 4, "cat": "Não-Metal", "tier": "Tier II", "price": "45 PO", "latin": "SELENIUM", "name": "Selénio (Luz da Lua)", "af": "Fotossensibilidade", "po": "Elixir de velocidade ativado por luz", "fo": "Vidro rubro para câmaras alquímicas", "rk": "Odor pútrido almiscarado", "lore": "\"Consagrado à deusa da Lua por reagir docilmente à luz.\""}, {"z": 35, "s": "Br", "rune": "🝌", "col": 17, "row": 4, "cat": "Halogéneo", "tier": "Tier II", "price": "38 PO", "latin": "BROMUM", "name": "Bromo (Líquido Corrosivo)", "af": "Chama Corrosiva", "po": "Frasco de ácido incendiário arremessável", "fo": "Corantes sagrados púrpura e tratamentos", "rk": "Queimaduras químicas profundas", "lore": "\"O único não-metal líquido que emite um vapor rubro asfixiante.\""}, {"z": 36, "s": "Kr", "rune": "🝍", "col": 18, "row": 4, "cat": "Gás Nobre", "tier": "Tier II", "price": "50 PO", "latin": "KRYPTON", "name": "Criptónio (O Escondido)", "af": "Ocultação Arcana", "po": "Bruma de camuflagem espectral", "fo": "Flashes mágicos de alta intensidade", "rk": "Dificuldade extrema de contenção", "lore": "\"O gás oculto que reluta em revelar sua presença aos magos.\""}, {"z": 37, "s": "Rb", "rune": "🝎", "col": 1, "row": 5, "cat": "Metal Alcalino", "tier": "Tier II", "price": "60 PO", "latin": "RUBIDIUM", "name": "Rubídio (Chama Vermelha)", "af": "Pirotecnia Viva", "po": "Poção de fúria avermelhada", "fo": "Ignição de catapultas arcanas", "rk": "Auto-ignição atmosférica", "lore": "\"Arde com uma chama avermelhada que hipnotiza os presentes.\""}, {"z": 38, "s": "Sr", "rune": "🝏", "col": 2, "row": 5, "cat": "Alcalino-Terroso", "tier": "Tier II", "price": "45 PO", "latin": "STRONTIUM", "name": "Estrôncio (Fogos Carmesins)", "af": "Pirotecnia Sangrenta", "po": "Sinalizador de cerco carmesim", "fo": "Reforço térmico de cerâmicas de forja", "rk": "Irritação respiratória", "lore": "\"O brilho escarlate que tinge o céu durante as batalhas noturnas.\""}, {"z": 39, "s": "Y", "rune": "🝐", "col": 3, "row": 5, "cat": "Metal de Transição", "tier": "Tier III", "price": "90 PO", "latin": "YTTRIUM", "name": "Ítrio (Pedra de Ytterby)", "af": "Resistência Arcana", "po": "Estabilizador de poções lendárias", "fo": "Reforço de pedras de faísca mágicas", "rk": "Toxina acumulativa", "lore": "\"Extraído de pedreiras secretas nas ilhas frias do norte.\""}, {"z": 40, "s": "Zr", "rune": "🝑", "col": 4, "row": 5, "cat": "Metal de Transição", "tier": "Tier II", "price": "85 PO", "latin": "ZIRCONIUM", "name": "Zircónio (Simulador de Diamante)", "af": "Dureza & Fogo", "po": "Bálsamo anti-chamas de dragão", "fo": "Revestimentos refratários em cadinhos", "rk": "Combustão rápida em pó", "lore": "\"Seu brilho assemelha-se ao diamante mais nobre da coroa.\""}, {"z": 41, "s": "Nb", "rune": "🝒", "col": 5, "row": 5, "cat": "Metal de Transição", "tier": "Tier III", "price": "95 PO", "latin": "NIOBIUM", "name": "Nióbio (Lágrima de Níobe)", "af": "Supercondutância", "po": "Poção de corrida relâmpago", "fo": "Ligas ultra-leves para flechas mágicas", "rk": "Fragilidade em frio extremo", "lore": "\"Batizado em memória ao luto e perseverança da deusa Níobe.\""}, {"z": 42, "s": "Mo", "rune": "🝓", "col": 6, "row": 5, "cat": "Metal de Transição", "tier": "Tier II", "price": "80 PO", "latin": "MOLYBDENUM", "name": "Molibdénio (Ponto de Fusão)", "af": "Tenacidade Térmica", "po": "Poção de resistência a lava vulcânica", "fo": "Lâminas que retêm o fio sob fogo ardente", "rk": "Pó prejudicial aos pulmões", "lore": "\"Mantém a rigidez mesmo quando o fogo atinge o clímax da forja.\""}, {"z": 43, "s": "Tc", "rune": "🝔", "col": 7, "row": 5, "cat": "Metal de Transição", "tier": "Tier III", "price": "200 PO", "latin": "TECHNETIUM", "name": "Tecnécio (Metal Artificial)", "af": "Mágia Artificial", "po": "Elixir de detecção de entidades invisíveis", "fo": "Gravação em ligas sintéticas", "rk": "Radioatividade contínua", "lore": "\"O primeiro elemento urdido inteiramente pela mão de alquimistas.\""}, {"z": 44, "s": "Ru", "rune": "🝕", "col": 8, "row": 5, "cat": "Metal de Transição", "tier": "Tier III", "price": "180 PO", "latin": "RUTHENIUM", "name": "Ruténio (Dureza da Estepe)", "af": "Catalisador Nobre", "po": "Elixir de multiplicação de efeitos de poções", "fo": "Confere extrema dureza à platina", "rk": "Vapores de óxido voláteis", "lore": "\"Originário das tundras congeladas, duro e indomável.\""}, {"z": 45, "s": "Rh", "rune": "🝖", "col": 9, "row": 5, "cat": "Metal de Transição", "tier": "Tier IV", "price": "320 PO", "latin": "RHODIUM", "name": "Ródio (Espelho Rútilo)", "af": "Reflexo Sagrado", "po": "Proteção contra feitiços de cegueira", "fo": "Espelho mágico com resistência a ácidos", "rk": "Custo astronômico de aquisição", "lore": "\"Mais valioso e brilhante que a mais fina prata dos reis.\""}, {"z": 46, "s": "Pd", "rune": "🝗", "col": 10, "row": 5, "cat": "Metal de Transição", "tier": "Tier III", "price": "210 PO", "latin": "PALLADIUM", "name": "Paládio (Escudo de Palas)", "af": "Absorção de Éter", "po": "Filtro respiratório de venenos aéreos", "fo": "Armazena hidrogénio etéreo nas fendas", "rk": "Fratura por saturação gasosa", "lore": "\"Consagrado a Palas Atena, absorve gases como uma esponja mágica.\""}, {"z": 47, "s": "Ag", "rune": "☽", "col": 11, "row": 5, "cat": "Metal Nobre", "tier": "Tier III", "price": "80 PO", "latin": "ARGENTUM", "name": "Prata (Lágrima Lunar)", "af": "Pureza Lunar & Exorcismo", "po": "Neutraliza maldições de licantropia", "fo": "Lâminas sagradas contra mortos-vivos", "rk": "Oxidação rápida em enxofre", "lore": "\"Reflete a luz casta da Lua e afasta as feras das sombras.\""}, {"z": 48, "s": "Cd", "rune": "🝘", "col": 12, "row": 5, "cat": "Metal de Transição", "tier": "Tier II", "price": "45 PO", "latin": "CADMIUM", "name": "Cádmio (Tinta Amarela Cadavérica)", "af": "Barreira de Neutrões", "po": "Absorve feitiços nocivos de radiação", "fo": "Solda com ponto de fusão ultrabaixo", "rk": "Altamente tóxico aos rins", "lore": "\"Usado em pinturas rúnicas brilhantes, mas letal se inalado.\""}, {"z": 49, "s": "In", "rune": "🝙", "col": 13, "row": 5, "cat": "Metal Pós-Transição", "tier": "Tier II", "price": "65 PO", "latin": "INDIUM", "name": "Índio (Grito Metálico)", "af": "Plasticidade Arcana", "po": "Bálsamo para flexionar articulações duras", "fo": "Permite soldar vidro diretamente a metais", "rk": "Deformação prematura", "lore": "\"Emite um grito metálico singular quando é dobrado ao meio.\""}, {"z": 50, "s": "Sn", "rune": "♃", "col": 14, "row": 5, "cat": "Metal Pós-Transição", "tier": "Tier I", "price": "20 PO", "latin": "STANNUM", "name": "Estanho (Consagrado a Júpiter)", "af": "Transmutação de Bronze", "po": "Elixir de maleabilidade física", "fo": "Forja de peças de bronze nobre e sinos", "rk": "Peste do estanho no frio invernal", "lore": "\"Associado a Júpiter; o metal que inaugurou a Era do Bronze.\""}, {"z": 51, "s": "Sb", "rune": "♁", "col": 15, "row": 5, "cat": "Semimetal", "tier": "Tier II", "price": "35 PO", "latin": "ANTIMONIUM", "name": "Antimónio (Regulus Alquímico)", "af": "Refino Alquímico", "po": "Emético forte para expelir toxinas ingeridas", "fo": "Endurece pontas de lanças e tipos móveis", "rk": "Venenoso se dosado errado", "lore": "\"O leão cinzento dos alquimistas que devora os metais inferiores.\""}, {"z": 52, "s": "Te", "rune": "🝚", "col": 16, "row": 5, "cat": "Semimetal", "tier": "Tier II", "price": "70 PO", "latin": "TELLURIUM", "name": "Telúrio (Coração da Terra)", "af": "Terra Primitiva", "po": "Poção de ligação com as raízes telúricas", "fo": "Permite usinar metais duros com precisão", "rk": "Hálito nauseabundo persistente", "lore": "\"O elemento da terra prometida pelos sábios da Transilvânia.\""}, {"z": 53, "s": "I", "rune": "🝛", "col": 17, "row": 5, "cat": "Halogéneo", "tier": "Tier II", "price": "32 PO", "latin": "IODUM", "name": "Iodo (Vapor Violeta)", "af": "Purificação & Glândulas", "po": "Tintura asséptica para fechar chagas", "fo": "Gravura rúnica profunda em marfim", "rk": "Vapor violeta irritante", "lore": "\"Sublima num majestoso vapor violeta que purifica infecções.\""}, {"z": 54, "s": "Xe", "rune": "🝜", "col": 18, "row": 5, "cat": "Gás Nobre", "tier": "Tier III", "price": "85 PO", "latin": "XENON", "name": "Xénon (O Estranho)", "af": "Luz dos Deuses", "po": "Flash paralisante de atordoamento em área", "fo": "Câmaras luminosas de projeção arcana", "rk": "Pesado e asfixiante", "lore": "\"O estranho que reluz com uma luz azulada imponente e divina.\""}, {"z": 55, "s": "Cs", "rune": "🝝", "col": 1, "row": 6, "cat": "Metal Alcalino", "tier": "Tier III", "price": "120 PO", "latin": "CAESIUM", "name": "Césio (Pêndulo do Tempo)", "af": "Controle do Tempo", "po": "Poção para acelerar reflexos cronometrados", "fo": "Células fotossensíveis em torres de vigia", "rk": "Explosão fulminante em ar úmido", "lore": "\"O marcador perfeito do bater dos segundos celestes.\""}, {"z": 56, "s": "Ba", "rune": "🝞", "col": 2, "row": 6, "cat": "Alcalino-Terroso", "tier": "Tier II", "price": "45 PO", "latin": "BARIUM", "name": "Bário (Pedra Pesada de Bolonha)", "af": "Opacidade Mágica", "po": "Poção para tornar o corpo opaco a raios", "fo": "Lamas pesadas de perfuração em minas", "rk": "Grave veneno cardiovascular", "lore": "\"A pedra fosfórica de Bolonha que brilhava nas noites escuras.\""}, {"z": 57, "s": "La", "rune": "🝟", "col": 3, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "110 PO", "latin": "LANTHANUM", "name": "Lantânio (O Oculto nas Rochas)", "af": "Chama Criadora", "po": "Poção de ignição rápida de sinapses", "fo": "Pedras de faísca para pistolas mágicas", "rk": "Irritação cutânea em contato", "lore": "\"Escondeu-se durante séculos nas entranhas de minérios raros.\""}, {"z": 58, "s": "Ce", "rune": "🝠", "col": 4, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "100 PO", "latin": "CERIUM", "name": "Cério (Centelha de Ceres)", "af": "Faísca Incandescente", "po": "Elixir de polimento e clareza mental", "fo": "Espinha dorsal de pederneiras militares", "rk": "Pirofórico em limalha solta", "lore": "\"Dedicado à deusa Ceres; liberta chuva de centelhas ao atrito.\""}, {"z": 59, "s": "Pr", "rune": "🝡", "col": 5, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "130 PO", "latin": "PRASEODYMIUM", "name": "Praseodímio (Gêmeo Verde)", "af": "Óptica Arcana", "po": "Vidros de proteção contra cegueira de forja", "fo": "Imãs para leitar objetos à distância", "rk": "Oxidação em ar exposto", "lore": "\"O irmão gêmeo que tinge o vidro de um verde-amarelado puro.\""}, {"z": 60, "s": "Nd", "rune": "🝢", "col": 6, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "140 PO", "latin": "NEODYMIUM", "name": "Neodímio (Atração Irresistível)", "af": "Magnetismo Absoluto", "po": "Poção que impede armas de caírem da mão", "fo": "Imãs titanicamente fortes para armaduras", "rk": "Quebra repentina sob impacto", "lore": "\"Sua atração atrai lâminas de ferro do outro lado do salão.\""}, {"z": 61, "s": "Pm", "rune": "🝣", "col": 7, "row": 9, "cat": "Lantanídeo", "tier": "Tier IV", "price": "350 PO", "latin": "PROMETHIUM", "name": "Promécio (Fogo de Prometeu)", "af": "Fogo Prometeico", "po": "Bálsamo que brilha no escuro perpetuamente", "fo": "Baterias atômicas de miniaturas mecânicas", "rk": "Radiação nociva contínua", "lore": "\"Uma centelha do fogo sagrado roubado por Prometeu aos céus.\""}, {"z": 62, "s": "Sm", "rune": "🝤", "col": 8, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "150 PO", "latin": "SAMARIUM", "name": "Samário (Resistência Térmica)", "af": "Força Neutrônica", "po": "Elixir para dissipar energia cinética", "fo": "Imãs resistentes ao calor das chamas", "rk": "Toxina de absorção cutânea", "lore": "\"Batizado em honra aos exploradores das minas russas.\""}, {"z": 63, "s": "Eu", "rune": "🝥", "col": 9, "row": 9, "cat": "Lantanídeo", "tier": "Tier IV", "price": "280 PO", "latin": "EUROPIUM", "name": "Európio (Fosforescência Rubra)", "af": "Fluorescência Mágica", "po": "Tintura para validar escrituras secretas", "fo": "Detecção de falsificação em moedas de ouro", "rk": "Reação violenta com água", "lore": "\"Emite um brilho vermelho vivo sob a radiação das estrelas.\""}, {"z": 64, "s": "Gd", "rune": "🝦", "col": 10, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "160 PO", "latin": "GADOLINIUM", "name": "Gadolínio (Contraste Mágico)", "af": "Contraste Espectral", "po": "Poção que revela órgãos afetados por venenos", "fo": "Captação de ressonância em báculos", "rk": "Tóxico aos rins em doses altas", "lore": "\"O mestre dos contrastes que revela feridas ocultas no corpo.\""}, {"z": 65, "s": "Tb", "rune": "🝧", "col": 11, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "190 PO", "latin": "TERBIUM", "name": "Térbio (Fósforo Verde)", "af": "Magnetostrição", "po": "Poção que expande sentidos auditivos", "fo": "Transdutores mecânicos em autômatos", "rk": "Queimadura de pó abrasivo", "lore": "\"Transforma magnetismo em vibração mecânica palpável.\""}, {"z": 66, "s": "Dy", "rune": "🝨", "col": 12, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "180 PO", "latin": "DYSPROSIUM", "name": "Disprósio (Difícil de Achar)", "af": "Absorção Feroz", "po": "Elixir de resistência a feitiços de estilhaço", "fo": "Ligas de imãs para ambientes abrasivos", "rk": "Inércia química pesada", "lore": "\"Seu nome ecoa a dificuldade titânica que os alquimistas tiveram em isolá-lo.\""}, {"z": 67, "s": "Ho", "rune": "🝩", "col": 13, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "170 PO", "latin": "HOLMIUM", "name": "Hólmio (Polo Magnético)", "af": "Campo de Força", "po": "Poção que desvia flechas magnéticas", "fo": "Pólos magnéticos mais potentes conhecidos", "rk": "Corrosão úmida progressiva", "lore": "\"Concentra linhas de fluxo magnético como nenhum outro metal.\""}, {"z": 68, "s": "Er", "rune": "🝪", "col": 14, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "160 PO", "latin": "ERBIUM", "name": "Érbio (Laser Rosado)", "af": "Luz Rosada & Foco", "po": "Poção que melhora a velocidade de disparo", "fo": "Amplificadores ópticos em báculos arcanos", "rk": "Pó volátil irritante", "lore": "\"Confere um tom rosa deslumbrante a vidros e feixes mágicos.\""}, {"z": 69, "s": "Tm", "rune": "🝫", "col": 15, "row": 9, "cat": "Lantanídeo", "tier": "Tier IV", "price": "290 PO", "latin": "THULIUM", "name": "Túlio (Bruma de Thule)", "af": "Raio X Portátil", "po": "Bálsamo para enxergar através de muros finos", "fo": "Dispositivos médicos de visão óssea", "rk": "Escassez extrema", "lore": "\"Oriundo da lendária terra de Thule, nos confins do mapa.\""}, {"z": 70, "s": "Yb", "rune": "🝬", "col": 16, "row": 9, "cat": "Lantanídeo", "tier": "Tier III", "price": "150 PO", "latin": "YTTERBIUM", "name": "Itérbio (Sensibilidade Térmica)", "af": "Medição de Pressão", "po": "Poção que alivia vertigens em profundezas", "fo": "Transdutores de pressão de choque em escudos", "rk": "Reatividade em ar quente", "lore": "\"Sensível a pressões colossais, suporta o peso das montanhas.\""}, {"z": 71, "s": "Lu", "rune": "🝭", "col": 17, "row": 9, "cat": "Lantanídeo", "tier": "Tier IV", "price": "320 PO", "latin": "LUTETIUM", "name": "Lutécio (Dureza de Lutécia)", "af": "Densidade Extrema", "po": "Elixir de ossos inquebráveis contra esmagamento", "fo": "Detectores de radiação de alta sensibilidade", "rk": "Custo astronômico nos empórios", "lore": "\"O mais denso e duro de todos os lantanídeos conhecidos.\""}, {"z": 72, "s": "Hf", "rune": "🝮", "col": 4, "row": 6, "cat": "Metal de Transição", "tier": "Tier III", "price": "160 PO", "latin": "HAFNIUM", "name": "Háfnio (Escudo Térmico)", "af": "Absorção de Fogo Feérico", "po": "Poção que neutraliza fogo sagrado", "fo": "Barras de controle de calor em forjas anãs", "rk": "Pó pirofórico em limalha", "lore": "\"Companheiro inseparável do zircónio, devora nêutrons no núcleo.\""}, {"z": 73, "s": "Ta", "rune": "🝯", "col": 5, "row": 6, "cat": "Metal de Transição", "tier": "Tier III", "price": "180 PO", "latin": "TANTALUM", "name": "Tântalo (Suplício de Tântalo)", "af": "Imunidade Ácida", "po": "Poção que torna o estômago imune a ácidos", "fo": "Condensadores arcanos que armazenam mana", "rk": "Fragilidade perante hidrogénio", "lore": "\"Incapaz de ser dissolvido pela maioria dos ácidos dos alquimistas.\""}, {"z": 74, "s": "W", "rune": "🝰", "col": 6, "row": 6, "cat": "Metal de Transição", "tier": "Tier III", "price": "150 PO", "latin": "WOLFRAMIUM", "name": "Tungsténio (Pedra Pesada Nórdica)", "af": "Resistência Máxima", "po": "Poção de endurecimento corporal absoluto", "fo": "Lâminas que cortam pedra sem perder o fio", "rk": "Ponto de fusão quase inalcançável", "lore": "\"O devorador de estanho; o metal com o maior ponto de fusão.\""}, {"z": 75, "s": "Re", "rune": "🝱", "col": 7, "row": 6, "cat": "Metal de Transição", "tier": "Tier IV", "price": "340 PO", "latin": "RHENIUM", "name": "Rénio (Lágrima do Reno)", "af": "Superliga Térmica", "po": "Poção de corrida através de câmaras de fogo", "fo": "Palhetas de turbinas de navios voadores", "rk": "Raridade abissal na crosta", "lore": "\"O último elemento estável encontrado nas entranhas da Europa.\""}, {"z": 76, "s": "Os", "rune": "🝲", "col": 8, "row": 6, "cat": "Metal de Transição", "tier": "Tier IV", "price": "360 PO", "latin": "OSMIUM", "name": "Ósmio (O Mais Denso)", "af": "Densidade Suprema", "po": "Elixir que multiplica por cinco a massa corporal", "fo": "Pontas de penas indestrutíveis e agulhas", "rk": "Gera tétroxido volátil mortal", "lore": "\"A substância mais densa que caminha sobre a face da terra.\""}, {"z": 77, "s": "Ir", "rune": "🝳", "col": 9, "row": 6, "cat": "Metal de Transição", "tier": "Tier IV", "price": "380 PO", "latin": "IRIDIUM", "name": "Irídio (Arco-Íris Celeste)", "af": "Incorruptibilidade", "po": "Poção de blindagem total contra corrupção", "fo": "Padrão de pesos imutável e crisóis nobres", "rk": "Pó abrasivo irritante", "lore": "\"Trazido nas caudas dos meteoros que caíram sobre a terra ancestral.\""}, {"z": 78, "s": "Pt", "rune": "🝴", "col": 10, "row": 6, "cat": "Metal Nobre", "tier": "Tier IV", "price": "300 PO", "latin": "PLATINUM", "name": "Platina (Pequena Prata Real)", "af": "Catálise Perfeita", "po": "Elixir de pureza do sangue e longevidade", "fo": "Cálices e instrumentos de rituais sagrados", "rk": "Dificuldade extrema de forja", "lore": "\"Mais densa e valorosa que o ouro, imune ao fogo das chamas vulcânicas.\""}, {"z": 79, "s": "Au", "rune": "☉", "col": 11, "row": 6, "cat": "Metal Nobre", "tier": "Tier IV", "price": "250 PO", "latin": "AURUM", "name": "Ouro (Soberano Solar)", "af": "Divino & Imutabilidade", "po": "Elixir da Longevidade Imortal", "fo": "Inscrições rúnicas que nunca desvanecem", "rk": "Cobiça desenfreada e maldições", "lore": "\"O rei incontestável dos metais que jamais dobra a espinha perante o tempo.\""}, {"z": 80, "s": "Hg", "rune": "☿", "col": 12, "row": 6, "cat": "Metal Líquido", "tier": "Tier III", "price": "95 PO", "latin": "HYDRARGYRUM", "name": "Mercúrio (Prata Viva)", "af": "Transmutação Fluida", "po": "Fluidez corporal e veneno insidioso", "fo": "Amálgama de runas maleáveis", "rk": "Loucura lenta de mercúrio", "lore": "\"Metal líquido como a mente do mensageiro Hermes.\""}, {"z": 81, "s": "Tl", "rune": "🝵", "col": 13, "row": 6, "cat": "Metal Pós-Transição", "tier": "Tier II", "price": "70 PO", "latin": "THALLIUM", "name": "Tálio (Veneno dos Envenenadores)", "af": "Toxina Invisível", "po": "Veneno indetectável que causa queda de cabelo", "fo": "Vidros infravermelhos para visores noturnos", "rk": "Intoxicação fulminante", "lore": "\"Conhecido nos tribunais secretos como o veneno dos herdeiros impacientes.\""}, {"z": 82, "s": "Pb", "rune": "♄", "col": 14, "row": 6, "cat": "Metal Pesado", "tier": "Tier II", "price": "22 PO", "latin": "PLUMBUM", "name": "Chumbo (Peso de Saturno)", "af": "Barreira & Necromancia", "po": "Resistência a dano contundente massivo", "fo": "Escudos contra feitiços arcanos e caixões", "rk": "Saturnismo crônico e letargia", "lore": "\"O metal mais pesado e sonolento, consagrado ao senhor do tempo.\""}, {"z": 83, "s": "Bi", "rune": "🝶", "col": 15, "row": 6, "cat": "Metal Pós-Transição", "tier": "Tier II", "price": "60 PO", "latin": "BISMUTHUM", "name": "Bismuto (Cristal Furta-Cor)", "af": "Proteção Gástrica", "po": "Bálsamo que acalma cólicas de feitiços cáusticos", "fo": "Cristais iridescentes em labirintos rúnicos", "rk": "Radiação infinitamente lenta", "lore": "\"Seus cristais em escada exibem todas as cores do prisma celeste.\""}, {"z": 84, "s": "Po", "rune": "🝷", "col": 16, "row": 6, "cat": "Semimetal", "tier": "Tier IV", "price": "500 PO", "latin": "POLONIUM", "name": "Polónio (Calor Invisível)", "af": "Peste Radiante", "po": "Veneno radioativo que queima por dentro", "fo": "Fonte de calor sem chamas para invernos frios", "rk": "Necrose celular absoluta", "lore": "\"Descoberto pela alquimista Marie nos resíduos de pechblenda.\""}, {"z": 85, "s": "At", "rune": "🝸", "col": 17, "row": 6, "cat": "Halogéneo", "tier": "Tier IV", "price": "650 PO", "latin": "ASTATUM", "name": "Ástato (O Instável)", "af": "Instabilidade Rápida", "po": "Projétil de energia térmica efêmera", "fo": "Cápsula de combustão de uso único", "rk": "Desintegra-se em horas", "lore": "\"O elemento mais raro da crosta, evapora antes de ser contemplado.\""}, {"z": 86, "s": "Rn", "rune": "🝹", "col": 18, "row": 6, "cat": "Gás Nobre", "tier": "Tier III", "price": "180 PO", "latin": "RADON", "name": "Rádon (Miasma das Cavernas)", "af": "Gás Necrótico", "po": "Nuvem que amaldiçoa quem respira na cripta", "fo": "Marcador de fluxos de magma subterrâneo", "rk": "Câncer pulmonar fulminante", "lore": "\"O miasma pesado que sobe dos túmulos de pedra esquecidos.\""}, {"z": 87, "s": "Fr", "rune": "🝺", "col": 1, "row": 7, "cat": "Metal Alcalino", "tier": "Tier IV", "price": "750 PO", "latin": "FRANCIUM", "name": "Frâncio (Detonação Efêmera)", "af": "Hiper-Reação", "po": "Bomba que implode e explode simultaneamente", "fo": "Catalisador de reações proibidas", "rk": "Desintegração atômica instantânea", "lore": "\"Um átomo tão instável que desafia as leis da própria matéria.\""}, {"z": 88, "s": "Ra", "rune": "🝻", "col": 2, "row": 7, "cat": "Alcalino-Terroso", "tier": "Tier IV", "price": "450 PO", "latin": "RADIUM", "name": "Rádio (Brilho Espectral)", "af": "Luz dos Mortos", "po": "Pomada que faz objetos brilharem eternamente", "fo": "Agulhas de destruição de tumores sombrios", "rk": "Destruição medular permanente", "lore": "\"Brilha nas trevas com um verde fantasmagórico inesquecível.\""}, {"z": 89, "s": "Ac", "rune": "🝼", "col": 3, "row": 10, "cat": "Actinídeo", "tier": "Tier IV", "price": "400 PO", "latin": "ACTINIUM", "name": "Actínio (Raio Brilhante)", "af": "Luminescência Azulada", "po": "Poção que irradia luz mágica pelo corpo", "fo": "Gera nêutrons em fornalhas de mana", "rk": "Toxina óssea severa", "lore": "\"Brilha no escuro com um azul etéreo fascinante.\""}, {"z": 90, "s": "Th", "rune": "🝽", "col": 4, "row": 10, "cat": "Actinídeo", "tier": "Tier III", "price": "220 PO", "latin": "THORIUM", "name": "Tório (Poder de Thor)", "af": "Chama Sagrada de Thor", "po": "Poção que energiza feitiços elétricos", "fo": "Combustível de reatores arcanos em torres", "rk": "Gera rádon na queima", "lore": "\"Batizado em honra ao deus do trovão, guarda energia incalculável.\""}, {"z": 91, "s": "Pa", "rune": "🝾", "col": 5, "row": 10, "cat": "Actinídeo", "tier": "Tier IV", "price": "500 PO", "latin": "PROTACTINIUM", "name": "Protactínio (Ancestral do Raio)", "af": "Alfa-Emissão", "po": "Poção que aquece o sangue contra frio divino", "fo": "Estabilizador de ligas actinídeas", "rk": "Radioatividade voraz", "lore": "\"O pai do actínio, extraído de toneladas de pechblenda pura.\""}, {"z": 92, "s": "U", "rune": "☢", "col": 6, "row": 10, "cat": "Actinídeo", "tier": "Tier IV", "price": "600 PO", "latin": "URANIUM", "name": "Urânio (Fogo Proibido)", "af": "Radiação Caótica", "po": "Mutação mágica destruidora em área", "fo": "Armas de pulso térmico apocalíptico", "rk": "Radiação necrótica contínua", "lore": "\"Dormia no fundo das rochas ancestrais até que os sábios o acordaram.\""}, {"z": 93, "s": "Np", "rune": "🝿", "col": 7, "row": 10, "cat": "Actinídeo", "tier": "Tier IV", "price": "700 PO", "latin": "NEPTUNIUM", "name": "Neptúnio (Abismo de Neptuno)", "af": "Transmutação Abissal", "po": "Poção de respiração em lamas ferventes", "fo": "Canalizador de fissões intermediárias", "rk": "Toxicidade química letal", "lore": "\"Irmão de Urano e Plutão nas profundezas dos mares elementais.\""}, {"z": 94, "s": "Pu", "rune": "🞀", "col": 8, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "950 PO", "latin": "PLUTONIUM", "name": "Plutónio (Fogo do Submundo)", "af": "Fissão Apocalíptica", "po": "Bomba do Julgamento Final", "fo": "Motores de destruição em massa", "rk": "Radiação de partículas alfa letal", "lore": "\"Dedicado ao senhor dos mortos, liberta o fogo que desfaz montanhas.\""}, {"z": 95, "s": "Am", "rune": "🞁", "col": 9, "row": 10, "cat": "Actinídeo", "tier": "Tier IV", "price": "420 PO", "latin": "AMERICIUM", "name": "Amerício (Guardião da Fumaça)", "af": "Detecção de Fogo", "po": "Elixir de alerta contra armadilhas de fumaça", "fo": "Detetores de invasores térmicos em castelos", "rk": "Radiação alfa constante", "lore": "\"Um sentinela incansável que grita diante da primeira fumaça.\""}, {"z": 96, "s": "Cm", "rune": "🞂", "col": 10, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "800 PO", "latin": "CURIUM", "name": "Cúrio (Legado de Curie)", "af": "Potência Térmica", "po": "Poção que ferve o sangue concedendo força", "fo": "Geradores termoelétricos de autômatos", "rk": "Calor próprio que derrete a cera", "lore": "\"Gera tanto calor próprio que brilha e ferve a água que o cerca.\""}, {"z": 97, "s": "Bk", "rune": "🞃", "col": 11, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "850 PO", "latin": "BERKELIUM", "name": "Berquélio (Forja de Berkeley)", "af": "Forja Arcana", "po": "Catalisador de síntese de novos metais", "fo": "Alvo de bombardeios de partículas arcanas", "rk": "Escassez absoluta", "lore": "\"Nascido na fornalha do grande laboratório californiano.\""}, {"z": 98, "s": "Cf", "rune": "🞄", "col": 12, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "1200 PO", "latin": "CALIFORNIUM", "name": "Califórnio (Emissor de Neutrões)", "af": "Fissão Espontânea", "po": "Projétil de destruição de barreiras mágicas", "fo": "Iniciador de reações de destruição instantânea", "rk": "Fluxo brutal de neutrões", "lore": "\"Um único micrograma emite milhões de projéteis neutrônicos por segundo.\""}, {"z": 99, "s": "Es", "rune": "🞅", "col": 13, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "1100 PO", "latin": "EINSTEINIUM", "name": "Einsténio (Genialidade Relativa)", "af": "Distorção da Realidade", "po": "Poção que desacelera a percepção do tempo", "fo": "Catalisador de portais dimensionais", "rk": "Decaimento rápido", "lore": "\"Forjado no coração da primeira detonação termonuclear.\""}, {"z": 100, "s": "Fm", "rune": "🞆", "col": 14, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "1300 PO", "latin": "FERMIUM", "name": "Férmio (Limite do Nêutron)", "af": "Fissão Pesada", "po": "Elixir que absorve mana excedente de feitiços", "fo": "Ancoragem de núcleos superpesados", "rk": "Decaimento em dias", "lore": "\"Homenagem a Enrico Fermi, o arquiteto da fissão nuclear.\""}, {"z": 101, "s": "Md", "rune": "🞇", "col": 15, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "1500 PO", "latin": "MENDELEVIUM", "name": "Mendelévio (Pai da Tábua)", "af": "Ordem Periódica", "po": "Poção que harmoniza todos os 4 elementos", "fo": "Alinha matrizes de cajados supremos", "rk": "Síntese de poucos átomos", "lore": "\"Consagrado ao arquiteto da própria Tabela Sagrada: Mendeleiev.\""}, {"z": 102, "s": "No", "rune": "🞈", "col": 16, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "1400 PO", "latin": "NOBELIUM", "name": "Nobélio (Dinamite Atômica)", "af": "Explosão Controlada", "po": "Poção de fúria controlada sem recuo", "fo": "Componentes de artilharia arcana pesada", "rk": "Instabilidade rápida", "lore": "\"Em honra a Alfred Nobel, criador das pólvoras estabilizadas.\""}, {"z": 103, "s": "Lr", "rune": "🞉", "col": 17, "row": 10, "cat": "Actinídeo", "tier": "Tier V", "price": "1600 PO", "latin": "LAWRENCIUM", "name": "Laurêncio (Ciclotrão Final)", "af": "Aceleração Magnética", "po": "Poção de teletransporte curto de reflexo", "fo": "Finalizador da série actinídea em armaduras", "rk": "Vida média de minutos", "lore": "\"O último degrau da escadaria sagrada dos actinídeos.\""}, {"z": 104, "s": "Rf", "rune": "🞊", "col": 4, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2000 PO", "latin": "RUTHERFORDIUM", "name": "Rutherfórdio (Núcleo Puro)", "af": "Fissão Nuclear", "po": "Poção de quebra de escudos mágicos divinos", "fo": "Forja de lâminas de plasma instável", "rk": "Fissão em segundos", "lore": "\"Homenagem ao decifrador da estrutura do núcleo atômico.\""}, {"z": 105, "s": "Db", "rune": "🞋", "col": 5, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2100 PO", "latin": "DUBNIUM", "name": "Dúbnio (Forja Russa)", "af": "Energia Concentrada", "po": "Elixir de resistência a gravidade aumentada", "fo": "Armações mecânicas hiperdensas", "rk": "Decaimento veloz", "lore": "\"Nascido na cidade secreta dos cientistas do leste.\""}, {"z": 106, "s": "Sg", "rune": "🞌", "col": 6, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2200 PO", "latin": "SEABORGIUM", "name": "Seabórgio (Mestre dos Actinídeos)", "af": "Transmutação Maior", "po": "Poção de transmutação temporária de chumbo em ouro", "fo": "Ligas que desafiam o magnetismo", "rk": "Fissão instantânea", "lore": "\"Batizado em vida em homenagem a Glenn Seaborg.\""}, {"z": 107, "s": "Bh", "rune": "🞍", "col": 7, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2300 PO", "latin": "BOHRIUM", "name": "Bóhrio (Órbita Quântica)", "af": "Salto Quântico", "po": "Poção de esquiva absoluta contra feitiços", "fo": "Anéis de ressonância orbital", "rk": "Extremamente efêmero", "lore": "\"Em memória de Niels Bohr e seus saltos de energia atômica.\""}, {"z": 108, "s": "Hs", "rune": "🞎", "col": 8, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2400 PO", "latin": "HASSIUM", "name": "Hássio (Tetróxido Fantasma)", "af": "Gás Denso", "po": "Miasma que corrói runas protetoras", "fo": "Espelhos de reflexão quântica", "rk": "Volátil e radioativo", "lore": "\"Forma um tetróxido gasoso mesmo com sua massa colossal.\""}, {"z": 109, "s": "Mt", "rune": "🞏", "col": 9, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2500 PO", "latin": "MEITNERIUM", "name": "Meitnério (Glória de Meitner)", "af": "Fissão Arcana", "po": "Bálsamo que divide maldições complexas ao meio", "fo": "Símbolos de proteção em reatores", "rk": "Desaparece em frações de segundo", "lore": "\"Dedicado à física Lise Meitner, verdadeira pioneira da fissão.\""}, {"z": 110, "s": "Ds", "rune": "🞐", "col": 10, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2600 PO", "latin": "DARMSTADTIUM", "name": "Darmstádio (Fissão Pesada)", "af": "Densidade Teórica", "po": "Poção de ancoragem contra tufões mágicos", "fo": "Revestimentos contra impacto de meteoritos", "rk": "Vida de microssegundos", "lore": "\"Criado no acelerador de íons pesados de Darmstadt.\""}, {"z": 111, "s": "Rg", "rune": "🞑", "col": 11, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2700 PO", "latin": "ROENTGENIUM", "name": "Roentgénio (Raio X Sagrado)", "af": "Luz Penetrante", "po": "Poção para enxergar através de armaduras espessas", "fo": "Canalizadores de feixes de raio penetrante", "rk": "Instabilidade rápida", "lore": "\"Nomeado em honra ao descobridor dos raios invisíveis X.\""}, {"z": 112, "s": "Cn", "rune": "🞒", "col": 12, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "2800 PO", "latin": "COPERNICIUM", "name": "Copernício (Revolução dos Céus)", "af": "Gás Metálico", "po": "Poção de órbita que faz escudos girarem sozinhos", "fo": "Relógios arcanos que predizem eclipses", "rk": "Comporta-se quase como um gás nobre", "lore": "\"Em tributo a Copérnico, que colocou o Sol no centro do mundo.\""}, {"z": 113, "s": "Nh", "rune": "🞓", "col": 13, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "3000 PO", "latin": "NIHONIUM", "name": "Nipónio (Sol Nascente)", "af": "Luz Oriental", "po": "Poção de despertar contra sono eterno e coma", "fo": "Lâminas rúnicas orientais imbuídas", "rk": "Decaimento quase instantâneo", "lore": "\"O primeiro elemento isolado no coração do arquipélago japonês.\""}, {"z": 114, "s": "Fl", "rune": "🞔", "col": 14, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "3200 PO", "latin": "FLEROVIUM", "name": "Fleróvio (Ilha de Estabilidade)", "af": "Ilha de Estabilidade", "po": "Poção de estabilização de magias que iam explodir", "fo": "Barreiras que resistem à entropia do tempo", "rk": "Extrema inércia química", "lore": "\"Aproxima-se da mítica ilha de estabilidade profetizada pelos sábios.\""}, {"z": 115, "s": "Mc", "rune": "🞕", "col": 15, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "3400 PO", "latin": "MOSCOVIUM", "name": "Moscóvio (Poder de Moscou)", "af": "Força Imperial", "po": "Elixir de comando que impõe respeito em combate", "fo": "Peças de artilharia arcana de alta densidade", "rk": "Decai em décimos de segundo", "lore": "\"Forjado nos laboratórios de fusão das estepes russas.\""}, {"z": 116, "s": "Lv", "rune": "🞖", "col": 16, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "3600 PO", "latin": "LIVERMORIUM", "name": "Livermório (Síntese Final)", "af": "Fusão Extrema", "po": "Poção de convergência de todos os danos elementais", "fo": "Núcleos de canhões de plasma elemental", "rk": "Instabilidade veloz", "lore": "\"Nomeado em tributo ao Laboratório Nacional de Lawrence Livermore.\""}, {"z": 117, "s": "Ts", "rune": "🞗", "col": 17, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "3800 PO", "latin": "TENNESSINE", "name": "Tennesso (Halogéneo Supremo)", "af": "Ácido Quântico", "po": "Ácido que dissolve até barreiras divinas", "fo": "Pontas de flechas perfuradoras de portais", "rk": "Vida média de milissegundos", "lore": "\"O halogéneo mais pesado e misterioso de toda a criação.\""}, {"z": 118, "s": "Og", "rune": "🞘", "col": 18, "row": 7, "cat": "Superpesado", "tier": "Tier V", "price": "4000 PO", "latin": "OGANESSON", "name": "Oganésson (A Coroa da Criação)", "af": "Entropia Quântica", "po": "Poção do Vazio que anula qualquer magia próxima", "fo": "Orbes do Fim do Mundo que absorvem a realidade", "rk": "Colapso imediato após síntese", "lore": "\"O último e mais pesado de todos os elementos conhecidos pelo homem.\""}];

            const RECIPES = [
      {
            "formula": "H2O",
            "eq": "2 H + 1 O ➔ H₂O",
            "name": "Água Primordial (Elixir de Cura)",
            "desc": "Recupera 50 PV e purifica toxinas nocivas.",
            "match_items": {
                  "H": 2,
                  "O": 1
            }
      },
      {
            "formula": "H2O2",
            "eq": "2 H + 2 O ➔ H₂O₂",
            "name": "Peróxido de Hidrogénio (Água Oxigenada)",
            "desc": "Oxidante purificador: cauteriza chagas, esteriliza venenos e corrói mortos-vivos.",
            "match_items": {
                  "H": 2,
                  "O": 2
            }
      },
      {
            "formula": "NaCl",
            "eq": "1 Na + 1 Cl ➔ NaCl",
            "name": "Sal Bento da Terra (Cloreto de Sódio)",
            "desc": "Cria barreiras místicas contra espíritos malignos e estabiliza eletrólitos.",
            "match_items": {
                  "Na": 1,
                  "Cl": 1
            }
      },
      {
            "formula": "HCl",
            "eq": "1 H + 1 Cl ➔ HCl",
            "name": "Espírito de Sal (Ácido Clorídrico)",
            "desc": "Ácido fumegante corrosivo que dissolve trincos de ferro e escudos.",
            "match_items": {
                  "H": 1,
                  "Cl": 1
            }
      },
      {
            "formula": "CO2",
            "eq": "1 C + 2 O ➔ CO₂",
            "name": "Miasma Asfixiante (Dióxido de Carbono)",
            "desc": "Gás denso que apaga tochas e sufoca criaturas na área de impacto.",
            "match_items": {
                  "C": 1,
                  "O": 2
            }
      },
      {
            "formula": "CO",
            "eq": "1 C + 1 O ➔ CO",
            "name": "Gás Fantasma (Monóxido de Carbono)",
            "desc": "Venenoso e inodoro: induz sonolência profunda e asfixia furtiva.",
            "match_items": {
                  "C": 1,
                  "O": 1
            }
      },
      {
            "formula": "CH4",
            "eq": "1 C + 4 H ➔ CH₄",
            "name": "Gás dos Pântanos (Metano Inflamável)",
            "desc": "Gás volátil: causa explosões incandescentes em contacto com faíscas.",
            "match_items": {
                  "C": 1,
                  "H": 4
            }
      },
      {
            "formula": "NH3",
            "eq": "1 N + 3 H ➔ NH₃",
            "name": "Espírito Volátil de Amónia",
            "desc": "Odor penetrante que desperta aliados atordoados e revigora sentidos.",
            "match_items": {
                  "N": 1,
                  "H": 3
            }
      },
      {
            "formula": "SO2",
            "eq": "1 S + 2 O ➔ SO₂",
            "name": "Bruma Vulcânica (Dióxido de Enxofre)",
            "desc": "Vapores acres que provocam tosse violenta e cegueira temporária.",
            "match_items": {
                  "S": 1,
                  "O": 2
            }
      },
      {
            "formula": "Fe2O3",
            "eq": "2 Fe + 3 O ➔ Fe₂O₃",
            "name": "Pó de Ferrugem de Marte (Óxido de Ferro III)",
            "desc": "Catalisador para reações incendiárias de termite e bombas de cerco.",
            "match_items": {
                  "Fe": 2,
                  "O": 3
            }
      },
      {
            "formula": "FeS",
            "eq": "1 Fe + 1 S ➔ FeS",
            "name": "Pirite Negra (Sulfeto de Ferro)",
            "desc": "Pedra de faíscas pesada para rituais térmicos e ignições arcanas.",
            "match_items": {
                  "Fe": 1,
                  "S": 1
            }
      },
      {
            "formula": "CaO",
            "eq": "1 Ca + 1 O ➔ CaO",
            "name": "Cal Viva Alquímica (Óxido de Cálcio)",
            "desc": "Reage vigorosamente com água libertando calor escaldante instantâneo.",
            "match_items": {
                  "Ca": 1,
                  "O": 1
            }
      },
      {
            "formula": "CaCO3",
            "eq": "1 Ca + 1 C + 3 O ➔ CaCO₃",
            "name": "Calcário Místico (Carbonato de Cálcio)",
            "desc": "Neutraliza ácidos cáusticos e fortalece armaduras ósseas.",
            "match_items": {
                  "Ca": 1,
                  "C": 1,
                  "O": 3
            }
      },
      {
            "formula": "SiO2",
            "eq": "1 Si + 2 O ➔ SiO₂",
            "name": "Sílica Divinatória (Quartzo Purificado)",
            "desc": "Material base para esferas de vidência e prismas de refração mágica.",
            "match_items": {
                  "Si": 1,
                  "O": 2
            }
      },
      {
            "formula": "KCl",
            "eq": "1 K + 1 Cl ➔ KCl",
            "name": "Sal Silvino (Cloreto de Potássio)",
            "desc": "Regula a condutância dos impulsos nervosos e estabiliza poções elétricas.",
            "match_items": {
                  "K": 1,
                  "Cl": 1
            }
      },
      {
            "formula": "MgO",
            "eq": "1 Mg + 1 O ➔ MgO",
            "name": "Magnésia Branca (Óxido de Magnésio)",
            "desc": "Pó refratário térmico que protege as mãos do alquimista contra queimaduras.",
            "match_items": {
                  "Mg": 1,
                  "O": 1
            }
      },
      {
            "formula": "Al2O3",
            "eq": "2 Al + 3 O ➔ Al₂O₃",
            "name": "Coríndon Celeste (Óxido de Alumínio)",
            "desc": "Mineral de extrema dureza; afia armas de mithril até ao nível molecular.",
            "match_items": {
                  "Al": 2,
                  "O": 3
            }
      },
      {
            "formula": "HgS",
            "eq": "1 Hg + 1 S ➔ HgS",
            "name": "Cinábrio Alquímico (Sulfeto de Mercúrio)",
            "desc": "Pigmento rubro sagrado de transmutação e tinta para pergaminhos de pacto.",
            "match_items": {
                  "Hg": 1,
                  "S": 1
            }
      },
      {
            "formula": "PbS",
            "eq": "1 Pb + 1 S ➔ PbS",
            "name": "Galena de Saturno (Sulfeto de Chumbo)",
            "desc": "Escudo mineral denso que absorve ondas e radiação necrótica.",
            "match_items": {
                  "Pb": 1,
                  "S": 1
            }
      },
      {
            "formula": "CuS",
            "eq": "1 Cu + 1 S ➔ CuS",
            "name": "Covelite Negra (Sulfeto de Cobre)",
            "desc": "Condutor de carga que atrai feitiços de relâmpago para longe do grupo.",
            "match_items": {
                  "Cu": 1,
                  "S": 1
            }
      },
      {
            "formula": "ZnS",
            "eq": "1 Zn + 1 S ➔ ZnS",
            "name": "Blenda Espectral (Sulfeto de Zinco)",
            "desc": "Fosforesce com brilho verde nas trevas profundas após absorver luz solar.",
            "match_items": {
                  "Zn": 1,
                  "S": 1
            }
      },
      {
            "formula": "AgCl",
            "eq": "1 Ag + 1 Cl ➔ AgCl",
            "name": "Cloreto de Prata (Prata de Córnea)",
            "desc": "Emulsão sensível à luz usada para capturar imagens e silhuetas fantasmagóricas.",
            "match_items": {
                  "Ag": 1,
                  "Cl": 1
            }
      }
];

    // ===== MOTOR DE REAÇÕES QUÍMICAS =====
    const EL = {}; ELEMENTS.forEach(e => EL[e.s] = e);
    const SUB = '₀₁₂₃₄₅₆₇₈₉', sub = s => String(s).replace(/\d/g, d => SUB[d]);
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const NONMET = ['Não-Metal', 'Halogéneo', 'Gás Nobre', 'Semimetal'];
    const NOBLE = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'];
    const isMetal = s => !NONMET.includes(EL[s].cat);

    // Eletronegatividade (Pauling)
    const EN = {};
    ('H2.2 Li.98 Be1.57 B2.04 C2.55 N3.04 O3.44 F3.98 Na.93 Mg1.31 Al1.61 Si1.9 P2.19 S2.58 Cl3.16 K.82 Ca1 Sc1.36 Ti1.54 V1.63 Cr1.66 Mn1.55 Fe1.83 Co1.88 Ni1.91 Cu1.9 Zn1.65 Ga1.81 Ge2.01 As2.18 Se2.55 Br2.96 Rb.82 Sr.95 Y1.22 Zr1.33 Nb1.6 Mo2.16 Tc1.9 Ru2.2 Rh2.28 Pd2.2 Ag1.93 Cd1.69 In1.78 Sn1.96 Sb2.05 Te2.1 I2.66 Cs.79 Ba.89 Hf1.3 Ta1.5 W2.36 Re1.9 Os2.2 Ir2.2 Pt2.28 Au2.54 Hg2 Tl1.62 Pb1.9 Bi2.02 Po2 At2.2 Fr.7 Ra.9 Th1.3 Pa1.5 U1.38 Np1.36 Pu1.28')
      .replace(/([A-Z][a-z]?)([\d.]+)/g, (_, s, v) => EN[s] = +v);
    ['La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Ac','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr'].forEach(s => EN[s] = EN[s] || 1.2);

    // Estados de oxidação positivos (cátions) e negativos (ânions)
    const POS = {H:[1],Li:[1],Na:[1],K:[1],Rb:[1],Cs:[1],Fr:[1],Be:[2],Mg:[2],Ca:[2],Sr:[2],Ba:[2],Ra:[2],B:[3],Al:[3],Ga:[3],In:[3],Tl:[1,3],
      C:[4,2],Si:[4],Ge:[4,2],Sn:[2,4],Pb:[2,4],N:[5,4,3,2,1],P:[5,3],As:[5,3],Sb:[5,3],Bi:[3,5],O:[2],S:[6,4],Se:[6,4],Te:[6,4],Po:[4,2],
      Cl:[1,5,7],Br:[1,5],I:[1,5,7],At:[1],Sc:[3],Ti:[4,3],V:[5,4,3],Cr:[3,2,6],Mn:[2,4,7],Fe:[3,2],Co:[2,3],Ni:[2],Cu:[2,1],Zn:[2],
      Y:[3],Zr:[4],Nb:[5],Mo:[6,4],Tc:[7,4],Ru:[3,4],Rh:[3],Pd:[2,4],Ag:[1],Cd:[2],Hf:[4],Ta:[5],W:[6,4],Re:[7,4],Os:[4,8],Ir:[3,4],
      Pt:[2,4],Au:[3,1],Hg:[2,1],Ce:[3,4],Eu:[3,2],Yb:[3,2],Th:[4],Pa:[5],U:[6,4],Np:[5,4],Pu:[4,3],No:[2]};
    const posOf = s => POS[s] || (/Lantan|Actin/.test(EL[s].cat) ? [3] : null);
    const NEG = {H:-1,B:-3,C:-4,N:-3,O:-2,F:-1,Si:-4,P:-3,S:-2,Cl:-1,As:-3,Se:-2,Br:-1,Sb:-3,Te:-2,I:-1,At:-1};
    const ANION = {O:'óxido',S:'sulfeto',Cl:'cloreto',F:'fluoreto',Br:'brometo',I:'iodeto',N:'nitreto',P:'fosfeto',H:'hidreto',C:'carbeto',Si:'silicieto',Se:'seleneto',As:'arseneto',Te:'telureto',At:'astateto',B:'boreto',Sb:'antimoneto'};
    const PRE = ['', 'mono', 'di', 'tri', 'tetra', 'penta', 'hexa', 'hepta'];
    const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
    const baseName = s => (EL[s].name || EL[s].latin).split(' (')[0];
    const cap = t => t.charAt(0).toUpperCase() + t.slice(1);

    // Receitas curadas adicionais (gases moleculares, nobres reativos, ácidos/bases/sais, ligas)
    [['H','Hidrogénio','Gás leve e inflamável: puro, é o Sopro Celestial em forma molecular.'],
     ['N','Nitrogénio','Gás inerte que compõe 78% do ar; usado em têmpera ultra-rápida.'],
     ['O','Oxigénio','Gás vital: alimenta fogueiras e forjas.'],
     ['F','Flúor','Gás amarelo e o mais reativo de todos; corrói quase tudo.'],
     ['Cl','Cloro','Gás verde tóxico: miasma paralisante.'],
     ['Br','Bromo','Líquido vermelho-escuro de vapores irritantes.'],
     ['I','Iodo','Sólido violeta que sublima em vapor antisséptico.']]
    .forEach(([s, n, d]) => RECIPES.push({formula: s + '2', eq: `2 ${s} ➔ ${s}₂`, name: `${n} Molecular (${s}₂)`, desc: d, match_items: {[s]: 2}}));
    RECIPES.push(
      {formula:'O3', name:'Ozono (O₃)', desc:'Gás azulado que purifica o ar e queima os pulmões em excesso.', match_items:{O:3}},
      {formula:'S8', name:'Enxofre Cristalino (S₈)', desc:'Anel de oito átomos: o pó amarelo-brimstone.', match_items:{S:8}},
      {formula:'P4', name:'Fósforo Branco (P₄)', desc:'Tetraedro que se incendeia sozinho ao ar.', match_items:{P:4}},
      {formula:'XeF2', name:'Difluoreto de Xénon', desc:'Prova de que nobres também reagem: fluoração poderosa.', match_items:{Xe:1,F:2}},
      {formula:'XeF4', name:'Tetrafluoreto de Xénon', desc:'Cristais incolores, oxidante forte.', match_items:{Xe:1,F:4}},
      {formula:'KrF2', name:'Difluoreto de Criptónio', desc:'Instável, só existe em frio extremo.', match_items:{Kr:1,F:2}},
      {formula:'CaC2', name:'Carbeto de Cálcio (Acetileto)', desc:'Pedra que, na água, libera gás acetileno inflamável.', match_items:{Ca:1,C:2}},
      {formula:'Fe3O4', name:'Magnetita (Óxido Ferroso-Férrico)', desc:'Pedra-ímã natural: mistura de Fe²⁺ e Fe³⁺.', match_items:{Fe:3,O:4}},
      {formula:'NaOH', name:'Soda Cáustica (Hidróxido de Sódio)', desc:'Base forte que dissolve gorduras e carne.', match_items:{Na:1,O:1,H:1}},
      {formula:'KOH', name:'Potassa Cáustica (Hidróxido de Potássio)', desc:'Base forte para sabões e alquimia druídica.', match_items:{K:1,O:1,H:1}},
      {formula:'Ca(OH)2', name:'Cal Apagada (Hidróxido de Cálcio)', desc:'Base fraca: argamassa e neutralizante de ácidos.', match_items:{Ca:1,O:2,H:2}},
      {formula:'H2SO4', name:'Óleo de Vitríolo (Ácido Sulfúrico)', desc:'Ácido ultra-corrosivo: dissolve metais e carne.', match_items:{H:2,S:1,O:4}},
      {formula:'HNO3', name:'Água-Forte (Ácido Nítrico)', desc:'Ácido que separa prata do ouro.', match_items:{H:1,N:1,O:3}},
      {formula:'H3PO4', name:'Ácido Fosfórico', desc:'Ácido médio, remove ferrugem de armaduras.', match_items:{H:3,P:1,O:4}},
      {formula:'Na2CO3', name:'Soda (Carbonato de Sódio)', desc:'Sal alcalino usado na fabricação de vidro.', match_items:{Na:2,C:1,O:3}},
      {formula:'NaHCO3', name:'Bicarbonato de Sódio', desc:'Antiácido suave e fermento alquímico.', match_items:{Na:1,H:1,C:1,O:3}},
      {formula:'CaSO4', name:'Gesso (Sulfato de Cálcio)', desc:'Pó branco para talas, moldes e estátuas.', match_items:{Ca:1,S:1,O:4}},
      // Ligas: misturas metálicas (proporção livre)
      {formula:'liga', name:'Bronze', desc:'Liga de cobre e estanho: armas e sinos da Era do Bronze.', mix:[['Cu','Sn']]},
      {formula:'liga', name:'Latão', desc:'Liga de cobre e zinco: dourada e resistente à corrosão.', mix:[['Cu','Zn']]},
      {formula:'liga', name:'Aço', desc:'Ferro com carbono: mais duro que o ferro puro.', mix:[['Fe','C']]},
      {formula:'liga', name:'Aço Inoxidável', desc:'Ferro com cromo (e níquel): não enferruja.', mix:[['Fe','Cr'],['Fe','Cr','Ni']]},
      {formula:'liga', name:'Solda de Estanho', desc:'Estanho e chumbo: funde a baixa temperatura.', mix:[['Sn','Pb']]},
      {formula:'liga', name:'Amálgama', desc:'Mercúrio dissolve outros metais em pasta prateada.', mix:[['Hg','Ag'],['Hg','Au'],['Hg','Sn']]},
      {formula:'liga', name:'Electro', desc:'Ouro e prata: o metal dos primeiros reis.', mix:[['Au','Ag']]},
      {formula:'liga', name:'Duralumínio', desc:'Alumínio e cobre: leve e muito resistente.', mix:[['Al','Cu']]},
      {formula:'liga', name:'Nicromo', desc:'Níquel e cromo: resiste a calor extremo.', mix:[['Ni','Cr']]}
    );

    // Peróxidos (O₂²⁻) e superóxidos (O₂⁻): famílias IA, IIA, Zn e Ag
    const IA = ['Li','Na','K','Rb','Cs','Fr'], IIA = ['Mg','Ca','Sr','Ba','Ra'];
    function oxyForms(m) {
      const out = [], N = baseName(m).toLowerCase();
      if (IA.includes(m)) {
        out.push({f: `${m}₂O₂`, items: {[m]: 2, O: 2}, name: `Peróxido de ${N}`, kind: 'peróxido', desc: 'Sal oxidante instável que aprisiona o ar vital: qualquer umidade o faz ferver.'});
        if (m !== 'Li') out.push({f: `${m}O₂`, items: {[m]: 1, O: 2}, name: `Superóxido de ${N}`, kind: 'superóxido', desc: 'Cristal ávido que devolve o ar vital ao tocar a umidade.'});
      } else if (IIA.includes(m) || m === 'Zn') {
        out.push({f: `${m}O₂`, items: {[m]: 1, O: 2}, name: `Peróxido de ${N}`, kind: 'peróxido', desc: 'Sal oxidante instável que aprisiona o ar vital: qualquer umidade o faz ferver.'});
        if (IIA.includes(m)) out.push({f: `${m}(O₂)₂`, items: {[m]: 1, O: 4}, name: `Superóxido de ${N}`, kind: 'superóxido', desc: 'Cristal ávido que devolve o ar vital ao tocar a umidade.'});
      } else if (m === 'Ag') {
        out.push({f: 'Ag₂O₂', items: {Ag: 2, O: 2}, name: 'Peróxido de prata', kind: 'peróxido', desc: 'Cristal lunar oxidante, hostil à matéria viva.'});
      }
      return out;
    }

    function binaryMatch(state, A, B) {
      const hints = [];
      for (const [x, y] of [[A, B], [B, A]]) {
        const px = posOf(x);
        if (!px || !NEG[y] || EN[x] == null || EN[y] == null || (EN[x] >= EN[y] && !(x === 'H' && !isMetal(y)))) continue;
        if (y === 'H' && !isMetal(x)) continue;
        const n = -NEG[y];
        for (const p of px) {
          const g = gcd(p, n), a = n / g, b = p / g; // a átomos de x, b átomos de y
          const swap = x === 'H' && ['B','C','N','Si','P','As'].includes(y);
          const [s1, c1, s2, c2] = swap ? [y, b, x, a] : [x, a, y, b];
          const f = s1 + (c1 > 1 ? sub(c1) : '') + s2 + (c2 > 1 ? sub(c2) : '');
          if (!hints.includes(f)) hints.push(f);
          const k = state[x] / a;
          if (Number.isInteger(k) && k >= 1 && state[y] === k * b) {
            const metalCat = isMetal(x);
            const multi = px.length > 1 && metalCat ? ` (${ROMAN[p]})` : '';
            const an = ANION[y] || 'composto';
            let name;
            if (metalCat) name = `${cap(an)} de ${baseName(x).toLowerCase()}${multi}`;
            else {
              let pre = (b === 1 && y !== 'O') ? '' : (PRE[b] || '');
              if (/[ao]$/.test(pre) && /^[óiu]/.test(an)) pre = pre.slice(0, -1);
              name = cap(`${pre}${an} de ${a > 1 ? PRE[a] : ''}${baseName(x).toLowerCase()}`);
            }
            return {ok: {id: f, formula: f, name, k,
              desc: metalCat ? 'Cristal arcano de ligação iónica: duro, quebradiço e estável.'
                             : 'Essência molecular volátil, unida por laços partilhados de eletrões.',
              eq: `${state[x]} ${x} + ${state[y]} ${y} ➔ ${k > 1 ? k + ' ' : ''}${f}`, xp: [90, 40], gold: 15}, hints};
          }
        }
      }
      return {ok: null, hints};
    }


    // ===== COMPOSTOS ORGÂNICOS (casamento exato antes dos múltiplos) =====
    RECIPES.push(
      {formula:'C2H6O', name:'Etanol (Álcool Etílico)', desc:'Álcool que desinfeta feridas e embriaga tavernas.', match_items:{C:2,H:6,O:1}, exact:true},
      {formula:'CH4O', name:'Metanol (Álcool da Madeira)', desc:'Álcool tóxico: cega quem o bebe.', match_items:{C:1,H:4,O:1}, exact:true},
      {formula:'C6H12O6', name:'Glicose (Açúcar do Sangue)', desc:'Combustível da vida: devolve vigor rapidamente.', match_items:{C:6,H:12,O:6}, exact:true},
      {formula:'C12H22O11', name:'Sacarose (Açúcar Comum)', desc:'Cristais doces extraídos da cana.', match_items:{C:12,H:22,O:11}, exact:true},
      {formula:'C2H4O2', name:'Ácido Acético (Vinagre)', desc:'Ácido fraco: tempera comida e corrói calcário.', match_items:{C:2,H:4,O:2}, exact:true},
      {formula:'C3H6O', name:'Acetona', desc:'Solvente volátil que dissolve resinas e tintas.', match_items:{C:3,H:6,O:1}, exact:true},
      {formula:'C3H8O3', name:'Glicerol (Glicerina)', desc:'Líquido viscoso: base de pomadas e explosivos.', match_items:{C:3,H:8,O:3}, exact:true},
      {formula:'CH4N2O', name:'Ureia', desc:'Sólido branco que fertiliza campos.', match_items:{C:1,H:4,N:2,O:1}, exact:true},
      {formula:'C6H8O7', name:'Ácido Cítrico', desc:'Ácido das frutas cítricas: conserva e limpa.', match_items:{C:6,H:8,O:7}, exact:true},
      {formula:'C9H8O4', name:'Ácido Acetilsalicílico (Aspirina)', desc:'Alivia dores e febres.', match_items:{C:9,H:8,O:4}, exact:true},
      {formula:'C8H10N4O2', name:'Cafeína', desc:'Alcaloide que espanta o sono.', match_items:{C:8,H:10,N:4,O:2}, exact:true},
      {formula:'C2H2', name:'Acetileno (Etino)', desc:'Gás de chama branca usado em maçaricos.', match_items:{C:2,H:2}, exact:true},
      {formula:'C2H4', name:'Etileno (Eteno)', desc:'Gás que amadurece frutos.', match_items:{C:2,H:4}, exact:true},
      {formula:'C2H6', name:'Etano', desc:'Gás inflamável do pântano.', match_items:{C:2,H:6}, exact:true},
      {formula:'C3H8', name:'Propano', desc:'Gás de lampiões e fogareiros.', match_items:{C:3,H:8}, exact:true},
      {formula:'C4H10', name:'Butano', desc:'Gás liquefeito de isqueiros.', match_items:{C:4,H:10}, exact:true},
      {formula:'C6H6', name:'Benzeno', desc:'Anel aromático: solvente tóxico e cancerígeno.', match_items:{C:6,H:6}, exact:true}
    );

    // ===== GERADOR AUTOMÁTICO: ácidos, bases e sais (íons poliatômicos) =====
    // Qualquer combinação de cátion + ânion é reconhecida, em qualquer ordem de clique.
    const plain = t => t.replace(/[₀-₉]/g, d => SUB.indexOf(d));
    const sigOf = c => { const ks = Object.keys(c).filter(k => c[k] > 0).sort(); const g = ks.reduce((a, k) => gcd(a, c[k]), 0); return ks.map(k => k + (c[k] / g)).join(','); };
    const gcdAll = c => Object.keys(c).reduce((a, k) => gcd(a, c[k]), 0);
    const POLY = [
      {f:'CO₃', a:{C:1,O:3}, q:2, n:'carbonato', ac:'carbônico'},
      {f:'SO₄', a:{S:1,O:4}, q:2, n:'sulfato', ac:'sulfúrico'},
      {f:'SO₃', a:{S:1,O:3}, q:2, n:'sulfito', ac:'sulfuroso'},
      {f:'NO₃', a:{N:1,O:3}, q:1, n:'nitrato', ac:'nítrico'},
      {f:'NO₂', a:{N:1,O:2}, q:1, n:'nitrito', ac:'nitroso'},
      {f:'PO₄', a:{P:1,O:4}, q:3, n:'fosfato', ac:'fosfórico'},
      {f:'ClO', a:{Cl:1,O:1}, q:1, n:'hipoclorito', ac:'hipocloroso'},
      {f:'ClO₂', a:{Cl:1,O:2}, q:1, n:'clorito', ac:'cloroso'},
      {f:'ClO₃', a:{Cl:1,O:3}, q:1, n:'clorato', ac:'clórico'},
      {f:'ClO₄', a:{Cl:1,O:4}, q:1, n:'perclorato', ac:'perclórico'},
      {f:'BrO₃', a:{Br:1,O:3}, q:1, n:'bromato', ac:'brômico'},
      {f:'IO₃', a:{I:1,O:3}, q:1, n:'iodato', ac:'iódico'},
      {f:'MnO₄', a:{Mn:1,O:4}, q:1, n:'permanganato', ac:'permangânico'},
      {f:'CrO₄', a:{Cr:1,O:4}, q:2, n:'cromato', ac:'crômico'},
      {f:'Cr₂O₇', a:{Cr:2,O:7}, q:2, n:'dicromato', ac:'dicrômico'},
      {f:'SiO₃', a:{Si:1,O:3}, q:2, n:'silicato', ac:'silícico'},
      {f:'BO₃', a:{B:1,O:3}, q:3, n:'borato', ac:'bórico'},
      {f:'AsO₄', a:{As:1,O:4}, q:3, n:'arsenato', ac:'arsênico'},
      {f:'C₂O₄', a:{C:2,O:4}, q:2, n:'oxalato', ac:'oxálico'},
      {f:'OH', a:{O:1,H:1}, q:1, n:'hidróxido', base:true},
      {f:'HCO₃', a:{H:1,C:1,O:3}, q:1, n:'bicarbonato', salt:true},
      {f:'HSO₄', a:{H:1,S:1,O:4}, q:1, n:'hidrogenossulfato', salt:true},
      {f:'HSO₃', a:{H:1,S:1,O:3}, q:1, n:'hidrogenossulfito', salt:true},
      {f:'HPO₄', a:{H:1,P:1,O:4}, q:2, n:'hidrogenofosfato', salt:true},
      {f:'H₂PO₄', a:{H:2,P:1,O:4}, q:1, n:'di-hidrogenofosfato', salt:true}
    ];
    const MONO = [['F','fluoreto',1],['Cl','cloreto',1],['Br','brometo',1],['I','iodeto',1],['S','sulfeto',2]];
    const ACID_DESC = {
      H2CO3: 'Nasce quando o gás carbônico se dissolve na água da chuva: ácido fraco e instável, responsável pelo pH ≈ 5,6 da chuva comum.',
      H2SO3: 'Surge quando o dióxido de enxofre toca a água: um dos ácidos da chuva ácida.',
      HNO2: 'Ácido fraco e instável formado pelos óxidos de nitrogênio na umidade do ar.'
    };
    const IONIC = new Map();
    function addIonic(counts, formula, name, desc, kind) {
      const sig = sigOf(counts);
      if (!IONIC.has(sig)) IONIC.set(sig, {counts, formula, id: plain(formula), name, desc, kind});
    }
    (function buildIonic() {
      // 1) Ácidos oxigenados: H + ânion
      POLY.filter(a => !a.base && !a.salt).forEach(a => {
        const c = {H: a.q}; Object.keys(a.a).forEach(k => c[k] = (c[k] || 0) + a.a[k]);
        const f = 'H' + (a.q > 1 ? sub(a.q) : '') + a.f;
        addIonic(c, f, `Ácido ${a.ac}`, ACID_DESC[plain(f)] || 'Ácido oxigenado: corrói metais e queima a pele.', 'ácido');
      });
      // 2) Bases e sais de metais
      const metals = Object.keys(POS).filter(m => EL[m] && isMetal(m) && EL[m].z < 104);
      metals.forEach(m => POS[m].forEach(p => {
        const nm = baseName(m).toLowerCase(), rom = POS[m].length > 1 ? ` (${ROMAN[p]})` : '';
        POLY.forEach(a => {
          const g = gcd(p, a.q), nc = a.q / g, na = p / g;
          const c = {}; c[m] = nc; Object.keys(a.a).forEach(k => c[k] = (c[k] || 0) + a.a[k] * na);
          const an = a.a, multi = Object.keys(an).length > 1 || /[₂-₉]/.test(a.f);
          const f = m + (nc > 1 ? sub(nc) : '') + (multi && na > 1 ? `(${a.f})${sub(na)}` : a.f + (na > 1 ? sub(na) : ''));
          if (a.base) addIonic(c, f, `Hidróxido de ${nm}${rom}`, 'Base metálica: neutraliza ácidos e dissolve gorduras.', 'base');
          else addIonic(c, f, `${cap(a.n)} de ${nm}${rom}`, 'Sal cristalino de ligação iônica: estável e quebradiço.', 'sal');
        });
      }));
      // 3) Sais de amônio
      const NH4 = {N:1, H:4};
      const nh4 = (c, f, nameAn, q, multi) => { const g = gcd(1, q), nc = q / g, na = 1 / g; const cc = {N:nc, H:4*nc}; Object.keys(c).forEach(k => cc[k] = (cc[k]||0) + c[k]*na); return cc; };
      POLY.filter(a => !a.base).forEach(a => {
        const nc = a.q, cc = {N: nc, H: 4 * nc}; Object.keys(a.a).forEach(k => cc[k] = (cc[k] || 0) + a.a[k]);
        const f = (nc > 1 ? `(NH₄)${sub(nc)}` : 'NH₄') + a.f;
        addIonic(cc, f, `${cap(a.n)} de amônio`, 'Sal de amônio: fertiliza a terra e libera gás pungente ao ser aquecido.', 'sal');
      });
      MONO.forEach(([s, n, q]) => {
        const cc = {N: q, H: 4 * q}; cc[s] = 1;
        const f = (q > 1 ? `(NH₄)${sub(q)}` : 'NH₄') + s;
        addIonic(cc, f, `${cap(n)} de amônio`, 'Sal de amônio: fertiliza a terra e libera gás pungente ao ser aquecido.', 'sal');
      });
    })();

    // Dicas: compostos conhecidos que usam exatamente os mesmos elementos (os mais próximos da proporção usada)
    function hintsFor(state) {
      const keys = Object.keys(state).filter(k => state[k] > 0).sort();
      const tot = keys.reduce((a, k) => a + state[k], 0), out = [], seen = new Set();
      const consider = (formula, counts, name) => {
        const ck = Object.keys(counts).sort();
        if (ck.length !== keys.length || !ck.every((k, i) => k === keys[i]) || seen.has(formula)) return;
        seen.add(formula);
        const ct = ck.reduce((a, k) => a + counts[k], 0);
        const dist = ck.reduce((a, k) => a + Math.abs(state[k] / tot - counts[k] / ct), 0);
        out.push({dist, txt: `${formula} (${name}): ${ck.map(k => counts[k] + ' ' + k).join(' + ')}`});
      };
      RECIPES.forEach(r => r.match_items && consider(r.fshow || sub(r.formula), r.match_items, r.name));
      IONIC.forEach(v => consider(v.formula, v.counts, v.name));
      return out.sort((a, b) => a.dist - b.dist).slice(0, 3).map(o => o.txt);
    }

    // ===== EFEITOS DE RPG (gatilho + dado) =====
    const TOX = ['Be','As','Hg','Tl','Pb','Cd','Ba','Sb','Se','Te','Os'];
    const HALO = ['F','Cl','Br','I'];
    const FX = {
      H2O: '💧 Ao beber: cura 2d4+2 PV e remove um veneno ativo.',
      H2O2: '🧴 Ao aplicar numa ferida: cura 1d4 PV. Contra mortos-vivos: 2d4 de dano radiante.',
      NaCl: '🧂 Polvilhado no chão: espíritos e mortos-vivos não atravessam a linha por 1 minuto.',
      CO: '🌫️ Gás sem cheiro: criaturas na nuvem fazem salvaguarda de CON (CD 12) ou adormecem por 1 turno.',
      CH4: '🔥 Nuvem inflamável: ao toque de qualquer chama explode, 2d6 de fogo em 3 m.',
      NH3: '👃 Sob o nariz de um aliado: encerra atordoamento ou sono.',
      CaO: '🔥 Ao tocar água: ferve e queima, 1d6 de fogo em quem estiver adjacente.',
      SiO2: '🔮 Esfera de vidência: vantagem em testes de Percepção por 1 hora.',
      Cl2: '☠️ Bruma verde: CON (CD 12) ou 1d6 de veneno por turno durante 3 turnos.',
      F2: '🧪 Corrosão esmeralda: 2d6 de ácido e destrói armadura não-mágica tocada.',
      O3: '🌬️ Ar purificado: dissipa nuvens venenosas em 6 m.',
      Fe3O4: '🧲 Pedra-ímã: atrai armaduras de metal; desvantagem para inimigos com cota de malha.',
      H2CO3: '🌧️ Chuva fraca: borrifada, causa 1d4 de ácido em armaduras de metal e apaga chamas pequenas.',
      H2SO3: '🌧️ Chuva ácida: nuvem de 3 m, 1d6 de ácido por turno (2 turnos) e -1 de CA em armaduras metálicas.',
      HNO2: '🌧️ Névoa ácida: 1d4 de ácido por turno (2 turnos) em quem estiver na nuvem.'
    };
    function rpgEffects(res, state) {
      if (res.fx && res.fx.length) return res.fx;
      const keys = Object.keys(state).filter(k => state[k] > 0), L = [], f = res.id || '';
      const n = (res.name || '').toLowerCase(), two = keys.length === 2;
      const T = {I:1, II:2, III:3, IV:4, V:5};
      const tier = k => T[(EL[k].tier || 'Tier I').replace('Tier ', '')] || 1;
      const maxTier = Math.max(...keys.map(tier));
      const has = s => keys.includes(s), metalWith = s => two && has(s) && keys.some(isMetal);
      if (FX[f]) L.push(FX[f]);
      if (res.formula === 'Liga metálica') L.push('⚒️ Forja: serve para criar arma ou armadura com +1 de bônus.');
      const rad = keys.filter(k => EL[k].z === 43 || EL[k].z === 61 || EL[k].z >= 84);
      if (rad.length) {
        const rt = Math.max(...rad.map(tier)), d = ['', '1d3', '1d4', '1d4', '1d5', '1d8'][rt];
        L.push(`☢️ Exposto à luz: solta faíscas de luz radioativa, ${d} de dano radiante por turno (3 turnos). CON (CD ${8 + rt}) reduz à metade.`);
      }
      const alk = keys.some(k => IA.includes(k) || IIA.includes(k));
      if (/peróxido|superóxido/.test(n) && !/hidrog/.test(n)) L.push('💧 Ao tocar água: libera ar vital em explosão, 1d6 de fogo em 1,5 m e deixa a poça cáustica.');
      else if (two && has('H') && alk) L.push('💧 Ao tocar água: o hidrogénio se inflama, 2d6 de fogo em 3 m.');
      else if (metalWith('N') && !FX[f]) L.push('💧 Ao tocar água: solta gás amoniacal, 1d4 de veneno por turno (3 turnos).');
      else if (metalWith('P')) L.push('💧 Ao tocar água: solta gás de fosfina, CON (CD 13) ou 1d6 de veneno por turno (3 turnos).');
      else if (metalWith('C') && res.formula !== 'Liga metálica') L.push('💧 Ao tocar água: solta gás inflamável; com faísca explode, 2d6 de fogo em 3 m.');
      else if (two && has('O') && alk) L.push('💧 Ao tocar água: vira lixívia cáustica, 1d4 de ácido em quem tocar.');
      else if (two && has('O') && !keys.some(isMetal) && !has('H') && !['CO', 'N2O', 'NO', 'O3'].includes(f))
        L.push('🌧️ Ao tocar água: vira névoa ácida, 1d4 de ácido por turno (3 turnos) e -1 de CA em armaduras metálicas.');
      else if (two && has('H') && keys.some(k => HALO.includes(k))) L.push('🧪 Ácido fumegante: 1d6 de ácido por turno e dissolve fechaduras de ferro.');
      if (metalWith('S') && two) L.push('🔥 Ao queimar: fumaça de enxofre cega por 1 turno (CON CD 12 anula).');
      if (keys.some(k => TOX.includes(k))) L.push(`☠️ Se ingerido ou inalado: CON (CD ${9 + maxTier}) ou 1d4 de veneno por turno (3 turnos).`);
      if (!L.length && two && metalWith('Cl')) L.push('🧂 Sal estável: polvilhado no chão, cria uma barreira leve contra espíritos por 1 minuto.');
      if (!L.length && /^ácido/.test(n)) L.push('🧪 Ácido: 1d6 de ácido ao contato e corrói fechaduras de ferro.');
      if (!L.length && /^hidróxido/.test(n)) L.push('🧼 Base cáustica: 1d4 de ácido em quem tocar; neutraliza qualquer ácido.');
      if (!L.length) L.push('✨ Reagente estável: sem efeito perigoso. Serve de base para outras alquimias.');
      return [...new Set(L)].slice(0, 4);
    }

    function resolveReaction(state) {
      const keys = Object.keys(state).filter(k => state[k] > 0);
      const reag = keys.map(k => `${state[k]} ${k}`).join(' + ');
      const fail = (title, why, px = 15, pg = 10) => ({type: 'fail', title, why, px, pg});
      const none = (title, why) => ({type: 'none', title, why});

      const unst = keys.map(k => EL[k]).find(e => e.z >= 104);
      if (unst) return fail('☢️ DECAIMENTO INSTANTÂNEO!', `${unst.latin} é superpesado: desintegra-se em segundos ou menos, antes de poder reagir.`, 5, 5);

      // 1) Receitas curadas: primeiro casamento exato, depois múltiplos inteiros da proporção
      for (const pass of [1, 2]) for (const r of RECIPES) {
        if (r.match_items) {
          const rk = Object.keys(r.match_items);
          if (rk.length !== keys.length) continue;
          const k = state[rk[0]] / r.match_items[rk[0]];
          if (Number.isInteger(k) && k >= 1 && (pass === 2 || k === 1) && rk.every(s => state[s] === k * r.match_items[s])) {
            const f = r.fshow || sub(r.formula);
            return {type: 'ok', id: r.formula, name: r.name, formula: f, k, desc: r.desc, fx: r.fx,
              eq: r.eq ? (k > 1 ? `${reag} ➔ ${k} ${f}` : r.eq) : `${reag} ➔ ${k > 1 ? k + ' ' : ''}${f}`,
              xp: r.xp || [140, 80], gold: r.gold || 30};
          }
        } else if (pass === 1 && r.test && r.test(state, keys)) {
          return {type: 'ok', id: r.formula, name: r.name, formula: r.fshow, k: 1, desc: r.desc, fx: r.fx,
            eq: `${reag} ➔ ${r.fshow}`, xp: r.xp, gold: r.gold};
        } else if (pass === 1 && r.mix && r.mix.some(set => set.length === keys.length && set.every(s => keys.includes(s)))) {
          return {type: 'ok', id: 'liga:' + r.name, name: r.name, formula: 'Liga metálica', k: 1, desc: r.desc,
            eq: `${keys.join(' + ')} ➔ liga (mistura metálica, proporção variável)`, xp: [120, 60], gold: 25};
        }
      }
      // 2) Gases nobres
      if (keys.some(k => NOBLE.includes(k)))
        return none('🛡️ GÁS NOBRE: SEM REAÇÃO', 'Gases nobres têm a camada de valência completa e não reagem com quase nada (exceções raras: Xe/Kr com flúor). Os reagentes foram dispersos, sem dano.');
      // 3) Elemento isolado
      if (keys.length === 1)
        return none('💨 ELEMENTO ISOLADO', `${reag} não formou nada novo: átomos de um único elemento só se combinam em moléculas conhecidas (H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂, O₃, S₈, P₄).`);
      // 4) Só metais = liga genérica
      if (keys.every(isMetal))
        return {type: 'ok', id: 'liga:' + [...keys].sort().join(''), name: `Liga Experimental (${keys.join('-')})`, formula: 'Liga metálica', k: 1,
          desc: 'Metais fundidos num só corpo: sem nome nos grimórios, mas útil na forja.',
          eq: `${keys.join(' + ')} ➔ liga metálica`, xp: [45, 20], gold: 10};
      // 5) Dois elementos: valência + eletronegatividade
      if (keys.length === 2) {
        const mm = keys.find(k => k !== 'O'), oxy = keys.includes('O') ? oxyForms(mm) : [];
        for (const o of oxy) {
          const ik = Object.keys(o.items), k = state[ik[0]] / o.items[ik[0]];
          if (Number.isInteger(k) && k >= 1 && ik.every(x => state[x] === k * o.items[x]))
            return {type: 'ok', id: o.f, name: o.name, formula: o.f, k, desc: o.desc,
              eq: `${reag} ➔ ${k > 1 ? k + ' ' : ''}${o.f}`, xp: [110, 50], gold: 20};
        }
        const {ok, hints} = binaryMatch(state, keys[0], keys[1]);
        oxy.forEach(o => hints.push(`${o.f} (${o.kind})`));
        if (ok) return {type: 'ok', ...ok};
        if (hints.length)
          return fail('💥 PROPORÇÃO ESTEQUIOMÉTRICA INVÁLIDA!', `${keys.join(' e ')} podem se ligar, mas não na proporção ${reag}.\n💡 Fórmulas possíveis: ${hints.join(', ')} (ou múltiplos).`);
        return fail('💥 LIGAÇÃO IMPOSSÍVEL!', `${keys.join(' e ')} não têm diferença de eletronegatividade/valência que permita uma ligação estável. Os reagentes repeliram-se.`);
      }
      // 6) Três ou mais
      {
        const hit = IONIC.get(sigOf(state));
        if (hit) {
          const k = gcdAll(state) / gcdAll(hit.counts);
          if (Number.isInteger(k) && k >= 1)
            return {type: 'ok', id: hit.id, name: hit.name, formula: hit.formula, k, desc: hit.desc,
              eq: `${reag} ➔ ${k > 1 ? k + ' ' : ''}${hit.formula}`, xp: [130, 70], gold: 28};
        }
        const hs = hintsFor(state);
        if (hs.length)
          return fail('💥 PROPORÇÃO INVÁLIDA!', `Esses elementos podem formar compostos, mas não na proporção ${reag}.\n💡 Mais próximos: ${hs.join(' | ')} (ou múltiplos).`, 5, 3);
        return fail('💥 MISTURA INSTÁVEL!', 'Esta combinação de 3+ elementos não forma nenhum composto conhecido (ácido, base, sal ou molécula orgânica). Tente trocar um dos elementos.', 8, 5);
      }
    }


    // ===== COMPÊNDIO ALQUÍMICO (substâncias e efeitos de D&D 5e pedidos pelo professor) =====
    // Cada linha: fórmula (usada para contar os átomos), nome e efeitos em jogo.
    // Misturas usam "+" (ex.: H2O+NaCl) e hidratos entram como "+nH2O".
    (function buildCompendio() {
      function parseGroup(f) {
        let i = 0;
        const num = () => { const j = i; while (i < f.length && /\d/.test(f[i])) i++; return i > j ? +f.slice(j, i) : 1; };
        function grp(close) {
          const c = {};
          while (i < f.length && f[i] !== close) {
            const ch = f[i];
            if (ch === '(' || ch === '[') {
              i++; const inner = grp(ch === '(' ? ')' : ']'); i++;
              const n = num(); for (const k in inner) c[k] = (c[k] || 0) + inner[k] * n;
            } else {
              const m = /^[A-Z][a-z]?/.exec(f.slice(i));
              if (!m) throw new Error('fórmula inválida: ' + f);
              i += m[0].length; const n = num(); c[m[0]] = (c[m[0]] || 0) + n;
            }
          }
          return c;
        }
        return grp(null);
      }
      function parseCounts(str) {
        const total = {};
        str.split('+').forEach(term => {
          let mult = 1; const m = term.trim().match(/^(\d+)(.*)$/);
          if (m) { mult = +m[1]; term = m[2]; } else term = term.trim();
          const g = parseGroup(term);
          for (const k in g) total[k] = (total[k] || 0) + g[k] * mult;
        });
        return total;
      }
      const pretty = f => f.replace(/([A-Za-z)\]])(\d+)/g, (_, a, d) => a + sub(d)).replace(/\+/g, ' + ');

      const added = [];
      function add(emoji, cat, formula, name, fx) {
        let counts;
        try { counts = parseCounts(formula); } catch (e) { console.warn(e.message); return; }
        const bad = Object.keys(counts).filter(k => !EL[k]);
        if (bad.length) { console.warn('Elemento desconhecido em ' + formula + ': ' + bad.join(',')); return; }
        const ne = Object.keys(counts).length, shown = pretty(formula);
        added.push({
          formula, fshow: shown, name, match_items: counts,
          desc: `Compêndio alquímico (D&D 5e): ${cat}.`,
          eq: `${Object.keys(counts).map(k => counts[k] + ' ' + k).join(' + ')} ➔ ${shown}`,
          fx: fx.map(t => `${emoji} ${t}`),
          xp: [110 + 15 * ne, 60 + 8 * ne], gold: 20 + 4 * ne
        });
      }
      function addTest(emoji, cat, id, shown, name, fx, test) {
        added.push({
          formula: id, fshow: shown, name, test,
          desc: `Compêndio alquímico (D&D 5e): ${cat}.`,
          fx: fx.map(t => `${emoji} ${t}`), xp: [150, 80], gold: 30
        });
      }
      const G = (emoji, cat, rows) => rows.forEach(r => add(emoji, cat, r[0], r[1], r.slice(2)));

      G('💧', 'soluções, poções e hidratação', [
        ['H2O', 'Água (Monóxido de Di-hidrogênio)', 'Restaura 1d4 + 1 PV (ou 15 PV se purificada/alquímica), remove condições superficiais de desidratação e purifica intoxicações leves (nível 1 ou menor).'],
        ['H2O+NaCl', 'Soro Fisiológico (Solução Salina)', 'Restaura 2d4 PV. Limpa ferimentos abertos, neutralizando infecções leves, e concede vantagem em testes de Constituição para resistir a venenos biológicos ou envenenamento imediato.'],
        ['H2O+C6H12O6', 'Soro Glicosado Alquímico', 'Cura 1d6 PV e remove 1 nível de Exaustão temporário por 1 hora.'],
        ['H2O2', 'Peróxido de Hidrogênio (Água Oxigenada Concentrada)', 'Causa 1d4 de dano radiante em feridas infectadas e em mortos-vivos, e limpa venenos necrotizantes na pele.'],
        ['H2O+Na2CO3', 'Solução Alcalina de Carbonato', 'Neutraliza instantaneamente o efeito de qualquer ácido fraco ou médio.'],
        ['KMnO4+H2O', 'Permanganato de Potássio', 'Antisséptico potente: limpa feridas e elimina doenças não mágicas da pele. Causa 1d2 de dano cáustico se concentrado.'],
        ['H2O+Ca(OH)2', 'Água de Cal', 'Absorve o dióxido de carbono do ar. Se espalhada, revela criaturas invisíveis que respiram profundamente.'],
        ['H2O+I2', 'Tintura de Iodo Alquímica', 'Concede vantagem em testes de Constituição contra infecções e purifica 10 litros de água contaminada.'],
        ['H2O+MgSO4', 'Solução de Sal de Epsom', 'Alivia paralisia muscular e rigidez: o alvo ganha +2 em salvaguardas de Força por 10 minutos.'],
        ['C6H8O7+H2O', 'Solução de Ácido Cítrico', 'Causa 1d4 de dano de ácido se atingir os olhos (cegueira por 1 rodada, salvaguarda de Destreza CD 11).'],
        ['H2O+FeSO4', 'Tônico Terapêutico de Ferro', 'Concede +5 PV temporários por 1 hora.'],
        ['H2O+CuSO4', 'Solução de Sulfato de Cobre', 'Induz vômito imediato ao ser ingerida, expelindo venenos ingeridos nos últimos 10 minutos.'],
        ['H2O+CH3COOH', 'Vinagre Concentrado', 'Neutraliza queimaduras de bases fortes (como soda cáustica), reduzindo o dano contínuo pela metade.'],
        ['H2O+NaHCO3', 'Bicarbonato Alquímico', 'Alivia queimaduras de fogo e neutraliza azia ou envenenamento por ácidos fracos.'],
        ['H2O+AgNO3', 'Solução de Nitrato de Prata', 'Causa 1d6 de dano radiante adicional ao atingir metamorfos (como licantropos) e mortos-vivos.'],
        ['H2O+C3H8O3', 'Solução Umectante (Glicerol)', 'Protege a pele contra ressecamento por frio extremo: imunidade a dano de frio ambiental fraco.'],
        ['H2O+ZnSO4', 'Elixir de Zinco', 'Acelera a cicatrização natural: dobra os PV recuperados durante um descanso curto.'],
        ['H2O+CaSO4', 'Pasta de Gesso', 'Endurece em 1 minuto. Imobiliza membros fraturados, permitindo mover-se sem penalidades.'],
        ['Li2CO3+H2O', 'Elixir Estabilizador de Carbonato de Lítio', 'Concede vantagem em salvaguardas contra efeitos mentais de medo ou encantamento por 1 hora.'],
        ['H2O+C2H6O', 'Elixir Antisséptico Potente (Etanol)', 'Limpa ferimentos graves recém-abertos: restaura 1d4 PV e evita gangrena.'],
        ['C31H46N2O2+H2O', 'Antídoto de Neostigmina e Atropina', 'Cancela a condição Envenenado causada por toxinas de paralisia muscular.']
      ]);

      G('🧪', 'ácidos, bases e corrosivos', [
        ['H2SO4', 'Ácido Sulfúrico', 'Respingo ou contato rápido (frasco): 2d6 de dano de ácido, como o Frasco de Ácido do Livro do Jogador. Truques de respingo ácido causam de 1d4 a 4d4.', 'Imersão em concentrado (fosso ou tanque): 4d10 de dano de ácido por turno. Submersão total: 10d10 por turno (regra do Guia do Mestre).'],
        ['HCl', 'Ácido Clorídrico (Ácido Muriático)', 'Causa 1d8 de dano de ácido instantâneo e corrói objetos não mágicos de madeira ou metal fraco. Se arremessado nos olhos, salvaguarda de Destreza (CD 12) ou Cego por 1 rodada.'],
        ['HNO3+3HCl', 'Água Régia', 'Dissolve metais nobres (ouro e platina). Causa 3d6 de dano de ácido e ignora a Resistência a Dano de armaduras metálicas e construtos de metal por 1 minuto.'],
        ['HF', 'Ácido Fluorídrico', 'Causa 2d8 de dano de ácido no impacto e 1d8 de dano psíquico/necrótico contínuo por 2 turnos (penetra osso e tecido). Corrói vidro e cerâmica.'],
        ['NaOH', 'Soda Cáustica (Hidróxido de Sódio)', 'Base forte: 2d4 de dano cáustico/ácido. Dissolvida em água, libera vapor escaldante que causa 1d6 de dano de fogo adicional em área.'],
        ['HClO4', 'Ácido Perclórico', 'Extremamente oxidante: 3d6 de dano de ácido, ignorando a resistência a ácido de objetos materiais.'],
        ['H3PO4', 'Ácido Fosfórico', 'Remove ferrugem e dissolve ossos: 1d8 de dano de ácido em alvos orgânicos e 2d8 em mortos-vivos esqueléticos.'],
        ['H2SeO4', 'Ácido Selênico', 'Ataca ouro e cobre: 2d6 de dano de ácido; corrói moedas e armaduras nobres.'],
        ['H2CrO4', 'Ácido Crômico', 'Corrosivo e manchante: 2d6 de dano de ácido e deixa uma marca permanente visível a olho nu.'],
        ['HBr', 'Ácido Bromídrico', 'Altamente volátil: 1d10 de dano de ácido e vapores sufocantes (1d4 de dano de veneno na área).'],
        ['HI', 'Ácido Iodídrico', 'Corrói tecidos e causa inflamação: 2d4 de dano de ácido e desvantagem em ataques por 1 rodada.'],
        ['KOH', 'Potassa Cáustica (Hidróxido de Potássio)', 'Derrete gordura e pele: 2d6 de dano cáustico e destrói capas, tecidos e couro.'],
        ['Ca(OH)2', 'Cal Apagada (Hidróxido de Cálcio)', 'Irritante severo: 1d6 de dano cáustico e cegueira por 1d4 rodadas se atingir os olhos.'],
        ['Ba(OH)2', 'Hidróxido de Bário', 'Base tóxica pesada: 1d8 de dano cáustico e envenenamento imediato (salvaguarda de Constituição CD 13).'],
        ['LiOH', 'Hidróxido de Lítio', 'Reage com o dióxido de carbono, eliminando o ar do ambiente: 1d6 de dano de sufocamento por turno.'],
        ['NH4OH', 'Hidróxido de Amônio (Amônia Aquosa)', 'Desorienta pelo cheiro pungente: alvos a até 1,5 m ficam Incapacitados por 1 rodada (salvaguarda de Constituição CD 12).'],
        ['H2SiF6', 'Ácido Fluossilícico', 'Corrói rochas e alvenaria: 3d6 de dano de ácido contra construtos de pedra ou paredes de masmorra.'],
        ['H2SO3', 'Ácido Sulfuroso', 'Libera dióxido de enxofre ao contato: 1d6 de dano de ácido e 1d6 de dano de veneno por inalação.'],
        ['C2H4O2', 'Ácido Acético Glacial', 'Congela a 16 °C em cristais ardentes: 1d6 de dano de ácido e 1d6 de dano de frio.'],
        ['CH2O2', 'Ácido Fórmico', 'Agulhada dolorosa: 1d4 de dano de ácido e vantagem na próxima rolagem de ataque contra o alvo irritado.'],
        ['C2H2O4', 'Ácido Oxálico', 'Precipita o cálcio dos ossos: 2d4 de dano de ácido e reduz a CA do alvo em 1 por 1 minuto se ele usar armadura óssea ou orgânica.'],
        ['C6H5OH', 'Ácido Fênico (Fenol)', 'Queima e adormece os nervos: 1d8 de dano de ácido e o alvo não pode usar Reações até o fim do próximo turno.'],
        ['HNO2', 'Ácido Nitroso', 'Instável, decompõe-se em gases nitrosos: 1d6 de dano de ácido e cria uma nuvem opaca de 1,5 m.'],
        ['H3BO3', 'Ácido Bórico Alquímico', 'Tóxico para insetos e monstros do tipo Praga/Aracnídeo: causa 2d8 de dano de ácido exclusivamente neles.'],
        ['H2TeO4', 'Ácido Telúrico', 'Deixa o alvo com odor insuportável de alho por 1 semana: 1d6 de dano de ácido e -4 em testes de Furtividade.'],
        ['HOCN', 'Ácido Ciânico', 'Corrosivo e altamente venenoso: 1d6 de dano de ácido e 2d6 de dano de veneno.'],
        ['HSbF6', 'Ácido Fluoroantimônico', 'O superácido mais forte que existe: 6d10 de dano de ácido; derrete 30 cm de aço ou pedra por rodada.'],
        ['FSO3H', 'Ácido Fluorossulfúrico', 'Superácido volátil: 4d10 de dano de ácido e fumaça de veneno fluorado na área.'],
        ['Ca(ClO)2', 'Hipoclorito de Cálcio (Cloro em Pó)', 'Desinfetante e oxidante violento. Misturado a ácido, gera gás cloro que causa 2d8 de dano de veneno em área.'],
        ['CsOH', 'Hidróxido de Césio', 'A base mais forte: derrete vidro e tecidos instantaneamente, causando 3d10 de dano cáustico.']
      ]);

      G('💥', 'combustíveis, explosivos e pirotecnia', [
        ['2KNO3+S+3C', 'Pólvora Negra', 'Um barril ou bomba de pólvora explode ao contato com o fogo: 3d6 de dano de concussão e 3d6 de dano de fogo num raio de 3 m (salvaguarda de Destreza CD 12 para metade).'],
        ['C3H5(NO3)3', 'Nitroglicerina', 'Extremamente instável: qualquer impacto forte ou queda acidental a faz explodir, causando 4d10 de dano de força/fogo num raio de 4,5 m.'],
        ['C7H5N3O6', 'Trinitrotolueno (TNT Alquímico)', 'Causa 4d6 de dano de concussão e 4d6 de dano de fogo num raio de 6 m (salvaguarda de Destreza CD 14).'],
        ['C3H6N6O6', 'Ciclonita (RDX Alquímico)', 'Explosivo militar potente: 6d6 de dano de concussão num raio de 4,5 m.'],
        ['C5H8N4O12', 'Tetranitrato de Pentaeritritol (PETN)', 'Detonação ultrarrápida: 5d8 de dano de força em estruturas e portões.'],
        ['C8H8+Al+Fe', 'Napalm Alquímico (versão simples)', 'Adere ao alvo e causa 2d6 de dano de fogo por rodada durante 3 turnos (apagar exige uma ação inteira).'],
        ['C8H8+Al(C12H23O2)3+Fe', 'Napalm Alquímico de Poliestireno e Alumínio', 'Adere ao alvo e causa 2d6 de dano de fogo por rodada durante 3 turnos (apagar exige uma ação inteira).'],
        ['Mg+KClO4', 'Pó de Flash (Luz Ofuscante)', 'Detonação luminosa: criaturas a até 9 m ficam Cegas e Surdas por 1 rodada (salvaguarda de Constituição CD 13).'],
        ['Fe2O3+2Al', 'Mistura Termite', 'Queima a 2200 °C: 4d10 de dano de fogo; derrete fechaduras, grades e metais pesados em 1 rodada.'],
        ['Pb(N3)2', 'Azida de Chumbo', 'Sensível ao toque: detona ao sofrer qualquer impacto, causando 2d6 de dano de força numa área de 1,5 m.'],
        ['Hg(CNO)2', 'Fulminato de Mercúrio', 'Detonador alquímico: 1d10 de dano de força e aciona outros compostos explosivos próximos.'],
        ['C2H2', 'Gás Acetileno', 'Queima em maçarico: 3d6 de dano de fogo perfurante, ignorando a resistência a fogo de metais.'],
        ['CH4+O2', 'Gás Grisu de Mina', 'Explosão de bolsa de gás subterrânea: 3d8 de dano de fogo em uma sala inteira.'],
        ['KClO3+C12H22O11', 'Fumaça e Fogo Rápido', 'Queima veloz: cria uma cortina densa de fumaça de 6x6 m por 3 rodadas e causa 1d6 de dano de fogo.'],
        ['P4S3', 'Trissulfeto de Fósforo', 'A fricção gera fogo imediato: acende tochas ou causa 1d4 de dano de fogo ao contato.'],
        ['NCl3', 'Tricloreto de Nitrogênio', 'Explosivo extremamente instável: detona sob luz solar forte, causando 2d8 de dano de força.'],
        ['C2Ag2', 'Acetileto de Prata', 'Sensível a som e vibração: explode causando 2d6 de dano radiante/força se sofrer impacto sonoro.'],
        ['C2Cu2', 'Acetileto de Cobre', 'Cristais explosivos vermelhos: causam 1d8 de dano de fogo ao sofrerem pressão.'],
        ['NH4ClO4', 'Perclorato de Amônio', 'Combustível de foguetes alquímicos: lança um projétil a 36 m causando 3d6 de dano de fogo.'],
        ['NaNO3+S+C', 'Pólvora Branca Alquímica', 'Queima sem deixar fumaça: 2d6 de dano de fogo e não revela a posição do atirador ou conjurador.'],
        ['C6H2(NO2)3OH', 'Ácido Pícrico', 'Cristal explosivo amarelado: 3d6 de dano de fogo e 1d6 de dano de veneno.'],
        ['LiAlH4', 'Hidreto de Lítio e Alumínio', 'Explode em chamas violentas ao contato com água: 3d8 de dano de fogo/força.'],
        ['Zn+S', 'Pó de Zinco e Enxofre', 'Reação vulcânica súbita: 1d8 de dano de fogo e cega criaturas adjacentes por 1 turno.'],
        ['Ba(NO3)2+Al', 'Fogo de Artifício Verde', 'Sinalizador brilhante: ilumina um raio de 18 m por 5 rodadas e causa 1d4 de dano de fogo.'],
        ['Sr(NO3)2+S', 'Chama Vermelha de Alerta', 'Queima em vermelho vívido, visível a até 3 km de distância. Causa 1d4 de dano de fogo.'],
        ['CuCl2+C2H6O', 'Fogo Azul-Esmeralda', 'Chamas mágicas alquímicas: causam 2d4 de dano de fogo que não pode ser apagado por água comum.'],
        ['C4H10', 'Gás Butano Liquefeito', 'Frasco sob pressão: se quebrado perto de chamas, causa 2d8 de dano de fogo em um cone de 4,5 m.'],
        ['CaC2+H2O', 'Lanterna de Carbureto', 'Produz luz brilhante por 6 horas e pode ser detonada para causar 1d10 de dano de fogo.'],
        ['Na+H2O', 'Sódio Metálico em Água', 'Reação explosiva imediata: 2d6 de dano de fogo e 1d6 de dano cáustico num raio de 1,5 m.'],
        ['K+H2O', 'Potássio Metálico em Água', 'Explosão lilás violenta: 3d6 de dano de fogo num raio de 3 m.'],
        ['Cs+H2O', 'Césio Metálico em Água', 'Detonação aquática maciça: 4d8 de dano de força/fogo subaquático.'],
        ['ClF3', 'Trifluoreto de Cloro', 'Incendeia tudo, até pedra e areia: 5d10 de dano de fogo/ácido impreterível.']
      ]);

      G('☣️', 'gases, toxinas e venenos', [
        ['Cl2', 'Gás Cloro Toxicológico', 'Cria uma nuvem tóxica de 3 m de raio (como Nuvem Mortal em menor escala). Quem inicia o turno na nuvem sofre 2d8 de dano de veneno e fica Envenenado (salvaguarda de Constituição CD 13 reduz à metade o dano e evita a condição).'],
        ['NH3', 'Amoníaco (Amônia)', 'Inalação concentrada: salvaguarda de Constituição (CD 11). Em caso de falha, o alvo fica Atordoado por 1 rodada e desorientado pela irritação extrema das vias aéreas.'],
        ['CO', 'Monóxido de Carbono', 'Gás inodoro e letal: criaturas sem respiração ou sem proteção sofrem 1 nível de Exaustão a cada 10 minutos de exposição contínua, sem teste inicial.'],
        ['H2S', 'Gás Sulfídrico (Ovo Podre)', 'Cheiro insuportável e náusea imediata: 1d6 de dano de veneno e condição Envenenado (salvaguarda de Constituição CD 12).'],
        ['HCN', 'Cianeto de Hidrogênio', 'Veneno celular letal: 4d8 de dano de veneno e parada respiratória se falhar na salvaguarda de Constituição CD 15.'],
        ['COCl2', 'Fosgênio', 'Gás sufocante de efeito tardio: 2d8 de dano de veneno imediato e mais 2d8 após 1 hora.'],
        ['AsH3', 'Arsina', 'Destrói glóbulos vermelhos: 3d6 de dano necrótico e reduz a Força do alvo em 1d4 pontos.'],
        ['PH3', 'Fosfina', 'Combustão espontânea e tóxica (fogo fátuo): 1d6 de dano de fogo e 2d6 de dano de veneno.'],
        ['NO2', 'Dióxido de Nitrogênio', 'Gás castanho irritante: 1d8 de dano de ácido nos pulmões e impede o alvo de falar ou conjurar magias com componente verbal por 1 rodada.'],
        ['SO2', 'Dióxido de Enxofre', 'Sufoca em cavernas: 1d6 de dano de veneno por turno em ambientes fechados.'],
        ['CS2', 'Dissulfeto de Carbono', 'Vapor narcótico e inflamável: 1d4 de dano de veneno e o alvo fica incapaz de manter concentração.'],
        ['Hg(CH3)2', 'Dimetilmercúrio', 'Neurotoxina extrema absorvida pela pele: 1d10 de dano psíquico/necrótico por dia até ser curada por magia.'],
        ['C11H17N3O8', 'Tetrodotoxina (TTX Alquímica)', 'Bloqueio neural: causa a condição Paralisado por 1d4 rodadas (salvaguarda de Constituição CD 14).'],
        ['C21H22N2O2', 'Estricnina (Extrato de Noz-Vômica)', 'Espasmos musculares dolorosos: 3d6 de dano de veneno e o alvo cai no chão (Caído).'],
        ['C34H47NO11', 'Aconitina (Veneno de Acônito)', 'Parada cardíaca: 4d6 de dano de veneno (metade se passar na salvaguarda de Constituição CD 13).'],
        ['C4H10FO2P', 'Gás Sarin Alquímico', 'Asfixia total e tremores: 5d8 de dano de veneno e condições Cego e Caído simultaneamente.'],
        ['C11H26NO2PS', 'Gás VX Alquímico (Toxina Persistente)', 'Permanece no solo por dias: 2d8 de dano de veneno a qualquer um que pise na área sem proteção.'],
        ['N2O', 'Gás do Riso (Óxido Nitroso)', 'O alvo começa a rir incontrolavelmente (como a magia Riso Hediondo de Tasha) por 1 rodada.'],
        ['O3', 'Ozônio Concentrado', 'Cheiro de tempestade elétrica: 1d8 de dano elétrico e limpa o ar de odores por 1 hora.'],
        ['Br2', 'Bromo Líquido Volátil', 'Vapores vermelhos corrosivos: 1d6 de dano de ácido e 1d6 de dano de veneno.'],
        ['F2', 'Gás Flúor Puro', 'O elemento mais reativo: destrói tecidos orgânicos, causando 3d8 de dano de ácido.'],
        ['Pb(C2H3O2)2', 'Açúcar de Chumbo (Acetato de Chumbo)', 'Veneno doce e disfarçado: 1d6 de dano psíquico por dia e perda de memória recente.'],
        ['Tl2SO4', 'Sulfato de Tálio', 'Veneno dos assassinos, sem cheiro: queda de cabelos ou penas e 2d8 de dano de veneno.'],
        ['SbCl3', 'Tricloreto de Antimônio (Manteiga de Antimônio)', 'Causa 2d6 de dano cáustico e envenenamento gastrointestinal.'],
        ['BaCO3', 'Carbonato de Bário', 'Veneno de roedores: se ingerido, 2d6 de dano de veneno e fraqueza muscular (-2 em Força).'],
        ['NaCN', 'Cianeto de Sódio', 'Sal branco mortífero: 3d8 de dano de veneno imediato na ingestão.'],
        ['KCN', 'Cianeto de Potássio', 'Ação rápida: 4d6 de dano de veneno e impede a recuperação de PV por 1 hora.'],
        ['C10H14N2', 'Nicotina Concentrada', 'Toxina vegetal concentrada: 2d4 de dano de veneno e tremores nas mãos (desvantagem em ataques à distância).'],
        ['C9H20NO2', 'Muscarina (Toxina de Cogumelo Vermelho)', 'Alucinações vívidas: causa a condição Amedrontado por 1d4 rodadas.'],
        ['C31H42N2O6', 'Batracotoxina (Sapo-Flecha)', 'O veneno de contato mais forte: 3d10 de dano de veneno diretamente ao toque.'],
        ['C40H44N4O12', 'Tubocurarina (Curare Concentrado)', 'Usado em dardos: se o alvo falhar na salvaguarda de Constituição CD 14, fica Inconsciente por 1 hora.'],
        ['S8+As2O3', 'Ushag-Toxina (Vapor de Enxofre e Trióxido de Arsênio)', 'Fumaça amarelada: 2d6 de dano de veneno e reduz a visão a 3 m.'],
        ['C21H32O2', 'Urushiol (Óleo de Vinha Venenosa)', 'Coceira e bolhas dolorosas: desvantagem em testes de Destreza por 24 horas.'],
        ['C45H73NO15', 'Solanina (Erva-Moura)', 'Visão turva e delírio: 1d8 de dano de veneno e cegueira parcial.'],
        ['C12H16N2O', 'Bufotenina (Sapo Alquímico)', 'O alvo vê o mundo distorcido, com desvantagem em testes de Percepção por 1 hora.'],
        ['(ClCH2CH2)2S', 'Gás Mostarda Alquímico (Sulfeto de Dicloroetila)', 'Bolhas dolorosas na pele e nos olhos: 2d6 de dano de ácido e 2d6 de dano de veneno por rodada na área.']
      ]);

      G('✨', 'metais, sais, reações e misturas especiais', [
        ['H2O+Ag', 'Água Benta (Mistura Sacra)', 'Frasco de Água Benta do Livro do Jogador: causa 2d6 de dano radiante a demônios (ínferos) e mortos-vivos ao ser arremessada. Criaturas normais não sofrem dano.'],
        ['HgS', 'Cinábrio (Sulfeto de Mercúrio / Pedra Filosofal de Base)', 'Reveste armas: adiciona 1d4 de dano de veneno aos ataques corpo a corpo por 1 hora, mas o usuário faz um teste de Constituição (CD 10) ao manusear sem proteção para não contrair envenenamento por mercúrio.', 'Como catalisador de transmutação, converte ferro em cobre por 1 hora.'],
        ['CaCO3+H2SO4', 'Efervescência de Calcário', 'Libera uma cortina densa de dióxido de carbono e vapor de 3x3 m, concedendo cobertura total (muito obscurecida) por 2 rodadas.'],
        ['P4+O2', 'Fósforo Branco (Fogo das Bruxas)', 'Entra em combustão espontânea ao contato com o ar: 2d6 de dano de fogo imediato. Adere à pele ou armadura e causa 1d6 de dano de fogo no início de cada turno até ser submerso em água.'],
        ['AgNO3+NaCl', 'Precipitado de Prata (Cloreto de Prata)', 'Revela fluidos corporais, rastros de criaturas e sangue invisível na área.'],
        ['CuSO4+5H2O', 'Vitríolo Azul (Cristais de Cobre)', 'Cria um condutor elétrico no solo: o dano elétrico recebido na área aumenta em +1d6.'],
        ['FeSO4', 'Vitríolo Verde', 'Misturado com tanino, cria tinta indelével para tomos mágicos e pergaminhos duradouros.'],
        ['ZnSO4', 'Vitríolo Branco', 'Preserva cadáveres contra a decomposição natural por mais 10 dias (efeito similar à magia Preservar Cadáver).'],
        ['Bi', 'Bismuto Arco-Íris Alquímico', 'Reflete magias de feixe de luz (como Raio Ardente): +2 na CA contra ataques de magia luminosa.'],
        ['SiO2+Na2CO3', 'Vidro Líquido (Silicato de Sódio)', 'Cola alquímica instantânea: imobiliza os pés de um alvo no solo (salvaguarda de Força CD 12 para se soltar).'],
        ['CaC2', 'Carbureto de Cálcio Seco', 'Absorve toda a umidade de uma caixa ou recipiente, protegendo pergaminhos de danos por água.'],
        ['S+KNO3', 'Incenso de Enxofre Purificador', 'Afasta insetos, pragas e bestas pequenas de um acampamento por 8 horas.'],
        ['Al2O3', 'Rubi Sintético em Pó', 'Componente para magias de fogo: aumenta em +2 o dano de magias de fogo de 1º nível.'],
        ['SiO2', 'Quartzo Piezoelétrico', 'Quando atingido por dano de concussão, gera uma faísca elétrica que causa 1d4 de dano elétrico.'],
        ['CaSO4+2H2O', 'Gesso Cristalino Alquímico', 'Cria uma barreira rígida portátil para selar fechaduras ou pequenas frestas em portas.'],
        ['C', 'Carvão Ativado Purificador', 'Absorve venenos ingeridos: concede vantagem na salvaguarda de Constituição se tomado após ingestão de toxinas.'],
        ['Mg(OH)2', 'Leite de Magnésia Alquímico', 'Revestimento oral: concede imunidade a queimaduras por consumo de substâncias ácidas leves.'],
        ['I2', 'Cristais de Iodo Sublimado', 'Ao aquecer, gera um vapor roxo de 1,5 m que revela impressões digitais e toques recentes em objetos.'],
        ['TiCl4', 'Tetracloreto de Titânio', 'Reage com a umidade do ar, criando uma cortina de fumaça branca ultradensa num raio de 6 m.'],
        ['Fe3O4', 'Magnetita em Pó (Areia Magnética)', 'Espalhada no solo, reduz em 3 m o deslocamento de criaturas que usam armaduras pesadas de metal.'],
        ['NH4NO3+H2O', 'Reação Endotérmica Congelante', 'Esfria instantaneamente um recipiente ou líquido, causando 1d6 de dano de frio no contato.'],
        ['CaCl2', 'Cloreto de Cálcio Desidratante', 'Absorve a umidade do solo, transformando lama movediça em solo firme transitável em 1 minuto.'],
        ['K2Cr2O7', 'Dicromato de Potássio', 'Sal laranja oxidante: 1d8 de dano de ácido/fogo e mancha a pele do alvo por semanas.'],
        ['K3[Fe(CN)6]', 'Prussiato Vermelho', 'Usado em revelação fotográfica alquímica e para criar plantas de construções mágicas.'],
        ['Fe4[Fe(CN)6]3', 'Azul da Prússia', 'Pigmento e antídoto contra envenenamento por metais pesados (como Tálio e Césio).'],
        ['Cu(C2H3O2)2', 'Verde-de-Paris', 'Pigmento altamente tóxico: 2d6 de dano de veneno por contato prolongado com roupas tingidas.'],
        ['Pb3O4', 'Zarcão (Zarcão Vermelho)', 'Tinta anticorrosiva para escudos e armaduras de ferro: +1 na CA contra ataques de ácido.'],
        ['As2S3', 'Ouropimente (Sulfeto de Arsênico)', 'Pigmento dourado falso e tóxico: 1d8 de dano de veneno; engana testes de identificação de ouro superficiais (Enganação CD 13).'],
        ['As4S4', 'Realgar (Sulfeto Vermelho de Arsênico)', 'Usado em queima de fogos tóxicos: 1d6 de dano de fogo e 1d6 de dano de veneno em um cone de 3 m.'],
        ['Hg(NO3)2', 'Nitrato de Mercúrio', 'Usado no tratamento de couros e feltros: causa Loucura Alquímica (efeito da magia Confusão) se inalado diariamente.'],
        ['Sb2S3', 'Estibina (Sulfeto de Antimônio)', 'Cosmético antigo e tóxico para os olhos: 1d4 de dano de ácido e desvantagem em testes de Percepção visual.'],
        ['BiOCl', 'Oxicloreto de Bismuto (Pérola Alquímica)', 'Confere um brilho perolado a poções, aumentando em 50% o valor de venda de poções falsas.'],
        ['Na2S2O3', 'Tiossulfato de Sódio', 'Neutraliza instantaneamente o efeito do gás cloro e do bromo na pele e nos pulmões.'],
        ['KNO2', 'Nitrito de Potássio', 'Conservante alquímico para rações de viagem: impede que estraguem por até 1 ano.'],
        ['Ag2O', 'Óxido de Prata', 'Catalisador de reações purificadoras: elimina maldições fracas em itens metálicos de prata.'],
        ['AuCl3', 'Tricloreto de Ouro', 'Solução de ouro dissolvido para criar runas de encantamento em armas: +1 de dano radiante nos ataques.'],
        ['PtCl4', 'Tetracloreto de Platina', 'Catalisador supremo para poções de alto nível: reduz o tempo de fabricação de poções pela metade.'],
        ['UO2', 'Dióxido de Urânio (Pechblenda Alquímica)', 'Emite radiação verde fraca: 1d6 de dano necrótico por hora a quem carregar o minério sem revestimento de chumbo.'],
        ['Th(NO3)4', 'Nitrato de Tório', 'Emite luz brilhante contínua quando aquecido em camisas de gás: ilumina 9 m por 12 horas.'],
        ['RaCl2', 'Cloreto de Rádio Alquímico', 'Brilha no escuro para sempre: 1d4 de dano necrótico permanente à vida máxima por semana de exposição.'],
        ['C2H6OSi+H3BO3', 'Gel Polímero de Silicone e Ácido Bórico', 'Gel viscoso amortecedor: reduz em 2d6 o dano de queda se lançado no chão antes do impacto.'],
        ['Hg+Au', 'Amálgama de Mercúrio e Ouro', 'Liga metálica maleável e liquefeita, usada para selar frestas de portas contra a passagem de gases tóxicos.'],
        ['H2O+Au+Pt+C12H22O11', 'Elixir da Criação Supremum', 'A poção definitiva do transmutador: restaura 4d8 + 4 PV, remove todas as condições nocivas não mágicas e restaura 1 espaço de magia de 1º nível.']
      ]);

      // Fórmulas genéricas do compêndio (hidrocarbonetos CnH2n+2)
      addTest('💥', 'combustíveis, explosivos e pirotecnia', 'CnH2n+2+O2', 'CₙH₂ₙ₊₂ + O₂', 'Fogo Alquímico (Hidrocarbonetos Voláteis)',
        ['Frasco de Fogo Alquímico do Livro do Jogador: causa 1d4 de dano de fogo no início de cada turno do alvo. A criatura pode gastar uma ação para fazer um teste de Destreza (CD 10) e apagar as chamas.'],
        (st, k) => k.length === 3 && ['C', 'H', 'O'].every(e => k.includes(e)) && st.O === 2 && st.C >= 2 && st.H === 2 * st.C + 2);
      addTest('💥', 'combustíveis, explosivos e pirotecnia', 'NH4NO3+CnH2n+2', 'NH₄NO₃ + CₙH₂ₙ₊₂', 'ANFO (Nitrato de Amônio e Óleo Combustível)',
        ['Explosivo para mineração: causa 5d6 de dano de concussão num raio de 9 m contra rochas e terrenos.'],
        (st, k) => k.length === 4 && ['C', 'H', 'N', 'O'].every(e => k.includes(e)) && st.N % 2 === 0 && st.O === 3 * (st.N / 2) &&
          st.C >= 1 && st.H === 4 * (st.N / 2) + 2 * st.C + 2);

      RECIPES.unshift(...added);
    })();

    // Sistema de Pontuação de RPG
    let totalScore = 0;
    let totalCrafts = 0;
    let playerGold = 100;
    const discoveredRecipes = new Set();

    const RANKS = [
      { min: 0, title: 'Iniciado' },
      { min: 50, title: 'Aprendiz Alquimista' },
      { min: 150, title: 'Boticário de Campo' },
      { min: 300, title: 'Adepto do Fogo' },
      { min: 600, title: 'Mestre Transmutador' },
      { min: 1200, title: 'Grão-Filósofo' }
    ];

    function updateScoreUI() {
      document.getElementById('scoreDisplay').innerText = totalScore;
      document.getElementById('craftCountDisplay').innerText = totalCrafts;
      document.getElementById('goldDisplay').innerText = `${playerGold} PO`;

      // Atualiza o rank de acordo com os pontos
      let currentRank = 'Iniciado';
      for (const r of RANKS) {
        if (totalScore >= r.min) currentRank = r.title;
      }
      document.getElementById('rankDisplay').innerText = currentRank;
    }

    const crucibleState = {};
    let currentElement = null;
    let selectedQuantity = 1;

    const grid = document.getElementById('grid');
    const modalOverlay = document.getElementById('modalOverlay');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnCancelModal = document.getElementById('btnCancelModal');
    const btnMinus = document.getElementById('btnMinus');
    const btnPlus = document.getElementById('btnPlus');
    const qtyDisplay = document.getElementById('qtyDisplay');
    const btnConjure = document.getElementById('btnConjure');
    const crucibleList = document.getElementById('crucibleList');
    const formulaPreview = document.getElementById('formulaPreview');
    const btnClearCrucible = document.getElementById('btnClearCrucible');
    const btnSynthesize = document.getElementById('btnSynthesize');

    function renderTable() {
      grid.innerHTML = '';

      // Indicadores das séries especiais
      const lanLabel = document.createElement('div');
      lanLabel.className = 'series-label';
      lanLabel.style.gridColumn = '3';
      lanLabel.style.gridRow = '6';
      lanLabel.innerText = '57-71\nLa-Lu';
      grid.appendChild(lanLabel);

      const actLabel = document.createElement('div');
      actLabel.className = 'series-label';
      actLabel.style.gridColumn = '3';
      actLabel.style.gridRow = '7';
      actLabel.innerText = '89-103\nAc-Lr';
      grid.appendChild(actLabel);

      const spacer = document.createElement('div');
      spacer.className = 'row-spacer';
      grid.appendChild(spacer);

      // Renderiza todos os 118 elementos
      ELEMENTS.forEach(el => {
        const slot = document.createElement('div');
        slot.className = 'element-slot';
        slot.style.gridColumn = el.col;
        slot.style.gridRow = el.row;
        slot.id = `slot-${el.s}`;

        slot.innerHTML = `
          <span class="element-z">${el.z}</span>
          <span class="element-rune">${el.rune}</span>
          <span class="element-symbol">${el.s}</span>
        `;

        slot.addEventListener('click', () => openElementModal(el));
        grid.appendChild(slot);
      });
    }

    function openElementModal(el) {
      currentElement = el;
      selectedQuantity = 1;
      updateQtyUI();

      document.querySelectorAll('.element-slot').forEach(s => s.classList.remove('active-selected'));
      const activeSlot = document.getElementById(`slot-${el.s}`);
      if (activeSlot) activeSlot.classList.add('active-selected');

      document.getElementById('mZ').innerText = el.z;
      document.getElementById('mRune').innerText = el.rune;
      document.getElementById('mSymbol').innerText = el.s;
      document.getElementById('mCategory').innerText = el.cat || 'Elemento Arcano';
      document.getElementById('mTier').innerText = el.tier || 'Tier I';
      document.getElementById('mLatinName').innerText = el.latin;
      document.getElementById('mVulgarName').innerText = el.name;
      document.getElementById('mAfinity').innerText = el.af;
      document.getElementById('mPotion').innerText = el.po;
      document.getElementById('mForge').innerText = el.fo;
      document.getElementById('mRisk').innerText = el.rk;
      document.getElementById('mLore').innerText = el.lore;
      document.getElementById('mPrice').innerText = `Preço Médio nos Bazares: ${el.price || '20 PO'}`;

      modalOverlay.style.display = 'flex';
    }

    function closeModal() {
      modalOverlay.style.display = 'none';
    }

    function updateQtyUI() {
      qtyDisplay.innerText = selectedQuantity;
      btnConjure.innerText = `✨ Conjurar Essência (+${selectedQuantity})`;
    }

    btnMinus.addEventListener('click', () => {
      if (selectedQuantity > 1) {
        selectedQuantity--;
        updateQtyUI();
      }
    });

    btnPlus.addEventListener('click', () => {
      selectedQuantity++;
      updateQtyUI();
    });

    btnConjure.addEventListener('click', () => {
      if (!currentElement) return;

      const sym = currentElement.s;
      crucibleState[sym] = (crucibleState[sym] || 0) + selectedQuantity;

      renderCrucible();
      closeModal();
    });

    function renderCrucible() {
      const symbols = Object.keys(crucibleState);
      crucibleList.innerHTML = '';

      if (symbols.length === 0) {
        crucibleList.innerHTML = '<span class="empty-msg">Nenhum reagente adicionado. Clique num elemento da tábua periódica para conjurar essências.</span>';
        formulaPreview.innerText = 'Fórmula: Vazia';
        return;
      }

      let formulaStr = '';
      symbols.forEach(sym => {
        const qty = crucibleState[sym];
        const elData = ELEMENTS.find(e => e.s === sym);
        formulaStr += `${sym}${qty > 1 ? qty : ''} `;

        const chip = document.createElement('div');
        chip.className = 'crucible-item';
        chip.innerHTML = `
          <span>${elData ? elData.rune : '✧'} <strong>${qty}x</strong> ${elData ? elData.latin : sym}</span>
          <button class="btn-remove" title="Remover">&times;</button>
        `;

        chip.querySelector('.btn-remove').addEventListener('click', () => {
          delete crucibleState[sym];
          renderCrucible();
        });

        crucibleList.appendChild(chip);
      });

      formulaPreview.innerText = `Fórmula: ${formulaStr.trim()}`;

      // Pré-visualização: mostra se a mistura atual já forma algo, antes de arriscar a penalidade
      const pv = resolveReaction(crucibleState), tip = document.createElement('div');
      tip.style.cssText = 'margin-top:8px;font-size:.95rem;font-style:italic;opacity:.95;';
      if (pv.type === 'ok') { tip.style.color = '#8fd18f'; tip.textContent = `✅ Esta mistura forma: ${pv.name} (${pv.formula})`; }
      else if (pv.type === 'none') { tip.style.color = '#d8b86a'; tip.textContent = '➖ Nada acontece com esta mistura (sem penalidade).'; }
      else { tip.style.color = '#e08a6a'; tip.textContent = '⚠️ Esta proporção ainda não forma nada conhecido. Transmutar agora custa XP e PO.'; }
      crucibleList.appendChild(tip);
    }

    btnClearCrucible.addEventListener('click', () => {
      for (const k in crucibleState) delete crucibleState[k];
      renderCrucible();
    });

    btnSynthesize.addEventListener('click', () => {
      const keys = Object.keys(crucibleState).filter(k => crucibleState[k] > 0);
      if (keys.length === 0) {
        alert('O caldeirão está vazio! Conjure elementos na tabela primeiro.');
        return;
      }

      totalCrafts++;
      const _xp0 = totalScore, _gold0 = playerGold, _rec0 = discoveredRecipes.size;
      const res = resolveReaction(crucibleState);
      const reag = keys.map(k => `${crucibleState[k]} ${k}`).join(' + ');
      let msg;

      if (res.type === 'ok') {
        const first = !discoveredRecipes.has(res.id);
        discoveredRecipes.add(res.id);
        const mult = Math.min(res.k || 1, 3);
        const xp = (first ? res.xp[0] : res.xp[1]) * mult;
        const gold = res.gold * mult;
        totalScore += xp;
        playerGold += gold;
        msg = `🔮 SUCESSO NA TRANSMUTAÇÃO!\n\nItem Síntese: ${res.name}\nFórmula: ${res.formula}\n\n` +
          `⚗️ REAÇÃO:\n${res.eq}\n\n📜 ${res.desc}\n\n⚔️ EFEITOS EM JOGO:\n${rpgEffects(res, crucibleState).join('\n')}\n\n` +
          `✨ +${xp} XP${first ? ' [BÓNUS DE PRIMEIRA DESCOBERTA!]' : ''}${mult > 1 ? ` (x${mult} por proporção múltipla)` : ''}\n🪙 +${gold} PO`;
      } else {
        const px = Math.min(totalScore, res.px || 0);
        const pg = Math.min(playerGold, res.pg || 0);
        totalScore -= px;
        playerGold -= pg;
        msg = `${res.title}\n\nMistura: ${reag}\n\n${res.why}\n\n` +
          (res.type === 'fail' ? `📉 PENALIZAÇÃO: -${px} XP, -${pg} PO` : 'Sem penalidade.');
      }

      updateScoreUI();
      if (window.RPG && typeof window.RPG.onSynthesis === 'function') {
        window.RPG.onSynthesis({
          tipo: res.type,
          item: res.name || res.title || '',
          formula: res.formula || '',
          reagentes: reag,
          deltaXp: totalScore - _xp0,
          deltaOuro: playerGold - _gold0,
          primeira: discoveredRecipes.size > _rec0
        });
      }
      // Efeito de acerto/erro antes do aviso com o resultado
      if (window.FX) {
        window.FX.play({
          tipo: res.type,
          dxp: totalScore - _xp0,
          dgold: playerGold - _gold0,
          primeira: discoveredRecipes.size > _rec0,
          rankAntes: window.RPG.rankOf(_xp0),
          rankDepois: window.RPG.rankOf(totalScore)
        });
        btnSynthesize.disabled = true;
        setTimeout(() => { btnSynthesize.disabled = false; alert(msg); }, window.FX.delay);
      } else {
        alert(msg);
      }

      // Esvazia o caldeirão após a tentativa
      for (const k in crucibleState) delete crucibleState[k];
      renderCrucible();
    });

    btnCloseModal.addEventListener('click', closeModal);
    btnCancelModal.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // ===== Efeitos de acerto (comemoração) e de erro (tremor e alerta) =====
    window.FX = (function () {
      const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      let somLigado = true;
      try { somLigado = localStorage.getItem('fxSom') !== 'off'; } catch (e) {}
      let ac = null;

      function nota(freq, inicio, dur, tipo, vol) {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = tipo; o.frequency.setValueAtTime(freq, ac.currentTime + inicio);
        g.gain.setValueAtTime(0.0001, ac.currentTime + inicio);
        g.gain.exponentialRampToValueAtTime(vol, ac.currentTime + inicio + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + inicio + dur);
        o.connect(g); g.connect(ac.destination);
        o.start(ac.currentTime + inicio); o.stop(ac.currentTime + inicio + dur + 0.05);
      }
      function som(tipo, grande) {
        if (!somLigado) return;
        try {
          ac = ac || new (window.AudioContext || window.webkitAudioContext)();
          if (ac.state === 'suspended') ac.resume();
          if (tipo === 'ok') {
            [523, 659, 784, 1046].concat(grande ? [1318] : []).forEach((f, i) => nota(f, i * 0.09, 0.28, 'triangle', 0.16));
          } else if (tipo === 'fail') {
            nota(196, 0, 0.35, 'sawtooth', 0.12); nota(147, 0.18, 0.5, 'sawtooth', 0.12); nota(98, 0.4, 0.6, 'sawtooth', 0.1);
          } else {
            nota(330, 0, 0.25, 'sine', 0.1);
          }
        } catch (e) {}
      }
      function vibrar(padrao) { try { if (navigator.vibrate) navigator.vibrate(padrao); } catch (e) {} }

      const camada = () => {
        let l = document.getElementById('fxLayer');
        if (!l) { l = document.createElement('div'); l.id = 'fxLayer'; l.className = 'fx-layer'; document.body.appendChild(l); }
        return l;
      };
      const rand = (a, b) => a + Math.random() * (b - a);

      function particulas(x, y, glifos, n, cor, raioMin, raioMax, queda) {
        if (reduce) return;
        const l = camada();
        for (let i = 0; i < n; i++) {
          const el = document.createElement('span');
          el.className = 'fx-spark'; el.textContent = glifos[i % glifos.length];
          if (cor) el.style.color = cor[i % cor.length];
          l.appendChild(el);
          const ang = rand(0, Math.PI * 2), r = rand(raioMin, raioMax);
          const dx = Math.cos(ang) * r, dy = Math.sin(ang) * r + queda, giro = rand(-240, 240);
          if (!el.animate) { el.remove(); continue; }
          const a = el.animate([
            { transform: `translate(${x}px, ${y}px) scale(0.3) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${x + dx}px, ${y + dy}px) scale(${rand(0.9, 1.5)}) rotate(${giro}deg)`, opacity: 0 }
          ], { duration: rand(800, 1400), easing: 'cubic-bezier(.15,.8,.3,1)', fill: 'forwards' });
          a.onfinish = () => el.remove();
        }
      }
      function flutuar(texto, x, y, classe, atraso) {
        const l = camada(), el = document.createElement('div');
        el.className = 'fx-float ' + classe; el.textContent = texto; l.appendChild(el);
        const w = el.offsetWidth || 80;
        if (!el.animate || reduce) { el.style.transform = `translate(${x - w / 2}px, ${y - 60}px)`; setTimeout(() => el.remove(), 1400); return; }
        const a = el.animate([
          { transform: `translate(${x - w / 2}px, ${y}px)`, opacity: 0 },
          { transform: `translate(${x - w / 2}px, ${y - 40}px)`, opacity: 1, offset: 0.2 },
          { transform: `translate(${x - w / 2}px, ${y - 110}px)`, opacity: 0 }
        ], { duration: 1500, delay: atraso || 0, easing: 'ease-out', fill: 'both' });
        a.onfinish = () => el.remove();
      }
      function faixa(texto, ms) {
        const l = camada(), el = document.createElement('div');
        el.className = 'fx-banner'; el.textContent = texto; l.appendChild(el);
        if (el.animate && !reduce) {
          el.animate([
            { transform: 'translate(-50%, -50%) scale(0.6)', opacity: 0 },
            { transform: 'translate(-50%, -50%) scale(1.06)', opacity: 1, offset: 0.15 },
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, offset: 0.8 },
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
          ], { duration: ms || 1800, fill: 'forwards' });
        }
        setTimeout(() => el.remove(), ms || 1800);
      }
      function classe(el, nome, ms) {
        if (!el) return;
        el.classList.remove(nome); void el.offsetWidth; el.classList.add(nome);
        setTimeout(() => el.classList.remove(nome), ms);
      }
      function flash() {
        const l = camada(), el = document.createElement('div');
        el.className = 'fx-flash'; l.appendChild(el);
        if (el.animate && !reduce) el.animate([{ opacity: 0 }, { opacity: 1, offset: 0.25 }, { opacity: 0 }], { duration: 650, fill: 'forwards' });
        setTimeout(() => el.remove(), 700);
      }

      function tocar(info) {
        const botao = document.getElementById('btnSynthesize');
        const r = botao ? botao.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
        const x = r.left + r.width / 2, y = r.top + r.height / 2;
        const painel = document.querySelector('.crucible-panel');

        if (info.tipo === 'ok') {
          const subiu = info.rankAntes !== info.rankDepois;
          const grande = info.primeira || subiu;
          som('ok', grande);
          vibrar(grande ? [70, 40, 70, 40, 160] : [60, 40, 90]);
          classe(painel, 'fx-glow', 1000);
          particulas(x, y, ['✦', '✧', '✨', '⭐', '⚗️'], grande ? 46 : 26, ['#dfa837', '#ffd700', '#f1dfbb', '#ffb347'], 90, grande ? 340 : 240, 90);
          if (info.dxp > 0) flutuar('+' + info.dxp + ' XP', x, y - 20, 'ok', 0);
          if (info.dgold > 0) flutuar('+' + info.dgold + ' PO', x, y + 10, 'ok', 150);
          if (info.primeira) faixa('✨ Primeira descoberta!', 1800);
          if (subiu) setTimeout(() => faixa('📜 Nova mestria: ' + info.rankDepois, 1800), info.primeira ? 900 : 0);
        } else if (info.tipo === 'fail') {
          som('fail');
          vibrar([220, 90, 220]);
          flash();
          if (!reduce) {
            classe(painel, 'fx-shake', 550);
            classe(document.querySelector('.table-container'), 'fx-shake', 550);
            classe(document.querySelector('.rpg-status-bar'), 'fx-shake', 550);
          }
          particulas(x, y, ['💥', '💨', '✖'], 16, ['#ff6a4d', '#c0392b', '#e9d8b4'], 60, 200, 60);
          const perdas = [];
          if (info.dxp < 0) perdas.push('−' + Math.abs(info.dxp) + ' XP');
          if (info.dgold < 0) perdas.push('−' + Math.abs(info.dgold) + ' PO');
          flutuar(perdas.length ? perdas.join('   ') : 'A síntese falhou', x, y - 20, 'fail', 0);
        } else {
          som('none');
          vibrar(40);
          particulas(x, y, ['💨', '·'], 8, null, 30, 120, -40);
          flutuar('Sem reação', x, y - 20, 'none', 0);
        }
      }

      // botão de som
      document.addEventListener('DOMContentLoaded', function () { atualizarBotao(); });
      function atualizarBotao() {
        const b = document.getElementById('fxSoundBtn');
        if (!b) return;
        b.textContent = somLigado ? '🔊 Som' : '🔇 Mudo';
        b.setAttribute('aria-pressed', String(somLigado));
      }
      const botaoSom = document.getElementById('fxSoundBtn');
      if (botaoSom) botaoSom.addEventListener('click', () => {
        somLigado = !somLigado;
        try { localStorage.setItem('fxSom', somLigado ? 'on' : 'off'); } catch (e) {}
        atualizarBotao();
        if (somLigado) som('ok', false);
      });
      atualizarBotao();

      return { play: tocar, delay: 1100 };
    })();

    // Ponte entre o jogo e o login/banco de dados (usada pelo script do Firebase)
    window.RPG = {
      getState() {
        return { xp: totalScore, ouro: playerGold, sinteses: totalCrafts, receitas: Array.from(discoveredRecipes) };
      },
      setState(s) {
        totalScore = Number(s.xp) || 0;
        playerGold = Number.isFinite(Number(s.ouro)) ? Number(s.ouro) : 100;
        totalCrafts = Number(s.sinteses) || 0;
        discoveredRecipes.clear();
        (Array.isArray(s.receitas) ? s.receitas : []).forEach(r => discoveredRecipes.add(r));
        updateScoreUI();
      },
      rankOf(xp) {
        let title = RANKS[0].title;
        for (const r of RANKS) if (xp >= r.min) title = r.title;
        return title;
      }
    };

    renderTable();
    updateScoreUI();
