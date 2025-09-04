
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


let count = setInterval(function () {

    // from 1971 until now
    // fixed Date
    let fixedDate = new Date("2025-08-28T07:58:00").getTime();
    let timeNow = new Date().getTime();

    let diff = fixedDate - timeNow;

    let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24)); // days left
    let hoursLeft = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // remain hours in ml and then in hours
    let minutesLeft = Math.floor(diff % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60)); // remain minutes in ml and then in min
    let secondsLeft = Math.floor(diff % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000); // ...

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;

    if (diff < 0) {
        clearInterval(count);
        days.innerHTML = hours.innerHTML = minutes.innerHTML = seconds.innerHTML = 0;
    }


}, 1000); 