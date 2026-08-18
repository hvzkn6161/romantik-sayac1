const heart = document.getElementById("heart");
const counter = document.getElementById("counter");
const particles = document.getElementById("heartParticles");
const message = document.getElementById("message");

const finalMessage = document.getElementById("finalMessage");
const envelope = document.getElementById("envelope");

const openLetter = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");
const letterModalText = document.getElementById("letterModalText");
const closeLetter = document.getElementById("closeLetter");
const combo = document.getElementById("combo");
const comboEffect = document.getElementById("comboEffect");

let clicks = 0;
let size = 120;
let heartCombo = 0;
let lastHeartClick = 0;
let comboTimer = null;

const messages = [
    "💗 Kalbime ilk dokunuşun...",
    "🥰 Her dokunuşunda daha da mutlu oluyorum.",
    "💞 Artık kalbim seninle atıyor.",
    "💖 Biraz daha... Çok yaklaştın.",
    "💘 Son dokunuşlar..."
];

heart.addEventListener("click", () => {

    if (clicks >= 100) return;

    clicks++;
    const now = Date.now();

// 1 saniyeden fazla ara verdiysek combo yeniden başlar
if (now - lastHeartClick > 2000) {
    heartCombo = 0;
}

heartCombo++;
lastHeartClick = now;
combo.textContent = `COMBO x${heartCombo}`;
if (heartCombo >= 3) {

    comboEffect.textContent = `🔥 COMBO x${heartCombo}!`;

    comboEffect.classList.remove("combo-pop");

    void comboEffect.offsetWidth;

    comboEffect.classList.add("combo-pop");

}
if (heartCombo === 5) {

    for (let i = 0; i < 15; i++) {

        const burst = document.createElement("div");

        burst.className = "combo-heart-burst";
        burst.textContent = ["❤️", "💖", "💕", "💗"][
            Math.floor(Math.random() * 4)
        ];

        const rect = heart.getBoundingClientRect();

        burst.style.left =
            rect.left + rect.width / 2 + "px";

        burst.style.top =
            rect.top + rect.height / 2 + "px";

        burst.style.setProperty(
            "--x",
            (Math.random() * 240 - 120) + "px"
        );

        burst.style.setProperty(
            "--y",
            (Math.random() * 240 - 120) + "px"
        );

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 1000);

    }

}
if (heartCombo === 10) {

    comboEffect.textContent = "💥 10 COMBO! 💥";

    comboEffect.classList.remove("combo-pop");

    void comboEffect.offsetWidth;

    comboEffect.classList.add("combo-pop");

    heart.style.transition = "transform 0.2s ease";

    heart.style.transform = "scale(1.5)";

    setTimeout(() => {

        heart.style.transform = "";

    }, 300);

    // Büyük kalp patlaması
    for (let i = 0; i < 30; i++) {

        const burst = document.createElement("div");

        burst.className = "combo-heart-burst";
        burst.textContent = ["❤️", "💖", "💕", "💗", "💘"][
            Math.floor(Math.random() * 5)
        ];

        const rect = heart.getBoundingClientRect();

        burst.style.left =
            rect.left + rect.width / 2 + "px";

        burst.style.top =
            rect.top + rect.height / 2 + "px";

        burst.style.setProperty(
            "--x",
            (Math.random() * 400 - 200) + "px"
        );

        burst.style.setProperty(
            "--y",
            (Math.random() * 400 - 200) + "px"
        );

        burst.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(burst);

        setTimeout(() => {

            burst.remove();

        }, 1200);

    }

}
if (heartCombo === 20) {

    comboEffect.textContent = "💖 AŞK MODU! 💖";

    comboEffect.classList.remove("combo-pop");

    void comboEffect.offsetWidth;

    comboEffect.classList.add("combo-pop");

    heart.classList.add("love-mode");

    // 20 combo için ekstra kalp patlaması
    for (let i = 0; i < 50; i++) {

        const burst = document.createElement("div");

        burst.className = "combo-heart-burst";

        burst.textContent = ["❤️", "💖", "💕", "💗", "💘", "💝"][
            Math.floor(Math.random() * 6)
        ];

        const rect = heart.getBoundingClientRect();

        burst.style.left =
            rect.left + rect.width / 2 + "px";

        burst.style.top =
            rect.top + rect.height / 2 + "px";

        burst.style.setProperty(
            "--x",
            (Math.random() * 600 - 300) + "px"
        );

        burst.style.setProperty(
            "--y",
            (Math.random() * 600 - 300) + "px"
        );

        burst.style.fontSize =
            (20 + Math.random() * 25) + "px";

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 1400);

    }

    setTimeout(() => {

        heart.classList.remove("love-mode");

    }, 3000);

}


clearTimeout(comboTimer);

comboTimer = setTimeout(() => {

    heartCombo = 0;
    combo.textContent = "COMBO x0";

}, 1000);

console.log("❤️ Combo:", heartCombo);
    size += 2;

    counter.textContent = `${clicks} / 100`;
    heart.style.fontSize = size + "px";

    heart.classList.remove("beat");
    void heart.offsetWidth;
    heart.classList.add("beat");

    createHeart();

    if(clicks < 20){
        message.textContent = messages[0];
    }else if(clicks < 40){
        message.textContent = messages[1];
    }else if(clicks < 60){
        message.textContent = messages[2];
    }else if(clicks < 80){
        message.textContent = messages[3];
    }else{
        message.textContent = messages[4];
    }

    if(clicks === 100){
        finalMessage.classList.remove("hidden");
    }

});

function createHeart(){

    const h = document.createElement("div");

    h.className = "small-heart";
    h.innerHTML = "💖";

    const rect = heart.getBoundingClientRect();

    h.style.left =
        rect.left + rect.width/2 + (Math.random()*80-40) + "px";

    h.style.top =
        rect.top + rect.height/2 + "px";

    particles.appendChild(h);

    setTimeout(()=>{
        h.remove();
    },1200);

}

/* Zarf aç */

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

});

/* Mektubu Aç */

openLetter.addEventListener("click",()=>{

    letterModal.classList.remove("hidden");

    letterModalText.textContent =
`Canım Aşkım ❤️

Bu sayfadaki her kalp, her satır ve her küçük detay senin için hazırlandı.

Belki kusurları var, belki profesyonel değil...

Ama içinde kocaman bir sevgi var.

İyi ki varsın.

Seni çok seviyorum. ❤️`;

});

/* Ana sayfaya dön */

closeLetter.addEventListener("click",()=>{

    window.location.href="index.html";

});
