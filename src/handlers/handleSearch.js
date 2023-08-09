import fetchPokemonData from "../apis/fetchPokemonData.js";
import dom from "../dom.js";
import createPokemonCard from "../components/createPokemonCard.js";

let currentPokemonCard = null;
let inputIsValid = true;

function removeElementIfExists(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

function displayErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    const existingErrorMessage = dom.container.querySelector('.error-message');
    removeElementIfExists(existingErrorMessage);

    dom.container.appendChild(errorMessage);
}

async function displayValidPokemonData(pokemonId) {
    try {
        const fetchedPokemon = await fetchPokemonData(pokemonId);
        console.log(fetchedPokemon);

        const newPokemonCard = createPokemonCard(fetchedPokemon);

        removeElementIfExists(currentPokemonCard);
        dom.container.appendChild(newPokemonCard);
        currentPokemonCard = newPokemonCard;
    } catch (error) {
        console.error('Error displaying Pokémon data', error);
    }
}

function handleInvalidInput() {
    const errorMessage = dom.container.querySelector('.error-message');
    removeElementIfExists(errorMessage);

    if (currentPokemonCard) {
        removeElementIfExists(currentPokemonCard);
        currentPokemonCard = null;
    }

    displayErrorMessage('Please enter a valid Pokémon ID between 1 and 1010.');
    inputIsValid = false;
}

async function displayPokemonData() {
    const pokemonId = dom.searchBar.value;

    if (isNaN(pokemonId) || pokemonId < 1 || pokemonId > 1010 || (pokemonId.length > 1 && pokemonId.startsWith('0'))) {
        if (inputIsValid) {
            handleInvalidInput(pokemonId);
        }
    } else {
        const errorMessage = dom.container.querySelector('.error-message');
        removeElementIfExists(errorMessage);

        inputIsValid = true;
        await displayValidPokemonData(pokemonId);
    }
}

export default displayPokemonData;
