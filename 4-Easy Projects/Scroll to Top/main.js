let btn = document.querySelector(".btn");

window.onscroll = function () {
    if (window.scrollY >= 2000) {
        btn.style.right = "20px";
    } else {
        btn.style.right = "-50px";
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};