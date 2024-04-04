'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    //Not input
    if (!guess) {
      displayMessage('Not a Number');
      //Wins
    } else if (guess == secretNumber) {
      displayMessage('Correct!!');
      document.querySelector('.number').textContent = secretNumber;
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30 rem';
      //high score
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //Not wins
    } else if (guess != secretNumber) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    score = 0;
    displayMessage('You Lose :p');
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //clean input
  document.querySelector('.guess').value = '';
  //Restore Values
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15 rem';
  document.body.style.backgroundColor = '#222';
  //Re asign values
  score = Number(document.querySelector('.score').textContent);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
