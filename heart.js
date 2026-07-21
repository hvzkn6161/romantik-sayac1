const heart = document.getElementById("heart");
const counter = document.getElementById("counter");

let clicks = 0;
let size = 120;

heart.addEventListener("click", () => {

    if (clicks >= 100) return;

    clicks++;
    size += 2;

    counter.textContent = clicks + " / 100";
    heart.style.fontSize = size + "px";

});
