let slides = document.querySelectorAll(".slide");
let imgIndex;

function start() {
    imgIndex = 0;
    show();
}
start();

function show() {
    // Reset All
    slides.forEach((slide) => {
        slide.style.display = "none";
        slides[imgIndex].classList.remove("fade");
    });
    // show the desired img
    slides[imgIndex].style.display = "block";
    slides[imgIndex].classList.add("fade");
}

function rightClick() {
    // press 0 => 1
    // ....
    // press 3 => 0
    if (imgIndex < slides.length - 1) {
        imgIndex++;
        show();
    } else {
        start();
    }
}
let next = setInterval(function () { rightClick(); }, 5000);

function leftClick() {
    // press 3 => 0
    // ....
    // press 0 => 3
    clearInterval(next);
    if (imgIndex > 0) {
        imgIndex--;
        show();
    } else {
        imgIndex = slides.length - 1;
        show();
    }
    setTimeout(function () {
        next = setInterval(function () { rightClick(); }, 5000);
    }, 3000);
}

function go(index) {
    imgIndex = index;
    show();
}

