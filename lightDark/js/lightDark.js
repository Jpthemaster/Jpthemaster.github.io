let mode = "light";

const body = document.getElementById("body");
const header = document.getElementById("header");
const button = document.getElementById("modeToggle");

body.style.margin = "0px"; 
header.style.padding = "24px";

function displayMode() {

        // Conditional Example
    if (mode == "light") {
        header.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
        body.style.color= "black";
    } else if (mode == "dark) {
        header.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
        body.style.color= "white";
    }
}

displayMode();

function togglemode() {
    if (mode == "light") {
        mode= "dark";
    } else if ( mode == "dark") {
        mode = "light";
    }
    displayMode();
}

button.onclick = toggleMode;