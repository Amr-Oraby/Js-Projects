let number = document.querySelector(".number input");
let numberRequired = document.querySelector(".number span");

let cost = document.querySelector(".cost input");
let costRequired = document.querySelector(".cost span");

let venue = document.querySelector(".venue input");
let venueRequired = document.querySelector(".venue span");

let decoration = document.querySelector(".decoration input");
let decorationRequired = document.querySelector(".decoration span");

let entertainment = document.querySelector(".entertainment input");

let calc = document.querySelector(".calc");

let result = document.querySelector(".result");

calc.onclick = function () {
    // validation
    let invalidNumber = !Number(number.value);
    let invalidCost = !Number(cost.value);
    let invalidVenue = !Number(venue.value);;
    let invalidDecoration = !Number(decoration.value);

    if (invalidNumber) {
        numberRequired.style.display = "block";
    } else {
        numberRequired.style.display = "none";
    }
    if (invalidCost) {
        costRequired.style.display = "block";
    } else {
        costRequired.style.display = "none";
    }
    if (invalidVenue) {
        venueRequired.style.display = "block";
    } else {
        venueRequired.style.display = "none";
    }
    if (invalidDecoration) {
        decorationRequired.style.display = "block";
    } else {
        decorationRequired.style.display = "none";
    }
    if (invalidCost || invalidNumber || invalidVenue || invalidDecoration) {
        result.innerHTML = "";
        return;
    };

    // calculation
    let budget = (Number(number.value) * Number(cost.value)) + Number(venue.value) + Number(decoration.value) +
        Number(`${entertainment.value.trim() == "" ? "0" : entertainment.value}`);
    result.innerHTML = `Estimated Event Budget: <span>$${budget.toFixed(2)} </span>`;

};