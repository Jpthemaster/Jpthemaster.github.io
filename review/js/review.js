const flexbox2 = document.getElementById("flexbox2");
const flexbox3 = document.getElementById("flexbox3");
const grid = document.getElementById("grid");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link = 
    document.getElementById("");

function hideall() {
    flexbox2.style.display = "none";
    flexbox3.style.display = "none";
    grid.style.display = "none";
}
hideAll();

function showLink1() {
    hideall();
    flexbox2.style.display = "";
}
Link1.onclick = showLink1;

function showLink2() {
    hideAll();
    flexbox3.style.display = "";
}
link2.onclick = showLink2;

function showLink3() {
    hideAll();
    grid.style.display = "";
}
link3.onclick = showlink3;