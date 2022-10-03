let targetDate = '1 jan 2023';
let daysEle = document.getElementById('days');
let hoursEle = document.getElementById('hours');
let minutesEle = document.getElementById('minutes');
let secondsEle  = document.getElementById('seconds');

countdown();

setInterval(countdown, 1000);



function countdown() {
    let newYearDate = new Date(targetDate);
    let currentDate = new Date();
    let totalSeconds = Math.floor((newYearDate - currentDate) / 1000);

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let minutes = Math.floor((totalSeconds / 60) % 60);
    let seconds = Math.floor(totalSeconds % 60);
    
    daysEle.innerText = days;
    hoursEle.innerText = hours;
    minutesEle.innerText = minutes;
    secondsEle.innerText = seconds;
}

