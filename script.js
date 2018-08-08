//Global variables
// display element
const display = document.getElementById("countdown");
let session = document.getElementById("session");
let counter;
let timeLeft;

//Model -----------------------------------
function countdown(time){
  //clears any existing timers
  clearInterval(counter);
  //debugger;
  let now = Date.now();
  let then = now + (time * 1000);
  displayTimeLeft(time);

  counter = setInterval(() => {
    session.textContent ="Work!"
    timeLeft = Math.round((then-Date.now())/1000);
    displayTimeLeft(timeLeft);

    if(timeLeft<0){
      clearInterval(counter);
      session.textContent ="Pause!"
      countdown(12);
      timeLeft = Math.round((then-Date.now())/1000);

      displayTimeLeft(timeLeft);

      if(timeLeft<0){
        clearInterval(counter);
        return;
      }
      }
    }, 1000)
}




//View-------------------------------

//display default time = 25 min
display.textContent = 25+ ":"+0+0;
// display session: work or pause
session.textContent = "Just do it!";
function displayTimeLeft(timeLeft){
  let min = Math.floor(timeLeft/60);
  let sec = Math.floor(timeLeft%60);
  const info = min + ":" + (sec<10 ? "0"+sec :""+sec);
  display.textContent = info;
  session.textContent ="Work!"
  console.log(info);
  document.title = info;
}

//Controller ------------------------------
let play = document.getElementById("play");
play.addEventListener("click", ()=>countdown(5));


//let stop = document.getElementById("stop");
//stop.addEventListener("click", ()=> console.log("stop"));

//let pause = document.getElementById("pause");
//pause.addEventListener("click", ()=> console.log("pause"));

let redo = document.getElementById("redo");
redo.addEventListener("click", ()=> countdown(5));
