let coin = document.querySelector(".coin");
let btnFlip = document.querySelector(".flip");
let btnReset = document.querySelector(".reset");
let heads = document.querySelector(".heads");
let tails = document.querySelector(".tails");
let stop;

btnFlip.onclick = function () {
    let random = Math.floor(Math.random() * 2);
    if (random) { // 1
        coin.style.cssText = "animation: tail-flip 3s forwards;";
        stop = setTimeout(function () {
            tails.innerHTML = Number(tails.innerHTML) + 1;
        }, 3000);
    } else { // 0
        coin.style.cssText = "animation: head-flip 3s forwards;";
        stop = setTimeout(function () {
            heads.innerHTML = Number(heads.innerHTML) + 1;
        }, 3000);
    }
    btnFlip.classList.add("disabled");

    setTimeout(function () {
        btnFlip.classList.remove("disabled");
    }, 3000);
};
// every time it is animated remove the animation
coin.addEventListener("animationend", function () {
    coin.style.animation = "none";
});
btnReset.onclick = function () {
    coin.style.cssText = "transform: rotateX(0deg);";
    btnFlip.classList.remove("disabled");
    clearTimeout(stop);
    heads.innerHTML = "0";
    tails.innerHTML = "0";
};