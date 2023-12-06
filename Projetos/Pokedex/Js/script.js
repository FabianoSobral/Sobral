// Variaveis Globais

const pokemonName = document.querySelector(".pokemon_name");

const pokemonNumber = document.querySelector(".pokemon_number");

const pokemonImage = document.querySelector(".pokemon_image");

const form = document.querySelector(".form");
const input = document.querySelector (".input_search");

const btnprev = document.querySelector(".btn-prev");

const btnnext = document.querySelector(".btn-next");

let searchPokemon = 0;

// conectando com a Api

const fetchPokemon =  async (pokemon)=> {
const APIResponse =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


if (APIResponse.status === 200) {
   
const data = await APIResponse.json();
return data;

} else {

    
}

};

// redenrizar os dados

const renderpokemon = async (pokemon) => { 
pokemonName.innerHTML = "Carregando..."; 
pokemonNumber.innerHTML = ""; 
const data = await fetchPokemon(pokemon);

if (data) {
 pokemonName.innerHTML = data.name;
pokemonNumber.textContent = data.id;
pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
input.value = "";
searchPokemon = data.id;

} else {

pokemonName.innerHTML = "Não encontrado!!." 
pokemonImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFXk5J2dr6B2vy9h7OTrBrqHxSOl_GrcGCw&usqp=CAU";   
}



console.log(data)
};

// Capturar pokemon pelo input

form.addEventListener("submit",(event) =>{
 event.preventDefault();
 renderpokemon(input.value.toLowerCase());
 
});

// Eventos dos Botões Prev e Next

btnnext.addEventListener("click",() =>{
 searchPokemon += 1
 renderpokemon(searchPokemon);

});

btnprev.addEventListener("click",() =>{


 if (searchPokemon > 1) {
    searchPokemon -= 1
    renderpokemon(searchPokemon);  
 }  
 });
   
 
renderpokemon(2);