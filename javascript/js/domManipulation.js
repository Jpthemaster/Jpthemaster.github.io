// the DOM (Document Object Model)
// representation of your web page (including html and CSS) in javascript
// javascript is case sensative

let body = document.getElementById ("myBodyElement");

// 
body.style.backgroundColor = "lightgreen";

body.innerHTML = "<h1> Hello World</h1>";

// we can also append HTML to 'innerHTML'
body.innerHTML =
    body.innerHTML +
        "<p id='myParagraph'>This was written with dynamic JS!</p>";

// the operator is equivalent to the code above 
body.innerHTMl += "<p> Here's another paragraph</>";

// We can also get JS references to HTMl elements that we added dynamically

let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "#223456";
myParagraph.style.fontWeight = "bold";

// Dark Mode
let isDarkMode = true;
if (isDarkMode) {
    body.style.backgroundColor = "333333";
    body.style.color = "white";

} else {
    body.style.backgroundColor = "white";
    body.style.color = "#333333";
}
