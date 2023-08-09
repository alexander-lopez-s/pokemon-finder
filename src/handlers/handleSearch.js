import fetchPokemonData from "../apis/fetchPokemonData.js";
import dom from "../dom.js";
import createPokemonCard from "../components/createPokemonCard.js";
import removeElementIfExists from "../utils/removeElementIfExists.js";
import handleErrorMessage from "../handlers/handleErrorMessage.js";

let currentPokemonCard = null;

async function displayPokemonData() {
    const pokemonId = dom.searchBar.value;
    const errorMessage = dom.container.querySelector('.error-message');

    if (!pokemonId || isNaN(pokemonId) || pokemonId < 1 || pokemonId > 1010) {
        removeElementIfExists(currentPokemonCard);
        handleErrorMessage('Please enter a valid number between 1 and 1010.');
    } else {
        try {
            const fetchedPokemon = await fetchPokemonData(pokemonId);
            const newPokemonCard = createPokemonCard(fetchedPokemon);
            removeElementIfExists(errorMessage);
            removeElementIfExists(currentPokemonCard);
            dom.container.appendChild(newPokemonCard);
            currentPokemonCard = newPokemonCard;
        } catch (error) {
            console.error('Error displaying Pokémon data', error);
            handleErrorMessage('An error occurred while searching. Please try again.');
        }
    }
}

export default displayPokemonData;
