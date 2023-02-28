// variables need to be declared
// before they can be used
// variable declaration is one by using the "let" keyword
// variables store or refer to data think position of jobs like cfo or ceo
debugger;

let greeting = "Good Evening";
console.log (greeting);

let myNumber=5;
console.log (myNumber);

myNumber=5;
console.log (myNumber);

// just cuz you can change data type doesnt mean you should
// myNumber="one-thousand";
// console.log (myNumber);

// we can also use operators for variable assignments
let myNewNumber = 5 + 4;
console.log(myNewNumber);

// variable in varaible 

let anotherNumber = myNumber + myNewNumber;
console.log(anotherNumber);

// we can even use the same variable in its own assignement
anotherNumber = anotherNumber + 5;
console.log(anotherNumber);

// practical example
let username = "Juan P";
let personalizedGreeting = greeting + " " + username;
console.log(personalizedGreeting)

// Data TYpe: Bolean (true/false)
Console.log (true);
// Boolean operator: equivalence
console/log(10 == 5); // true

// not eqivalent (!=)

console.log( 5 != 15); // false
console.log( 5 != 5); // false

// less than (<)

console.log (5 < 10); //true
console.log (10 < 5); // false
console.log (5 < 5); // false

// greater than (>=)

console.log (5 > 10); //false
console.log (10 > 5); // true
console.log (5 > 5); // false

// greater than or equal to (>=)
// less than or equal to (<=)

console.log (5 >= 10); //false
console.log (10 >= 5); // true
console.log (5 <= 5); // True

// Boolean data types allow us to write branching code paths
let a = 5;
if b = 10;
if (false) {
    console.log ("This statement is true!");
} Else {
    console.log ("This statement is false!");
}
