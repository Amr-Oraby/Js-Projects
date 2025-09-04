let btns = document.querySelectorAll(".choice button ");
let user = document.querySelector(".user");
let computer = document.querySelector(".computer");
let result = document.querySelector(".result h2");
let rock = document.querySelector(".rock"); // img

let arr = Array.from(btns);

arr.forEach((btn) => {
    btn.onclick = function () {
        user.querySelector("img").src = rock.src;
        computer.querySelector("img").src = rock.src;
        // adding the animation
        let imgs = document.querySelectorAll(".container .game img");
        Array.from(imgs).forEach((img) => {
            img.style.cssText = "animation: jump 1.5s ease;";
            //  Reset animation after it ends
            img.addEventListener("animationend", function () {
                img.style.animation = "";
            });
        });
        // instantly put waiting...
        result.textContent = "Waiting...";
        result.className = "";

        // instantly disable the btns
        arr.forEach((b) => {
            b.classList.add("dis");
        });

        // after 1.5s show result
        setTimeout(function () {
            user.querySelector("img").src = btn.querySelector("img").src;
            user.querySelector("img").dataset.choice = btn.querySelector("img").dataset.choice;
            gameStart();
        }, 1500);

    };
});

let userVal;
let compVal;

function gameStart() {
    // choose random img
    let randIndex = Math.floor(Math.random() * arr.length);
    computer.querySelector("img").src = arr[randIndex].querySelector("img").src;
    computer.querySelector("img").dataset.choice = arr[randIndex].querySelector("img").dataset.choice;
    // getting data choice for comparison
    compVal = arr[randIndex].children[0].dataset.choice;
    userVal = user.children[0].dataset.choice;
    // check for winneer
    winner();
}

function winner() {
    // after  (1.5s = animation time)  reset the btns
    arr.forEach((b) => {
        b.classList.remove("dis");
    });
    // after  (1.5s = animation time)  show result
    if (userVal == compVal) {
        result.textContent = "Draw!";
        result.className = "";
    } else if (userVal == "rock" && compVal == "scissors" || userVal == "scissors" && compVal == "paper" || userVal == "paper" && compVal == "rock") {
        result.textContent = "You Won!";
        result.className = "";
        result.classList.add("win-effect");
    } else {
        result.textContent = "You Lost!";
        result.className = "";
        result.classList.add("lose-effect");
    }
}