// Index signature

// interface TransactionObj {
//     Pizza:number;
//     Books:number;
//     Job: number
// }

interface TransactionObj {
   readonly [key:string]:number;
    Pizza:number;
    Books:number;
    Job: number
}

const todaysTransactions : TransactionObj = {
    Pizza:-10,
    Books:-5,
    Job:50
}

console.log(todaysTransactions.Pizza);

console.log(todaysTransactions['Books']);

let prop: string = "Job";

//Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
// No index signature with a parameter of type 'string' was found on type 'TransactionObj'.ts(7053)

console.log(todaysTransactions[prop]);

const todaysNet = (transactions:TransactionObj) => {
    let total = 0;

    for(const transaction in transactions){
        total += transactions[transaction]
    }

    return total;
}

console.log(todaysNet(todaysTransactions))

todaysTransactions.Books = 100;

// interface Student{
//     [key:string]:number | string | number[] | undefined
//     name:string,
//     GPA:number,
//     classes?:number[]
// }

const student: Student = {
    name:"John",
    GPA:4.4,
    classes:[100,200]
}

// console.log(student.test)

interface Student{
    name:string,
    GPA:number,
    classes?:number[]
}

for(const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})