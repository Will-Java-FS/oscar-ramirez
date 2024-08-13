"use strict";
let isSunny = true; //boolean
let numberOne = 1; //number
let word = "Hello, World!"; //string
let bigNumber; //big int
let car = "toyota"; //type inference
let numbers = [1, 2, 3, 4]; //array
let words = ["Hello", "Hey", "Hi"]; //using generics
function add(a, b) {
    return a + b;
}
let func = (c) => { return c; }; //arrow function syntax
//object creation
const house = {
    type: "single-family home",
    bedrooms: 3,
    bathrooms: 2,
    age: 45
};
let car1 = "Honda";
let car2 = "Ford";
const dog = {
    size: "Large",
    age: 11,
    breed: "Husky",
    color: "black"
};
// console.log(dog);
// Tuples
let myTuple;
myTuple = [true, "Purple", 14, false];
// console.log(myTuple)
myTuple.push(false);
// console.log(myTuple)
let otherTuple = ["Large Pizza", 12.99];
// otherTuple.push(true);
//Union Types
function checkType(variable) {
    console.log(`the value is a ${variable}`);
}
// checkType(false);
// checkType("true");
//Enums
//String Enum
var dropdown;
(function (dropdown) {
    dropdown["IT"] = "IT Department";
    dropdown["HR"] = "Human Resources";
    dropdown["F"] = "Finance";
})(dropdown || (dropdown = {}));
;
// console.log(dropdown.HR);
//Numerical Enm
// enum zipCode {
//     Columbus = 43567,
//     NewYork = 10022,
//     Miami = 23458
// }
var zipCode;
(function (zipCode) {
    zipCode[zipCode["Colubus"] = 43567] = "Colubus";
    zipCode[zipCode["NewYork"] = 43568] = "NewYork";
    zipCode[zipCode["Miami"] = 43569] = "Miami";
    zipCode[zipCode["LosAngeles"] = 43570] = "LosAngeles";
})(zipCode || (zipCode = {}));
// console.log(zipCode.Miami);
// console.log(zipCode.LosAngeles);
function isLeapYear(year) {
    return (year % 4 === 0) && ((year % 100 !== 0) || year % 400 === 0);
}
console.log(isLeapYear(1997));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
