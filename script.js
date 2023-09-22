let miliSecond = "00";
let second = "00";
let minute = "00";
let hour = "00";
const appendMiliSec = document.getElementById("miliSecs");
const appendSec = document.getElementById("seconds");
const appendMin = document.getElementById("mins");
const appendHour = document.getElementById("hour");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let Interval;

startBtn.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
}

stopBtn.onclick = function () {
    clearInterval(Interval)
}

resetBtn.onclick = function () {
    clearInterval(Interval);
    miliSecond = "00";
    second = "00";
    minute = "00";
    hour = "00";
    appendMiliSec.innerHTML = miliSecond;
    appendSec.innerHTML = second;
    appendMin.innerHTML = minute;
    appendHour.innerHTML = hour
}

function startTimer() {
    miliSecond++;
    if (miliSecond <= 9) {
        appendMiliSec.innerHTML = "0" + miliSecond;
    }
    else {
        appendMiliSec.innerHTML = miliSecond
    }
    if (miliSecond > 99) {
        second++;
        appendSec.innerHTML =  "0" + second;
        miliSecond = 0;
    }
    if (second > 9) {
        appendSec.innerHTML = second;
    }
    if(second > 59) {
        minute++;
        second = 0;
        appendMin.innerHTML = "0" + minute;
    }
    else{
        appendMin.innerHTML =  minute;
    }
    if(minute > 59){
        hour++;
        minute = 0;
        appendHour.innerHTML = "0" + hour;
    }
    else {
        appendHour.innerHTML = hour;
    }


}
