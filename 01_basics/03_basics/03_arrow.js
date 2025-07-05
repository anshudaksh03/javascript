const user = {
    username: "Anshu",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
       // console.log(this) // yea jo current values hoti hai un ki bat krta hai
    }
}
// user.welcomemessage()
// user.username = "sem"
// user.welcomemessage()

//console.log(this)  //out -{} // agar google pa krta to window objects ata 


//---------------------------------------- 1st way

// function chai(){
//     let username = "Anshu"
//     console.log(this.username) // ab undefined aye ga kuy ki yea this only objects ka andar chalta hai
// }
// chai()

//------------------------------------- 2nd way

//  const chai = function (){
//     let username = "Anshu"
//     console.log(this.username)
//  }
//  chai()

 //------------------------------------- Real arrow function

//  const chai = () => {
//     let username = "Anshu"
//     console.log(this.username)
//  }
//  chai()

 
 //------------------------------------- Real arrow function start basic arro function

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }
//  console.log(addtwo(2 , 4))

  //------------------------------------- Real arrow function emplisit return way to run code

// const addtwo = (num1 , num2) => num1 + num2

//  console.log(addtwo(2 , 4))

  //------------------------------------- Real arrow function emplisit return way to run code

// const addtwo = (num1 , num2) => (num1 + num2)

//  console.log(addtwo(2 , 4))

   //------------------------------------- Real arrow function emplisit return way to run code for objrct

const addtwo = (num1 , num2) => ({username: "Anshu"})

 console.log(addtwo(2 , 4))