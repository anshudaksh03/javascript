
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


/*function loginUserMessage (username = "Sam"){
    if(!username){
        console.log("please enter username") 
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage()) // agar valuse pass kro ga to sam ko overwrite kr diya jaye gas
console.log(loginUserMessage("Anshu")) */


function calculatecardPrice (...num1) { //...rest operator
    return num1
}
//console.log(calculatecardPrice(200,582,700))

const user = {
    username: "Anshu",
    price:199
}

function handleobject (anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)

}
 // abb object in function
 handleobject(user) //user name is Anshu and price is 199
//  handleobject({
//     username:"sam",
//     price:199
//  })  

 // array in function

 const newarray = [200, 300, 400 , 500]

 function returnSecondvalue (getarray){
    return getarray[0]
 }
 console.log(returnSecondvalue(newarray)) // out-user name is sam and price is 199
300