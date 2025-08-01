class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

// --------------------behind the scene------------------

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
 const chai = new Teacher("chai", "gmail", "123")
 //chai.addcourse()
chai.logMe() // out-

const masalachai = new User("Masala chai")
masalachai.logMe()// out -Username is Masala chai
console.log(chai === masalachai);
