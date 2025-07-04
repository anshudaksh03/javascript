
function sayMyname(){
console.log("A")
console.log("n")
console.log("s")
console.log("h")
console.log("u")
}
//sayMyname()// function ko run krna

// function addMyTwonumbers (number1, number2){
//     console.log(number1 + number2)
// }
//addMyTwonumbers(2,4) // out 6
//addMyTwonumbers(2,"4") // out 24
//addMyTwonumbers(2,null) // out - 2

/*function addMyTwonumbers (number1, number2){
//    let result = number1 + number2
//    return result
// 2nd way
return number1 + number2

}
const result = addMyTwonumbers(3,5)
console.log("result:" , result)*/

// function loginUserMessage (username){
//     if(username===undefined){
//         console.log("please enter username")
//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserMessage("Anshu"))


/*function loginUserMessage (username){
    if(username===undefined){
        console.log("please enter username") 
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())*/

// - 2nd way

// function loginUserMessage (username){
//     if(!username){
//         console.log("please enter username") 
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


function loginUserMessage (username = "Sam"){
    if(!username){
        console.log("please enter username") 
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage()) // agar valuse pass kro ga to sam ko overwrite kr diya jaye gas
console.log(loginUserMessage("Anshu")) 