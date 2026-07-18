const secretHeart = document.getElementById("secretHeart");

let sayac = 0;

secretHeart.addEventListener("click", () => {

    sayac++;

    console.log("Kalbe basıldı:", sayac);
secretHeart.classList.add("pop");
  const mini = document.createElement("span");

mini.innerHTML = "❤️";

mini.className = "mini-heart";
    mini.style.setProperty("--x", (Math.random() * 80 - 40) + "px");
mini.style.setProperty("--r", (Math.random() * 60 - 30) + "deg");

secretHeart.appendChild(mini);

setTimeout(() => {

    mini.remove();

},2000);  

setTimeout(() => secretHeart.classList.remove("pop"), 350);
});
