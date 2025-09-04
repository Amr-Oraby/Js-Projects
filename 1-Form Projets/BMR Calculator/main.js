
let age = document.querySelector(" .age input");
let weight = document.querySelector(".weight input");
let height = document.querySelector(".height input");
let form = document.querySelector(".calc");
let result = document.querySelector(".result");


form.onsubmit = function (e) {
    e.preventDefault();
    // must be inside to take value after submit not a static value after reload
    let gender = document.querySelector(".choose input:checked");
    // to make sure that the input is number and not empty !0 = true
    let checkAge = Number(age.value.trim());
    let checkWeight = Number(weight.value.trim());
    let checkHeight = Number(height.value.trim());
    if (!gender) return result.innerHTML = "Please select a valid gender";
    if (!checkAge) return result.innerHTML = "Please select a valid age";
    if (!checkWeight) return result.innerHTML = "Please select a valid weight";
    if (!checkHeight) return result.innerHTML = "Please select a valid height";


    let bmr = (10 * weight.value) + (6.25 * height.value)
        - (5 * age.value) + (gender.value == "male" ? 5 : -165);

    result.innerHTML = `Your BMR is <span style="font-weight: bold">${bmr}</span> calories/day`;
};


