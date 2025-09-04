let name = document.querySelector(".name input");
let requiredName = document.querySelector(".name span");
let phone = document.querySelector(".phone input");
let requiredPhone = document.querySelector(".phone span");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // validation
    let validName = name.value.length > 3;
    let validPhone = phone.value.length == 11;
    if (!validName) {
        requiredName.style.display = "block";
    } else {
        requiredName.style.display = "none";
    }

    if (!validPhone) {
        requiredPhone.style.display = "block";
    } else {
        requiredPhone.style.display = "none";
    }


});
