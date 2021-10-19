import euCeiImg from '../assets/projectsPics/euCeiImg.png';

import airCnC01 from '../assets/projectsPics/airCnC01.jpeg';
import airCnC02 from '../assets/projectsPics/airCnC02.jpg';
import airCnC03 from '../assets/projectsPics/airCnC03.jpg';

import ecoleta from '../assets/projectsPics/ecoleta.jpeg';
import ecoleta02 from '../assets/projectsPics/ecoleta02.png';
import ecoleta03 from '../assets/projectsPics/ecoleta03.jpeg';
import ecoleta04 from '../assets/projectsPics/ecoleta04.jpeg';

import mapaDev from '../assets/projectsPics/mapaDev.png';

import beTheHero01 from '../assets/projectsPics/beTheHero01.jpg';
import beTheHero02 from '../assets/projectsPics/beTheHero02.png';
import beTheHero03 from '../assets/projectsPics/beTheHero03.jpg';
import beTheHero04 from '../assets/projectsPics/beTheHero04.jpg';
import beTheHero05 from '../assets/projectsPics/beTheHero05.jpg';
import beTheHero06 from '../assets/projectsPics/beTheHero06.png';

import goBarber01 from '../assets/projectsPics/goBarber01.gif';
import goBarber02 from '../assets/projectsPics/goBarber02.gif';
import goBarber03 from '../assets/projectsPics/goBarber03.png';
import goBarber04 from '../assets/projectsPics/goBarber04.jpg';

import clinicaCuidar01 from '../assets/projectsPics/clinicaCuidar01.png';
import clinicaCuidar02 from '../assets/projectsPics/clinicaCuidar.gif';

import happy01 from '../assets/projectsPics/happy01.png';
import happy02 from '../assets/projectsPics/happy02.png';
import happy03 from '../assets/projectsPics/happy03.png';
import happy04 from '../assets/projectsPics/happy04.png';
import happy05 from '../assets/projectsPics/happy05png.png';

import elixr01 from '../assets/projectsPics/elixr01.gif';
import elixr02 from '../assets/projectsPics/elixr02.png';

import podcastr02 from '../assets/projectsPics/podcastr02.gif';
import podcastr01 from '../assets/projectsPics/podcastr01.png';

import goNutri02 from '../assets/projectsPics/goNutri02.gif';
import goNutri01 from '../assets/projectsPics/goNutri01.png';

import kidzies02 from '../assets/projectsPics/kidzies02.gif';
import kidzies01 from '../assets/projectsPics/kidzies01.png';

