const form = document.querySelector('#focus-form');
const result = document.querySelector('#result');
const countdown = document.querySelector('#countdown');
const restartButton = document.querySelector('#restart');

const totalSeconds = 6 * 60;
let secondsRemaining = totalSeconds;
let timerId;

function updateClock() {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  countdown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function finish() {
  clearInterval(timerId);
  form.hidden = true;
  result.hidden = false;
}

function startTimer() {
  clearInterval(timerId);
  secondsRemaining = totalSeconds;
  updateClock();
  timerId = setInterval(() => {
    secondsRemaining -= 1;
    updateClock();
    if (secondsRemaining <= 0) finish();
  }, 1000);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkValidity()) finish();
});

restartButton.addEventListener('click', () => {
  result.hidden = true;
  form.hidden = false;
  form.reset();
  startTimer();
});

startTimer();
