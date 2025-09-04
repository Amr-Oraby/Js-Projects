let input = document.querySelector("input");
let usersName = document.querySelectorAll(".users .user h3");
let users = document.querySelectorAll(".users .user");
let message = document.querySelector(".message");

input.addEventListener("input", function () {
    let search = this.value.trim().toLowerCase();
    usersName.forEach(e => {
        if (e.innerHTML.toLowerCase().includes(search)) {
            e.parentElement.style.display = "block";
            e.parentElement.classList.add("show");
            e.parentElement.classList.remove("hide");
        } else {
            e.parentElement.style.display = "none";
            e.parentElement.classList.add("hide");
            e.parentElement.classList.remove("show");
        }
    });

    // No Results Found Validation
    let anyVisible = false;
    users.forEach(e => {
        if (e.classList.contains("show")) {
            anyVisible = true;
        }
    }
    );

    message.innerHTML = anyVisible ? "" : "No Results Found";

});





