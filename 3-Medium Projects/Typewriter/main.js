let p = document.querySelector("p");
let prog = "i'm a Programmer";
let des = "i'm a  Designer";
let frontEnd = "i'm a Front-end Developer";

function recursive(element, text, i = 0) {
    element.textContent += text[i];
    if (i == text.length - 1) {
        remo(p);
        return;
    }
    // here is the recursive game
    setTimeout(function () {
        recursive(element, text, i + 1);
    }, 150);
};


function remo(element) {
    let arr = element.textContent.split("");
    let length = arr.length + 1;

    function loop(array, len) {
        if (len == 0) return;
        array.splice(len - 1, 1);
        element.textContent = array.join("");
        setTimeout(function () {
            loop(arr, len - 1);
        }, 150);
    }

    loop(arr, length);
}

recursive(p, frontEnd);