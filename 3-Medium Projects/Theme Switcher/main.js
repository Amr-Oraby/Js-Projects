let changer = document.querySelector(".changer");
let savedColor = window.localStorage.getItem("color") || "white";
// onload
changer.classList.add(savedColor);
document.body.classList.add(savedColor);

changer.onclick = function () {
    // reverse
    let newColor = savedColor === "black" ? "white" : "black";
    window.localStorage.color = newColor;
    // then change
    changer.classList.replace(savedColor, newColor);
    document.body.classList.replace(savedColor, newColor);

    savedColor = newColor; // so when i click again it became opposite
};
/*  
no problem with me writing this way 
*/