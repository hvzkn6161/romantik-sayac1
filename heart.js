const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const particles = document.getElementById("heartParticles");
const message = document.getElementById("message");
const finalMessage = document.getElementById("finalMessage");
const envelope = document.getElementById("envelope");


let clicks = 0;
let size = 120;

heart.addEventListener("click", () => {
    if (clicks < 20) {
    message.textContent = "💗 Kalbime ilk dokunuşun...";
}
else if (clicks < 40) {
    message.textContent = "🥰 Her dokunuşunda daha da mutlu oluyorum.";
}
else if (clicks < 60) {
    message.textContent = "💞 Artık kalbim seninle atıyor.";
}
else if (clicks < 80) {
    message.textContent = "💖 Biraz daha... Çok yaklaştın.";
}
else if (clicks < 100) {
    message.textContent = "💘 Son dokunuşlar...";
}
else {
    message.textContent = "❤️ Tebrikler! Kalbimi tamamen ele geçirdin.";
}

    if (clicks >= 100) return;

    clicks++;
    size += 2;

    counter.textContent = clicks + " / 100";
    heart.style.fontSize = size + "px";
    heart.classList.remove("beat");

void heart.offsetWidth;

heart.classList.add("beat");
createHeart();

if (clicks === 100) {
    finalMessage.classList.remove("hidden");
    finalMessage.classList.add("show");
}

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
envelope.addEventListener("click", () => {

    envelope.classList.add("open");

});
