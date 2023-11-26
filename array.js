const arr = [10, 11, 12, 13, 14];
console.log(arr[0]);

arr.push(9); // add element in the last index
console.log(arr);

arr.pop(); // remove the element in the last index
console.log(arr);

arr.unshift(9); // add element in the first index
console.log(arr);

arr.shift(); // remove element in the first index
console.log(arr);

// const newArr = arr.includes(10); // it'll gives you true/false
// console.log(newArr); // if element is their then o/p is true

// const newArr1 = arr.includes(15); 
// console.log(newArr1); // if element is their then o/p is false

const newArr1 = arr.indexOf(14); // this parameter is give you index value
console.log(newArr1); // if element is their then o/p is 4 (index number)

const newArr2 = arr.indexOf(15); 
console.log(newArr2); // if element is not their then o/p is -1

const newArr = arr.join(); // it'll give you array to string value
console.log(newArr); // 
console.log(typeof newArr); // data type is string

const new1 = arr.slice(1, 3); // give the element (start, end)
console.log(arr); // o/p - [ 10, 11, 12, 13, 14 ] // final array will be this
console.log(new1); // o/p - [ 11, 12 ] // remove element only index(1,2) not include index(3)

const new2 = arr.splice(1, 3); // give the element (start, end)
console.log(arr); // o/p - [10, 14] // final array will be this
console.log(new2); // o/p - [ 11, 12, 13 ] // remove element index(1,2,3)

//NOTE:- splice and slice major diff is main array  see the example
