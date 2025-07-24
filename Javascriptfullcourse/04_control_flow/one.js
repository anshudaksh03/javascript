// comparision operator - < , > , <= , >= , == , != , $$ aur, || ik bhe condition ka liya ki koi ik bhe sahi ho jaye
// , === agar strictly kuch check krna ho to yea, !==

// if 
// const  isUserLoggedIn = true

// if( 2 == "2"){
// console.log("executed")

// }

 //------------------------------------------

// const  isUserLoggedIn = true

// const temprature = 41

// if( temprature < 51){
// console.log(" less than 50")

// }
// console.log ("temprature is greater than 50")

//------------------------------------------

// const temprature = 41

// if( temprature === 41){
// console.log(" less than 50")
// }
// else{
// console.log ("temprature is greater than 50")
// }
// console.log("executed") //  less than 50

//------------------------------------------

// const temprature = 41

// if( temprature === 40){
// console.log(" less than 50")
// }
// else{
// console.log ("temprature is greater than 50")
// }
// console.log("executed") // temprature is greater than 50

//------------------------------------------

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }
//  console.log(`user power : ${power}`) // ab yea run nahi hoga  kyu ki hum const ka use kiya hai agar var ka kiya hota to yea bahar ka console log print kr data 

//----------------------------------------------------------------------------------------

/*const balance = 1000

//if (balance > 500) console.log("test"),console.log("test2") // this is not good way to write code  
if (balance < 500){
    console.log("less than 500")

} else if (balance < 750) {
    console.log("Less than 750")

}else if (balance < 900) {
    console.log("Less than 900")
     
}else{
    console.log("less than 1200")
 }  // less than 1200 kyu ki hamara balace 1000 sa uper hi tha jabhe to hoga less than 1200  sa 1000 kyu ki 1200 sa hi less than hai 1000
*/

//----------------------------------------------------------------------------------------

//  const userloggedin = true
//  const debitcard = true

//  if (userloggedin && debitcard && 2==2){
//  console.log("Allow to buy courses")
//  } else{
//     console.log("Not allow to buy course")
// } // Allow to buy courses -  kyu ki all truew hai iss liya 

//----------------------------------------------------------------------------------------

// const userloggedin = true
// const debitcard = true

// if (userloggedin && debitcard && 2==3){
// console.log("Allow to buy courses")
// } else{
//     console.log("Not allow to buy course")
// } // agar ik bhe false hi gaya to nahi hoga jaise 2==3 not equal - Not allow to buy course

//----------------------------------------------------------------------------------------

 const userloggedin = true
 const debitcard = true
 const loogedinfromgoogle = false
 const loggewdinfromemail = true

 if (userloggedin && debitcard && 2==2){
 console.log("Allow to buy courses")
 } 
 if (loogedinfromgoogle || loggewdinfromemail){ // multiple condition ko check krna ka liya 

    console.log("user logged in ")

 }