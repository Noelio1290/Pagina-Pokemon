const contenedor = document.querySelector('.pokemon-container')
const url = 'http://localhost:8080/'

const getPokemons = async ()=>{
  const pokeData = await fetch(url)
  const pokems = await pokeData.json() 
  return pokems
  }

const printPokemon = async ()=>{
  const listPokemon = await getPokemons()
  contenedor.innerHTML = ''
  for(let pokemon of listPokemon)
    contenedor.innerHTML +=
    `
    <label class='icon' for="icon${pokemon.id}">
      <img class="img-pokemon" src="${pokemon.img}" alt="">
      <h4 class="text-info">"#${pokemon.id}" </h4>
      <h4 class="text-info">${pokemon.name} </h4>
    </label>
    `
};

printPokemon()