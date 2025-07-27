const user = {
    name: "Anshu",
    age: 21,
    email: "anshu@example.com",
    logincount : 0,
    signIn:true,
    getuserdetails: function () {
       // console.log("Got user details from data base")
      // console.log(`username ${this.name}`)
      console.log(this)
    }
};

const user2 = {
    name: "Anshu",
    age: 21,
    email: "anshu@example.com",
    logincount : 0,
    signIn:true,
    getuserdetails: function () {
       // console.log("Got user details from data base")
      // console.log(`username ${this.name}`)
      console.log(this)
    }
};
//console.log(user.name);
// console.log(user.getuserdetails());
//console.log(this) // out-{}


function User(name, age, email , logincount, signIn) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.logincount = logincount;
    this.signIn = signIn;

    this.greeting = function(){
        console.log(`welcome ${this.name}`); // we can inject function
        
    }

  return this;  
  
  }

 // const userOne = User ("Anshu", 21, true)
//   const usertwo = User ("Anshul", 22, false) // ab yea values ko overwrite kr daga


   const userOne =  new User ("Anshu", 21, true)
     const usertwo = new User ("Anshul", 22, false) // ab yea apna alag alag print honga dono


// console.log(userOne); 
// console.log(usertwo); 
console.log(userOne.constructor);
