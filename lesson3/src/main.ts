// array

let stringArr = ['one','two', 'three', 'four'];

let guitars = ['Start','Les Paul', 5150];

let mixedData = ['EVH',1984, true];

stringArr[4] = 'five'

guitars.push(999);

mixedData.push(223);
mixedData.push(false);
mixedData.push('Hello');

let test = [];
let bands:string[] = []

bands.push("hello");
bands.push('how are you');

// tuple

let myTuple:[string, number, boolean] = ['Jitu',109, true];

let mixed = ['John',1, false];

mixed = myTuple;
myTuple.push("hello"); 

// objects

let myObj : object;

myObj = [];
console.log(typeof myObj);

myObj = bands;

myObj = {};

const exampleObj = {
    prop1:'Dave',
    prop2:true
}

exampleObj.prop2 = false;

type Guitarist = {
    name:string;
    active?:boolean;
    albums:(string | number)[]
}

interface Singer {
    name:string;
    active?:boolean;
    albums:(string | number)[]
}

let evh:Guitarist = {
    name:'John',
    active:false,
    albums:[12,33,34,5,"Sultan"]
}

let jh:Guitarist = {
    name:'John',
    albums:[12,33,34,5,"Sultan"]
}

const greetGuitarist = (guitarist:Guitarist) => {
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(jh));

enum Grade {
    A=5,
    B,
    C,
    D,
    E
}

console.log(Grade.A)
console.log(Grade.B)