const photos = [
    {
        image: "foto1.JPG",
        text: "İlk fotoğrafımız ❤️"
    },
    {
        image: "foto2.JPG",
        text: "Seninle her anım çok güzel ❤️"
    },
    {
        image: "foto3.JPG",
        text: "İyi ki varsın ❤️"
    },
    {
        image: "foto4.JPG",
        text: "En güzel anılar seninle ❤️"
    },
    {
        image: "foto5.JPG",
        text: "Sonsuza kadar birlikte... ❤️"
    },
    {
        image: "foto6.JPG",
        text: "Her gülüşün bana mutluluk veriyor ❤️"
    },
    {
        image: "foto7.JPG",
        text: "Nice güzel anılara... ❤️"
    }
];

let current = 0;

const img = document.getElementById("galleryImage");
const text = document.getElementById("galleryText");

function changePhoto() {

    img.style.opacity = 0;

    setTimeout(() => {

        current++;

        if (current >= photos.length) {
            current = 0;
        }

        img.src = photos[current].image;
        text.innerText = photos[current].text;

        img.style.opacity = 1;

    }, 700);

}

setInterval(changePhoto, 5000);
