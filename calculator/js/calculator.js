console.log("I am here");
let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

function displayThreeTimesFour() {
    result.innerHTML = 3 * 4;
}

function displaySixDividedByTwo() {
    let number1 = 6;
    let number2 = 2;
    result.innerHTML = number1 / number2;
}

function displayTenModulusThree() {
    result.innerHTML = 10 % 3;
}
