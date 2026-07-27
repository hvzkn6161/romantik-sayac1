// Başlangıç tarihi
const startDate = new Date("2022-06-15T00:00:00");

// Gerekli elemanlar
const intro = document.getElementById("intro");
const card = document.querySelector(".card");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let previousValues = {
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
};
// Açılış ekranı
window.onload = () => {

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";
            card.style.display = "block";
            const items = document.querySelectorAll(".fade-item");

items.forEach((item,index)=>{

    setTimeout(()=>{

        item.classList.add("show");

    },index*250);

});

        },1000);

    },2500);

};


// Sayaç

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    const totalHours = Math.floor(diff / (1000 * 60 * 60));

    const totalMinutes = Math.floor(diff / (1000 * 60));

    const totalSeconds = Math.floor(diff / 1000);

    const h = totalHours % 24;
    const m = totalMinutes % 60;
    const s = totalSeconds % 60;

    const ms = Math.floor((diff % 1000) / 10);

    const values = {
    days: totalDays,
    hours: String(h).padStart(2,"0"),
    minutes: String(m).padStart(2,"0"),
    seconds: String(s).padStart(2,"0")
};

Object.entries(values).forEach(([key, value]) => {

    const element = document.getElementById(key);

    if (previousValues[key] != value) {

        element.textContent = value;

        element.classList.remove("counter-pop");

        void element.offsetWidth;

        element.classList.add("counter-pop");

        previousValues[key] = value;

    }

});


}

updateCounter();

setInterval(updateCounter,1000);
// Mektup Aç / Kapat

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");

openLetter.onclick = function () {

    trackEvent("letter_open", {
        button_name: "Bana Dokun"
    });

    letterModal.style.display = "flex";

}

closeLetter.onclick = function () {
    letterModal.style.display = "none";
}

letterModal.onclick = function (e) {
    if (e.target === letterModal) {
        letterModal.style.display = "none";
    }
}
const heartBox = document.getElementById("floating-hearts");

function createHeart(){

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.setProperty("--x",(Math.random()*120-60)+"px");

    heart.style.fontSize = (10 + Math.random() * 10) + "px";

    heart.style.animationDuration = (3.5 + Math.random() * 2) + "s";

    heartBox.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4500);

}

setInterval(createHeart,700);
// ❤️ Gizli Sürpriz

const secretHeart = document.getElementById("secretHeart");
const secretModal = document.getElementById("secretModal");
const closeSecret = document.getElementById("closeSecret");

let clickCount = 0;

secretHeart.addEventListener("click", () => {

    clickCount++;

    if(clickCount >= 5){

        secretModal.style.display = "flex";
        clickCount = 0;

    }

});

closeSecret.addEventListener("click", () => {

    secretModal.style.display = "none";

});

secretModal.addEventListener("click", (e) => {

    if(e.target === secretModal){
        secretModal.style.display = "none";
    }

});
// ❤️ Arka planda düşen kalpler

function createFallingHeart() {

    const heart = document.createElement("div");

    heart.className = "falling-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createFallingHeart, 800);
// ✨ Gece yıldızları

function createStars() {

    for (let i = 0; i < 70; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";

        star.style.animationDelay = (Math.random() * 2) + "s";
        star.style.animationDuration = (1.5 + Math.random() * 2) + "s";

        document.body.appendChild(star);
    }

}

createStars();
// 🌠 Kayan yıldız

function createShootingStar() {

    const star = document.createElement("div");
    star.className = "shooting-star";

    // Başlangıç konumu (sağ üst taraf)
    star.style.left = (window.innerWidth - Math.random() * 250) + "px";
    star.style.top = (Math.random() * 200) + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000);

}

// 10-20 saniyede bir rastgele oluştur
setInterval(() => {

    createShootingStar();

}, 10000 + Math.random() * 10000);
const loveReasons = [
    "Gülüşünü seviyorum ❤️",
    "Gözlerine bakmayı seviyorum 👀",
    "Sesini duymayı seviyorum 🎶",
    "Yanımda olmanı seviyorum 💕",
    "Bana huzur vermeni seviyorum 🌸",
    "Kahkahalarını seviyorum 😊",
    "İyi ki hayatımdasın ❤️",
    "Seninle konuşmayı seviyorum 💖",
    "Bana güç vermeni seviyorum 💪❤️",
    "Birlikte hayal kurmayı seviyorum ✨",
    "Elini tutmayı seviyorum 🤝",
    "Sana sarılmayı seviyorum 🤍",
    "Gözlerindeki mutluluğu seviyorum 🌹",
    "Beni anlamanı seviyorum 🥹",
    "Beni olduğum gibi kabul etmeni seviyorum ❤️",
    "Birlikte yürümeyi seviyorum 🚶❤️🚶",
    "Birlikte gülmeyi seviyorum 😂",
    "Seninle vakit geçirmeyi seviyorum ⏳",
    "Mesajını görünce mutlu oluyorum 📱❤️",
    "Sabah ilk aklıma gelen kişi olmanı seviyorum ☀️",
    "Gece son düşündüğüm kişi olmanı seviyorum 🌙",
    "Küçük sürprizlerini seviyorum 🎁",
    "Kalbinin güzelliğini seviyorum 💗",
    "Merhametini seviyorum 🤍",
    "İçtenliğini seviyorum 🌺",
    "Samimiyetini seviyorum 🥰",
    "Sabırlı olmanı seviyorum 🌸",
    "Beni güldürmeni seviyorum 😄",
    "Hayatıma renk katmanı seviyorum 🌈",
    "Birlikte kahve içmeyi seviyorum ☕",
    "Birlikte film izlemeyi seviyorum 🎬",
    "Birlikte yemek yemeyi seviyorum 🍕",
    "Birlikte gezmeyi seviyorum 🌍",
    "Bana ilham vermeni seviyorum ✨",
    "Güzel kalbini seviyorum ❤️",
    "Gülüşünle içimi ısıtmanı seviyorum ☀️",
    "Yanındayken kendim olabilmeyi seviyorum 🤍",
    "Senin yanında huzur buluyorum 🌹",
    "Birlikte yaşadığımız anıları seviyorum 📸",
    "İyi ki yollarımız kesişmiş ❤️",
    "Sen benim en güzel tesadüfümsün 🌺",
    "Her gün seni biraz daha çok seviyorum 💞",
    "Bana umut olmanı seviyorum 🌼",
    "Bana güven vermeni seviyorum 🫶",
    "Seninle yaşlanmak istiyorum 👵👴❤️",
    "Hayatı seninle paylaşmayı seviyorum 🏡",
    "Her şeyden önce seni seviyorum ❤️",
    "Sen benim en güzel hikâyemsin 📖",
    "Kalbimin en güzel yerindesin 💓",
    "Sonsuza kadar seni seveceğim ♾️❤️"
];

