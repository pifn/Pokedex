var type;
var index;
var list = document.getElementById("list");
var closeButton = document.getElementById("closeButton");
var mainPokemon = document.getElementById("main-pokemon");
//play bgm
var audio = document.getElementById("bg-sound");
audio.volume = 0.5;
audio.play();
document.addEventListener("mousemove", function() {
  audio.play();
});


ShowPokemons();
function ShowPokemons() {
  closeButton.innerHTML = "";
  mainPokemon.innerHTML = "";
  list.innerHTML = "";
  pokemons.forEach(pokemon => {
    pokemon.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + (pokemons.indexOf(pokemon) + 1) +".gif"
    index = GetIndex(pokemon);
    list.innerHTML += `
    <li type="button" onclick="SelectPokemon('${pokemon.name}'); event.stopPropagation();"
        class="carta-pokemon">
        <div class="card">
          <div class="info">
            <span>${pokemon.name}</span>
            <span>#${index}</span>
          </div>
          <img src="${pokemon.img}" alt="${pokemon.name}" class="gif">
          <ul class="types" id="${pokemon.name.toLowerCase()}-type">
            ${pokemon.types.map(t => `<li class="${t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}"><button onclick="ToggleType('${t}'); event.stopPropagation();">${t}</button></li>
            `).join("")}
          </ul>
          <p class="description">${pokemon.description}</p>
        </div>
      </li>`;
  });
}

function GetIndex(p)
{
    var word = "";
    var length = (pokemons.indexOf(p) + 1).toString().length;
    if(length <= 2)
    {
        word = "0";
        if(length <= 1)
        {
            word += "0";
        }
    }
    return word + (pokemons.indexOf(p) + 1).toString();
}

function Theme()
{
    var theme = document.getElementById("theme");
    document.body.classList.toggle("dark");
    theme.src = theme.src.includes("moon.png") ? "src/imgs/sun.png" : "src/imgs/moon.png";
}

function ToggleType(chosenType) {
  closeButton.innerHTML = `<button onclick="ShowPokemons()""><img src="src/imgs/x.png" alt="x"></button>`;
  mainPokemon.innerHTML = "";
  list.innerHTML = "";
  pokemons.forEach(pokemon => {
    if (pokemon.types.includes(chosenType)) {
      index = GetIndex(pokemon); 
      list.innerHTML += `
        <li type="button" onclick="SelectPokemon('${pokemon.name}'); event.stopPropagation();"
        class="carta-pokemon">
          <div class="card">
            <div class="info">
              <span>${pokemon.name}</span>
              <span>#${index}</span>
            </div>
            <img src="${pokemon.img}" alt="${pokemon.name}" class="gif">
            <ul class="types" id="${pokemon.name.toLowerCase()}-type">
            ${pokemon.types.map(t => `
            <li class="${t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">
              <button onclick="${t === chosenType ? "ShowPokemons()" : `ToggleType('${t}')`}; event.stopPropagation();">${t}</button>
            </li>`).join("")}
            </ul>
            <p class="description">${pokemon.description}</p>
          </div>
        </li>`;
    }
  });
}
function SelectPokemon(pkm) {
  closeButton.innerHTML = `<button onclick="ShowPokemons()""><img src="src/imgs/x.png" alt="x"></button>`;
  console.log("select pokemon");
  var p  = pokemons.find(pokemon => pokemon.name === pkm)
    list.innerHTML = "";
    var index = GetIndex(p);
    mainPokemon.innerHTML = ` 
    <img class="pokePhoto" src="${p.img}" alt="${pkm}">
    <h2>${p.name} - ${index}</h2>
    <ul id="types" class="types">
                ${p.types.map(t => `
                <li class="${t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">
                <button onclick="ToggleType('${t}'); event.stopPropagation();">${t}</button>
                </li>`).join("")}
    </ul>
    <p id="description">${p.description}</p>
    <h3>Evolution</h3>
    <ul class="evolution">`
      p.stages.forEach(pokemon => {
        index = GetIndex(pokemon);
        list.innerHTML += `
        <li type="button" onclick="SelectPokemon('${pokemon.name}'); event.stopPropagation();" class="carta-pokemon">
            <div class="card">
              <div class="info">
                <span>${pokemon.name}</span>
                <span>#${index}</span>
              </div>
              <img src="${pokemon.img}" alt="${pokemon.name}" class="gif">
              <ul class="types" id="${pokemon.name.toLowerCase()}-type">
                ${pokemon.types.map(t => `<li class="${t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}"><button onclick="ToggleType('${t}'); event.stopPropagation();">${t}</button></li>
                `).join("")}
              </ul>
              <p class="description">${pokemon.description}</p>
            </div>
          </li>`;
      list.innerHTML += p.stages.indexOf(pokemon) == p.stages.length - 1 ? "" : `<ul class="evolvesTo"><li><h5> Evolves to </h5></li><li><h5> -> </h5></li></ul>`
      });
}