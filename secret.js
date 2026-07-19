const secretHeart = document.getElementById("secretHeart");
const secretModal = document.getElementById("secretModal");
const closeSecret = document.getElementById("closeSecret");

let sayac = 0;

secretHeart.addEventListener("click", () => {

    sayac++;

    // Kalbi zıplat
    secretHeart.classList.add("pop");
    setTimeout(() => {
        secretHeart.classList.remove("pop");
    }, 300);

    // Küçük kalpler oluştur
    for (let i = 0; i < 6; i++) {

        const mini = document.createElement("span");
        mini.className = "mini-heart";
        mini.innerHTML = "❤️";

        const rect = secretHeart.getBoundingClientRect();

        mini.style.left = (rect.left + rect.width / 2) + "px";
        mini.style.top = (rect.top + rect.height / 2) + "px";

        mini.style.setProperty("--x", (Math.random() * 160 - 80) + "px");
        mini.style.setProperty("--r", (Math.random() * 360) + "deg");

        document.body.appendChild(mini);

        setTimeout(() => {
            mini.remove();
        }, 2000);

    }

    // 5. dokunuşta gizli mektup
    if (sayac === 5) {
        secretModal.style.display = "flex";
    }

});

// Kapat butonu
closeSecret.addEventListener("click", () => {
    secretModal.style.display = "none";
});

// Dışarı tıklayınca kapansın
secretModal.addEventListener("click", (e) => {
    if (e.target === secretModal) {
        secretModal.style.display = "none";
    }
});
