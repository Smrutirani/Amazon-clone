const arr = [10, 11, 12, 13, 14];
// console.log(arr[0]);

arr.push(9); // add element in the last index
// console.log(arr); // [10,11,12,13,14,9]

arr.pop(); // remove the element in the last index
// console.log(arr); // [10,11,12,13,14]

arr.unshift(9); // add element in the first index
// console.log(arr); // [9,10,11,12,13,14]

arr.shift(); // remove element in the first index
// console.log(arr); // [10,11,12,13,14]

// const newArr = arr.includes(10); // it'll gives you true/false
// console.log(newArr); // if element is their then o/p is true

// const newArr1 = arr.includes(15); 
// console.log(newArr1); // if element is their then o/p is false

const newArr1 = arr.indexOf(14); // this parameter is give you index value
// console.log(newArr1); // if element is their then o/p is 4 (index number)

const newArr2 = arr.indexOf(15); 
// console.log(newArr2); // if element is not their then o/p is -1

const newArr = arr.join(); // it'll give you array to string value
// console.log(newArr); // 
// console.log(typeof newArr); // data type is string

const new1 = arr.slice(1, 3); // give the element (start, end)
// console.log(arr); // o/p - [ 10, 11, 12, 13, 14 ] // final array will be this
// console.log(new1); // o/p - [ 11, 12 ] // remove element only index(1,2) not include index(3)

const new2 = arr.splice(1, 3); // give the element (start, end)
// console.log(arr); // o/p - [10, 14] // final array will be this
// console.log(new2); // o/p - [ 11, 12, 13 ] // remove element index(1,2,3)

//NOTE:- splice and slice major diff is original array  see the example

const vari = ["smruti", "payal"];
const vari1 = ["arun", "anshu"];

vari.push(vari1);
// console.log(vari); // [ 'smruti', 'payal', [ 'arun', 'anshu' ] ]

vari.concat(vari1);
// console.log(vari); // [ 'smruti', 'payal']

const newVari = vari.concat(vari1);
// console.log(newVari); // [ 'smruti', 'payal', 'arun', 'anshu' ]

// Note you can use sparid operator [...]
const newVari1 = [...vari, ...vari1];
// console.log(newVari1); //[ 'smruti', 'payal', 'arun', 'anshu' ]

// if Qus ask like this
let val = [1,2,[3,4],[5,6,[7,8]],9]; // use flat method
let realVal = val.flat(Infinity); // flat(depth: number)
// console.log(realVal); // [1,2,3,4,5,6,7,8,9]

console.log(Array.isArray("smruti")); // false // it gives you is a variable array or not

console.log(Array.from("smruti")); // [ 's', 'm', 'r', 'u', 't', 'i' ] // it'll gives you a string to array

console.log(Array.from({name: "smruti"})); // [] // gives you empty array

// if Qus like this you use Array.of method
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] // it'll give a array

