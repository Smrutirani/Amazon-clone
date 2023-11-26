 let myDate = new Date();

// console.log(typeof myDate); //Object
// console.log(myDate); // 2023-11-22T05:37:09.128Z
// console.log(myDate.toString()); // Wed Nov 22 2023 05:47:05 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Wed Nov 22 2023
// console.log(myDate.toLocaleString()); // 11/22/2023, 5:47:05 AM
// console.log(myDate.toLocaleDateString()); // 11/22/2023
// console.log(myDate.toISOString()); // 2023-11-22T05:47:05.219Z
// console.log(myDate.toJSON()); // 2023-11-22T05:47:05.219Z
// console.log(myDate.toTimeString()); // 05:47:05 GMT+0000 (Coordinated Universal Time)

//create your own date and known the which day and time
// let myCreateDate = new Date(2023, 0, 22); // jan start with 0 // 
// console.log(myCreateDate.toDateString()); //Sun Jan 22 2023

// let myCreateDate = new Date(2023, 4, 22);
// console.log(myCreateDate.toString());  //Mon May 22 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

// let myCreateDate = new Date(2023, 4, 22, 11, 55); // (yy:mm:dd:Hr:min)
// console.log(myCreateDate.toLocaleString()); // 5/22/2023, 11:55:00 AM

let myCreateDate = new Date("04-22-2023")
// console.log(myCreateDate.toLocaleString()); // 4/22/2023, 12:00:00 AM

//Exact timeStamp it means quick quiz pole value which is first somthing like this
let myTimeStamp = Date.now(); //Date.now give you in ms value

// console.log(myTimeStamp); // 1700655488672 (ms-mile sec)
// console.log(myCreateDate.getTime()); //getTime it gives to you exact time (in ms)// 1682121600000 
// Now you can compare both value which is first (myTimeStamp or myCreateDate)

// console.log(Math.floor(Date.now()/1000)); // convert to sec // 1700655958

// if you can check exact date/month/ or year the you  can you use get method like-
let newDate = new Date();
// console.log(newDate); // 2023-11-22T13:57:17.838Z
// console.log(newDate.getDate()); // it'll show today date // 22
// console.log(newDate.getMonth()); // 10 // This is nov becoz jan will start 0 so 10 will be nov month
// console.log(newDate.getMonth() + 1); // or you can use like ths also it will give you eaxct month value // 11
// console.log(newDate.getFullYear()); // 2023
// console.log(newDate.getDay()); // 3

//or can use string interpolation 
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: 'long',
    

})