let input = document.querySelector(".addTask input");
let add = document.querySelector(".addTask button");
let tasks = document.querySelector(".tasks");

add.addEventListener("click", function () {
    // validation
    let empty = input.value.trim() == "";
    if (empty) return alert("please enter a task");

    // creating task
    let task = document.createElement("div");
    task.className = "task";

    // text
    let text = document.createElement("div");;
    text.innerHTML = input.value.trim();

    // btns
    let btns = document.createElement("div");
    btns.className = "btns";
    // done btn
    let done = document.createElement("button");
    done.innerHTML = "o";
    done.className = "done";
    // delete btn
    let del = document.createElement("button");
    del.innerHTML = "x";
    del.className = "delete";

    // appending
    btns.append(done, del);
    task.append(text, btns);
    tasks.append(task);

    // on clicking done 
    done.onclick = function () {
        text.classList.toggle("doneTask");
    };

    // on clicking delete
    del.onclick = function () {
        task.remove();
    };

    input.value = "";
});