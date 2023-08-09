import removeElementIfExists from "../utils/removeElementIfExists.js";
import dom from "../dom.js";

function handelErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    const existingErrorMessage = dom.container.querySelector('.error-message');
    removeElementIfExists(existingErrorMessage);

    dom.container.appendChild(errorMessage);
}

export default handelErrorMessage;