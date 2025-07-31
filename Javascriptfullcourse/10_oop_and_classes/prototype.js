// let myNAme = "Anshu     "
// let mycast = "Prajapati     "
// //console.log(myNAme.length);
// console.log(myNAme.truelength);
//-----------------------------------------------------------

// let myheroes = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spidereman: "sling",
//     getSpidermanpower: function(){
//         console.log(`spidy power is ${this.spidereman}`);
        
//     }
// }
// // object mai kuch add krna ka function
// Object.prototype.anshu = function(){
//     console.log(`Anshu is present in all objects`);
    
// }

// // array mai kuch add krna ka function
// Array.prototype.heyAnshu = function(){
//     console.log(`Anshu says hello`);
    
// }

//heroPower.anshu() // we can inject object in every 
//myheroes.anshu() // add property in all objects
// myheroes.heyAnshu()
// heroPower.heyAnshu()


//----------------inheritance----------------------------

// const user = {
//     name:"Chai",
//     email: "chai@gmail.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TAsuppoert = {
//     makeAssignment: "js assignment",
//     fulltime: true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__ = user

// // new method 

// Object.setPrototypeOf(TeachingSupport, Teacher)

//----------------------------------------------------our problem----
let myNAme = "Anshu     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}
myNAme.truelength()
"preeti".truelength()
"".truelength()