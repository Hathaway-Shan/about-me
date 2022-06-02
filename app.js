// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const showAnswerButton = document.getElementById('show-animal-button');
const animalSection = document.getElementById('animal-reveal');

const nameInput = document.getElementById('this-fluff');
cont nameDisplay = document.getElementById('name-display');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');
// set event listeners
tosCheckbox.addEventListener('change', () => {
    showAnswerButton.disabled = !tosCheckbox.checked;
});
showAnswerButton.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});



    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
