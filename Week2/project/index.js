//............................................firstbtns/**
//   In this week 's project you'll be making a Pomodoro Clock!
//   A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

//   If the timer is running, the user can 't change the session length anymore
//   Use at least 3 functions
//   Display minutes and seconds
//   If the timer finishes the timer should be replaced by the message: Time 's up!
//  *
//  */
let sessionNum = document.getElementById('sessionNum');
let btnDown = document.getElementById('btnDown');
let btnUp = document.getElementById('btnUp');
let sessionRun = document.getElementById('sessionRun');
let btnPause = document.getElementById('btnPause');
let btnPlay = document.getElementById('btnPlay');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let secondTimeLeft = sessionNum.innerHTML * 60;
let isSesionRuning = false;

btnUp.addEventListener('click', function() {
  let valueUp = parseInt(sessionNum.innerHTML);
  if (isSesionRuning) {
    valueUp++;
    sessionNum.innerHTML = valueUp;
    sessionRun.innerHTML = `${addZero(valueUp)} : 00`;
    if (clockTime !== false) {
      romove.addEventListener('click', btnUp);
    }
  }
});

btnDown.addEventListener('click', function() {
  let valueDown = parseInt(sessionNum.innerHTML);
  if (isSesionRuning) {
    valueDown--;
    sessionNum.innerHTML = valueDown;
    sessionRun.innerHTML = `${addZero(valueDown)} : 00`;
    if (sessionNum.innerHTML == -1) {
      sessionNum.innerHTML = '0';
      sessionRun.innerHTML = 'times up';
    }
    if (clockTime !== false) {
      romove.addEventListener('click', btnDown);
    }
  }
});

btnPlay.addEventListener('click', function() {
  // minutes.innerHTML = sessionNum.innerHTML;
  if (!isSesionRuning) return;
  clockTime = setInterval(() => {
    secondTimeLeft--;
    displayTime();
  }, 1000);
  // setInterval(clockTime);
  isSesionRuning = true;
});
btnPause.addEventListener('click', function() {
  isSesionRuning = true;
  btnPause.classList.toggle('paused');
});

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}
let clockTime = setInterval(() => {
  if (!btnPause.classList.contains('paused')) {
    secondTimeLeft--;
    displayTime();
  }
}, 1000);

function displayTime() {
  let secondsLeft = secondTimeLeft;
  var result = '';
  let seconds = secondsLeft % 60;
  let minutes = parseInt(secondsLeft / 60) % 60;
  result += `${addZero(minutes)}:${addZero(seconds)}`;
  sessionRun.innerHTML = result;
  // if (secondsLeft == -1) {
   // clearInterval(clockTime);
  //   secondsLeft = 0;
  //   sessionRun.innerText = 'times up';
  // }
}
