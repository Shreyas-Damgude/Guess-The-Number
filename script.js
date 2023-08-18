'use strict';

//Setting a Number
let fixed = Math.trunc(20 * Math.random()) + 1;

// Selecting elements
const dispHighscore = document.querySelector('.highscore');
const dispMessage = document.querySelector('.message');
const dispNumber = document.querySelector('.number');
const inputGuess = document.querySelector('.guess');
const dispScore = document.querySelector('.score');
const dispBody = document.querySelector('body');

//Selecting buttons
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

//Displaying Message
function displayMessage(message) {
  dispMessage.textContent = message;
}

//Guess The Number
function game() {
  const guess = +inputGuess.value;
  const score = +dispScore.textContent;

  !guess && displayMessage('⛔ No number!');

  if (guess) {
    if (guess === fixed) {
      dispBody.style.backgroundColor = '#60b347';
      const highscore = +dispHighscore.textContent;
      displayMessage('🎉 Correct number!');
      dispNumber.style.width = '30rem';
      dispNumber.textContent = fixed;
      if (score > highscore) {
        dispHighscore.textContent = score;
      }
    } else if (guess !== fixed) {
      if (score > 1) {
        displayMessage(guess > fixed ? '📈 Too high!' : '📉 Too low!');
        dispScore.textContent = score - 1;
      } else {
        displayMessage('😐 You lost the game!');
        dispScore.textContent = score - 1;
        dispNumber.textContent = fixed;
      }
    }
  }
}

btnCheck.addEventListener('click', game);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    game();
  }
});

//Updating UI
btnAgain.addEventListener('click', function () {
  fixed = Math.trunc(20 * Math.random()) + 1;
  dispBody.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  dispNumber.style.width = '15rem';
  dispNumber.textContent = '?';
  dispScore.textContent = 20;
  inputGuess.value = '';
});
