var pokemons = [
    {
      name: "Bulbasaur",
      img: "",
      types: ["Grama", "Veneno"],
      description:
        "Há uma semente de planta em suas costas desde o dia que este Pokémon nasce. A semente cresce lentamente.",
      stages: [],
    },
    {
      name: "Ivysaur",
      img: "",
      types: ["Grama", "Veneno"],
      description:
        "Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras.",
      stages: [],
    },
    {
      name: "Venusaur",
      img: "",
      types: ["Grama", "Veneno"],
      description:
        "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.",
      stages: [],
    },
    {
      name: "Charmander",
      img: "",
      types: ["Fogo"],
      description:
        "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
      stages: [],
    },
    {
      name: "Charmeleon",
      img: "",
      types: ["Fogo"],
      description:
        "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas.",
      stages: [],
    },
    {
      name: "Charizard",
      img: "",
      types: ["Fogo", "Voador"],
      description:
        "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
      stages: [],
    },
    {
      name: "Squirtle",
      img: "",
      types: ["Água"],
      description:
        "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
      stages: [],
    },
    {
      name: "Wartortle",
      img: "",
      types: ["Água"],
      description:
        "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo.",
      stages: [],
    },
    {
      name: "Blastoise",
      img: "",
      types: ["Água"],
      description:
        "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.",
      stages: [],
    },
    {
      name: "Caterpie",
      img: "",
      types: ["Inseto"],
      description:
        "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos.",
      stages: [],
    },
    {
      name: "Metapod",
      img: "",
      types: ["Inseto"],
      description:
        "Está esperando o momento de evoluir. Nesta fase, só pode endurecer, por isso permanece imóvel para evitar o ataque.",
      stages: [],
    },
    {
      name: "Butterfree",
      img: "",
      types: ["Inseto", "Voador"],
      description:
        "Coleta mel todos os dias. Esfrega mel nos pelos das pernas para levá-lo de volta ao ninho.",
      stages: [],
    },
    {
      name: "Weedle",
      img: "",
      types:["Inseto", "Veneno"],
      description:
      "Cuidado com o ferrão afiado na cabeça. Esconde-se na grama e nos arbustos onde come folhas.",
      stages: [],
    },
    {
      name:"Kakuna",
      img:"",
      types:["Inseto", "Veneno"],
      description:
      "Capaz de se mover apenas ligeiramente. Quando ameaçado, pode espetar seu ferrão e envenenar seu inimigo.",
      stages:[],
    },
    {
      name:"Beedrill",
      img:"",
      types:["Inseto", "Veneno"],
      description:
      "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para atacar seu inimigo repetidamente.",
      stages:[]
    },
    {
      name:"Pidgey",
      img:"",
      types:["Normal","Voador"],
      description:
      "Muito dócil. Se atacado, muitas vezes chuta areia para se proteger em vez de revidar.",
      stages:[]
    },
    {
      name:"Pidgeotto",
      img:"",
      types:["Normal","Voador"],
      description:
      "Este Pokémon é cheio de vitalidade. Ele voa constantemente ao redor de seu grande território em busca de presas.",
      stages:[]
    },
    {
      name:"Pidgeot",
      img:"",
      types:["Normal","Voador"],
      description:
      "Este Pokémon voa na velocidade de Mach 2(2,385.36 Km/h), procurando presas. Suas grandes garras são temidas como armas perversas.",
      stages:[]
    },
    {
      name:"Rattata",
      img:"",
      types:["Normal"],
      description:
      "Vai mastigar qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 moram na área.",
      stages:[]
    },
    {
      name:"Raticate",
      img:"",
      types:["Normal"],
      description:
      "Suas patas traseiras são de teia. Eles atuam como nadadeiras, para que possa nadar em rios e caçar presas.",
      stages:[]
    },
    {
      name:"Spearow",
      img:"",
      types:["Normal", "Voador"],
      description:
      "Inepto em voar alto. No entanto, ele pode voar muito rápido para proteger seu território.",
      stages:[]
    },
    {
      name:"Fearow",
      img:"",
      types:["Normal", "Voador"],
      description:
      "Um Pokémon que remonta a muitos anos. Se sentir perigo, voa alto e para longe, instantaneamente.",
      stages:[]
    },
    {
      name:"Ekans",
      img:"",
      types:["Veneno"],
      description:
      "Quanto mais velho fica, mais cresce. À noite, envolve seu longo corpo nos galhos das árvores para descansar.",
      stages:[]
    },
    {
      name:"Arbok",
      img:"",
      types:["Veneno"],
      description:
      "Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.",
      stages:[]
    },
    {
      name:"Pikachu",
      img:"",
      types:["Elétrico"],
      description:
      "Quando está com raiva, descarrega imediatamente a energia armazenada nas bolsas de suas bochechas.",
      stages:[]
    },
    {
      name:"Raichu",
      img:"",
      types:["Eletrico"],
      description:
      "Sua cauda descarrega eletricidade no chão, protegendo-o de choques.",
      stages:[]
    },
    {
      name:"Sandshrew",
      img:"",
      types:["Terrestre"],
      description:
      "Adora banhar-se na areia de áreas secas e arenosas. Ao se banhar na areia, o Pokémon se livra da sujeira e da umidade grudadas em seu corpo.",
      stages:[]
    },
    {
      name:"Sandslash",
      img:"",
      types:["Terrestre"],
      description:
      "Quanto mais seca for a área em que Sandslash vive, mais duros e suaves serão os espinhos do Pokémon quando tocados.",
      stages:[]
    },
    {
      name:"Nidoran ♀",
      img:"",
      types:["Veneno"],
      description:
      "As fêmeas são mais sensíveis aos cheiros do que os machos. Enquanto forrageiam, eles usam seus bigodes para verificar a direção do vento e ficar a favor dos predadores.",
      stages:[]
    },
    {
      name:"Nidorina",
      img:"",
      types:["Veneno"],
      description:
      "O chifre em sua cabeça está atrofiado. Acredita-se que isso aconteça para que os filhos de Nidorina não sejam cutucados enquanto a mãe os alimenta.",
      stages:[]
    },
    {
      name:"Nidoqueen",
      img:"",
      types:["Veneno", "Terrestre"],
      description:
      "Nidoqueen é melhor na defesa do que no ataque. Com escamas como armaduras, este Pokémon protegerá seus filhos de qualquer tipo de ataque.",
      stages:[]
    },
    {
      name:"Nidoran ♂",
      img:"",
      types:["Veneno"],
      description:
      "O chifre na testa de um Nidoran masculino contém um poderoso veneno. Este é um Pokémon muito cauteloso, sempre esticando suas grandes orelhas.",
      stages:[]
    },
    {
      name:"Nidorino",
      img:"",
      types:["Veneno"],
      description:
      "Com um chifre mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura uma pedra da lua.",
      stages:[]
    },
    {
      name:"Nidoking",
      img:"",
      types:["Veneno", "Terrestre"],
      description:
      "Quando fica furioso, é impossível controlar. Mas na presença de uma Nidoqueen com quem convive há muito tempo, Nidoking se acalma.",
      stages:[]
    },
    {
      name:"Clefairy",
      img:"",
      types:["Fada"],
      description:
      "Dizem que a felicidade virá para aqueles que virem uma reunião de Clefairy dançando sob a lua cheia.",
      stages:[]
    },
    {
      name:"Clefable",
      img:"",
      types:["Fada"],
      description:
      "Um tímido Pokémon fada que raramente é visto, ele corre e se esconde no momento em que detecta as pessoas.",
      stages:[]
    },
    {
      name:"Vulpix",
      img:"",
      types:["Fogo"],
      description:
      "Enquanto jovem, tem seis lindas caudas. Quando cresce, várias novas caudas brotam.",
      stages:[]
    },
    {
      name:"Ninetales",
      img:"",
      types:["Fogo"],
      description:
      "Diz-se que vive 1.000 anos e cada uma de suas caudas é carregada de poderes sobrenaturais.",
      stages:[]
    }
  ];
  
  for (var i = 0; i < pokemons.length; i++) {
    pokemons[i].stages = [];
  }
  //bulbasaur
  pokemons[0].stages.push(pokemons[0], pokemons[1], pokemons[2]);
  pokemons[1].stages.push(pokemons[0], pokemons[1], pokemons[2]);
  pokemons[2].stages.push(pokemons[0], pokemons[1], pokemons[2]);
