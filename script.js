// Başlangıç tarihi
const startDate = new Date("2022-06-15T00:00:00");

// Gerekli elemanlar
const intro = document.getElementById("intro");
const card = document.querySelector(".card");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Açılış ekranı
window.onload = () => {

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";
            card.style.display = "block";

        },1000);

    },2500);

};


// Sayaç

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff/1000);

    const d = Math.floor(totalSeconds / 86400);

    const h = Math.floor((totalSeconds % 86400) / 3600);

    const m = Math.floor((totalSeconds % 3600) / 60);

    const s = totalSeconds % 60;

    days.textContent = d;

    hours.textContent = String(h).padStart(2,"0");

    minutes.textContent = String(m).padStart(2,"0");

    seconds.textContent = String(s).padStart(2,"0");

}

updateCounter();

setInterval(updateCounter,1000);
// Mektup Aç / Kapat

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");

openLetter.onclick = function () {
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

    heart.style.fontSize=(14+Math.random()*16)+"px";

    heart.style.animationDuration=(2.5+Math.random()*2)+"s";

    heartBox.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4500);

}

setInterval(createHeart,450);
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
// ❤️ Gizli kalpten çıkan minik kalpler

const secretHeart = document.getElementById("secretHeart");

setInterval(() => {

    const miniHeart = document.createElement("span");

    miniHeart.className = "mini-heart";

    miniHeart.innerHTML = "❤️";

    miniHeart.style.left = (45 + Math.random() * 10) + "%";

    secretHeart.appendChild(miniHeart);

    setTimeout(() => {
        miniHeart.remove();
    }, 2000);

}, 500);
