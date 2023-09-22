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
        appendSec.innerHTML = second <= 9 ? "0" + second : second;
        miliSecond = 0;
    }
    // if (second > 9) {
    //     appendSec.innerHTML = second;
    // }
    if(second > 59) {
        second = 0;
        minute++;
        appendMin.innerHTML = minute <= 9 ? "0" + minute : minute ;
    }
    else{
        appendMin.innerHTML = minute <= 9 ? "0" + minute : minute;;
    }
    if(minute > 59){
        hour++;
        minute = 0;
        appendHour.innerHTML = hour <= 9 ? "0" + hour : hour;
    }
    else {
        appendHour.innerHTML = hour <= 9 ? "0" + hour : hour;
    }


}



// let unit = "00";
// let tens = "00";
// let hundred = "00";
// let thousand = "00";
// const hour = document.getElementById("hour");
// const mins = document.getElementById("mins");
// const seconds = document.getElementById("seconds");
// const miliSecs = document.getElementById("miliSecs");
// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");
// const resetBtn = document.getElementById("resetBtn");
// let Interval;

// startBtn.onclick = function () {
//     clearInterval(Interval);
//     Interval = setInterval(startTimer, 10);
// }

// stopBtn.onclick = function () {
//     clearInterval(Interval)
// }

// resetBtn.onclick = function () {
//     clearInterval(Interval);
//     unit = "00"
//     tens = "00";
//     hundred = "00";
//     thousand = "00";
//     miliSecs.innerHTML = unit;
//     seconds.innerHTML = tens;
//     mins.innerHTML = hundred;
//     hour.innerHTML = thousand;
// }

// function startTimer() {
//     unit++;
//     if(unit <= 9){
//         miliSecs.innerHTML = "0" + unit;

//     }
//     if(unit > 9){
//     miliSecs.innerHTML = unit;

//     }

//     if(unit > 99){
//         tens++;
//     seconds.innerHTML = "0" + tens;
//     unit = 0;
//     miliSecs.innerHTML = "0" + 0;
//     }

//     if (tens > 9){
//     seconds.innerHTML = tens;

//     }
// }