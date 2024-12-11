let e = <string>'hello'

const addOrConcat = (a:number, b:number, c:'add' | 'concat') => {
    if(c === 'add') return a + b;
    return '' + a + b;
}

let myVal:string = addOrConcat(2,2,'concat') as string;

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('img') as HTMLImageElement;

img.src = ""
myImg.src = "";