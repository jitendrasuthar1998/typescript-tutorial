"use strict";
// type aliases 
// when we refer typescript types to some other name by using type keyword, it called type alias
// interface is only used for object or classes
// Literal types
let userName;
userName = 'Dave';
// functions
const add = (a, b) => a + b;
const logMsg = (message) => console.log(message);
const subtract = function (a, b) { return a - b; };
const subtractValue = function (a, b) { return a - b; };
// optional 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (isNumber(value))
        return 'number';
    return createError('This should not happen');
};
