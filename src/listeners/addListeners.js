import dom from "../dom.js";
import handleSearch from "../handlers/handleSearch.js"

const addListeners = () => {
   dom.searchButton.addEventListener('click', handleSearch)
}

export default addListeners;