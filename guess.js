
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let numOfGuess = [];
let guessCount = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number.');
  } else if (guess < 1) {
    alert('Number must be > 1');
  } else if (guess > 100) {
    alert('Number must be < 100');
  } else {
    numOfGuess.push(guess);
    if (guessCount === 11) {
      displayGuess('guess');
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is To Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is to High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  guessCount++;
  remaining.innerHTML = `${11 - guessCount}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2 style="font-size:20px; color:#161616;">${message}</h2>`;
}


function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" style="font-size:24px; color:#f7e846; text-decoration:underline; cursor:pointer;">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numOfGuess = [];3
    guessCount = 1;
    remaining.innerHTML = `${11 - guessCount}`;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    userInput.removeAttribute(`disabled`);
    startOver.removeChild(p);
    playGame = true;
  });
}
