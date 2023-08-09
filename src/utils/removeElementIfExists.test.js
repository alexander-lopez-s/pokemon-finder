/**
 * @jest-environment jsdom
 */


import removeElementIfExists from './removeElementIfExists';

test('removes element if it exists', () => {
    // Create a mock parent node and element
    const parent = document.createElement('div');
    const element = document.createElement('span');
    parent.appendChild(element);

    // Call the function
    removeElementIfExists(element);

    // Assert that the element is removed
    expect(parent.contains(element)).toBe(false);
});

