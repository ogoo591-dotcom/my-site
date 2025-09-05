const huree = document.createElement("div");
huree.classList.add("huree");
const box = document.createElement("div");
box.classList.add("too");
const deed = document.createElement("div");
deed.classList.add("deed");
const watch = document.createElement("p");
watch.innerText = "00:00:00";
watch.classList.add("tsag");
const click = document.createElement("div");
click.classList.add("towch");
const start = document.createElement("button");
start.innerText = "Start";
start.classList.add("start-click");
const pause = document.createElement("button");
pause.innerText = "Pause";
pause.classList.add("pause-click");
const reset = document.createElement("button");
reset.innerText = "Reset";
reset.classList.add("reset-click");
const zurag = document.createElement("IMG");
zurag.setAttribute("src", "./picture/3.stop.jpg");
zurag.classList.add("zurag");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

function startStopWatch() {
  console.log("starts");
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
}
start.onclick = startStopWatch;

function pauseStopWatch() {
  console.log("pauses");
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
}
pause.onclick = pauseStopWatch;

function resetStopWatch() {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  watch.innerText = `00:00:00`;
}
reset.onclick = resetStopWatch;

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  watch.innerText = `${hrs < 10 ? `0${hrs}` : hrs}:${
    mins < 10 ? `0${mins}` : mins
  }:${secs < 10 ? `0${secs}` : secs}`;

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}

deed.appendChild(watch);
deed.appendChild(click);
click.appendChild(start);
click.appendChild(pause);
click.appendChild(reset);
box.appendChild(deed);
box.appendChild(zurag);
huree.appendChild(box);
document.body.appendChild(huree);
