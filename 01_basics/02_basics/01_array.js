//Array  storing a collection of multiple items under a single variable name
// () parenthesis {} brecisses [] bracket

let myarr = [0,1,2,3,4,5,6,7]
const myHeros = ["Shaktiman", "Nangraj"]
const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr[0])//0

//Array Method
// myarr.push(6)
// myarr.push(7)
// myarr.pop() // yea lasst value ko remove kr daga

// console.log(myarr) //0 to 6 tak counting 


// myarr.unshift(9) //  9, 0, 1, 2, 3,  4, 5, 6, 7 in start point it is add value like 9
// myyarr.shift()// yea delete kr daga


// console.log(myarr.includes(9)); //false kyu ki 9 hai hi nahi
// console.log(myarr.indexOf(9)); // jo exist nahi krti hai use yea -1 dekhaye ga
// console.log(myarr.indexOf(3)); // jo exist krti hai use value ko dekhaye ga like 3 dekhaye ga
// console.log(myarr)

// const newarr = myarr.join()
// console.log(myarr)

// console.log(newarr) // join kr data hai string mai convert
// console.log(typeof newarr) //string


// method - slice and splice

console.log("A" , myarr) // orginal array

// const myn1 = myarr.slice(1,3)  // slice me thod
// console.log(myn1);
// console.log("B" , myarr)

const myn2 = myarr.splice(1,3) // splice method
console.log("c" , myarr) // iss mai aye ga 1,2
console.log(myn2)// 1  2 ,3 iss mai sara aa jata hai word 


