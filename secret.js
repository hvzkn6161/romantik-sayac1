const secretHeart = document.getElementById("secretHeart");

let sayac = 0;

secretHeart.addEventListener("click", () => {

    sayac++;

    console.log("Kalbe basıldı:", sayac);

});
