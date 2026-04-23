export interface PostSlide {
  slide: number;
  content: string;
  design: string;
}

export interface Post {
  id: string;
  type: "carrossel" | "estatico";
  title: string;
  objective: string;
  slides?: PostSlide[];
  staticContent?: { text: string; design: string };
  caption: string;
  hashtags: string;
  stories: {
    screens: number;
    content: string[];
    interaction: string;
  };
}

export const planData = {
  pillars: [
    { title: "Presença e Autoridade (Estratégia)", desc: "Construção de percepção de valor. Mostrar domínio técnico do seu nicho de forma mastigada." },
    { title: "Desmistificando o Digital (Mitos e Erros)", desc: "Quebrar objeções do cliente e corrigir erros comuns da audiência, posicionando você como a solução." },
    { title: "Bastidores e Rotina (Conexão)", desc: "Mostrar que existe um humano estruturado por trás do negócio. Gera empatia e credibilidade." },
    { title: "Conversão (Serviços/Vendas)", desc: "Oferta clara e direta. Dizer o que você vende, para quem é, e como contratar." }
  ],
  tone: "Direto, altamente profissional, seguro e sem jargões desnecessários. O autor não pede atenção, ele a comanda através da clareza e utilidade.",
  visualStyle: "Minimalista Corporativo. Foco total em clareza de leitura e respiro. Layouts 'bold' utilizando tipografias de alto contraste. Sem elementos decorativos desnecessários.",
  frequency: "4x na semana no Feed (Terça, Quarta, Quinta, Domingo). Stories todos os dias (mínimo de 3 intervenções por dia: Manhã, Tarde, Noite)."
};

