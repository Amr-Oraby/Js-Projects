let bar = document.querySelector(".bar");
let links = document.querySelector(".links");
let close = document.querySelector(".close");
bar.onclick = function () {
    links.style.cssText = "transform: translateY(0);";
};


close.onclick = function () {
    links.style.cssText = "transform: translateY(-100%);";
};

window.onresize = function () {
    if (window.innerWidth < 600) {
        links.style.cssText = "transform: translateY(-110%);";
    }
};