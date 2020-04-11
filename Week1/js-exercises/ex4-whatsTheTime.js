/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage.
  // Make sure it 's written in the HH:MM:ss notation (hour, minute, second).
   Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

function displayCurrentTime() {
  // your code goes in here
  var fullDate = new Date();

  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  let second = fullDate.getSeconds();
  // 12 hour 
  // if (hour == 0) {
  //   hour = 12;
  // }
  // if (hour > 12) {
  //   hour = hour - 12;
  // }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  let time = hour + ':' + ' ' + minute + ':' + ' ' + second;
  let timeRun = document.getElementById('timeRun').innerHTML = time;
};

setInterval(displayCurrentTime, 1000);
window.onload = displayCurrentTime;