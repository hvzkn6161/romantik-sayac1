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

let clicks = 0;
let size = 120;

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
