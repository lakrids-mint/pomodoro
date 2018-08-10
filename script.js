//Global variables
const display = document.getElementById("countdown");
let session = document.getElementById("session");
let counter;
let timeLeft;

//pomodoro
function pomodoro(){
  countdown(5, "Work!!", ()=>countdown(3,"Pause!", ()=>0))
}

//Model -----------------------------------
function countdown(time, message, next){
  //clears any existing timers
  clearInterval(counter);
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
      next();
      return;
    }
  }, 1000)
}

function reset(){
  clearInterval(counter);
  display.textContent = "0:00";
  session.textContent = "Do it well, do it now.";
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

let redo = document.getElementById("redo");
redo.addEventListener("click", ()=> reset());
