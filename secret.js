const secretHeart = document.getElementById("secretHeart");

let sayac = 0;

secretHeart.addEventListener("click", () => {

    sayac++;

    console.log("Kalbe basıldı:", sayac);
secretHeart.classList.add("pop");
  const mini = document.createElement("span");

mini.innerHTML = "❤️";

mini.className = "mini-heart";

secretHeart.appendChild(mini);

setTimeout(() => {

    mini.remove();

},2000);  

setTimeout(() => secretHeart.classList.remove("pop"), 350);
});
