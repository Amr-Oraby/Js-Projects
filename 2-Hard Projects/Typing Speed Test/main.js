let info = document.querySelector(".info");
let word = document.querySelector(".word");
let input = document.querySelector("input");
let words = document.querySelector(".words");
let result = document.querySelector(".result");
let time = document.querySelector(".result .time");
let score = document.querySelector(".result .score");
let scoreResult = document.querySelector(".result .score .res");
let scoreTotal = document.querySelector(".result .score .total");
let btn = document.querySelector(".start");
let msg = document.querySelector(".msg");
let reload = document.querySelector(".reload");
let randWord;

let arr = ["dd", "ss"
    //  "aa", "eee", "fff", "afa", "sss"
];
function showWords() {
    arr.forEach((el) => {
        let span = document.createElement("span");
        span.textContent = el;
        words.append(span);
    });
}
showWords();
scoreTotal.innerHTML = arr.length;



let lvlsTime = {
    "easy": "5",
    "normal": "3",
    "hard": "2",
};

let lvl = "easy";
let lvlTime = lvlsTime[lvl];
// showing time
time.innerHTML = `Time Left: <span>${lvlTime}</span>s `;
let span = document.querySelector(".time span");
// showing information
info.innerHTML = `You Are Playing On[<span>${lvl} </span>] lvl & You have [<span>${lvlTime}</span>] seconds to type the word`;

btn.onclick = function () {
    this.style.display = "none";
    input.focus();
    // choose random word
    game();
};

function game() {
    // get random word
    randWord = arr[Math.floor(Math.random() * arr.length)];
    let randIndex = arr.indexOf(randWord);
    word.innerHTML = randWord;
    // remove it from arr
    arr.splice(randIndex, 1);
    // remove last arr
    words.innerHTML = "";
    // add new arr
    showWords();
    // start 
    start();
}

reload.onclick = function () {
    location.reload();
};

function start() {
    let stop = setInterval(function () {
        span.innerHTML--;
        if (span.innerHTML === "0") {
            clearInterval(stop);
            if (input.value == randWord) {
                input.value = "";
                span.innerHTML = lvlsTime[lvl];
                scoreResult.innerHTML++;
                // if not finished the game 
                if (arr.length > 0) {
                    game();
                } else {
                    word.innerHTML = "";
                    msg.innerHTML = "Congrats";
                    msg.classList.add("won");
                    clearInterval(stop);
                    input.disabled = true;
                    reload.style.display = "block";
                }
            } else {
                msg.innerHTML = "Game Over";
                input.disabled = true;
                msg.classList.add("lost");
            }
        }
    }, 1000);

}