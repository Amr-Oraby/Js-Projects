let display = document.querySelector(".display");

function appending(value) {
    display.value += value;
}

function Del() {
    display.value = "";
}

function C() {
    display.value = display.value.slice(0, -1);
}


function result() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
    ;
}

