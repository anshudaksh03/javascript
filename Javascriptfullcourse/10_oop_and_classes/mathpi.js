const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter); out->

// //  value: 3.141592653589793,
// //   writable: false,
// //   enumerable: false,
// //   configurable: false


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name: 'ginger',
    price: 250,
    isAbailabe: true
}

//console.log(Object.getOwnPropertyDescriptor(chai)); // ab out hoga undefiend 
console.log(Object.getOwnPropertyDescriptor(chai,"name")); // out
// {
//   value: 'ginger',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


Object.defineProperty(chai,'name',{
//writable:false,
enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai) ) {
  if (typeof value !== 'function'){

    console.log(`${key} : ${value}`)
    
}}



//-----------------------------------code runer -node Javascriptfullcourse/10_oop_and_classes/mathpi.js