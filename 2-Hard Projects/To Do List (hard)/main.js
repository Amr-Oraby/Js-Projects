let input = document.querySelector(".input");
let doBtn = document.querySelector(".do");
let doTasks = document.querySelector(".doTasks .tasks");
let progressBtn = document.querySelector(".progress");
let progressTasks = document.querySelector(".progressTasks .tasks");
let doneBtn = document.querySelector(".done");
let doneTasks = document.querySelector(".doneTasks .tasks");

let arrObj = JSON.parse(window.localStorage.getItem("tasks")) || [];

// window.localStorage.clear();
let createTasks = function (name, Id, catigory) {
    let task = document.createElement("div");
    let taskName = document.createElement("div");

    taskName.textContent = name;

    let del = document.createElement("button");
    del.textContent = "delete";
    del.id = Id;

    task.append(taskName, del);
    // choose catigory
    catigory.append(task);

    del.onclick = function () {
        arrObj.forEach((element, index) => {
            if (del.id == element.id) {
                arrObj.splice(index, 1);
                window.localStorage.setItem("tasks", JSON.stringify(arrObj));
            }
        });
        del.parentElement.remove();
    };
};

let createObj = function (name, Id, catigoryName) {
    if (name.trim() == "") return;
    obj = {
        value: name,
        id: Id,
        catigory: catigoryName
    };
    arrObj.push(obj);
    window.localStorage.setItem("tasks", JSON.stringify(arrObj));
};

progressBtn.onclick = function () {
    if (input.value.trim() == "") return;
    let random = Date.now();
    createObj(input.value, random, "progress");
    createTasks(input.value, random, progressTasks);
    input.value = "";
};

doneBtn.onclick = function () {
    if (input.value.trim() == "") return;
    let random = Date.now();
    createObj(input.value, random, "done");
    createTasks(input.value, random, doneTasks);
    input.value = "";
};

doBtn.onclick = function () {
    if (input.value.trim() == "") return;
    let random = Date.now();
    createObj(input.value, random, "do");
    createTasks(input.value, random, doTasks);
    input.value = "";
};

Array.from(arrObj).forEach((el) => {
    if (el.catigory == "progress") {
        createTasks(el.value, el.id, progressTasks);
    } else if (el.catigory == "done") {
        createTasks(el.value, el.id, doneTasks);
    } else if (el.catigory == "do") {
        createTasks(el.value, el.id, doTasks);
    }
});

