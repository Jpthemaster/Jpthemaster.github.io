// arrays are a type of data structure which are constructs that hold data (objects list)
let emptyArray = []; // we can add more later

let numberArray = 
    [27, 7, 2, 2929, 45]; // five numbers = length of 5

let stringArray = 
    [" apple", "orange", "grape", "pear"];

let mixedArray = 
    ["cat", 2, 5, "dog", 23, [2, 3]];

let groceryList = [
    "bacon", 
    "eggs",
    "coffee",
    "fruits and Veggies",
    "pastrami"
]
console.log(groceryList);

// starts at 0
let firstGroceryItem = groceryList[1];
console.log(firstGroceryItem);

let thirdGroceryItem = groceryList[2];
console.log(thirdGroceryItem);

let lastGroceryItem = groceryList[5];
console.log(lastGroceryItem);

// add existing items to array

console.log(groceryList);
groceryList.push("ice cream");
console.log(groceryList);

const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemSubmit");

function displayList() {
    pageList.innerHTML = groceryList
        .toString()
        .replaceAll(",", "<br>");
}
displayList();

itemSubmit.addEventListener("click", function(e) {
    let newItem = itemInput.value;
    groceryList.push(newItem);
    displayList();
});