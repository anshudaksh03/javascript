 // truthy  kyu ki iss mai huma dekha ka hi pata chal jata ki kya print hoga

 // Falsy values - false, 0, -0, BigInt, 0n , "" , null, undefined , NaN

 // truthy values - "0" , 'false' , " " , [] , {} , function(){}
 
 

// const useremail = "anshu.ai"

// if (useremail){
//     console.log("Got user email")
// } else{
//     confirm.log("Dont have user email ")
// } // got user email 

// //---------------------------------------------------
// const useremail = ""

// if (useremail){
//     console.log("Got user email")
// } else{
//     console.log("Dont have user email ")
// }  // Dont have user email 

//---------------------------------------------------
// const useremail = []

// if (useremail){
//     console.log("Got user email")
// } else{
//     console.log("Dont have user email ")
// } if(useremail.length === 0){
//     console.log("array is empty")
// }

//--------------------------------------------------- check object truthy and falsy

// const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("object is empty")
// } // out-object is empty


// nullish coalescing operator (??): null and undefined

//let val1
//val1 = 5 ?? 10 //. out-5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10// 10
//val1 = null ?? 10 ?? 15 // 10

//console.log(val1)



//--------------------------------------------------- terniary operator

//condition ? true : false

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80") // out-less than 80