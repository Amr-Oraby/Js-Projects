let text = document.querySelector("textarea");
let result = document.querySelector(".result");

text.addEventListener("input", function () {
    let input = this.value;
    // n of chars
    let chars = input.length;
    // n of spaces
    let spaces = input.split(" ").length - 1;

    // n of words
    let words = input.split(" ").filter(function (e) {
        return e.trim() !== "";
    });
    let nOWords = words.length;
    // n of sentences
    let sentences = input.split(" ").filter(function (e) {
        return e.endsWith(".") || e.endsWith("?") || e.endsWith("!");
    });
    let nOsentences = sentences.length;

    // n of Paragraphs
    let paragraphs = input.split("\n").filter(function (e) {
        return e.trim() !== "";
    });
    let nOParagraphs = paragraphs.length;

    result.innerHTML =
        `<div>Number of chars => ${chars}</div>
     <div>Number of spaces => ${spaces}</div>
     <div> Number of words => ${nOWords} </div>
     <div> Number of sentences => ${nOsentences}</div> 
         <div> Number of paragraphs => ${nOParagraphs}</div> `;

});

