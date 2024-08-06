let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.getElementById("displayTime");
let timer = null;

const updateDisplay = () => {
    const h = hours < 10 ? `0${hours}` : hours;
    const m = minutes < 10 ? `0${minutes}` : minutes;
    const s = seconds < 10 ? `0${seconds}` : seconds;
    displayTime.textContent = `${h}:${m}:${s}`;
};

const stopwatch = () => {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
};

const watchStart = () => {
    if (timer !== null) clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
};

const watchStop = () => {
    clearInterval(timer);
    timer = null;
};

const watchReset = () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    updateDisplay();
    timer = null;
};

document.getElementById("start").onclick = watchStart;
document.getElementById("stop").onclick = watchStop;
document.getElementById("reset").onclick = watchReset;

