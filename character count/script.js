// This confirms JS is connected
console.log("JS connected");

const textArea = document.getElementById("textArea");
const count = document.getElementById("count");

// LIVE character counting
textArea.addEventListener("input", function () {
    count.textContent = textArea.value.length;
});
