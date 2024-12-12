"use strict";
// Index signature
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Books']);
let prop = "Job";
//Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
// No index signature with a parameter of type 'string' was found on type 'TransactionObj'.ts(7053)
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Books = 100;
// interface Student{
//     [key:string]:number | string | number[] | undefined
//     name:string,
//     GPA:number,
//     classes?:number[]
// }
const student = {
    name: "John",
    GPA: 4.4,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
