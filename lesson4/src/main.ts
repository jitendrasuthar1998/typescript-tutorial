// type aliases 
// when we refer typescript types to some other name by using type keyword, it called type alias

type stringOrNumber = string | number

type stringOrNumberArray = stringOrNumber[]

type Singer = {
    name:string;
    active?:boolean;
    albums:stringOrNumberArray
}

// interface is only used for object or classes

// Literal types

let userName : 'John' | 'Dave' | 'Amy';

userName = 'Dave'

// functions

const add = (a:number, b:number):number => a + b;

const logMsg = (message:any):void => console.log(message);

const subtract = function (a:number, b:number):number { return a - b}

type mathFunction = (a:number, b:number) => number;

const subtractValue:mathFunction = function (a, b) { return a - b}

// optional 

const addAll = (a:number, b:number, c?:number):number => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b;
}

const sumAll = (a:number, b:number, c:number = 2):number => {
    return a + b + c;
}

logMsg(addAll(1,2,3));
logMsg(addAll(1,2));
logMsg(sumAll(1,2));

const total = (...nums:number[]):number => {
    return nums.reduce((prev,curr)=> prev + curr,0)
}

logMsg(total(1,2,3,4,5,6,7,8))


const createError = (errMsg:string) => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i:number = 1;

    while(true){
        i++

        if(i > 100) break;
    }
}

// custom type guard
const isNumber = (value:any):boolean => {
    return typeof value === 'number' ? true : false;
}

// use of never type
const numberOrString = (value:any):string => {
    if(typeof value === 'string'){
        return 'string';
    }
    if(isNumber(value)) return 'number';
    return createError('This should not happen')
}