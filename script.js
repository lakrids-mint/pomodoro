//Globals
const display = document.getElementById("countdown");
let session = document.getElementById("session");
//variable to hold setInterval in order to use it in clearInterval
let counter;
//Holds the calculation of time left
let timeLeft;

//if timer off = false, if on = true
let start = false;

let audio = document.getElementById("sound");
let container = document.getElementById("container")

let play = document.getElementById("play");
play.addEventListener("click", ()=>pomodoro());


//calls the countdown with the pomodoro pattern of 25 min. work, 5 min. pause
function pomodoro(){
  countdown(5, "Work!!", ()=>countdown(3,"Pause!", ()=>
      toggle(start)))
  toggle(start);
  }

// timer
function countdown(time, message, next){
  //clears any existing timers
  clearInterval(counter);

  start=true;
  let now = Date.now();
  let then = now + (time * 1000);
  displayTimeLeft(time);
  session.textContent = message;

  counter = setInterval(() => {
    timeLeft = Math.round((then-Date.now())/1000);
    displayTimeLeft(timeLeft);

    if(timeLeft<=0){
      clearInterval(counter);
      start=false;

      next();

      return;
    }
  }, 1000)
}

//Updates display-------------------------------
//displays default time = 25 min
display.textContent = 25+ ":"+0+0;
// display session: "encouragement", work or pause
session.textContent = "Do it well, do it now.";

function displayTimeLeft(timeLeft){

  let min = Math.floor(timeLeft/60);
  let sec = Math.floor(timeLeft%60);

  // displays time nicely
  const info = min + ":" + (sec<10 ? "0"+sec :""+sec);
  display.textContent = info;
  document.title = info;
}

function toggle(start){
  if (start == true) {
    play.innerHTML = "Stop";
    container.setAttribute("class", "back");

  } else if(start ==false){
      play.innerHTML = "Start";
      container.setAttribute("class", "");
      audio.play();
    }
}
