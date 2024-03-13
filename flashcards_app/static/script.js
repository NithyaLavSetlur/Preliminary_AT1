const flashcards = [
];
let currentFlashcard = 0;

function showFlashcard(index) {
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.innerHTML = `<p>${flashcards[index].question}</p>`;
    updateDots(index);
}

function showAnswer() {
    const flashcardElement = document.getElementById('flashcard');
    const actionButton = document.getElementById('actionButton');
    const nextButton = document.getElementById('nextButton');
    flashcardElement.innerHTML = `<p>${flashcards[currentFlashcard].answer}</p>`;
    actionButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

function nextFlashcard() {
    const actionButton = document.getElementById('actionButton');
    const nextButton = document.getElementById('nextButton');
    currentFlashcard++;

    if (currentFlashcard < flashcards.length) {
        showFlashcard(currentFlashcard);
        actionButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
    } else {
        // All flashcards shown, reset to the first one
        currentFlashcard = 0;
        showFlashcard(currentFlashcard);
        actionButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
    }
}

function updateDots(index) {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';

    for (let i = 0; i < flashcards.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => {
            currentFlashcard = i;
            showFlashcard(currentFlashcard);
        };
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.dot');
    dots[index].classList.add('active');
}

function addFlashcard() {
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');

    const newFlashcard = {
        question: questionInput.value,
        answer: answerInput.value,
    };

    flashcards.push(newFlashcard);
    questionInput.value = '';
    answerInput.value = '';

    // Show the newly added flashcard
    currentFlashcard = flashcards.length - 1;
    showFlashcard(currentFlashcard);
}

function init() {
    showFlashcard(currentFlashcard);
}

init();