import fetchPokemonData from "../apis/fetchPokemonData.js";
import dom from "../dom.js";
import createPokemonCard from "../components/createPokemonCard.js";
import removeElementIfExists from "../utils/removeElementIfExists.js";
import handleErrorMessage from "../handlers/handleErrorMessage.js";
import pokemonData from "../data.js"

let currentPokemonCard = null;

async function displayPokemonData() {
    const pokemonId = dom.searchBar.value;
    if(pokemonId === pokemonData.pokemonId){
        return;
    }
    const errorMessage = dom.container.querySelector('.error-message');
     
    if (!pokemonId || isNaN(pokemonId) || pokemonId < 1 || pokemonId > 1010) {
        removeElementIfExists(currentPokemonCard);
        handleErrorMessage('Please enter a valid number between 1 and 1010.');
    } else {

        const fetchedPokemon = await fetchPokemonData(pokemonId);
        const newPokemonCard = createPokemonCard(fetchedPokemon);
        removeElementIfExists(errorMessage);
        removeElementIfExists(currentPokemonCard);
        dom.container.appendChild(newPokemonCard);
        currentPokemonCard = newPokemonCard;
      
    // Add pokemonData
      pokemonData.pokemonId = pokemonId;
    }


}

export default displayPokemonData;