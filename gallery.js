const photos = [
    { image: "foto1.JPG", text: "İlk fotoğrafımız ❤️" },
    { image: "foto2.JPG", text: "Seninle her anım çok güzel ❤️" },
    { image: "foto3.JPG", text: "İyi ki varsın ❤️" },
    { image: "foto4.JPG", text: "En güzel anılar seninle ❤️" },
    { image: "foto5.JPG", text: "Sonsuza kadar birlikte... ❤️" },
    { image: "foto6.JPG", text: "Her gülüşün bana mutluluk veriyor ❤️" },
    { image: "foto7.JPG", text: "Nice güzel anılara... ❤️" }
];

let current = 0;

const img = document.getElementById("galleryImage");
const text = document.getElementById("galleryText");

function showPhoto(index){

    img.style.opacity = 0;

    setTimeout(() => {

        img.src = photos[index].image;
        text.innerText = photos[index].text;

        img.style.opacity = 1;

    },300);

}

showPhoto(current);

setInterval(() => {

    current++;

    if(current >= photos.length){
        current = 0;
    }

    showPhoto(current);

},5000);

document.getElementById("nextPhoto").onclick = function(){

    current++;

    if(current >= photos.length){
        current = 0;
    }

    showPhoto(current);

}

document.getElementById("prevPhoto").onclick = function(){

    current--;

    if(current < 0){
        current = photos.length-1;
    }

    showPhoto(current);

}
