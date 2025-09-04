let progress = document.querySelector(".progress");
let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    progress.style.width = `${(scrollTop / heigth) * 100}%`;
});