// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-animal-button');
const animalSection = document.getElementById('animal-reveal');

const nameInput = document.getElementById('name-input');
const imageSelect = document.getElementById('image-select');

const nameDisplay = document.getElementById('name-display');
const imageDisplay = document.getElementById('image-display');
// set event listeners
tosCheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !tosCheckbox.checked;
});
showAnswerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});


nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
});


    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
