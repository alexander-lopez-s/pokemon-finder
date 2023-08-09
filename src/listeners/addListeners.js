import dom from "../dom.js";
import displayPokemonData from "../handlers/handleSearch.js"

const addListeners = () => {

  // On 'click' event
  dom.searchButton.addEventListener('click', displayPokemonData);

  // On 'enter' event
  dom.searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      displayPokemonData();
    }
  });
}

export default addListeners;