export const postsData: Post[] = [
  {
    id: "post_1",
    type: "carrossel",
    title: "5 Erros Práticos que Destroem sua Autoridade Digital",
    objective: "Autoridade + Conscientização de Problema (Topo/Meio de Funil)",
    slides: [
      {
        slide: 1,
        content: "TIÍTULO: 5 Erros que Destroem sua Autoridade no Digital (e como consertar hoje mesmo).",
        design: "[Capa] Fundo Escuro (#1A1A1A). Tipografia Título: Inter (Bold, Branca). Destaque para 'Destroem' na cor de Acento (Verde #10B981). Alinhamento 100% à esquerda. Ícone minimalista de alerta no canto superior direito."
      },
      {
        slide: 2,
        content: "ERRO 1: Falar para todo mundo. Quando você tenta agradar todo mundo com conteúdo genérico, quem tem o dinheiro para pagar pelo seu serviço não se sente exclusivo.",
        design: "Fundo Claro (#FAFAFA). 'ERRO 1' em verde pequeno e em caixa alta. Título em Preto, peso Bold. Texto corrido explicativo em cinza escuro (Regular). Linha horizontal fininha (1px) separando o título do texto."
      },
      {
        slide: 3,
        content: "ERRO 2: O \"Perfil Vitrine\". Usar o Instagram apenas como um panfleto digital de preços, sem educar seu cliente antes sobre por que ele precisa de você.",
        design: "Mesmo layout do slide 2 para manter consistência absoluta (Copiar e colar no Canva, trocando apenas o texto)."
      },
      {
        slide: 4,
        content: "ERRO 3: Inconsistência Visual. Usar fontes e cores diferentes a cada post. Isso grita 'amadorismo' para o subconsciente de quem está decidindo comprar de você.",
        design: "Mesmo layout padrão. Destaque em negrito nas palavras 'grita amadorismo'."
      },
      {
        slide: 5,
        content: "ERRO 4: Ignorar a rotina (Stories).\nERRO 5: Nunca fazer CTA (Chamada Para Ação).",
        design: "Dividir o slide horizontalmente ao meio usando uma linha bem sutil. Parte de cima Erro 4, parte de baixo Erro 5."
      },
      {
        slide: 6,
        content: "Qual desses 5 erros você identificou e vai corrigir hoje mesmo? Conta aqui nos comentários.",
        design: "[CTA] Inverter as cores. Fundo Verde (#10B981), texto em Preto/Chumbo. Layout centralizado para criar variação rítmica visual e chamar atenção para o fim do carrossel."
      }
    ],
    caption: "Seu cliente não tem tempo a perder. Quando ele entra no seu perfil, ele decide em menos de 3 segundos se você é uma autoridade ou apenas mais um panfleto.\n\nE a maioria dos profissionais liberais comete esses erros básicos que afastam os melhores contratos.\n\nQual desses 5 pontos você precisa começar a ajustar agora? Deixa aqui nos comentários 👇",
    hashtags: "#autoridadedigital #posicionamentodemarca #marketingparaempreendedores #instagramprofissional #marketingpessoal #presencadigital #profissionaisliberais #estrategiademarketing #dicasdeinstagram #vendasnainternet",
    stories: {
      screens: 3,
      content: [
        "Tela 1 (Vídeo do especialista em PB ou neutro com texto por cima): 'Você já sentiu que posta, posta e não atrai clientes qualificados?'",
        "Tela 2 (Compartilhamento da capa do post do Feed): 'Acabei de destrinchar os 5 erros clássicos que estão travando a sua percepção de autoridade. Clica para ler.'",
        "Tela 3 (Fundo sólido com Enquete): 'Na sua visão, qual fator passa mais amadorismo em um perfil profissional? ( ) Foto de perfil ruim ( ) Feed bagunçado'"
      ],
      interaction: "Enquete direta na última tela para mapear a dor da audiência."
    }
  },
  {
    id: "post_2",
    type: "carrossel",
    title: "A Anatomia do Perfil que Atrai e Retém Clientes",
    objective: "Educativo de Base (Iniciantes/Reestruturação) + Salvamento",
    slides: [
      {
        slide: 1,
        content: "TÍTULO: Anatomia de um Perfil Profissional que VENDE. (Checklist completo)",
        design: "[Capa] Fundo Claro. Foto corporativa cortada sutilmente aparecendo no canto inferior direito. O texto 'VENDE' deve vir dentro de um box verde (Background Título no Canva)."
      },
      {
        slide: 2,
        content: "1. FOTO. Clara, com fundo neutro e alta qualidade. Sorriso leve ou expressão de firmeza. Não: de óculos escuros no carro.",
        design: "Layout em formato de mapa mental ou pontuais. Elemento Canva: Ícone de Perfil e um check verde do lado."
      },
      {
        slide: 3,
        content: "2. BIO. Deve responder rapidamente: Quem você é, para quem você resolve o problema, e qual é esse problema.\nEx: Ajudando engenheiros a escalarem vendas.",
        design: "Criar um falso 'balão de fala' ou box imitando a interface (falsa bio) para exemplificar visualmente."
      },
      {
        slide: 4,
        content: "3. DESTAQUES. O básico que funciona: 'Comece Aqui', 'Serviços/Mentoria', 'Depoimentos' (A Prova) e 'Bastidores'.",
        design: "Usar 4 círculos pequenos centralizados para simular os ícones de destaques. Abaixo de cada círculo, pequenos textos com as explicações."
      },
      {
        slide: 5,
        content: "Salve este post para usar de checklist amanhã. E se quiser que eu avalie sua bio, me mande um direct com 'ANÁLISE'.",
        design: "[Salvamento/CTA]. Fundo Escuro. Ícone de Bandeira do Instagram (Salvar) bem gigante e translúcido (opacidade 10%) no fundo da tela."
      }
    ],
    caption: "Organizar a casa é o passo zero. Não adianta investir em anúncios, criar rios de conteúdo genial se o pilar básico da sua conversão (seu perfil) está confuso e amador.\n\nAplique esse checklist e passe mais profissionalismo hoje mesmo. \n\n📥 Quer ganhar tempo? Salve esse post nas suas coleções e revise ponto por ponto assim que tiver 10 minutos livres.",
    hashtags: "#perfilprofissional #dicasdeinstagram #vendedoronline #empreendedorismo #negociosdigitais #marketingparaadvogados #marketingparamedicos #bioestrategica #vendasb2b #marketingpessoal",
    stories: {
      screens: 2,
      content: [
        "Tela 1 (Foto de café ou mesa de trabalho com Caixinha de Perguntas): 'Aproveitando o post de hoje. Deixe sua @ aqui na caixinha que eu vou olhar a sua bio e dizer 1 coisa para você melhorar:'",
        "Tela 2 (Compartilhar o post com GIF de seta): 'O checklist completo para montar seu perfil tá aqui no feed. Usa sem moderação.'"
      ],
      interaction: "Caixinha de Perguntas (Consultoria expressa gerando reciprocidade)."
    }
  },
  {
    id: "post_3",
    type: "carrossel",
    title: "O que postar nos dias que a criatividade zerou",
    objective: "Retenção + Utilidade (Muito alto potencial de compartilhamento e salvamento)",
    slides: [
      {
        slide: 1,
        content: "TÍTULO: Fiquei sem ideias. O que publicar hoje?",
        design: "[Capa]. Minimalista ao extremo. Fundo branco puro. Letras pretas pesadas (Impact ou Inter Black) centralizadas na tela de ponta a ponta. Parece um desabafo."
      },
      {
        slide: 2,
        content: "Não dependa de inspiração. Dependa de Método. Aqui vão 3 opções rápidas de postagens que você faz em 15 minutos e geram extrema autoridade.",
        design: "Fundo cinza claro. Texto justificado à esquerda em duas colunas assimétricas."
      },
      {
        slide: 3,
        content: "1. A Dúvida de Ouro\nVá no seu WhatsApp, veja a última pergunta que um cliente te fez, e responda essa pergunta no feed. A dúvida dele é a dúvida de outros mil clientes em potencial.",
        design: "Estilo bloco enumerado. Número '1' gigante em verde no canto superior esquerdo para compor a hierarquia, texto logo abaixo."
      },
      {
        slide: 4,
        content: "2. O Erro Combatido\nFale de um erro comum que as pessoas da sua área cometem e que você abomina. Mostrar o que você acha que é ERRADO, atrai as pessoas certas que concordam com você.",
        design: "Padrão de bloco enumerado (Copiar slide anterior), trocando o número para '2'."
      },
      {
        slide: 5,
        content: "3. Uma Ferramenta de Rotina\nQual software ou método facilita seu trabalho? Um post simples recomendando uma ferramenta gratuita mostra que você domina processos.",
        design: "Padrão de bloco enumerado (Copiar slide anterior), trocando o número para '3'."
      },
      {
        slide: 6,
        content: "Pare de bater cabeça com o botão vazio de Post. Salve esse carrossel para nunca mais travar o seu conteúdo.",
        design: "[CTA]. Fundo completamente Escuro. Texto curto branco no centro. Call to Action direta visualizando utilidade futura."
      }
    ],
    caption: "A maioria das pessoas falham na consistência porque acham que todo post precisa ser um artigo acadêmico ou revolucionar a roda. Não precisa.\n\nNa verdade as ideias mais mundanas e práticas (como aquelas dúvidas idiotas que todos os seus clientes têm no direct) são os posts que mais engajam e vendem, porque é exatamente onde a sua audiência paralisou.\n\nUse essas 3 estruturas para salvar o dia em que o branco der na mente. Qual você usará na próxima vez? 1, 2 ou 3?",
    hashtags: "#criatividade #postagens #conteudodevalor #marketingestrategico #marketingdeconteudo #redessociaisparaempresas #dicascriativas #consistenciadigital #autoridade #empreendedorismofeminino",
    stories: {
      screens: 2,
      content: [
        "Tela 1 (Aparecendo e falando, ou foto sua nos bastidores): 'Vocês acham que eu sou criativo todo dia? Zero. Eu tenho métodos. Confere o novo post no feed.'",
        "Tela 2 (Enquete e Reação rápida): 'Sinceramente, de 1 a 10, o quanto a falta de ideias paralisa a produção do seu conteúdo?' (Slider/Termômetro)."
      ],
      interaction: "Slider de intensidade para as pessoas votarem o quão difícil é criar."
    }
  },
  {
    id: "post_4",
    type: "estatico",
    title: "Citação Forte",
    objective: "Impacto no Feed. Leitura absurdamente rápida, quebra de ritmo e gera compartilhamento via Stories (Frase Relacionável).",
    staticContent: {
      text: "\"Sua falta de consistência digital está dizendo silenciosamente ao seu cliente que você também não é consistente no seu serviço.\"",
      design: "Layout Estático Tipo 'Tweet/Citação'. Fundo Escuro sólido. Fonte: Playfair Display ou Instrument Serif (algo elegante, serifado, itálico leve). Texto centralizado com bastante respiro superior e inferior. Nome embaixo em caixa alta (sem serifa, ex: Montserrat). Assinatura visual limpa."
    },
    caption: "É duro de ler, mas é verdade.\n\nSeu cliente só te enxerga pelo que você mostra. Se seu feed está às traças, se você some por semanas e depois aparece tentando empurrar uma oferta, a imagem que fica é de instabilidade.\n\nE ninguém paga preço de serviço 'premium' para quem transmite instabilidade.\n\nVocê já parou para pensar na mensagem subconsciente que o SEU silêncio está passando hoje?\n\nAjuste sua mira. Esteja presente.",
    hashtags: "#mindsetempreendedor #estrategiadenegocio #consistencia #frasemotivacional #vendasconsultivas #posicionamentopremium #marketingdigital #empreender #gestaodetempo #liderança",
    stories: {
      screens: 2,
      content: [
        "Tela 1 (Compartilhamento do post com o texto ocultado sutilmente): 'Esse é um tapa na cara pra muito profissional acomodado. Clique e leia a legenda.'",
        "Tela 2 (Texto na tela com cor de fundo relacionada ao feed): 'Consistência não é fazer 100%. É prometer algo e estar lá nos 20% do que importa.' (CTA: Enviar por DM se concordar)."
      ],
      interaction: "Clique para direcionar tráfego para a discussão longa da legenda."
    }
  },
  {
    id: "post_5",
    type: "estatico",
    title: "Checklist de Bolso",
    objective: "Micro-vitória utilitária para o público. Salvamento imediato. Super prático.",
    staticContent: {
      text: "ROTINA DO EMPREENDEDOR OCUPADO (15 Min / Dia no Insta):\n[ ] Responder últimos directs\n[ ] Subir 3 stories de bastidores do serviço\n[ ] Comentar nas publicações de 5 conexões/clientes",
      design: "Fundo Claro. Desenhar um estilo bloco de notas estruturado. Elementos: Caixas de seleção (quadradinhos vazios) com texto ao lado. Paleta com destaque (verde) apenas nas checkmarks ou nos títulos '15 MIN'. Extremamente geométrico, fácil leitura em telas pequenas."
    },
    caption: "Não tem 2 horas por dia para 'viver no instagram'? Sem problemas. Use blocos de 15 minutos.\n\nA regra do jogo profissional no digital moderno não é 'volume', é 'intenção e presença'. Focar apenas em nutrir os canais certos constrói montanhas de resultados ao longo dos meses.\n\n1. Atendimento de excelência em directs.\n2. Humanização e registro nos stories.\n3. Networking real se engajando com as postagens de parceiros, clientes e prospectos.\n\nMais que isso é extra. O básico faz chover.\n\nJá cumpriu algum desses três hoje?",
    hashtags: "#produtividade #gestaodetempo #empreendedorismo #pequenasempresas #marketingparaempreendedores #dicasparaempresas #planejamentodiario #rotina #rotinamatinal #crescimentodigital",
    stories: {
      screens: 2,
      content: [
        "Tela 1 (Foto de um café ou caderno seu + caixinha Enquete): 'Quem aqui perde muito tempo só rodando o feed ao invés de produzir? (Tamo junto | Eu controlo)'",
        "Tela 2 (Compartilhamento direto): 'Deixei no feed o passo a passo que eu mesma recomendo para meus clientes otimizarem o uso do insta. Post utilidade de ouro!'"
      ],
      interaction: "Enquete simples sobre perda de tempo na rede."
    }
  },
  {
    id: "post_6",
    type: "estatico",
    title: "Posicionamento Forte & Pitch de Serviço",
    objective: "Venda direta e criação de divisão mercadológica (Eles vs Nós). Fundo de funil.",
    staticContent: {
      text: "NÃO ADIANTA: Não basta entregar o melhor trabalho off-line se na primeira pesquisa que o cliente faz o seu on-line parece estagnado no ano passado.",
      design: "Uso de Fotografia real combinada. Fundo: Sua foto trabalhando ou ambiente corporativo sério, mas com overlay escuro bem denso (70% Preto). Texto grande impactante que quebre linhas (texto em Branco, com palavras chave em Verde Acento). Assinatura sutil abaixo recomendando seu serviço."
    },
    caption: "Como você se sente quando vai procurar um restaurante chique, o Google aponta para um perfil que não atualiza fotos desde 2018 e parece abandonado? Você confia ou escolhe o próximo da lista?\n\nO cliente do seu escritório de advocacia, consultório ou consultoria pensa EXATAMENTE igual. Hoje, a vitrine digital é o seu currículo. A embalagem importa tanto quanto o presente.\n\nEu ajudo profissionais sérios a não perderem mais negócios por falha na embalagem digital. Vamos transformar seu perfil num ímã?\n\nLINK NA BIO e vamos conversar sobre o projeto [Nome do Projeto/Mentoria].",
    hashtags: "#consultoriademarketing #venderonline #estrategiaempresarial #agenciademarketing #socialmediaprofissional #posicionamentodemarca #marketingpremium #altoconhecimento #marcaautoral #servicospremium",
    stories: {
      screens: 3,
      content: [
        "Tela 1 (Tela preta texto branco, reflexivo): 'Quantas negociações você acha que já perdeu por causa do abandono da sua principal vitrine online?'",
        "Tela 2 (Compartilha o post do feed): 'No digital, a primeira impressão não é a que fica. É a ÚNICA que existe. Seu concorrente, mesmo sendo pior que você na prática, leva o cliente se tiver uma vitrine melhor.'",
        "Tela 3 (Box de Dúvida direct / CTA): 'Tenho XX vagas abertas para o serviço de Setup Profissional esse mês. Se você cansou de parecer amador, digite EU QUERO aqui no box que eu entro em contato e avalio seu negócio.'"
      ],
      interaction: "CTA forte com caixinha de perguntas servindo como captura de captação de Leads diretos (M-Q-L)."
    }
  }
];

