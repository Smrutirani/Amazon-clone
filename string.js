// const newString = new String("   Smruti-Arun   ");
// const oldString = "   Smruti "
// console.log(newString.substring(0, 4)); // "smru" //(index-start, index-end)

// const new6 = new String("Smruti-Arun");
// const new7 = new6.slice(-8, 6); //uti
// console.log(new7); 

// console.log(oldString);  // "   Smruti "
// console.log(oldString.trim()); // "smruti"

// const newOne = "2 + 2";
// const newTwo = new String("2 + 2");
// console.log(eval(newOne));  // 4
// console.log(eval(newTwo)); // string[" 2 + 2 "]
// console.log(`This is String eval method value is ${eval(newOne.valueOf())} out...`); //4

// const new3 = "smruti";
// const new4 = "arun";
// console.log(new3.toUpperCase(), new4.toUpperCase()); // SMRUTI ARUN
// if(new3 === new4){
//     console.log(new3);
// } else if(new3 == new4){
//     console.log(new4);
// } else {
//     console.log(new3 + " = " + new4); //smruti = arun
// }

// const new5 = "true-false-and";
// console.log(new5.split('a'));

// const new6 = "10, 40, 20, 30, 50, 60";
// console.log(new6.splice(1, 3, '70', '80')); // This method is not exits

const new7 = "narr-owto";
// console.log(new7.replace('n', 's')); // sarrowto //(indexValue, newValue)
// console.log(new7.startsWith(na)); //
// console.log(new7.split('-')); //where to split the value // 'narr', 'owto'
console.log(new7.indexOf('a'));  // it will give you index-1 number // 1 or if not their it'll give you -1
// console.log(new7.concat('girl')); // add a new value //narr-owtogirl
// console.log(new7.includes('smr')); //this method check the value is present the string or not // Given TRUE/FALSE
// console.log(new7.match('a')); // this method match if char are present print the index number // index-1
