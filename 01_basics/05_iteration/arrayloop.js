//  for of 

// ["", "" , ""] //array
// [{} , {} , {}] //array object
//----------------------------------------------------------
// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//   console.log(num)  
// }// 1 2 3 4 5 6

//-------------------------------------------
// const greeting = "Hello anshu"

// for (const greet of greeting) {
//    console.log(`Each char is ${greet}`) 
// }

// ----------------------Maps----------------------- node 01_basics/05_iteration/arrayloop.js

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA' , 'United state of america')
// map.set('Fr' , 'France')

// console.log(map)

// out- Map(3) {
//   'IN' => 'India',
//   'USA' => 'United state of america',
//   'Fr' => 'France'
// }

// ----------------------Maps----------------------- yea only unique valuer lata hai jaise ik bar la liyaq bar bar n lata hai

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA' , 'United state of america')
// map.set('Fr' , 'France')
// map.set('IN', 'India')

//console.log(map)

// out- Map(3) {
//   'IN' => 'India',
//   'USA' => 'United state of america',
//   'Fr' => 'France'
// }

//***********for of loop */

// for (const [key, value] of map) {
//    console.log(key, ':-' , value) //destructuring
// }

// out- IN :- India
// USA :- United state of america
// Fr :- France


// ----------------------Maps-----------------------for of loop---------------

const myobject = {
   game1: 'NFS',
   game2: 'Spiderman'
}

for (const [key , value] of myobject) {
   console.log(key, ':-', value) // out error
   
}