export const productionStandardData = {
  model: {
    description: "Modelo operacional escalável e ágil para clientes que precisam de entrega consistente sem se afogarem em reuniões, adotando o conceito de esteira rápida.",
    steps: [
      {
        step: 1,
        title: "Briefing Assíncrono (Checkout & Direção)",
        description: "Enviamos o formulário mensal no Notion. O cliente insere 2 a 3 dores recentes, ou nós definimos a pauta e ele apenas aprova em 5 minutos. Não fazemos calls longas."
      },
      {
        step: 2,
        title: "Copy & Estrutura (Dia 1 a 2)",
        description: "Transformar as ideias vagas em legendas completas e roteiros de slides aprovados na metodologia AIDA (Atenção, Interesse, Desejo, Ação)."
      },
      {
        step: 3,
        title: "Design Modular no Canva (Dia 3 a 5)",
        description: "Uso estrito de templates mestre (Master Design System) baseados na identidade do cliente para garantir uniformidade. Reduz o tempo de 8 horas para 3 horas em lotes de design."
      },
      {
        step: 4,
        title: "Aprovação em Lote (Dia 6)",
        description: "O cliente recebe todo o material no Trello, aprova tudo de uma vez, sem revisões picadas peça-a-peça."
      }
    ],
    timescale: "Entregas sugeridas quinzenais (em lotes de 6 a 8 posts = 12-15 posts por mês, mantendo cadência perfeita). Esse processo elimina a pressa de 'temos que postar tudo amanhã e não tem material'."
  }
};

