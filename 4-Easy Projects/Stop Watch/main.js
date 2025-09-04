let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let moments = document.querySelector(".moments");

setInterval(function () {
    moments.textContent = Number(moments.textContent) + 1;
    if (moments.textContent == "100") {
        moments.textContent = "0";
    }
}, 10);


setInterval(function () {
    seconds.textContent = Number(seconds.textContent) + 1;
    if (seconds.textContent == "60") {
        seconds.textContent = "0";
    }
}, 1000);

setInterval(function () {
    minutes.textContent = Number(minutes.textContent) + 1;
    if (minutes.textContent == "60") {
        minutes.textContent = "0";
    }
}, 60000);

let stop = setInterval(function () {
    hours.textContent = Number(hours.textContent) + 1;
    if (hours.textContent == "24") {
        clearInterval(stop);
    }
}, 3600000);