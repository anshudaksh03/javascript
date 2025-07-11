// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// //const newnums = myNumbers.map( (num) => num + 10) // 1 way
// const newnums = myNumbers.map( (num) => { return num + 10}) // 2 way
// console.log(newnums); // out- [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]


//-------------------------map ka bad filter use bolta hai chainning --------------------

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNumbers
// .map( (num) => num * 10 ) 
// .map((num) => num + 1)
// .filter((num) => num >= 40)
// console.log(newnums); // [
//   41, 51,  61, 71,
//   81, 91, 101
// ] // ab sab 40 la bada ayenfa

//-------------------------map ka bad filter use bolta hai chainning --------------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNumbers
.map( (num) => num * 10 ) 
.map((num) => num + 1)
console.log(newnums); // [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]

