var pokemons = [
    {
      name: "Bulbasaur",
      img: "",
      types: ["Grama", "Veneno"],
      description:
        "Há uma semente de planta em suas costas desde o dia que este Pokémon nasce. A semente cresce lentamente.",
      stages: []
    },
    {
      name: "Ivysaur",
      img: "",
      types: ["Grama", "Veneno"],
      description:
        "Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras.",
      stages: []
    },
    {
      name: "Venusaur",
      img: "",
      types: ["Grama", "Veneno"],
      description:
        "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.",
      stages: []
    },
    {
      name: "Charmander",
      img: "",
      types: ["Fogo"],
      description:
        "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
      stages: []
    },
    {
      name: "Charmeleon",
      img: "",
      types: ["Fogo"],
      description:
        "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas.",
      stages: []
    },
    {
      name: "Charizard",
      img: "",
      types: ["Fogo", "Voador"],
      description:
        "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
      stages: []
    },
    {
      name: "Squirtle",
      img: "",
      types: ["Água"],
      description:
        "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
      stages: []
    },
    {
      name: "Wartortle",
      img: "",
      types: ["Água"],
      description:
        "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo.",
      stages: []
    },
    {
      name: "Blastoise",
      img: "",
      types: ["Água"],
      description:
        "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.",
      stages: []
    },
    {
      name: "Caterpie",
      img: "",
      types: ["Inseto"],
      description:
        "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos.",
      stages: []
    },
    {
      name: "Metapod",
      img: "",
      types: ["Inseto"],
      description:
        "Está esperando o momento de evoluir. Nesta fase, só pode endurecer, por isso permanece imóvel para evitar o ataque.",
      stages: []
    },
    {
      name: "Butterfree",
      img: "",
      types: ["Inseto", "Voador"],
      description:
        "Coleta mel todos os dias. Esfrega mel nos pelos das pernas para levá-lo de volta ao ninho.",
      stages: []
    },
    {
      name: "Weedle",
      img: "",
      types:["Inseto", "Veneno"],
      description:
      "Cuidado com o ferrão afiado na cabeça. Esconde-se na grama e nos arbustos onde come folhas.",
      stages: []
    },
    {
      name:"Kakuna",
      img:"",
      types:["Inseto", "Veneno"],
      description:
      "Capaz de se mover apenas ligeiramente. Quando ameaçado, pode espetar seu ferrão e envenenar seu inimigo.",
      stages:[]
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
    },
    {
      name:"Jigglypuff",
      img:"",
      types:["Normal", "Fada"],
      description:
      "Quando seus olhos enormes vacilam, ele canta uma melodia misteriosamente reconfortante que embala seus inimigos para dormir.",
      stages:[]
    },
    {
      name:"Wigglytuff",
      img:"",
      types:["Normal", "Fada"],
      description:
      "Tem uma pelagem muito fina. Tome cuidado para não irritá-lo, ou ele pode inflar continuamente e bater com força",
      stages:[]
    },
    {
      name:"Zubat",
      img:"",
      types:["Veneno", "Voador"],
      description:
      "Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade.",
      stages:[]
    },
    {
      name:"Golbat",
      img:"",
      types:["Veneno", "Voador"],
      description:
      "Adora beber o sangue de outras criaturas. Diz-se que, se encontrar outros de sua espécie passando fome, às vezes compartilha o sangue que colheu.",
      stages:[]
    },
    {
      name:"Oddish",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Se exposto ao luar, ele começa a se mover. Ele vagueia por toda parte à noite para espalhar suas sementes.",
      stages:[]
    },
    {
      name:"Gloom",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Seus pistilos exalam uma incrível falta. O fedor horrível pode causar desmaios a uma distância de 2km.",
      stages:[]
    },
    {
      name:"Vileplume",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem pesadas nuvens de pólen tóxico.",
      stages:[]
    },
    {
      name:"Paras",
      img:"",
      types:["Inseto", "Grama"],
      description:
      "Tocas sob o solo para roer as raízes das árvores. Os cogumelos nas costas absorvem a maior parte da nutrição.",
      stages:[]
    },
    {
      name:"Parasect",
      img:"",
      types:["Inseto", "Grama"],
      description:
      "O hospedeiro do inseto é drenado de energia pelo cogumelo em suas costas. O cogumelo parece fazer todo o pensamento.",
      stages:[]
    },
    {
      name:"Venonat",
      img:"",
      types:["Inseto", "Veneno"],
      description:
      "O veneno escorre de todo o seu corpo. Ele pega pequenos Pokémon insetos à noite que são atraídos pela luz.",
      stages:[]
    },
    {
      name:"Venomoth",
      img:"",
      types:["Inseto", "Veneno"],
      description:
      "As asas são cobertas com escamas semelhantes a poeira. Cada vez que bate as asas, solta poeira altamente tóxica.",
      stages:[]
    },
    {
      name:"Diglett",
      img:"",
      types:["Terrestre"],
      description:
      "Ele vive cerca de um metro no subsolo, onde se alimenta de raízes de plantas. Às vezes aparece acima do solo.",
      stages:[]
    },
    {
      name:"Dugtrio",
      img:"",
      types:["Terrestre"],
      description:
      "Suas três cabeças balançam separadamente para cima e para baixo para soltar o solo próximo, facilitando a escavação.",
      stages:[]
    },
    {
      name:"Meowth",
      img:"",
      types:["Normal"],
      description:
      "Tudo o que faz é dormir durante o dia. À noite, patrulha seu território com os olhos brilhando.",
      stages:[]
    },
    {
      name:"Persian",
      img:"",
      types:["Normal"],
      description:
      "Embora seu pelo tenha muitos admiradores, é difícil criá-lo como animal de estimação por causa de sua mesquinhez inconstante.",
      stages:[]
    },
    {
      name:"Psyduck",
      img:"",
      types:["Água"],
      description:
      "É constantemente assolado por uma dor de cabeça. Quando a dor de cabeça fica intensa, ela começa a usar poderes misteriosos.",
      stages:[]
    },
    {
      name:"Golduck",
      img:"",
      types:["Água"],
      description:
      "Quando nada a toda velocidade usando seus longos membros palmados, sua testa de alguma forma começa a brilhar.",
      stages:[]
    },
    {
      name:"Mankey",
      img:"",
      types:["Lutador"],
      description:
      "Vive em grupos nas copas das árvores. Se perde de vista seu grupo, fica furioso com sua solidão.",
      stages:[]
    },
    {
      name:"Primeape",
      img:"",
      types:["Lutador"],
      description:
      "Ele fica extremamente furioso se sentir que alguém está olhando para ele. Ele persegue qualquer um que encontre seu brilho.",
      stages:[]
    },
    {
      name:"Growlithe",
      img:"",
      types:["Fogo"],
      description:
      "Tem uma natureza corajosa e confiável. Ele enfrenta destemidamente inimigos maiores e mais fortes.",
      stages:[]
    },
    {
      name:"Arcanine",
      img:"",
      types:["Fogo"],
      description:
      "Um pergaminho antigo mostra que as pessoas foram cativadas por seu movimento enquanto corria pelas pradarias.",
      stages:[]
    },
    {
      name:"Poliwag",
      img:"",
      types:["Água"],
      description:
      "Para Poliwag, nadar é mais fácil do que caminhar. O padrão de redemoinho em sua barriga é, na verdade, parte das entranhas do Pokémon que aparecem através da pele.",
      stages:[]
    },
    {
      name:"Poliwhirl",
      img:"",
      types:["Água"],
      description:
      "Olhar para o redemoinho em sua barriga causa sonolência. Essa característica de Poliwhirl tem sido usada no lugar de canções de ninar para fazer as crianças dormirem.",
      stages:[]
    },
    {
      name:"Poliwrath",
      img:"",
      types:["Água"],
      description:
      "Seu corpo é músculo sólido. Ao nadar em mares frios, Poliwrath usa seus braços impressionantes para quebrar o gelo flutuante e seguir em frente.",
      stages:[]
    },
    {
      name:"Abra",
      img:"",
      types:["Psíquico"],
      description:
      "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon possui.",
      stages:[]
    },
    {
      name:"Kadabra",
      img:"",
      types:["Psíquico"],
      description:
      "Usando seu poder psíquico, Kadabra levita enquanto dorme. Ele usa sua cauda elástica como travesseiro.",
      stages:[]
    },
    {
      name:"Alakazam",
      img:"",
      types:["Psíquico"],
      description:
      "Tem um nível incrivelmente alto de inteligência. Alguns dizem que Alakazam se lembra de tudo o que acontece com ele, desde o nascimento até a morte.",
      stages:[]
    },
    {
      name:"Machop",
      img:"",
      types:["Lutador"],
      description:
      "Todo o seu corpo é composto por músculos. Mesmo sendo do tamanho de uma criança humana, pode arremessar 100 adultos.",
      stages:[]
    },
    {
      name:"Machoke",
      img:"",
      types:["Lutador"],
      description:
      "Seu corpo musculoso é tão poderoso que deve usar um cinto de economia de energia para poder regular seus movimentos.",
      stages:[]
    },
    {
      name:"Machamp",
      img:"",
      types:["Lutador"],
      description:
      "Ele balança rapidamente seus quatro braços para balançar seus oponentes com socos e golpes incessantes de todos os ângulos.",
      stages:[]
    },
    {
      name:"Bellsprout",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Prefere lugares quentes e úmidos. Ele captura pequenos insetos com suas vinhas e os devora.",
      stages:[]
    },
    {
      name:"Weepinbell",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Quando está com fome, engole tudo o que se mexe. Sua presa infeliz é dissolvida por ácidos fortes.",
      stages:[]
    },
    {
      name:"Victreebel",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Atrai a presa com o doce aroma do mel. Engolida inteira, a presa é dissolvida em um dia, com ossos e tudo.",
      stages:[]
    },
    {
      name:"Tentacool",
      img:"",
      types:["Água", "Veneno"],
      description:
      "Tentacool não é um nadador particularmente forte. Ele flutua pela superfície de mares rasos enquanto procura por presas.",
      stages:[]
    },
    {
      name:"Tentacruel",
      img:"",
      types:["Grama", "Veneno"],
      description:
      "Quando as esferas vermelhas na cabeça de Tentacruel brilharem intensamente, cuidado. O Pokémon está prestes a disparar uma explosão de ondas ultrassônicas.",
      stages:[]
    },
    {
      name:"Geodude",
      img:"",
      types:["Pedra", "Terrestre"],
      description:
      "Comumente encontrado perto de trilhas de montanha e similares. Se você pisar em um por acidente, ele fica com raiva.",
      stages:[]
    },
    {
      name:"Graveller",
      img:"",
      types:["Pedra", "Terrestre"],
      description:
      "Frequentemente visto rolando por trilhas nas montanhas. Obstáculos são apenas coisas para rolar, não evitar.",
      stages:[]
    },
    {
      name:"Golem",
      img:"",
      types:["Pedra", "Terrestre"],
      description:
      "Depois de trocar de pele, seu corpo fica macio e esbranquiçado. Sua pele endurece quando exposta ao ar.",
      stages:[]
    },
    {
      name:"Ponyta",
      img:"",
      types:["Fogo"],
      description:
      "Não pode funcionar corretamente quando é recém-nascido. À medida que corre com outros de sua espécie, suas pernas ficam mais fortes.",
      stages:[]
    },
    {
      name:"Rapidash",
      img:"",
      types:["Fogo"],
      description:
      "Este Pokémon pode ser visto galopando pelos campos a velocidades de até 150 mph, sua juba de fogo tremulando ao vento.",
      stages:[]
    },
    {
      name:"Slowpoke",
      img:"",
      types:["Água", "Psíquico"],
      description:
      "É incrivelmente lento e estúpido. Leva cinco segundos para sentir dor quando está sob ataque.",
      stages:[]
    },
    {
      name:"Slowbro",
      img:"",
      types:["Água", "Psíquico"],
      description:
      "Quando um Slowpoke foi caçar no mar, seu rabo foi mordido por um Shellder. Isso o fez evoluir para Slowbro.",
      stages:[]
    },
    {
      name:"Magnemite",
      img:"",
      types:["Elétrico", "Metal"],
      description:
      "As ondas eletromagnéticas emitidas pelas unidades nas laterais de sua cabeça expulsam a antigravidade, o que permite que ela flutue.",
      stages:[]
    },
    {
      name:"Magneton",
      img:"",
      types:["Elétrico", "Metal"],
      description:
      "Três Magnemite estão ligados por uma forte força magnética. Dores de ouvido ocorrerão se você chegar muito perto.",
      stages:[]
    },
    {
      name:"Farfetch'd",
      img:"",
      types:["Normal", "Voador"],
      description:
      "O talo que este Pokémon carrega em suas asas serve como uma espada para cortar os oponentes. Em uma situação terrível, o talo também pode servir de alimento.",
      stages:[]
    },
    {
      name:"Doduo",
      img:"",
      types:["Normal", "Voador"],
      description:
      "Suas asas curtas dificultam o vôo. Em vez disso, este Pokémon corre em alta velocidade com pernas desenvolvidas.",
      stages:[]
    },
    {
      name:"Dodrio",
      img:"",
      types:["Normal", "Voador"],
      description:
      "Uma das duas cabeças de Doduo se divide para formar uma espécie única. Ele corre perto de 40 mph em pradarias.",
      stages:[]
    },
    {
      name:"Seel",
      img:"",
      types:["Água"],
      description:
      "Adora condições de frio congelante. Gosta de nadar em um clima gelado de cerca de 14 graus Fahrenheit.",
      stages:[]
    },
    {
      name:"Dewgong",
      img:"",
      types:["Água", "Gelo"],
      description:
      "Todo o seu corpo é branco como a neve. Incólume até mesmo pelo frio intenso, ele nada poderosamente em águas geladas.",
      stages:[]
    },
    {
      name:"Grimer",
      img:"",
      types:["Veneno"],
      description:
      "Nascidos do lodo, esses Pokémon agora se reúnem em locais poluídos e aumentam as bactérias em seus corpos.",
      stages:[]
    },
    {
      name:"Muk",
      img:"",
      types:["Veneno"],
      description:
      "Está densamente coberto com uma lama imunda e vil. É tão tóxico que até suas pegadas contêm veneno.",
      stages:[]
    },
    {
      name:"Shellder",
      img:"",
      types:["Água"],
      description:
      "É envolto em uma casca que é mais dura que o diamante. Por dentro, no entanto, é surpreendentemente macio.",
      stages:[]
    },
    {
      name:"Cloyster",
      img:"",
      types:["Água", "Gelo"],
      description:
      "Cloyster que vivem em mares com fortes correntes de maré crescem grandes e pontiagudos em suas conchas.",
      stages:[]
    },
    {
      name:"Gastly",
      img:"",
      types:["Fantasma", "Veneno"],
      description:
      "Ele envolve seu oponente em seu corpo gasoso, enfraquecendo lentamente sua presa ao envenená-la através da pele.",
      stages:[]
    },
    {
      name:"Haunter",
      img:"",
      types:["Fantasma", "Veneno"],
      description:
      "Ele gosta de se esconder no escuro e bater nos ombros com uma mão gasosa. Seu toque causa estremecimento sem fim.",
      stages:[]
    },
    {
      name:"Gengar",
      img:"",
      types:["Fantasma", "Veneno"],
      description:
      "Para roubar a vida de seu alvo, ele se esconde na sombra da presa e silenciosamente espera por uma oportunidade.",
      stages:[]
    },
    {
      name:"Onix",
      img:"",
      types:["Pedra", "Terrestre"],
      description:
      "À medida que escava o solo, absorve muitos objetos duros. É isso que torna seu corpo tão sólido.",
      stages:[]
    },
    {
      name:"Drowzee",
      img:"",
      types:["Psíquico"],
      description:
      "Ele se lembra de cada sonho que come. Raramente come os sonhos dos adultos porque os das crianças são muito mais saborosos.",
      stages:[]
    },
    {
      name:"Hypno",
      img:"",
      types:["Psíquico"],
      description:
      "Quando ele trava os olhos com um inimigo, ele usa uma mistura de movimentos psi, como Hipnose e Confusão.",
      stages:[]
    },
    {
      name:"Krabby",
      img:"",
      types:["Água"],
      description:
      "Pode ser encontrado perto do mar. As pinças grandes voltam a crescer se forem arrancadas de seus encaixes.",
      stages:[]
    },
    {
      name:"Kingler",
      img:"",
      types:["Água"],
      description:
      "Sua pinça grande e dura tem força de 10.000 cavalos de potência. No entanto, sendo tão grande, é difícil de mover.",
      stages:[]
    },
    {
      name:"Voltorb",
      img:"",
      types:["Elétrico"],
      description:
      "Ele rola para se mover. Se o solo for irregular, um solavanco repentino ao bater em uma saliência pode fazer com que ele exploda.",
      stages:[]
    },
    {
      name:"Electrode",
      img:"",
      types:["Elétrico"],
      description:
      "Quanto mais energia ele carrega, mais rápido ele fica. Mas isso também torna mais provável que exploda.",
      stages:[]
    },
    {
      name:"Exeggcute",
      img:"",
      types:["Grama", "Psíquico"],
      description:
      "Embora possa parecer apenas um monte de ovos, é um Pokémon adequado. Exeggcute se comunica com outros de sua espécie via telepatia, aparentemente.",
      stages:[]
    },
    {
      name:"Exeggutor",
      img:"",
      types:["Grama", "Psíquico"],
      description:
      "Cada uma das três cabeças de Exeggutor está pensando em pensamentos diferentes. Os três não parecem estar muito interessados um no outro.",
      stages:[]
    },
    {
      name:"Cubone",
      img:"",
      types:["Terrestre"],
      description:
      "Quando a memória de sua falecida mãe o leva às lágrimas, seus gritos ecoam tristemente dentro do crânio que ele usa em sua cabeça.",
      stages:[]
    },
    {
      name:"Marowak",
      img:"",
      types:["Terrestre"],
      description:
      "Este Pokémon superou sua tristeza para desenvolver um novo corpo robusto. Marowak enfrenta seus oponentes bravamente, usando um osso como arma.",
      stages:[]
    },
    {
      name:"Hitmonlee",
      img:"",
      types:["Lutador"],
      description:
      "Este incrível Pokémon tem um incrível senso de equilíbrio. Pode chutar sucessivamente de qualquer posição.",
      stages:[]
    },
    {
      name:"Hitmonchan",
      img:"",
      types:["Lutador"],
      description:
      "Seus socos cortam o ar. Eles são lançados a uma velocidade tão alta que até mesmo um leve arranhão pode causar uma queimadura.",
      stages:[]
    },
    {
      name:"Lickitung",
      img:"",
      types:["Normal"],
      description:
      "Se a saliva pegajosa deste Pokémon cair em você e você não a limpar, uma coceira intensa se instalará. A coceira também não vai embora.",
      stages:[]
    },
    {
      name:"Koffing",
      img:"",
      types:["Veneno"],
      description:
      "Seu corpo está cheio de gás venenoso. Ele flutua em depósitos de lixo, procurando a fumaça do lixo cru e apodrecido.",
      stages:[]
    },
    {
      name:"Weezing",
      img:"",
      types:["Veneno"],
      description:
      "Ele mistura gases entre seus dois corpos. Diz-se que esses Pokémon foram vistos em toda a região de Galar no passado.",
      stages:[]
    },
    {
      name:"Rhyhorn",
      img:"",
      types:["Pedra", "Terrestre"],
      description:
      "Forte, mas não muito brilhante, este Pokémon pode destruir até mesmo um arranha-céu com seus equipamentos de carregamento.",
      stages:[]
    },
    {
      name:"Rhydon",
      img:"",
      types:["Pedra", "Terrestre"],
      description:
      "Ele começa a andar sobre as patas traseiras após a evolução. Ele pode perfurar pedras com seu chifre.",
      stages:[]
    },
    {
      name:"Chansey",
      img:"",
      types:["Normal"],
      description:
      "Este gentil Pokémon põe ovos altamente nutritivos e os compartilha com Pokémon ou pessoas feridas.",
      stages:[]
    },
    {
      name:"Tangela",
      img:"",
      types:["Grama"],
      description:
      "Escondido sob um emaranhado de vinhas que cresce sem parar, mesmo que as vinhas sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério.",
      stages:[]
    },
    {
      name:"Kangaskhan",
      img:"",
      types:["Normal"],
      description:
      "Embora esteja carregando seu bebê em uma bolsa em sua barriga, Kangaskhan é rápido em seus pés. Ele intimida seus oponentes com golpes rápidos.",
      stages:[]
    },
    {
      name:"Horsea",
      img:"",
      types:["Água"],
      description:
      "Horsea faz sua casa em oceanos com correntes suaves. Se este Pokémon estiver sob ataque, ele cospe tinta preta e foge.",
      stages:[]
    },
    {
      name:"Seadra",
      img:"",
      types:["Água"],
      description:
      "São os machos que criam os filhotes. Enquanto Seadra cria filhotes, os espinhos em suas costas secretam um veneno mais espesso e forte.",
      stages:[]
    },
    {
      name:"Goldeen",
      img:"",
      types:["Água"],
      description:
      "Suas barbatanas dorsal, peitoral e caudal ondulam elegantemente na água. É por isso que é conhecido como o Dançarino da Água.",
      stages:[]
    },
    {
      name:"Seaking",
      img:"",
      types:["Água"],
      description:
      "No outono, seu corpo fica mais gorduroso ao se preparar para pedir um companheiro em casamento. Ele assume lindas cores.",
      stages:[]
    },
    {
      name:"Staryu",
      img:"",
      types:["Água"],
      description:
      "Se você visitar uma praia no final do verão, poderá ver grupos de Staryu se iluminando em um ritmo constante.",
      stages:[]
    },
    {
      name:"Starmie",
      img:"",
      types:["Água", "Psíquico"],
      description:
      "Este Pokémon possui um órgão conhecido como núcleo. O órgão brilha em sete cores quando Starmie está liberando seus potentes poderes psíquicos.",
      stages:[]
    },
    {
      name:"Mr. Mime",
      img:"",
      types:["Psíquico"],
      description:
      "A largura de suas mãos pode não ser coincidência - muitos cientistas acreditam que suas palmas foram aumentadas especificamente para pantomima.",
      stages:[]
    },
    {
      name:"Scyther",
      img:"",
      types:["Inseto", "Voador"],
      description:
      "Ele corta a grama com suas foices afiadas, movendo-se rápido demais para ser rastreado pelo olho humano.",
      stages:[]
    },
    {
      name:"Jynx",
      img:"",
      types:["Gelo", "Psíquico"],
      description:
      "Em certas partes de Galar, Jynx já foi temida e adorada como a Rainha do Gelo.",
      stages:[]
    },
    {
      name:"Electabuzz",
      img:"",
      types:["Elétrico"],
      description:
      "Muitas usinas de energia mantêm Pokémon do tipo Ground por perto como uma defesa contra Electabuzz que vem em busca de eletricidade.",
      stages:[]
    },
    {
      name:"Magmar",
      img:"",
      types:["Fogo"],
      description:
      "Magmar despacha sua presa com fogo. Mas ele se arrepende desse hábito quando percebe que queimou sua presa pretendida em uma batata frita carbonizada.",
      stages:[]
    },
    {
      name:"Pinsir",
      img:"",
      types:["Inseto"],
      description:
      "Esses Pokémon julgam uns aos outros com base em pinças. Pinças mais grossas e impressionantes criam mais popularidade com o sexo oposto.",
      stages:[]
    },
    {
      name:"Tauros",
      img:"",
      types:["Normal"],
      description:
      "Uma vez que aponta para sua presa, ele faz uma carga de cabeça. É famoso por sua natureza violenta.",
      stages:[]
    },
    {
      name:"Magikarp",
      img:"",
      types:["Água"],
      description:
      "Um Pokémon patético e pouco poderoso. Pode saltar alto em raras ocasiões, mas nunca mais de dois metros.",
      stages:[]
    },
    {
      name:"Gyarados",
      img:"",
      types:["Água", "Voador"],
      description:
      "Uma vez que aparece, ele entra em fúria. Ele permanece enfurecido até destruir tudo ao seu redor.",
      stages:[]
    },
    {
      name:"Lapras",
      img:"",
      types:["Água"],
      description:
      "Um Pokémon inteligente e de bom coração, ele desliza pela superfície do mar enquanto sua bela música ecoa ao seu redor.",
      stages:[]
    },
    {
      name:"Ditto",
      img:"",
      types:["Normal"],
      description:
      "Sua capacidade de transformação é perfeita. No entanto, se for feito para rir, não consegue manter seu disfarce.",
      stages:[]
    },
    {
      name:"Eevee",
      img:"",
      types:["Normal"],
      description:
      "Sua capacidade de evoluir em muitas formas permite que ela se adapte suave e perfeitamente a qualquer ambiente.",
      stages:[]
    },
    {
      name:"Vaporeon",
      img:"",
      types:["Água"],
      description:
      "Vive perto da água. Sua longa cauda é marcada por uma barbatana, que muitas vezes é confundida com a de uma sereia.",
      stages:[]
    },
    {
      name:"Jolteon",
      img:"",
      types:["Elétrico"],
      description:
      "Ele concentra as fracas cargas elétricas emitidas por suas células e lança raios perversos.",
      stages:[]
    },
    {
      name:"Flareon",
      img:"",
      types:["Fogo"],
      description:
      "O ar inalado é levado ao seu saco de chamas, aquecido e exalado como fogo que atinge mais de 3.000 graus Fahrenheit.",
      stages:[]
    },
    {
      name:"Porygon",
      img:"",
      types:["Normal"],
      description:
      "Tecnologia de ponta foi usada para criar Porygon. Foi o primeiro Pokémon artificial a ser criado por meio de programação de computador.",
      stages:[]
    },
    {
      name:"Omanyte",
      img:"",
      types:["Pedra", "Água"],
      description:
      "Como alguns Omanyte conseguem escapar após serem restaurados ou são soltos na natureza por pessoas, essa espécie está se tornando um problema.",
      stages:[]
    },
    {
      name:"Omastar",
      img:"",
      types:["Pedra", "Água"],
      description:
      "Pesado por uma concha grande e pesada, Omastar não conseguia se mover muito rápido. Alguns dizem que foi extinto porque não conseguia pegar comida.",
      stages:[]
    },
    {
      name:"Kabuto",
      img:"",
      types:["Pedra", "Água"],
      description:
      "Esta espécie está quase totalmente extinta. Kabuto muda a cada três dias, tornando suas cascas cada vez mais duras.",
      stages:[]
    },
    {
      name:"Kabutops",
      img:"",
      types:["Pedra", "Água"],
      description:
      "Kabutops corta sua presa e suga os fluidos. As partes do corpo descartadas se tornam comida para outros Pokémon.",
      stages:[]
    },
    {
      name:"Aerodactyl",
      img:"",
      types:["Pedra", "Voador"],
      description:
      "Este é um Pokémon feroz dos tempos antigos. Aparentemente, mesmo a tecnologia moderna é incapaz de produzir um espécime perfeitamente restaurado.",
      stages:[]
    },
    {
      name:"Snorlax",
      img:"",
      types:["Normal"],
      description:
      "Não fica satisfeito a menos que coma mais de 880 libras(399.16kg) de comida todos os dias. Quando termina de comer, vai imediatamente dormir.",
      stages:[]
    },
    {
      name:"Articuno",
      img:"",
      types:["Gelo", "Voador"],
      description:
      "Dizem que as belas asas azuis deste Pokémon são feitas de gelo. Articuno voa sobre montanhas nevadas, sua longa cauda esvoaçando atrás de si.",
      stages:[]
    },
    {
      name:"Zapdos",
      img:"",
      types:["Elétrico", "Voador"],
      description:
      "Este Pokémon tem controle total sobre a eletricidade. Existem histórias de Zapdos aninhando-se nas profundezas escuras de nuvens negras como breu.",
      stages:[]
    },
    {
      name:"Moltres",
      img:"",
      types:["Fogo", "Voador"],
      description:
      "É um dos Pokémon pássaros lendários. Quando Moltres bate suas asas flamejantes, elas brilham com um brilho vermelho deslumbrante.",
      stages:[]
    },
    {
      name:"Dratini",
      img:"",
      types:["Dragão"],
      description:
      "Ele lança muitas camadas de pele à medida que cresce. Durante este processo, é protegido por uma rápida cachoeira.",
      stages:[]
    },
    {
      name:"Dragonair",
      img:"",
      types:["Dragão"],
      description:
      "Dizem que se emitir uma aura de todo o corpo, o clima começará a mudar instantaneamente.",
      stages:[]
    },
    {
      name:"Dragonite",
      img:"",
      types:["Dragão", "Voador"],
      description:
      "Diz-se que algures no oceano existe uma ilha onde estes se reúnem. Só eles moram lá.",
      stages:[]
    },
    {
      name:"Mewtwo",
      img:"",
      types:["Psíquico"],
      description:
      "Seu DNA é quase o mesmo de Mew. No entanto, seu tamanho e disposição são muito diferentes.",
      stages:[]
    },
    {
      name:"Mew",
      img:"",
      types:["Psíquico"],
      description:
      "Quando visto através de um microscópio, o cabelo curto, fino e delicado deste Pokémon pode ser visto.",
      stages:[]
    }
  ];
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
pokemons[12].stages.push(pokemons[12], pokemons[13], pokemons[14]);
pokemons[13].stages.push(pokemons[12], pokemons[13], pokemons[14]);
pokemons[14].stages.push(pokemons[12], pokemons[13], pokemons[14]);
//pidgey
pokemons[15].stages.push(pokemons[15], pokemons[16], pokemons[17]);
pokemons[16].stages.push(pokemons[15], pokemons[16], pokemons[17]);
pokemons[17].stages.push(pokemons[15], pokemons[16], pokemons[17]);
//rattata
pokemons[18].stages.push(pokemons[18], pokemons[19]);
pokemons[19].stages.push(pokemons[18], pokemons[19]);
//spearow
pokemons[20].stages.push(pokemons[20], pokemons[21]);
pokemons[21].stages.push(pokemons[20], pokemons[21]);
//ekans
pokemons[22].stages.push(pokemons[22], pokemons[23]);
pokemons[23].stages.push(pokemons[22], pokemons[23]);
//pikachu
pokemons[24].stages.push(pokemons[24], pokemons[25]);
pokemons[25].stages.push(pokemons[24], pokemons[25]);
//sandshrew
pokemons[26].stages.push(pokemons[26], pokemons[27]);
pokemons[27].stages.push(pokemons[26], pokemons[27]);
//nidoran f
pokemons[28].stages.push(pokemons[28], pokemons[29], pokemons[30]);
pokemons[29].stages.push(pokemons[28], pokemons[29], pokemons[30]);
pokemons[30].stages.push(pokemons[28], pokemons[29], pokemons[30]);
//nidoran m
pokemons[31].stages.push(pokemons[31], pokemons[32], pokemons[33]);
pokemons[32].stages.push(pokemons[31], pokemons[32], pokemons[33]);
pokemons[33].stages.push(pokemons[31], pokemons[32], pokemons[33]);
//clefairy
pokemons[34].stages.push(pokemons[34], pokemons[35]);
pokemons[35].stages.push(pokemons[34], pokemons[35]);
//vulpix
pokemons[36].stages.push(pokemons[36], pokemons[37]);
pokemons[37].stages.push(pokemons[36], pokemons[37]);
//jigglypuff
pokemons[38].stages.push(pokemons[38], pokemons[39]);
pokemons[39].stages.push(pokemons[38], pokemons[39]);
//zubat
pokemons[40].stages.push(pokemons[40], pokemons[41]);
pokemons[41].stages.push(pokemons[40], pokemons[41]);
//oddish
pokemons[42].stages.push(pokemons[42], pokemons[43], pokemons[44]);
pokemons[43].stages.push(pokemons[42], pokemons[43], pokemons[44]);
pokemons[44].stages.push(pokemons[42], pokemons[43], pokemons[44]);
//paras
pokemons[45].stages.push(pokemons[45], pokemons[46]);
pokemons[46].stages.push(pokemons[45], pokemons[46]);
//venonat
pokemons[47].stages.push(pokemons[47], pokemons[48]);
pokemons[48].stages.push(pokemons[47], pokemons[48]);
//digglet
pokemons[49].stages.push(pokemons[49], pokemons[50]);
pokemons[50].stages.push(pokemons[49], pokemons[50]);
//Meowth
pokemons[51].stages.push(pokemons[51], pokemons[52]);
pokemons[52].stages.push(pokemons[51], pokemons[52]);
//Psyduck
pokemons[53].stages.push(pokemons[53], pokemons[54]);
pokemons[54].stages.push(pokemons[53], pokemons[54]);
//Mankey
pokemons[55].stages.push(pokemons[55], pokemons[56]);
pokemons[56].stages.push(pokemons[55], pokemons[56]);
//Growlithe
pokemons[57].stages.push(pokemons[57], pokemons[58]);
pokemons[58].stages.push(pokemons[57], pokemons[58]);
//Poliwag
pokemons[59].stages.push(pokemons[59], pokemons[60], pokemons[61]);
pokemons[60].stages.push(pokemons[59], pokemons[60], pokemons[61]);
pokemons[61].stages.push(pokemons[59], pokemons[60], pokemons[61]);
//Abra
pokemons[62].stages.push(pokemons[62], pokemons[63], pokemons[64]);
pokemons[63].stages.push(pokemons[62], pokemons[63], pokemons[64]);
pokemons[64].stages.push(pokemons[62], pokemons[63], pokemons[64]);
//Machop
pokemons[65].stages.push(pokemons[65], pokemons[66], pokemons[67]);
pokemons[66].stages.push(pokemons[65], pokemons[66], pokemons[67]);
pokemons[67].stages.push(pokemons[65], pokemons[66], pokemons[67]);
//Bellsprout
pokemons[68].stages.push(pokemons[68], pokemons[69], pokemons[70]);
pokemons[69].stages.push(pokemons[68], pokemons[69], pokemons[70]);
pokemons[70].stages.push(pokemons[68], pokemons[69], pokemons[70]);
//Tentacool
pokemons[71].stages.push(pokemons[71], pokemons[72]);
pokemons[72].stages.push(pokemons[71], pokemons[72]);
//Geodude
pokemons[73].stages.push(pokemons[73], pokemons[74], pokemons[75]);
pokemons[74].stages.push(pokemons[73], pokemons[74], pokemons[75]);
pokemons[75].stages.push(pokemons[73], pokemons[74], pokemons[75]);
//Ponyta
pokemons[76].stages.push(pokemons[76], pokemons[77]);
pokemons[77].stages.push(pokemons[76], pokemons[77]);
//Slowpoke
pokemons[78].stages.push(pokemons[78], pokemons[79]);
pokemons[79].stages.push(pokemons[78], pokemons[79]);
//Magnemite
pokemons[80].stages.push(pokemons[80], pokemons[81]);
pokemons[81].stages.push(pokemons[80], pokemons[81]);
//Farfetch'd
pokemons[82].stages.push(pokemons[82]);
//Doduo
pokemons[83].stages.push(pokemons[83], pokemons[84]);
pokemons[84].stages.push(pokemons[83], pokemons[84]);
//Seel
pokemons[85].stages.push(pokemons[85], pokemons[86]);
pokemons[86].stages.push(pokemons[85], pokemons[86]);
//Grimer
pokemons[87].stages.push(pokemons[87], pokemons[88]);
pokemons[88].stages.push(pokemons[87], pokemons[88]);
//Shellder
pokemons[89].stages.push(pokemons[89], pokemons[90]);
pokemons[90].stages.push(pokemons[89], pokemons[90]);
//Gastly
pokemons[91].stages.push(pokemons[91], pokemons[92], pokemons[93]);
pokemons[92].stages.push(pokemons[91], pokemons[92], pokemons[93]);
pokemons[93].stages.push(pokemons[91], pokemons[92], pokemons[93]);
//Onix
pokemons[94].stages.push(pokemons[94]);
//Drowzee
pokemons[95].stages.push(pokemons[95], pokemons[96]);
pokemons[96].stages.push(pokemons[95], pokemons[96]);
//Krabby
pokemons[97].stages.push(pokemons[97], pokemons[98]);
pokemons[98].stages.push(pokemons[97], pokemons[98]);
//Voltorb
pokemons[99].stages.push(pokemons[99], pokemons[100]);
pokemons[100].stages.push(pokemons[99], pokemons[100]);
//Exeggcute
pokemons[101].stages.push(pokemons[101], pokemons[102]);
pokemons[102].stages.push(pokemons[101], pokemons[102]);
//Cubone
pokemons[103].stages.push(pokemons[103], pokemons[104]);
pokemons[104].stages.push(pokemons[103], pokemons[104]);
//Hitmonlee
pokemons[105].stages.push(pokemons[105]);
//Hitmonchan
pokemons[106].stages.push(pokemons[106]);
//Lickitung
pokemons[107].stages.push(pokemons[107]);
//Koffing
pokemons[108].stages.push(pokemons[108], pokemons[109]);
pokemons[109].stages.push(pokemons[108], pokemons[109]);
//Rhyhorn
pokemons[110].stages.push(pokemons[110], pokemons[111]);
pokemons[111].stages.push(pokemons[110], pokemons[111]);
//Chansey
pokemons[112].stages.push(pokemons[112]);
//Tangela
pokemons[113].stages.push(pokemons[113]);
//Khanghaskhan
pokemons[114].stages.push(pokemons[114]);
//Horsea
pokemons[115].stages.push(pokemons[115], pokemons[116]);
pokemons[116].stages.push(pokemons[115], pokemons[116]);
//Golden
pokemons[117].stages.push(pokemons[117], pokemons[118]);
pokemons[118].stages.push(pokemons[117], pokemons[118]);
//Staryu
pokemons[119].stages.push(pokemons[119], pokemons[120]);
pokemons[120].stages.push(pokemons[119], pokemons[120]);
//Mr. Mime
pokemons[121].stages.push(pokemons[121]);
//Scyther
pokemons[122].stages.push(pokemons[122]),
//Jynx
pokemons[123].stages.push(pokemons[123]);
//Electabuzz
pokemons[124].stages.push(pokemons[124]);
//Magmar
pokemons[125].stages.push(pokemons[125]);
//Pinsir
pokemons[126].stages.push(pokemons[126]);
//Tauros
pokemons[127].stages.push(pokemons[127]);
//Magikarp
pokemons[128].stages.push(pokemons[128], pokemons[129]);
pokemons[129].stages.push(pokemons[128], pokemons[129]);
//Lapras
pokemons[130].stages.push(pokemons[130]);
//Ditto
pokemons[131].stages.push(pokemons[131]);
//Eevee
pokemons[132].stages.push(pokemons[132], pokemons[133], pokemons[134], pokemons[135]);
pokemons[133].stages.push(pokemons[132], pokemons[133], pokemons[134], pokemons[135]);
pokemons[134].stages.push(pokemons[132], pokemons[133], pokemons[134], pokemons[135]);
pokemons[135].stages.push(pokemons[132], pokemons[133], pokemons[134], pokemons[135]);
//Porygon
pokemons[136].stages.push(pokemons[136]);
//Omanyte
pokemons[137].stages.push(pokemons[137], pokemons[138]);
pokemons[138].stages.push(pokemons[137], pokemons[138]);
//Kabuto
pokemons[139].stages.push(pokemons[139], pokemons[140]);
pokemons[140].stages.push(pokemons[139], pokemons[140]);
//Aerodactyl
pokemons[141].stages.push(pokemons[141]);
//Snorlax
pokemons[142].stages.push(pokemons[142]);
//Articuno
pokemons[143].stages.push(pokemons[143]);
//Zapdos
pokemons[144].stages.push(pokemons[144]);
//Moltres
pokemons[145].stages.push(pokemons[145]);
//Dratini
pokemons[146].stages.push(pokemons[146], pokemons[147], pokemons[148]);
pokemons[147].stages.push(pokemons[146], pokemons[147], pokemons[148]);
pokemons[148].stages.push(pokemons[146], pokemons[147], pokemons[148]);
//Mewtwo
pokemons[149].stages.push(pokemons[149]);
//Mew
pokemons[150].stages.push(pokemons[150]);

  
