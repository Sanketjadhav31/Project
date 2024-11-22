// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const feedback = document.getElementById('feedback');
const attemptsSpan = document.getElementById('attempts');

guessBtn.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  attempts++;
  attemptsSpan.textContent = attempts;

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    feedback.style.color = '#2ecc71';
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    feedback.textContent = '📉 Too low! Try again.';
    feedback.style.color = '#f1c40f';
  } else {
    feedback.textContent = '📈 Too high! Try again.';
    feedback.style.color = '#f1c40f';
  }
});

resetBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsSpan.textContent = attempts;
  feedback.textContent = 'Start guessing!';
  feedback.style.color = '#fff';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
});
