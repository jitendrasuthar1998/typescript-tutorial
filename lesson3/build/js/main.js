"use strict";
// array
let stringArr = ['one', 'two', 'three', 'four'];
let guitars = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[4] = 'five';
guitars.push(999);
mixedData.push(223);
mixedData.push(false);
mixedData.push('Hello');
let test = [];
let bands = [];
bands.push("hello");
bands.push('how are you');
// tuple
let myTuple = ['Jitu', 109, true];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple.push("hello");
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: 'John',
    active: false,
    albums: [12, 33, 34, 5, "Sultan"]
};
let jh = {
    name: 'John',
    albums: [12, 33, 34, 5, "Sultan"]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jh));
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 5] = "A";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["C"] = 7] = "C";
    Grade[Grade["D"] = 8] = "D";
    Grade[Grade["E"] = 9] = "E";
})(Grade || (Grade = {}));
console.log(Grade.A);
console.log(Grade.B);
