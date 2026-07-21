const heart = document.getElementById("heart");
const counter = document.getElementById("counter");

let clicks = 0;

heart.addEventListener("click", () => {

    clicks++;

    counter.textContent = clicks + " / 100";

});
