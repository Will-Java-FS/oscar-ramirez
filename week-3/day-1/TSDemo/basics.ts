
let isSunny: boolean = true; //boolean
let numberOne: number = 1; //number
let word: string = "Hello, World!"; //string
let bigNumber: bigint; //big int

let car = "toyota"; //type inference

let numbers: number[] = [1, 2, 3, 4]; //array
let words: Array<string> = ["Hello", "Hey", "Hi"]; //using generics

function add(a: number, b: number) {    //basic function
    return a + b;
}

let func = (c: number): number => {return c}; //arrow function syntax

//object creation
const house:  {type: string, bedrooms: number, bathrooms: number, age: number} = {
    type: "single-family home",
    bedrooms: 3,
    bathrooms: 2,
    age: 45
};

// console.log(house);
// console.log(house.type);
// console.log(house.bedrooms);
// console.log(house.bathrooms);
// console.log(house.age);

//Aliases
type car = "Toyota"| "Ford" | "Honda";

let car1: car = "Honda";
let car2: car = "Ford";
// let car3: car = "Nissan";

//Interfaces
interface Animal {
    size: string,
    age:number
}

interface Dog extends Animal {
    breed: string,
    color: string
}

const dog: Dog = {
    size: "Large",
    age: 11,
    breed: "Husky",
    color: "black"
}

// console.log(dog);

// Tuples
let myTuple: [boolean, string, number, boolean];

myTuple = [true, "Purple", 14, false];
// console.log(myTuple)
myTuple.push(false);
// console.log(myTuple)


let otherTuple: readonly[string, number] = ["Large Pizza", 12.99];
// otherTuple.push(true);



//Union Types

function checkType(variable: string | boolean) {
    console.log(`the value is a ${variable}`);
}

// checkType(false);
// checkType("true");

//Enums
//String Enum
enum dropdown {
    IT = "IT Department",
    HR = "Human Resources",
    F = "Finance"
};

// console.log(dropdown.HR);

//Numerical Enm
// enum zipCode {
//     Columbus = 43567,
//     NewYork = 10022,
//     Miami = 23458
// }

enum zipCode {
    Colubus = 43567,
    NewYork,
    Miami,
    LosAngeles
}

// console.log(zipCode.Miami);
// console.log(zipCode.LosAngeles);

function isLeapYear(year: number): boolean {
    return (year % 4 === 0) && ((year % 100 !== 0) || year % 400 === 0);
}

console.log(isLeapYear(1997));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));