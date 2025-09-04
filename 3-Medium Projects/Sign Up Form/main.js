let logins = document.querySelectorAll(".container > div:not(:last-child)");
let prev = document.querySelector(".prev");
let nxt = document.querySelector(".nxt");
let steps = document.querySelectorAll(".steps li");
let loginIndex;
function start() {
    loginIndex = 0;
    show();
}

start();
function show() {
    // reset 
    logins.forEach((el) => {
        el.style.display = "none";
    });

    steps.forEach((el) => {
        el.classList.add("purple");
        el.classList.remove("blue");
    });


    // show
    logins[loginIndex].style.display = "block";
    steps[loginIndex].classList.remove("purple");
    steps[loginIndex].classList.add("blue");

}

nxt.onclick = function () {
    let valid = true;
    logins[loginIndex].querySelectorAll("input").forEach((el) => {
        if (el.value.trim() == "") {
            valid = false;

        }
    });

    logins[loginIndex].querySelectorAll("input").forEach((el) => {
        if (!el.checkValidity()) {
            el.reportValidity(); // shows default browser validation message
            valid = false;
        }
    });

    if (!valid) {
        alert("please enter the a a valid values");
        return;
    }

    // disable clicking index 2
    if (loginIndex < logins.length - 1) {
        prev.style.display = "block";
        loginIndex++;
        show();
    }
    if (loginIndex == logins.length - 1) {
        this.innerHTML = "Submit";
    }
};
prev.onclick = function () {
    // disable clicking index 0
    if (loginIndex > 0) {
        loginIndex--;
        show();
    }


    if (loginIndex == 0) {
        this.style.display = "none";
    }

    if (loginIndex != logins.length - 1) {
        nxt.innerHTML = "Next";
    }
}

