'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;

let highscoreEl = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscoreEl) {
      highscoreEl = score;
      document.querySelector('.highscore').textContent = highscoreEl;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!';
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
      score--;
      if (score === 0) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'You lost the Game!';
        document.querySelector('body').style.background = 'red';
      }
    } else {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'You lost the Game!';
    }
  }
  document.querySelector('.score').textContent = score;
});
//   else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'Too High!';
//       document.querySelector('.guess').value = '';
//       document.querySelector('.guess').focus();
//       // score = score - 1;
//       score--;
//       if (score === 0) {
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.message').textContent = 'You lost the Game!';
//         document.querySelector('body').style.background = 'red';
//       }
//     } else {
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.message').textContent = 'You lost the Game!';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       document.querySelector('.guess').value = '';
//       document.querySelector('.guess').focus();
//       // score = score - 1;
//       score--;
//       if (score === 0) {
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.message').textContent = 'You lost the Game!';
//         document.querySelector('body').style.background = 'red';
//       }
//     } else {
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.message').textContent = 'You lost the Game!';
//     }
//   }
//   document.querySelector('.score').textContent = score;
// });

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.background = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
});
