let contents = Array.from(document.querySelectorAll(".container .content div"));
let tabs = Array.from(document.querySelectorAll(".container .tabs li "));

tabs.forEach((el) => {
    el.onclick = function (tab) {
        // reset active 
        tabs.forEach((e) => {
            e.classList.remove("active");
        });
        // add active
        tab.currentTarget.classList.add("active");

        // reset display
        contents.forEach((div) => {
            div.style.display = "none";
        });
        // add display
        document.querySelector(`${tab.currentTarget.dataset.cont}`).style.display = "block";
    };
});
