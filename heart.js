const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const particles = document.getElementById("heartParticles");

let clicks = 0;
let size = 120;

heart.addEventListener("click", () => {

    if (clicks >= 100) return;

    clicks++;
    size += 2;

    counter.textContent = clicks + " / 100";
    heart.style.fontSize = size + "px";
    heart.classList.remove("beat");

void heart.offsetWidth;

heart.classList.add("beat");
    createHeart();

});
function createHeart(){

    const h = document.createElement("div");

    h.className = "small-heart";

    h.innerHTML = "💖";

    const rect = heart.getBoundingClientRect();

    h.style.left = (rect.left + rect.width/2 - 10 + (Math.random()*80-40)) + "px";

    h.style.top = (rect.top + rect.height/2) + "px";

    particles.appendChild(h);

    setTimeout(() => {
        h.remove();
    }, 1200);

}
