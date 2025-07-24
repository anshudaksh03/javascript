//dates

// let myDate = new Date ()
// console.log(myDate.toString()) //Tue Jun 17 2025 23:49:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())  //Tue Jun 17 2025
                                  

// console.log(myDate.toISOString())   //   2025-06-17T23:53:50.351Z                             
// console.log(myDate.toLocaleDateString())  //   6/17/2025                              
// console.log(myDate.toLocaleTimeString())// 11:53:50 PM                                  
// console.log(myDate.toUTCString()) // Tue, 17 Jun 2025 23:53:50 GMT

// console.log(typeof myDate) // Object

// let myCreatedDate = new Date (2025, 0, 23, 4,6)
// console.log(myCreatedDate.toDateString())//Thu Jan 23 2025
// console.log(myCreatedDate.toLocaleString()) //1/23/2025, 4:06:00 AM

let myCreatedDate = new Date ("01-12-2025")
//console.log(myCreatedDate.toLocaleDateString()) //1/12/2025


// let myTimeStamp = Date.now()
// console.log(myTimeStamp) //1750205323978
// console.log(myCreatedDate.getTime()) //1736640000000
// console.log(Math.floor(Date.now()/1000)) //1750205683

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newdate.toLocalString(`default`,{
    weekday: "long"
})



