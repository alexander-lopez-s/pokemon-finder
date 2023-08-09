import fetchPokemonData from "../apis/fetchPokemonData.js";
import dom from "../dom.js";
import createPokemonCard from "../components/createPokemonCard.js";

let currentPokemonCard = null;
let inputIsValid = true;

async function displayPokemonData() {
    const pokemonId = dom.searchBar.value;
    
    // Check if the input is a valid number (including inputs with zeros)
    if (isNaN(pokemonId) || pokemonId < 1 || pokemonId > 1010 || (pokemonId.length > 1 && pokemonId.startsWith('0'))) {
        if (inputIsValid) {
            const errorMessage = document.createElement('p');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'Please enter a valid Pokémon ID between 1 and 1010.';
            
            const existingErrorMessage = dom.container.querySelector('.error-message');
            if (existingErrorMessage) {
                dom.container.removeChild(existingErrorMessage);
            }
            
            dom.container.appendChild(errorMessage);
            
            // Remove the current Pokemon card
            if (currentPokemonCard) {
                dom.container.removeChild(currentPokemonCard);
                currentPokemonCard = null;
            }
            
            inputIsValid = false;
        }
    } else {
        const errorMessage = dom.container.querySelector('.error-message');
        if (errorMessage) {
            dom.container.removeChild(errorMessage);
        }
        
        inputIsValid = true;
        
        try {
            const fetchedPokemon = await fetchPokemonData(pokemonId);
            console.log(fetchedPokemon);
            
            const newPokemonCard = createPokemonCard(fetchedPokemon);
            
            // Remove the current Pokemon card
            if (currentPokemonCard) {
                dom.container.removeChild(currentPokemonCard);
            }
            
            dom.container.appendChild(newPokemonCard);
            currentPokemonCard = newPokemonCard;
        } catch (error) {
            console.error('Error displaying Pokémon data', error);
        }
    }
}

export default displayPokemonData;
