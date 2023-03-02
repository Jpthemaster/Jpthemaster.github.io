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

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

function displayDivide() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value / input2.value;
}

function displayAddition() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

function displaySubtract() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value - input2.value;
}