const express = require("express");
const app = express();
const port = 8080;
const api = "https://pokeapi.co/api/v2/pokemon"

//functions
const bringPokemon = async (id)=>{
    const payload = await fetch(`${api}/${id}`)
    const data = await payload.json()
    const datosPokemon = {
        id:data.id,
        name:data.name,
        img:data.sprites.front_default
    }
    return datosPokemon
};

const bringPokemons =async (number)=>{
    const pokeNames = []
    for(let i = 1; i <= number; i++){
        pokeNames.push(await bringPokemon(i))
    }
    return pokeNames
};

const getPokemonInfo = async (request, response)=>{
    const data = await bringPokemons(20);
    response.setHeader("Content-Type", "text/html");
    response.send(data);
    response.end();
};

//Manejar las peticiones
//app.use(respuesta)
app.use(express.json());
app.use('/public', express.static('paginaPokemon'));

app.get('/', getPokemonInfo); //Trae algo

app.listen(port,() => {
    console.log(`Inicializado en el puerto ${port}`);
    console.log(`http://localhost:${port}`);
});