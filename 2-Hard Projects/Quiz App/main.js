let questionName = document.querySelector(".question");
let buttons = document.querySelector(".buttons");
let nextBtn = document.querySelector(".next-btn");
let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { answer: "Hyper Text Markup Language", correct: true },
            { answer: "High Text Machine Language", correct: false },
            { answer: "Hyperlinks Text Management Language", correct: false },
            { answer: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "Which property is used in CSS to change the text color?",
        answers: [
            { answer: "color", correct: true },
            { answer: "font-color", correct: false },
            { answer: "text-color", correct: false },
            { answer: "background-color", correct: false }
        ]
    },
    {
        question: "Which CSS unit is relative to the parent element?",
        answers: [
            { answer: "em", correct: true },
            { answer: "px", correct: false },
            { answer: "cm", correct: false },
            { answer: "%", correct: false }
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            { answer: "Document Object Model", correct: true },
            { answer: "Data Object Management", correct: false },
            { answer: "Desktop Object Model", correct: false },
            { answer: "Document Order Module", correct: false }
        ]
    },
    {
        question: "Which method selects an element by its ID in JavaScript?",
        answers: [
            { answer: "document.getElementById()", correct: true },
            { answer: "document.querySelectorAll()", correct: false },
            { answer: "document.getElementsByClassName()", correct: false },
            { answer: "document.getElement()", correct: false }
        ]
    },
    {
        question: "What does `addEventListener()` do in JavaScript?",
        answers: [
            { answer: "Adds an event handler to an element", correct: true },
            { answer: "Removes an event", correct: false },
            { answer: "Creates a new HTML element", correct: false },
            { answer: "Changes the element style", correct: false }
        ]
    },
    {
        question: "Which object refers to the browser window in BOM?",
        answers: [
            { answer: "window", correct: true },
            { answer: "document", correct: false },
            { answer: "screen", correct: false },
            { answer: "navigator", correct: false }
        ]
    },
    {
        question: "Which method removes the last item from an array in JavaScript?",
        answers: [
            { answer: "pop()", correct: true },
            { answer: "push()", correct: false },
            { answer: "shift()", correct: false },
            { answer: "unshift()", correct: false }
        ]
    }
];
let score, quIndex;

function startQuiz() {
    // when starting again
    nextBtn.textContent = "Next";
    score = 0;
    quIndex = 0;
    showQuestions();
}
startQuiz();


function showQuestions() {
    reset();
    // creating question Name
    nextBtn.style.display = "none";
    questionName.textContent = `${quIndex + 1}. ${questions[quIndex].question}`;
    // creating of answers
    questions[quIndex].answers.forEach(el => {
        let btn = document.createElement("button");
        btn.textContent = el.answer;
        btn.classList.add("btn");
        btn.dataset.correct = el.correct;
        buttons.append(btn);
        // on select
        btn.addEventListener("click", select);
    });
}

function reset() {
    while (buttons.firstChild) {
        buttons.firstChild.remove();
    }
}

function select(el) {
    let pressedBtn = el.target;
    if (pressedBtn.dataset.correct == "true") {
        pressedBtn.classList.add("correct");
        score++;
    } else {
        pressedBtn.classList.add("incorrect");
    }

    Array.from(buttons.children).forEach((element) => {
        if (element.dataset.correct == "true") {
            element.classList.add("correct");
        }
        element.disabled = true;
    });
    nextBtn.style.display = "block";

}
// Let's Manipulate Next btn

function handleNextBtn() {
    quIndex++;
    if (quIndex < questions.length) {
        showQuestions();
    } else {
        // to delete the answer and show score
        reset();
        questionName.textContent = `You Scored ${score}/${questions.length}`;
        nextBtn.textContent = "Play Again";
    }
}
// 0/3
// 1/3
// 2/3 
nextBtn.onclick = function () {
    if (quIndex < questions.length) {
        // going next
        handleNextBtn();
    } else {
        // onclicking play again
        startQuiz();
    }
};

