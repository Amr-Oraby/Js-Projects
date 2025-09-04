let input = document.querySelector(".strength input");
let span = document.querySelector(".strength input + span");


input.oninput = function () {
    let len = input.value.trim().length;
    let arr = input.value.trim().split("");

    // for all
    let allStr = true;
    let allNum = true;

    // for only one
    let upperCase = false;
    let special = false;

    arr.forEach(element => {
        let str = isNaN(Number(element));
        let num = !isNaN(Number(element));

        allStr = allStr && str;
        allNum = allNum && num;

        special = special || (/[^a-zA-Z0-9]/.test(element));

        let upper = (element.toUpperCase() == element) && str;
        upperCase = upperCase || upper;
    });


    let empty = len == 0;
    let weak = len < 6 || allStr || allNum;
    let medium = (len < 8 || !allStr || !upperCase) && !special;
    let strong = len >= 8 && special && upperCase;


    if (empty) return span.innerHTML = "";
    if (weak) return span.innerHTML = "<span style = 'color: red' > Weak </span>";
    if (medium) return span.innerHTML = "<span style = 'color: yellow' > Medium </span>";
    if (strong) return span.innerHTML = "<span style = 'color: green' > Strong </span>";
};



