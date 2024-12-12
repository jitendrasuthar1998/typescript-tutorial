const echo = <T>(arg:T) : T => arg;

const isObj = <T>(arg:T):boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null
}

console.log(isObj(true));
console.log(isObj({name:'Jitendra', age:20}))
console.log(isObj(null))
console.log(isObj([1,2,3]));

const isTrue = <T>(arg:T):{arg:T, is:boolean} => {
    
    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }

    if(typeof arg === 'object' && !Object.keys(arg as keyof T).length){
        return {arg, is:false}
    }
    return {arg, is:!!arg}
}

console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(true));