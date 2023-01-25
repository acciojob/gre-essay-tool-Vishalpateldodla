//your code here
let textbox = document.getElementById("evaluatedText");
let wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", function() {
  let words = this.value.trim().split(/\s+/).length;
  wordCount.innerHTML = words;
});
