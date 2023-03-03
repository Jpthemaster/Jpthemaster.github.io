let lightboxContainer = document.getElementById("lightboxContainer");
let lightbocBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let grim = document.getElementById("grim");
grim.onclick = openLightbox;
let welcome = document.getElementById("welcome");
welcome.onclick = openLightbox;
let extract = document.getElementById("extract");
extract.onclick = openLightbox;
let rainbow = document.getElementById("rainbow");
rainbow.onclick = openLightbox;
let coffeeImage4 = document.getElementById("coffeeImage4");
coffeeImage4.onclick = openLightbox;
let coffeeImage5 = document.getElementById("coffeeImage5");
coffeeImage5.onclick = openLightbox;
let coffeeImage6 = document.getElementById("coffeeImage6");
coffeeImage6.onclick = openLightbox;
let coffeeImage7 = document.getElementById("coffeeImage7");
coffeeImage7.onclick = openLightbox;
let coffeeImage8 = document.getElementById("coffeeImage8");
coffeeImage8.onclick = openLightbox;
let coffeeImage9 = document.getElementById("coffeeImage9");
coffeeImage9.onclick = openLightbox;
let coffeeImage10 = document.getElementById("coffeeImage10");
coffeeImage10.onclick = openLightbox;

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;