
let circularProgress = document.querySelector('.circular__progress'),
    progressValue = document.querySelector('.progress__value');

let progressStartValue = 0,
    progressEndValue = 90,
    progressSpeed = 20;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0)`

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    // console.log(progressStartValue)

}, progressSpeed)