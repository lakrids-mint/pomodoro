//Global variables
//Displays the counter/timer
const display = document.getElementById("countdown");
//To display different text depending on timer/session status
let session = document.getElementById("session");
//saving the setInterval in order to use it in clearInterval
let counter;
//Holds the calculation of time left
let timeLeft;
//if timer off = false, if on = true
let button = false;

let audio = document.getElementById("sound");
let container = document.getElementById("container")
//calls the countdown with the pomodoro pattern of 25 min. work, 5 min. pause
function pomodoro(){

  countdown(5, "Work!!", ()=>countdown(3,"Pause!", ()=>
      toggle(button)))
  toggle(button);
  }


//Model -----------------------------------
function countdown(time, message, next){
  //clears any existing timers
  clearInterval(counter);
  button=true;
  //debugger;
  let now = Date.now();
  let then = now + (time * 1000);
  displayTimeLeft(time);
  session.textContent = message;

  counter = setInterval(() => {
    timeLeft = Math.round((then-Date.now())/1000);
    displayTimeLeft(timeLeft);

    if(timeLeft<=0){
      clearInterval(counter);
      button=false;

      next();

      return;
    }
  }, 1000)
}



//View-------------------------------

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
  console.log(info);
  document.title = info;
}


//Controller ------------------------------

let play = document.getElementById("play");

play.addEventListener("click", ()=>pomodoro());

function toggle(button){
  if (button == true) {
    play.innerHTML = "Stop";
    container.setAttribute("class", "back");

  } else if(button ==false){
      play.innerHTML = "Start";
      container.setAttribute("class", "");
      audio.play();
    }
}