const projectsList = [
  {
    id: 'project_01',
    title: 'euCEI',
    subtitle: 'Sistema de gestão de eventos para universidade.',
    description: `
      Esse projeto foi minha porta de entrada para o mundo da programação web e
      mobile. Desenvolvido juntamente com mais dois amigos, o euCEI foi vendido
      para o Centro de Empreendedorismo e Inovação na universidade Wyden Área 1
      Salvador.
    `,
    descriptionTwo: `
      Seu principal objetivo era, atravéz do site, facilitar o cadatro de eventos
      pelos coordenadores da universidade, onde também, eles iriam poder gerênciar
      os inscritos, atualizar informações, e até mesmo deletar o seu evento 
      cadastrado. Pela web ainda, o coordenador, ao fim do evento, poderia facilmente
      gerar a carga horária complementar dos alunos inscritos.

      Por outro lado, no aplicativo, os alunos cadastrados, teriam a possibilidade
      e facilidade de visualizar, em um so lugar, todos os eventos que estão acontecendo
      no campus, com um filtro de interesse. Caso queira, o aluno poderia se inscrever
      com apenas um clique.
    `,
    imgArray: [euCeiImg],
    gitHubLink: undefined,
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_02',
    title: 'airCnC',
    subtitle: `Coffee and Code: "clone" do airBnB.`,
    description: `
      Meu primeiro projeto web e mobile. Tinha a premissa de funcionamento baseada
      no AirBnB, porém, voltado ao mundo dev.  
    `,
    descriptionTwo: `
      No site, os usuários poderiam cadastrar locais voltados a programação, espaços
      esses que seriam alugados por outras pessoas que teriam interesse no espaço. 

      Já no aplicativo, os interessados poderiam solicitar a reserva desses espaços 
      previamente cadastrados.
    `,
    imgArray: [airCnC01, airCnC02, airCnC03],
    gitHubLink: 'https://github.com/guibafica?tab=repositories&q=AirCnC&type=&language=&sort=',
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_03',
    title: 'ECOLETA',
    subtitle: 'Mapa para pontos de coleta de resíduos.',
    description: `
      A aplicação tem como funcionalidade ajudar pessoas a encontrarem pontos de 
      coleta de forma eficiente. 
    `,
    descriptionTwo: `
      Com a ajuda de um mapa, o usuário consegue facilmente encontrar pontos, 
      previamente cadatrados, nas proximidades da sua atual localidade. O sistema
      possui também um filtro, onde podemos selecionar exatamente o material que
      gostaríamos de descartar.

      As empresas de coleta possuem a funcionalidade de cadastrar seus pontos e
      que tipo de material coleta.
    `,
    imgArray: [ecoleta, ecoleta02, ecoleta03, ecoleta04],
    gitHubLink: 'https://github.com/guibafica/ECOLETA',
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_04',
    title: 'MapaDev',
    subtitle: 'Aplicação simples com geolocalização.',
    description: `
      Nessa aplicação, houve a implementação de mapa, com isso, podemos visualizar
      pessoas cadastras que estão em nossa volta. O intúito seria encontrar devs 
      próximos, tanto em localidade, quanto em interesse.
    `,
    descriptionTwo: undefined,
    imgArray: [mapaDev],
    gitHubLink: 'https://github.com/guibafica?tab=repositories&q=MapaDev&type=&language=',
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_05',
    title: 'BeTheHero',
    subtitle: 'Cadadstro e Visualizador de ONGs.',
    description: `
      Funcionalidades que possibilitam a Heróis, visualizarem e ajudarem ONGs 
      cadastradas na plataforma.
    `,
    descriptionTwo: `
      Em resumo, através do site, as ONGs podem cadastrar-se, com nome, valorers,
      descrição do caso e localidade, com isso, elo aplicativos, pessoas interessadas
      podem visualizar essas informações, entrar em contato e ajudar na causa.
    `,
    imgArray: [
      beTheHero01, beTheHero02, beTheHero03, beTheHero04, beTheHero05,
      beTheHero06,
    ],
    gitHubLink: 'https://github.com/guibafica?tab=repositories&q=BeTheHero&type=&language=',
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_06',
    title: 'goBarber',
    subtitle: 'Sistema de agendamento no barbeiro.',
    description: `
      Tem como objetivo auxiliar o fluxo de clientes em uma barbearia, com facilidade no agendamento e gerenciamento dos clientes e profissionais.
    `,
    descriptionTwo: `
      Meu primeiro projeto focado exclusivamente em boas práticas, nele, fui instruido
      a aplicar as melhores técnicas do mercado na época. Adquiri muito conhecimento
      importante para o que sei e utilizo hoje em dia.
    `,
    imgArray: [goBarber01, goBarber02, goBarber03, goBarber04],
    gitHubLink: 'https://github.com/guibafica?tab=repositories&q=goBarber-2&type=&language=',
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_07',
    title: 'S. Hospitalar',
    subtitle: 'Sistema web completo de gestão hospitalar.',
    description: `
      Esse projeto tinha como principal funcionalidade auxiliar e dinamizar o fluxo
      de agendamentos em uma clínica hospitalar. Com isso, podendo oferecer um serviço
      com maior taxa de qualidade, eficiência, velocidade e organização.
    `,
    descriptionTwo: `
      De uso exclusivo para funcionários da clínica, cada usuário possuia um determinado
      nível de acesso dentro do sistema, como exemplo dos administradores, que 
      tinham a permissão de cadastrar novos funcionários.
      O sistema era dividido em módulos: 
        Na seção de agendamentos, as recepcionistas
      poderiam selecionar o paciente, data, procedimento, para qual médico e até
      mesmo, escreve uma descrição sobre o caso.
        Na home, era exibido os exames cadastrados, em ordem de período e filtragem
      de médico, onde cada um tinha acesso isolado aos seus próprios agendamentos.
        O sistema possui tambem cadastro de paciente, onde cada um tem o seu histórico
      da ficha médica, podendo assim, o médico avaliar todos os procedimentos daquele
      paciente desde que o mesmo foi cadastrado no sistema, independente de quanto tempo
      isso tenha ocorrido, fica tudo salvo no sistema. Com isso, podemos aplicar
      uma medicina preventiva e mais completa. 
        No sistema existe a aba de notificações, que avisa por exemplo, os
      recepcionistas quando determinado paciente precisa realizar um retorno, e 
      entrega a opção de enviar uma mensagem direta para o Whatsapp do paciente em 
      apenas 1 clique.
        Há a seção de controle do almoxarifado, avisando caso algum item ou medicamento
      esteja perto de vencer ou em baixa quantidade.
        E outro ponto importante, é o módulo de chat. Nele, os funcionários podem
      conversar entre si, em chats individuais, como se fosse um Whatsapp. Facilitando
      a comunicação entre setores, e até mesmo, servindo para avisar ao médico que
      seu paciente chegou.
    `,
    imgArray: [clinicaCuidar02, clinicaCuidar01],
    gitHubLink: undefined,
    siteLink: 'https://cuidarclinica.com.br/',
    hasMobile: false,
    hasDesktop: true,
  },

  {
    id: 'project_08',
    title: 'Happy',
    subtitle: 'Ferramenta para promover orfanatos.',
    description: `
      Este é o Happy, uma aplicação completa que tem como principal objetivo 
      promover orfanatos e trazer alegria as suas crianças.
    `,
    descriptionTwo: `
      Com o auxílio de um mapa, o usuário poderá visualizar orfanatos próximos 
      de sua localidade, com algumas informações sobre o mesmo, como o que é
      necessário para poder fazer uma visita.
    `,
    imgArray: [happy01, happy02, happy03, happy04, happy05],
    gitHubLink: 'https://github.com/guibafica?tab=repositories&q=happ&type=&language=&sort=',
    siteLink: undefined,
    hasMobile: true,
    hasDesktop: true,
  },

  {
    id: 'project_09',
    title: 'ELIXR',
    subtitle: 'Website para imóveis.',
    description: `
      Projeto Website completamente Responsivo e com Animações. 
    `,
    descriptionTwo: `
      Este repositório tem fins de estudo, e representa a uma landing page de um 
      website para vendas, aluguel e divulgações de imóveis.
    `,
    imgArray: [elixr01, elixr02],
    gitHubLink: 'https://github.com/guibafica/ELIXR_venda_de_imoveis',
    siteLink: 'https://elixr-guibafica.vercel.app/',
    hasMobile: false,
    hasDesktop: true,
  },

  {
    id: 'project_10',
    title: 'Podcastr',
    subtitle: 'Site para postagem de podcast.',
    description: `
      Uma aplicação web com o intuito de ouvirmos um podcast. 
    `,
    descriptionTwo: `
      O site baseia-se em um único podcast, o objetivo é a postagem do conteúdo 
      oriundo de apenas uma fonte. 
    `,
    imgArray: [podcastr02, podcastr01],
    gitHubLink: 'https://github.com/guibafica/Podcastr_NLW5',
    siteLink: undefined,
    hasMobile: false,
    hasDesktop: true,
  },

  {
    id: 'project_11',
    title: 'GoNutri',
    subtitle: 'Portfólio de Nutrição.',
    description: `
      Website pessoal para uma nutricionista, em forma de portfólio. 
    `,
    descriptionTwo: `
      Neste projeto, encontra-se informações sobre a profissional, dicas de 
      alimentação em forma de cards, um layout detalhado, responsivo e com 
      animações. 
    `,
    imgArray: [goNutri02, goNutri01],
    gitHubLink: undefined,
    siteLink: undefined,
    hasMobile: false,
    hasDesktop: true,
  },

  {
    id: 'project_12',
    title: 'Kindergarten',
    subtitle: 'Landing page creche.',
    description: `
      Website com design detalhado e com bastante ilustrações. (Projeto incompleto)  
    `,
    descriptionTwo: `
      Este projeto simula uma landing page para uma creche ou escola infantil. Nele,
      os usuários encontrarão um design agradável e com um tom infantil. Durante o
      site, informações são exibidas, como pontos fortes da empresa, descrição, 
      brincadeiras e dinâmicas ofertadas, descrição dos professores, valores e 
      seção de contato. 
    `,
    imgArray: [kidzies02, kidzies01],
    gitHubLink: 'https://github.com/guibafica/Kindergarten_frontend',
    siteLink: undefined,
    hasMobile: false,
    hasDesktop: true,
  },

  // ro engenharia ?
];

export default projectsList;
