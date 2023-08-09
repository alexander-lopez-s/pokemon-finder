import dom from "../dom.js";

function handelErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    dom.container.appendChild(errorMessage);
}

export default handelErrorMessage;