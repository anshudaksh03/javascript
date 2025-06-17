const score = 400
//console.log(score) //44400

const balance = new Number (100)
//console.log(balance)  // number = 100


console.log(balance.toString().length) //3
//console.log(balance.toFixed(5)) //100.00000   how many zeroes you wNT TO INCREASE


const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4)) //123.9

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'))//100,000 // in indian 1,00,00


//-----------------------------------------------------------Mathes----------------------------------------------------------------------------

// console.log(Math)
// console.log(Math.abs(-4))//4
// console.log(Math.round(4.6)) // 5
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.min(4,3,8,9)) // 3 sabsa chota min
// console.log(Math.max(4,3,8,9)) // 9 sabsa bada max


console.log(Math.random()) // 0.9390553378474384 point ka bad 0 to 1 ka bich
//console.log((Math.random()*10) + 1) //  ab aisa n hoga koi value nahi aye ab kuch na kuch jarur ayegi
console.log(Math.floor(Math.random()*10) + 1) //  10

const min = 10
const max = 20
//console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // ab iss mai 10 ka uper ki hi value print hongi
console.log(Math.floor(Math.random() * (max - min + 1)) + max)  // ab iss mai 20 ka uper ki hi value print hongi