export const portfolioData = {
  title: "Apresentação: Performance. Minimalismo. Escala.",
  philosophy: "Sou um parceiro estratégico de crescimento operacional, focado em Profissionais Liberais que não têm tempo a perder. Minhas linhas não são para enfeite, minhas tipografias carregam sentido financeiro. Meu design converte porque respeita a atenção do usuário e não brinca com carnaval visual.",
  deliverables: [
    "Design Modular escalonável no Canva",
    "Desenvolvimento editorial rápido",
    "Produção voltada à conversão e captura de atenção"
  ],
  differentials: "• Agilidade Assíncrona: Chega de reuniões de alinhamentos inúteis.\n• Design com Psicologia: Não escolho a fonte por ser bonita, mas por possuir a legibilidade necessária no device móvel que captura o seu lead, às pressas no trânsito.\n• Consistência Inabalável: Minha esteira protege seu conteúdo contra o próprio cliente (você) no quesito paralisação mental.",
  simulatedCase: "O Caso 'Dra. A'\n→ Problema: Agenda cheia, zero presença. O perfil consistia de fotos pessoais fora de contexto e frases clichês. Concorrência inferior levando clientes high-ticket.\n→ Minha Entrega: 1 Lote estrito de Carrosséis baseados na Dor real (Erro Médico dos concorrentes, Metodologias Exclusivas). Novo layout sóbrio sem rococó em Canva para facilitar postagem da secretária. \n→ Resultado em 21 dias: Recuperação da autoridade visual compatível com o preço do serviço prestado offline."
};
