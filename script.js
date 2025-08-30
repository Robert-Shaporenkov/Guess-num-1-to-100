let guesses = 10;
let randomNum = Math.floor((Math.random() * 100) + 1);

function userGuess() {
    const GUESS_INPUT = document.getElementById("guessInput");
    const GUESS_BUTTON = document.getElementById("submitGuess");
    const USER_GUESS = parseInt(GUESS_INPUT.value);
    const RESULT = document.getElementById("result");

    if (isNaN(USER_GUESS) || USER_GUESS < 1 || USER_GUESS > 100) {
        RESULT.textContent = "Please enter a valid number between 1 and 100.";
    } else if (USER_GUESS == randomNum) {
        RESULT.textContent = "Congratulations! You guessed the correct number " + randomNum + "(in " + (10 - guesses + 1) + " guesses).";
        GUESS_BUTTON.disabled = true;
        GUESS_INPUT.disabled = true;
    } else if (USER_GUESS < randomNum) {
        guesses--;
        RESULT.textContent = "Higher. You have " + guesses + " guesses left.";
    } else {
        guesses--;
        RESULT.textContent = "Lower. You have " + guesses + " guesses left.";
    }
    if (guesses === 0 && USER_GUESS !== randomNum) {
        RESULT.textContent = "Game Over! The correct number was: " + randomNum;
        GUESS_BUTTON.disabled = true;
        GUESS_INPUT.disabled = true;
    }
}

function resetGame() {
    guesses = 10;
    const GUESS_INPUT = document.getElementById("guessInput");
    const GUESS_BUTTON = document.getElementById("submitGuess");
    const RESULT = document.getElementById("result");

    GUESS_INPUT.disabled = false;
    GUESS_BUTTON.disabled = false;
    GUESS_INPUT.value = "";
    RESULT.textContent = "You have 10 guesses";
    randomNum = Math.floor((Math.random() * 100) + 1);
}

