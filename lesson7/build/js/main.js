"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj({ name: 'Jitendra', age: 20 }));
console.log(isObj(null));
console.log(isObj([1, 2, 3]));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (typeof arg === 'object' && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(true));