//charmander
  pokemons[3].stages.push(pokemons[3], pokemons[4], pokemons[5]);
  pokemons[4].stages.push(pokemons[3], pokemons[4], pokemons[5]);
  pokemons[5].stages.push(pokemons[3], pokemons[4], pokemons[5]);
//squirtle
  pokemons[6].stages.push(pokemons[6], pokemons[7], pokemons[8]);
  pokemons[7].stages.push(pokemons[6], pokemons[7], pokemons[8]);
  pokemons[8].stages.push(pokemons[6], pokemons[7], pokemons[8]);
//caterpie
  pokemons[9].stages.push(pokemons[9], pokemons[10], pokemons[11]);
  pokemons[10].stages.push(pokemons[9], pokemons[10], pokemons[11]);
  pokemons[11].stages.push(pokemons[9], pokemons[10], pokemons[11]);
  //weedle
  pokemons[12].stages.push(pokemons[12],pokemons[13],pokemons[14]);
  pokemons[13].stages.push(pokemons[12],pokemons[13],pokemons[14]);
  pokemons[14].stages.push(pokemons[12],pokemons[13],pokemons[14]);
  //pidgey
  pokemons[15].stages.push(pokemons[15],pokemons[16],pokemons[17]);
  pokemons[16].stages.push(pokemons[15],pokemons[16],pokemons[17]);
  pokemons[17].stages.push(pokemons[15],pokemons[16],pokemons[17]);
  //rattata
  pokemons[18].stages.push(pokemons[18],pokemons[19]);
  pokemons[19].stages.push(pokemons[18],pokemons[19]);
  //spearow
  pokemons[20].stages.push(pokemons[20],pokemons[21]);
  pokemons[21].stages.push(pokemons[20],pokemons[21]);
  //ekans
  pokemons[22].stages.push(pokemons[22],pokemons[23]);
  pokemons[23].stages.push(pokemons[22],pokemons[23]);
  //pikachu
  pokemons[24].stages.push(pokemons[24],pokemons[25]);
  pokemons[25].stages.push(pokemons[24],pokemons[25]);
  //sandshrew
  pokemons[26].stages.push(pokemons[26],pokemons[27]);
  pokemons[27].stages.push(pokemons[26],pokemons[27]);
  //nidoran f
  pokemons[28].stages.push(pokemons[28],pokemons[29],pokemons[30]);
  pokemons[29].stages.push(pokemons[28],pokemons[29],pokemons[30]);
  pokemons[30].stages.push(pokemons[28],pokemons[29],pokemons[30]);
  //nidoran m
  pokemons[31].stages.push(pokemons[31],pokemons[32],pokemons[33]);
  pokemons[32].stages.push(pokemons[31],pokemons[32],pokemons[33]);
  pokemons[33].stages.push(pokemons[31],pokemons[32],pokemons[33]);
  //clefairy
  pokemons[34].stages.push(pokemons[34],pokemons[35]);
  pokemons[35].stages.push(pokemons[34],pokemons[35]);
  //vulpix
  pokemons[36].stages.push(pokemons[36],pokemons[37]);
  pokemons[37].stages.push(pokemons[36],pokemons[37]);
