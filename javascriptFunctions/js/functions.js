// variable review
let greeting = "Ahoy! Matey!";
console.log(greeting);

// Simple Function
function greet() {
    console.log(greeting);
}

greet();

// function with an input parameter
function greetUser(username){
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser("Ryan");

// function with input parameter that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    // greetingDisplay.innerHTML += greeting + " @" + username;
    greetingDisplay.innerHTML = greeting + " @" + username;
}

greetUserOnPage("Juan");

// Function that outputs ("or returns") a value
function getUserGreeting(username) {
    return greeting + " $" + username;
}

getUserGreeting("Ryan");
console.log(
    getUserGreeting("Ryan")
 );

// function using another function that modifies the page
function greetUserOnPageV2(username){
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML += "<br> " + getUserGreeting(username);
}

greetUserOnPageV2("Juan C Perez")
