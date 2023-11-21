      /* --------- Stack Memory (is a Primitive DataType) --------*/
      /* -- It's copy the original memory after update it will not change the original value --*/

let userOne = "smruti@gmail.com"
let userTwo = userOne;
// console.log(userTwo);
userTwo = "arun@gmail.com"
// console.log(userOne);
// console.log(userTwo);

/* --------- Heap Memory (is a non-primitive DataType) --------*/
   /*-- It's refrence the original value after update it will change the original value  --*/

let user3 = {
    email: "smruti@gmail",
    age: 24
}
let user4 = user3
user4.email = "arun@gmail"
console.log(user3.email);
console.log(user4.email);