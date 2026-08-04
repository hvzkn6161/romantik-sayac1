import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABXe8TTT1FaFYNtoU7Q-lGB5CELae5ucY",
    authDomain: "romantik-sayac.firebaseapp.com",
    projectId: "romantik-sayac",
    storageBucket: "romantik-sayac.firebasestorage.app",
    messagingSenderId: "849789263351",
    appId: "1:849789263351:web:e80e5ddc009dce3267a2f2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Başlangıç tarihi
const startDate = new Date("2022-06-15T00:00:00");

// Gerekli elemanlar
const intro = document.getElementById("intro");
const card = document.querySelector(".card");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const secondsTogether = document.getElementById("secondsTogether");
let previousValues = {
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
};
// Açılış ekranı
const loadingText = document.getElementById("loadingText");

const loadingMessages = [

    "❤️ Anılarımız hazırlanıyor...",

    "📷 En güzel anılar seçiliyor...",

    "💌 Sana özel satırlar yazılıyor...",

    "🗺️ Aşk Haritamız oluşturuluyor...",

    "✨ Son dokunuşlar yapılıyor..."

];

let loadingIndex = 0;

const loadingInterval = setInterval(() => {

    loadingIndex++;

    if (loadingIndex < loadingMessages.length) {

        loadingText.classList.add("loading-hide");

        setTimeout(() => {

            loadingText.textContent = loadingMessages[loadingIndex];

            loadingText.classList.remove("loading-hide");
            loadingText.classList.add("loading-show");

        },250);

    }

},1500);
function typeWriter(element, text, speed = 60){

    return new Promise(resolve => {

        element.textContent = "";

        let i = 0;

        const timer = setInterval(() => {

            element.textContent += text.charAt(i);

            i++;

            if(i >= text.length){

                clearInterval(timer);

                resolve();

            }

        }, speed);

    });

}
window.onload = async () => {
    function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

    const introTitle = document.getElementById("introTitle");
    const introSubtitle = document.getElementById("introSubtitle");

    // Başlık
    await wait(1000);

introTitle.style.opacity = "1";

await typeWriter(
    introTitle,
    "Sana küçük bir sürpriz hazırladım...",
    80
);

    // Alt yazı
    await wait(1500);

introSubtitle.style.opacity = "1";

await typeWriter(
    introSubtitle,
    "Hazır mısın? ❤️",
    90
);
await wait(1200);

    // Intro kapanışı
    await wait(2500);

clearInterval(loadingInterval);

loadingText.classList.add("loading-hide");

await wait(300);

loadingText.classList.add("loading-hide");

await wait(400);

loadingText.textContent = "❤️ Senin için hazırlandı...";

loadingText.classList.remove("loading-hide");


await wait(800);

intro.classList.add("hide");

await wait(600);

intro.style.display = "none";
card.style.display = "block";

const items = document.querySelectorAll(".fade-item");

items.forEach((item,index)=>{

    setTimeout(()=>{

        item.classList.add("show");

    },index*250);

});

};


// Sayaç

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    const totalHours = Math.floor(diff / (1000 * 60 * 60));

    const totalMinutes = Math.floor(diff / (1000 * 60));

    const totalSeconds = Math.floor(diff / 1000);
    secondsTogether.textContent = totalSeconds.toLocaleString("tr-TR");

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

openLetter.onclick = async function () {

    trackEvent("letter_open", {
        button_name: "Bana Dokun"
    });

    letterModal.style.display = "flex";
    startLetterTyping();

    await increaseStat("letters");

    loadVisitCount();

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

loveReasonBtn.addEventListener("click", async function () {

    trackEvent("love_note_click", {
        button_name: "Bir Not Çek"
    });

    await increaseStat("loveNotes");

    loadVisitCount();

    const random = Math.floor(Math.random() * loveReasons.length);

    console.log(random);
    console.log(loveReasons[random]);

    loveReasonText.textContent = loveReasons[random];

});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async function(){

    if(music.paused){

        await increaseStat("music");

        loadVisitCount();

        music.play();
        startMusicNotes();
        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();
        stopMusicNotes();
        musicBtn.innerHTML = "🎵";

    }

});
let noteInterval = null;

