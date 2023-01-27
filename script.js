//your code here
let textbox = document.getElementById("evaluatedText");
    let wordCount = document.getElementById("wordCount");

    textbox.addEventListener("input", function() {
        let words = this.value.split(" ");
        wordCount.innerHTML = words.length;
    });
