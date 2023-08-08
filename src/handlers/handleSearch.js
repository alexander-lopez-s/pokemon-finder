import fetchPokemonData from "../apis/fetchPokemonData.js";
import dom from "../dom.js";
import createPokemonCard from "../components/createPokemonCard.js";

let currentPokemonCard = null; // Store the current displayed Pokemon card

async function displayPokemonData() {
    const pokemonId = dom.searchBar.value;
    try {
        const fetchedPokemon = await fetchPokemonData(pokemonId);
        console.log(fetchedPokemon);
        
        const newPokemonCard = createPokemonCard(fetchedPokemon);
        
        if (currentPokemonCard) {
            // Remove the current displayed card before appending the new one
            dom.container.removeChild(currentPokemonCard);
        }
        
        dom.container.appendChild(newPokemonCard);
        
        // Update the current displayed card
        currentPokemonCard = newPokemonCard;

    } catch (error) {
        console.error('Error displaying Pokémon data');
    }
}

export default displayPokemonData;