function startMusicNotes(){

    if(noteInterval) return;

    noteInterval = setInterval(() => {

        const note = document.createElement("div");

        note.className = "music-note";

        const notes = ["♪","♫","♬","🎵"];

        note.textContent = notes[Math.floor(Math.random()*notes.length)];

        const rect = musicBtn.getBoundingClientRect();

        note.style.left = (rect.left + rect.width/2) + "px";
        note.style.top = (rect.top + 10) + "px";

        document.body.appendChild(note);

        setTimeout(() => note.remove(), 2000);

    }, 500);

}

function stopMusicNotes(){

    clearInterval(noteInterval);

    noteInterval = null;

}
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

    mapBtn.addEventListener("click", async function(e){
        trackEvent("map_open", {
    button_name: "Aşk Haritamız"
});
    await increaseStat("map");

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

    galleryBtn.addEventListener("click", async function () {

        trackEvent("gallery_open", {
            button_name: "Anılarımız"
        });

        await increaseStat("gallery");

    });

}
// ==========================
// Ziyaret Sayacı
// ==========================

async function increaseVisitCount() {

    const ref = doc(db, "stats", "global");

    try {

        await updateDoc(ref, {
            visits: increment(1)
        });

        console.log("✅ Ziyaret sayısı artırıldı.");

    } catch (error) {

        console.error("Hata:", error);

    }

}

increaseVisitCount();
async function loadVisitCount() {

    const ref = doc(db, "stats", "global");

    const snap = await getDoc(ref);

    if (snap.exists()) {

        const data = snap.data();

        document.getElementById("visitCount").textContent = data.visits || 0;

        document.getElementById("letterCount").textContent = data.letters || 0;

        document.getElementById("galleryCount").textContent = data.gallery || 0;
        document.getElementById("mapCount").textContent = data.map || 0;
        document.getElementById("loveNotesCount").textContent = data.loveNotes || 0;
        document.getElementById("musicCount").textContent = data.music || 0;
        document.getElementById("heartGameCount").textContent = data.heartGame || 0;

    }

}
loadVisitCount();
async function increaseStat(field) {

    const ref = doc(db, "stats", "global");

    try {

        await updateDoc(ref, {
            [field]: increment(1)
        });

    } catch (error) {

        console.error(error);

    }

}
const heartBtn = document.querySelector(".heart-btn");

if (heartBtn) {

    heartBtn.addEventListener("click", async function () {

        await increaseStat("heartGame");

        loadVisitCount();

    });

}
// ===========================
// HAS Gizli Mesaj
// ===========================

const secretHas = document.getElementById("secretHas");
const hasSecretModal = document.getElementById("hasSecretModal");
const closeHasSecret = document.getElementById("closeHasSecret");

let hasClickCount = 0;

if(secretHas){

    secretHas.addEventListener("click", function(){

        hasClickCount++;

        if(hasClickCount >= 5){
            secretHas.style.transform = "scale(1.3)";
            secretHas.style.textShadow = "0 0 30px #ff4d6d";

            hasSecretModal.classList.add("show");
            setTimeout(() => {

    secretHas.style.transform = "";
    secretHas.style.textShadow = "";

},600);

            hasClickCount = 0;

        }

    });

}

if(closeHasSecret){

    closeHasSecret.addEventListener("click", function(){

    hasSecretModal.classList.remove("show");

});

}

if(hasSecretModal){

    hasSecretModal.addEventListener("click", function(e){

        if(e.target === hasSecretModal){

            hasSecretModal.classList.remove("show");

        }

    });

}
document.querySelectorAll("button, a").forEach(item => {

    item.addEventListener("click", () => {

        if (navigator.vibrate) {
            navigator.vibrate(20);
        }

    });

});
async function startLetterTyping() {

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    const text1 = "Sen hayatıma girdiğin günden beri her günüm daha güzel.";
    const text2 = "Seninle geçen her saniye benim için tarifsiz bir mutluluk.";
    const text3 = "Seni çok seviyorum. ❤️";

    line1.textContent = "";
    line2.textContent = "";
    line3.textContent = "";

    await typeLine(line1, text1);
    await sleep(500);

    await typeLine(line2, text2);
    await sleep(500);

    await typeLine(line3, text3);
}

async function typeLine(element, text) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await sleep(35);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}