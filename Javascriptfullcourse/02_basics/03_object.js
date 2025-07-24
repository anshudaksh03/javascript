 // object literals


 const mysym = Symbol("key1")
 
 const jsUser = {
  name: "Anshu",
  "full name": "Anshu kumar",
  age: 21,
  [mysym]:"key1", // symobol ko squre [] mai mention krta hai jabhe wo  uss ka typeof symbol ayega nahi kiya store squre [] mai to nahi ayega 
  email: "anshu936876@gmail.com",
  location: "jaipur",
  isLoggedin: false,
  lastLoggedinDay: ["monday", "Saturday"]
   }

//  console.log(jsUser.email) // this is way to acess the object variables
//  console.log(jsUser["email"])// out - anshu936876@gmail.com - good way to acees the variable
//  console.log(jsUser["full name"])// iss ko bhe aise hi acess kr sakta hai . laga ka nahi 
 //console.log(jsUser[mysym]) // key1


 //freeze
//  jsUser.email = "anshu936876@gpt.com"
//  Object.freeze(jsUser)
//  jsUser.email = "anshu936876@microsoft.com" // ab iss mai  yea  "anshu936876@gpt.com" hiu print hogi kyu ki hum na wo bali mail freeze kr di hai  yea "anshu936876@microsoft.com"
//  console.log(jsUser)

            // function
            
jsUser .greeting = function(){
console.log("hello js user")
}

 // object sa kuch acess krna ka liya
jsUser .greetingtwo = function(){
console.log(`hello js user  ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())

