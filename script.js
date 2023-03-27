var circle = document.getElementById('circle');
var score = document.getElementById('score');
var time = document.getElementById('time');
var startBtn = document.getElementById('start-btn');
var timerId;
var counter = 0;

circle.addEventListener('click', function() {
  counter++;
  score.innerHTML = counter;
});

function countdown() {
  var seconds = parseInt(time.innerHTML);
  seconds--;

  if (seconds < 0) {
    clearInterval(timerId);
    alert('Game Over! You scored ' + counter + ' points!');
    counter = 0;
    score.innerHTML = counter;
    time.innerHTML = '30';
    startBtn.disabled = false;
  } else {
    time.innerHTML = seconds;
  }
}

startBtn.addEventListener('click', function() {
  startBtn.disabled = true;
  timerId = setInterval(countdown, 1000);
});
