import dom from "../dom.js";
import validateAndDisplayPokemonData from "../handlers/handleSearch.js"

const addListeners = () => {
   dom.searchButton.addEventListener('click', validateAndDisplayPokemonData);
   dom.searchBar.addEventListener('keydown', (event) => {
   // Check if the pressed key is Enter (key code 13)
   if (event.key === 'Enter' || event.keyCode === 13) {
    validateAndDisplayPokemonData();
   }
 });
};

export default addListeners;