let distance = document.querySelector(".distance input");
let efficiency = document.querySelector(".efficiency input");
let price = document.querySelector(".price input");
let form = document.querySelector("form");
let fuel = document.querySelector(".fuel");
let cost = document.querySelector(".cost");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // validation
    let validDistance = Number(distance.value);
    let validEfficiency = Number(efficiency.value);
    let validPrice = Number(price.value);

    if (!validDistance) return alert("please enter a valid distance");
    if (!validEfficiency) return alert("please enter a valid efficiency");
    if (!validPrice) return alert("please enter a valid price");

    // calculation
    let fuelNeeded = (distance.value / efficiency.value);
    let costNeeded = (fuelNeeded * price.value);

    // showing results
    document.querySelector(".fuel").innerHTML = `Fuel Needed: <span>${fuelNeeded.toFixed(2)}</span>`;
    document.querySelector(".cost").innerHTML = `Cost: <span>$${costNeeded.toFixed(2)}</span>`;
});