//Global variables

//Grabs display element
const display = document.getElementById("countdown");
//display default time
display.textContent = 25+ ":"+0+0;

let counter;
let timeLeft;
let timer = false;

//Model -----------------------------------
function countdown(time){
  //clears any existing timers
  timer = true;
  clearInterval(counter);
//  debugger;
  let now = Date.now();
  let then = now + (time * 1000);

  displayTimeLeft(time);
  console.log(timer);
  counter = setInterval(() => {
    timeLeft = Math.round((then-Date.now())/1000);
    displayTimeLeft(timeLeft);
    if(timeLeft<=0){
      clearInterval(counter);
      timer=false;
      console.log(timer);
      return;
      }
    }, 1000)
}
//Pomodoro = 25 min timer + 5 min timer
// when work timer is finished, execute pause timer !
// find out if timer is finished
function pomodoro(work, pause) {
  work = countdown(work);
  if(timer==false){
    countdown(pause);

  }

  console.log(timeLeft);
}



//View-------------------------------

function displayTimeLeft(timeLeft){
  let min = Math.floor(timeLeft/60);
  let sec = Math.floor(timeLeft%60);
  const info = min + ":" + (sec<10 ? "0"+sec :""+sec);
  display.textContent = info;
  document.title = info;
}

//Controller ------------------------------
let play = document.getElementById("play");
play.addEventListener("click", ()=>pomodoro(5, 15));

//let stop = document.getElementById("stop");
//stop.addEventListener("click", ()=> console.log("stop"));

//let pause = document.getElementById("pause");
//pause.addEventListener("click", ()=> console.log("pause"));

let redo = document.getElementById("redo");
redo.addEventListener("click", ()=> pomodoro(5, 5));
