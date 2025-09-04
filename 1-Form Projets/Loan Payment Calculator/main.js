let loan = document.querySelector(".loan");
let anRate = document.querySelector(".anRate");
let years = document.querySelector(".years");
let calc = document.querySelector(".calc");
let clear = document.querySelector(".clear");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let monthly = document.querySelector(".monthly span");
let total = document.querySelector(".total span");
let interest = document.querySelector(".interest span");
calc.onclick = function () {
    // validation
    if (loan.value == "" || anRate.value == "" || years.value == "") {
        return;
    }

    if (isNaN(loan.value) || isNaN(anRate.value) || isNaN(years.value)) {
        alert("please enter a valid Values");
        return;
    }

    if (loan.value <= 0) {
        one.style.display = "block";
    } else {
        one.style.display = "none";
    }

    if (anRate.value < 0) {
        two.style.display = "block";
    } else {
        two.style.display = "none";
    }

    if (years.value <= 0) {
        three.style.display = "block";
    } else {
        three.style.display = "none";
    }


    let r = Number(anRate.value) / (1200);
    let n = Number(years.value) * 12;
    let p = Number(loan.value);
    let monthlyPayment = ((p * r) / (1 - (1 + r) ** (-1 * n))).toFixed(2);
    monthly.innerHTML = `EGP ${monthlyPayment}`;
    let totalPayment = monthlyPayment * n;
    total.innerHTML = `EGP ${totalPayment.toFixed(2)}`;
    interest.innerHTML = `EGP ${(totalPayment - p).toFixed(2)}`;

};

clear.onclick = function () {
    loan.value = anRate.value = years.value = "";
    monthly.innerHTML = total.innerHTML = interest.innerHTML = "-";
};

