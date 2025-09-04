let amount = document.querySelector(".amount span");

fetch("https://api.fastforex.io/fetch-all?api_key=80688b7d89-bb134fe727-t1mkz6").then((rspnse) => {
    return rspnse.json();
}).then((prms) => {
    let egp = document.querySelector(".egp span");
    let sar = document.querySelector(".sar span");
    egp.innerHTML = Number(amount.innerHTML) * prms.results["EGP"];
    sar.innerHTML = Number(amount.innerHTML) * prms.results["SAR"];
});