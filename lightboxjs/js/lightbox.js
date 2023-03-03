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
let squadDeep = document.getElementById("squadDeep");
squadDeep.onclick = openLightbox;
let trio = document.getElementById("trio");
trio.onclick = openLightbox;
let arcadeLogo = document.getElementById("arcadeLogo");
arcadeLogo.onclick = openLightbox;
let solis = document.getElementById("solis");
solis.onclick = openLightbox;
let zero = document.getElementById("zero");
zero.onclick = openLightbox;
let alibi = document.getElementById("alibi");
alibi.onclick = openLightbox;
let azami = document.getElementById("azami");
azami.onclick = openLightbox;

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;