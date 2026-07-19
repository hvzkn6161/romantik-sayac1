const secretHeart = document.getElementById("secretHeart");
const secretModal = document.getElementById("secretModal");
const closeSecret = document.getElementById("closeSecret");

let sayac = 0;

secretHeart.addEventListener("click", () => {

    sayac++;

    console.log("Kalbe basıldı:", sayac);
    if (sayac === 5) {
    secretModal.style.display = "flex";
}
secretHeart.classList.add("pop");
  const mini = document.createElement("span");

mini.innerHTML = "❤️";

mini.className = "mini-heart";
    mini.style.setProperty("--x", (Math.random() * 80 - 40) + "px");
mini.style.setProperty("--r", (Math.random() * 60 - 30) + "deg");

document.body.appendChild(mini);
    const rect = secretHeart.getBoundingClientRect();

mini.style.left = (rect.left + rect.width / 2) + "px";
mini.style.top = rect.top + "px";

setTimeout(() => {

    mini.remove();

},2000);  

setTimeout(() => secretHeart.classList.remove("pop"), 350);
});
closeSecret.addEventListener("click", () => {
    secretModal.style.display = "none";
});