const loveReasonBtn = document.getElementById("loveReasonBtn");
const loveReasonText = document.getElementById("loveReasonText");

loveReasonBtn.addEventListener("click", function () {
    trackEvent("love_note_click", {
    button_name: "Bir Not Çek"
});

    const random = Math.floor(Math.random() * loveReasons.length);
    console.log(random);
console.log(loveReasons[random]);

    loveReasonText.textContent = loveReasons[random];

});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function(){

    if(music.paused){
        music.play();
        musicBtn.innerHTML = "🔊";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }

});
// Sakura Yaprakları

const sakuraContainer = document.getElementById("sakura-container");

function createSakura(){

    const petal = document.createElement("div");

    petal.className = "sakura";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize = (18 + Math.random()*16) + "px";

    petal.style.animationDuration = (8 + Math.random()*7) + "s";

    petal.style.opacity = Math.random();

    sakuraContainer.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },11000);

}

setInterval(createSakura,350);
// ==========================
// Aşk Haritası Kalp Balonları
// ==========================

const mapBtn = document.getElementById("mapBtn");
const balloonContainer = document.getElementById("balloonContainer");

if(mapBtn){

    mapBtn.addEventListener("click", function(e){
        trackEvent("map_open", {
    button_name: "Aşk Haritamız"
});

        e.preventDefault();

        for(let i=0;i<10;i++){

            const balloon = document.createElement("div");

            balloon.className = "balloon";

            balloon.innerHTML = ["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

            const rect = mapBtn.getBoundingClientRect();

balloon.style.left =
    (rect.left + rect.width/2 + (Math.random()*100-50)) + "px";

            balloon.style.setProperty(
                "--moveX",
                (Math.random()*220-110)+"px"
            );

            balloon.style.setProperty(
                "--rotate",
                (Math.random()*60-30)+"deg"
            );

            balloonContainer.appendChild(balloon);

            setTimeout(()=>{
                balloon.remove();
            },1400);

        }

        setTimeout(()=>{

            window.location.href="harita.html";

        },1200);

    });

}
// ==========================
// Fotoğraf Parallax
// ==========================

const photoFrame = document.querySelector(".photo-frame");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    photoFrame.style.transform = `translateY(${y * 0.12}px)`;

});
// ==========================
// Başlık Parallax
// ==========================

const titleWrapper = document.getElementById("titleWrapper");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    titleWrapper.style.transform = `translateY(${y * 0.2}px)`;

});
// ==========================
// Scroll Reveal
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// ==========================
// Mouse Glow
// ==========================

const cardElement = document.querySelector(".card");

cardElement.addEventListener("mousemove",(e)=>{

    const rect = cardElement.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    cardElement.style.setProperty("--mouse-x",`${x}px`);

    cardElement.style.setProperty("--mouse-y",`${y}px`);

});
// ==========================
// Fotoğraf Kalpleri
// ==========================

const photo = document.querySelector(".photo-frame");

photo.addEventListener("mouseenter",()=>{

    for(let i=0;i<8;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        const rect=photo.getBoundingClientRect();

        heart.style.left=(rect.left+rect.width/2)+"px";
        heart.style.top=(rect.top+rect.height/2)+"px";

        heart.style.pointerEvents="none";
        heart.style.fontSize=(14+Math.random()*16)+"px";
        heart.style.zIndex="99999";

        const x=(Math.random()*180-90);
        const y=-(80+Math.random()*120);

        heart.animate([
            {
                transform:"translate(0,0) scale(.7)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) scale(1.5)`,
                opacity:0
            }
        ],{
            duration:1200,
            easing:"ease-out"
        });

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),1200);

    }

});
// Google Analytics Event Gönderme
function trackEvent(eventName, params = {}) {

    if (typeof gtag === "function") {

        gtag("event", eventName, params);

    }

}
const galleryBtn = document.getElementById("galleryBtn");

if (galleryBtn) {

    galleryBtn.addEventListener("click", function () {

        trackEvent("gallery_open", {
            button_name: "Anılarımız"
        });

    });

}