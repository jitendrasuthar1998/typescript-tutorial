"use strict";
let e = 'hello';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
const img = document.querySelector('img');
const myImg = document.getElementById('img');
img.src = "";
myImg.src = "";
