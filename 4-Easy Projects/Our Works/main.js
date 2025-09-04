let sections = Array.from(document.querySelectorAll(".sections li"));
let content = Array.from(document.querySelectorAll(".content div"));

sections.forEach((section) => {
    section.onclick = function (e) {
        sections.forEach((el) => { el.classList.remove("active"); });
        e.currentTarget.classList.add("active");
        // content appearance
        content.forEach((cont) => {
            if (cont.classList.contains(`${section.dataset.id}`)) {
                cont.style.display = "flex";
            } else {
                cont.style.display = "none";
            }
        });
    };
});