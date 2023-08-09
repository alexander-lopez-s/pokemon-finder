import fetchPokemonData from "../apis/fetchPokemonData.js";
import createPokemonCard from "../components/createPokemonCard.js";
import removeElementIfExists from "../utils/removeElementIfExists.js"
import dom from "../dom.js"
import pokemonData from "../data.js"

let currentPokemonCard = null;

async function displayPokemonCard(pokemonId) {
   
    const fetchedPokemon = await fetchPokemonData(pokemonId);
    const newPokemonCard = createPokemonCard(fetchedPokemon);

    removeElementIfExists(currentPokemonCard);
    dom.container.appendChild(newPokemonCard);
    currentPokemonCard = newPokemonCard;

}

export default displayPokemonCard