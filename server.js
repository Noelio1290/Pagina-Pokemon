const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function(){
    console.log(`Inicializado en el puerto ${port}`);
    console.log(`http://localhost:${port}`);
});

/*function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>res.json)
    .then((data)=>console.log(data))
};*/

const bringPokemon = async (id)=>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await res.json()
    console.log(data.name)
};

const bringPokemons =(number)=>{
    for(let i = 1; i <= number; i++){
        bringPokemon(i)
    }
};

//fetchPokemon(1)
//bringPokemon(1)
//bringPokemon(2)
//bringPokemon(3)
//bringPokemon(4)
//bringPokemon(5)
//bringPokemon(6)
//bringPokemon(7)
//bringPokemon(8)
//bringPokemon(9)
//bringPokemon(10)
bringPokemons(10)