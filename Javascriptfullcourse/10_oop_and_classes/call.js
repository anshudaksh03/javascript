

// function SetUsername(username){
//     //complex DB Calls
//     this.username = username
// }

// function createuser(username, email, password){
//     SetUsername.call(this,username)

//     this.email = email
//     this.password = password
// }

// const chai = new createuser("chai","chai@gmail.com","123")
// console.log(chai);
//------------------------------------iuper bala code mai username ko call krna -------------------
function SetUsername(username){
    //complex DB Calls
    this.username = username
}

function createuser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createuser("chai","chai@gmail.com","123")
console.log(chai);
