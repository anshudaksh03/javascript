
 let a = 300 //------------global scope
 if (true){
      let a = 10    //--------------block scope
      const b = 20
    // console.log("INNER: ", a)
 }

 //console.log(a) // out INNER:  10  -- block scope and global scope
                //  300
 //console.log(b)
 //console.log(c)


         //NESTED SCOPE

// function one () {
//     const username = "Anshu"
 
//     function two () {
//         const website = "youtube"
//         console.log(username)
//     }
//   //  console.log(website) //ktu ki iss ka scope to andar tak tha ab khtam ho gaya
//     two()
// }         
//  one()


if (true) {
    const username = "hitesh"
    if(username === "Anshu"){
        const website = " Youtube"
       // console.log (username + website)
    }
    //console.log(website) // error ktu ki iss ka scope to if ka andar hi khatm ho gaya
}
//console.log(username)

///*********************** intresting************************ */

function addone (num){
   return num + 1 
}
console.log(addone(5))

const addtwo = function (num){
    return num + 2
}
addtwo(5)

