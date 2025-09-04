let container = document.querySelector(".container");
let forms = document.querySelectorAll(".container .form");
let name = document.querySelector(".name");
let password = document.querySelector(".password");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let span = document.querySelectorAll(".index span");
let line = document.querySelector(".line");
let index, arr, spans;
function start() {
    index = 0;
    show();
}

start();

function show() {
    // reset
    spans = Array.from(span);
    arr = Array.from(forms);
    arr.forEach((el) => {
        el.classList.add("disappear");
    });
    spans.forEach((el) => {
        el.style.backgroundColor = "white";
    });

    // show
    arr[index].classList.remove("disappear");
    spans[index].style.backgroundColor = "red";
    if (index == 1) {
        line.style.width = "100px";
    } else {
        line.style.width = "30px";
    }
}

next.onclick = function () {
    // 0 => 1
    // 1 => sign in
    index++;
    if (index <= arr.length - 1) {
        show();
        previous.style.display = "inline";
    } else {
        // reset
        arr.forEach((el) => {
            el.classList.add("disappear");
        });
        next.innerHTML = "Sign in";
    }
};

previous.onclick = function () {
    index--;
    if (index >= 0) {
        show();
        next.innerHTML = "Next";
    } else {
        // reset
        arr.forEach((el) => {
            el.classList.add("disappear");
        });
        previous.style.display = "none";
    }
};
