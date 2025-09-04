let cell = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");
let player = "X";
let running = false;

let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];


function start() {
    running = true;
    // clicking
    Array.from(cell).forEach((cells) => {
        cells.addEventListener("click", press);
    });

    // reseting
    reset.addEventListener("click", resetState);

    result.innerHTML = `${player}'s turn`;
}
start();

function press() {
    let cellIndex = this.id;
    // validation
    if (options[cellIndex] != "" || !running) {
        return;
    }

    // filling options and cells
    this.innerHTML = player;
    options[cellIndex] = player;

    checkWinner();
}

function checkWinner() {
    let roundEnd = false;
    for (let i = 0; i < winning.length; i++) {
        let arr = winning[i];
        let cellA = options[arr[0]];
        let cellB = options[arr[1]];
        let cellC = options[arr[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }

        if (cellA == cellB && cellB == cellC) {
            roundEnd = true;
            break;
        }

    }

    if (roundEnd) {
        running = false;
        result.innerHTML = `${player} has won`;
    } else if (!options.includes("")) { // there are no winners and no spaces empty
        result.innerHTML = "It's A Draw";
    } else {
        changePlayer();
    }

}

function changePlayer() {
    player = (player == "X") ? "O" : "X";
    result.innerHTML = `${player}'s turn`;
}

function resetState() {
    options = ["", "", "", "", "", "", "", "", ""];
    player = "X";
    Array.from(cell).forEach((el) => {
        el.innerHTML = "";
    });
    result.innerHTML = `${player}'s turn`;
    running = true;
}

