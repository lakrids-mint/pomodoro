//Global variables
let counter;
const display = document.getElementById("countdown");


//Model -----------------------------------
function countdown(time){
  //clear any existing timers
  //clearInterval(counter);
//  debugger;
  let now = Date.now();
  let then = now + (time * 1000);
  //why does it not display 70!?
  displayTimeLeft(time);

  counter = setInterval(() => {
    let timeLeft = Math.round((then-Date.now())/1000);


    displayTimeLeft(timeLeft);

    if(timeLeft<=0){
      let pause = countdown(300)
        if(timeLeft<=0){
          clearInterval(counter);
          return;

        }

    }

  }, 1000)

}

function pause() {

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
play.addEventListener("click", ()=>countdown(1500));


//let stop = document.getElementById("stop");
//stop.addEventListener("click", ()=> console.log("stop"));

//let pause = document.getElementById("pause");
//pause.addEventListener("click", ()=> console.log("pause"));

let redo = document.getElementById("redo");
redo.addEventListener("click", ()=> countdown(50));
