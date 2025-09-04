let name = document.querySelector(".name");
let grade = document.querySelector(".grade");
let add = document.querySelector(".add");
let results = document.querySelector(".results");
let msg = document.querySelector(".msg");
let err = document.querySelector(".err");

add.onclick = function () {
    if (results.innerHTML == "") {
        msg.style.display = "block";

    } else {
        msg.style.display = "none";
    }
    if (name.value == "" || grade.value == "") {
        err.style.display = "block";
        return;
    } else {
        err.style.display = "none";
    }
    let student = document.createElement("div");
    student.className = "student";

    let info = document.createElement("div");
    info.className = "info";

    // name and grade
    let stName = document.createElement("div");
    stName.className = "stName";
    stName.innerHTML = name.value;

    let stGrade = document.createElement("div");
    stGrade.className = "stGrade";
    stGrade.innerHTML = grade.value;


    let btns = document.createElement("div");
    btns.className = "btns";
    let pass = document.createElement("div");

    // validation 
    if (isNaN(grade.value) || Number(grade.value) > 100 || Number(grade.value) < 0) {
        alert("please enter a valid grade");
        return;
    }
    if (Number(grade.value) > 60) {
        pass.innerHTML = "PASSED";
        pass.className = "pass";

    } else {
        pass.innerHTML = "FAILED";
        pass.className = "fail";

    }
    let del = document.createElement("button");
    del.className = "del";
    del.innerHTML = "Delete";

    del.onclick = function () {
        student.remove();
    };
    btns.append(pass, del);
    info.append(stName, stGrade);
    student.append(info, btns);
    results.append(student);
    name.value = "";
    grade.value = "";
};

