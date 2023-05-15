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
  