let time = 1000 * 60 * 5;  //5 min

const convertedstr = convertMilisecoundToString(time);
document.getElementById('starter').innerHTML = convertedstr;

function startTimer() {
    setInterval(() => {
        time -= 1000;
        const convertedstr = convertMilisecoundToString(time);
        document.getElementById('starter').innerHTML = convertedstr;
    }, 1000);
}

function convertMilisecoundToString(milisecound) {
    const min = Math.trunc(milisecound / (1000 * 60));
    const sec = ((milisecound % (1000 * 60)) / 1000).toFixed(0);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}