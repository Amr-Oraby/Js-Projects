let min = 1;
let max = 100;
let number = Math.floor(Math.random() * (max - min + 1)) + min;
let guessing = true;
let attempts = 0;

while (guessing) {
    let guess = window.prompt(`Guess a number between ${min} & ${max}`);
    // canceling
    if (guess == null) {
        window.alert("game is over");
        break;
    }
    guess = Number(guess);
    // validation 
    if (isNaN(guess) || guess > max || guess < min) {
        window.alert("please enter a valid number");
    }

    else { // choosed a valid number
        attempts++;
        if (guess > number) {
            window.alert("lower than that");
        } else if (guess < number) {
            window.alert("greater than that");
        } else if (guess == number) {
            window.alert(`That's true! It is ${number}. You got it in ${attempts} attempt${attempts > 1 ? "s" : ""}.`);
            // no more guessing
            guessing = false;
        }
    }
}

