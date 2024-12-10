let myName = "Jitendra"; //implicit type inference

let herName:string = "Jaya" // explicit type inference

let meaningOfLife: number;

meaningOfLife = 100; 

let isLoading: boolean;

isLoading = true;

const sum = (a:number,b:string) => a + b;

sum(10,"20")

let album:string | number; // union type

album = "Sultan"

album = 1957

let apiStatus:'idle' | 'active' | 'waiting';

apiStatus = 'active';

let re:RegExp = /\w+/g;