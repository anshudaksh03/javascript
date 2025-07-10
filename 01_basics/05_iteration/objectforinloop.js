// const myobject = {
//     js: "Javascript",
//     cpp: "C++",
//     rb: "ruby",
//     swift:"swift"
// }
// for (const key in myobject) {
//     // console.log(key)
//     console.log(`${key} shortcut is for ${myobject[key]}`)  
// } 

//-------------------------for in loop -----------------------

// const programming = ["js","rb","cpp", "swift", "java" ]
// for (const key in programming) {
//    //console.log(key) // out- 0 1 2 3 4
//    console.log(programming[key]) // out js rn cpp swift java

// }

//----------------------------------------------------------------------------

const map = new Map()
map.set('IN', 'India')
map.set('USA' , 'United state of america')
map.set('Fr' , 'France')
for (const key in map) {
    console.log(key) // yea ittratable  nahii hai to run nahi hoga map
}