const numb1 = new Number(121.01);

// console.log(numb1.toFixed(3)); // it'll gives you float/double value // 100.000
// console.log(numb1.constructor(-5)); //it will give you [native code] // 5
// console.log(numb1.finite('s'));
// console.log(numb1.toPrecision(4)); //

const numb2 = 1000000;
// console.log(numb2.toLocaleString()); // 1,000,000(This is us based read money) // toLocaleString range will be (1-21) 
// console.log(numb2.toLocaleString('en-IN')); // 10,00,000(This is indian rupees currency)

// ------------------- Maths ----------------- //
const numb3 = 4.89;
// console.log(Math.abs(-4)); // 4 (-ve -> +ve) Absoluate value
// console.log(Math.round(4.11)); // 4 (it gives you int value)
// console.log(Math.ceil(4.89)); // 5 (it gives you upper value)
// console.log(Math.floor(4.12)); // 4 (it gives you lower value)
// console.log(Math.random()); // is this value between (0-1)
// console.log(Math.random()*10); // 3.684572254329752 //This value between (1-10)
console.log((Math.random()*10)+1); // 8.499801453525619 //It will give you value between (10-20)
// if you have round value or floor value you can use this Math method also
console.log(Math.round(Math.random()*10 + 1)); // or you can use floor it will give min value and ceil give you max value  

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);