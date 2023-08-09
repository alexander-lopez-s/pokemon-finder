
function removeElementIfExists(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

export default removeElementIfExists;