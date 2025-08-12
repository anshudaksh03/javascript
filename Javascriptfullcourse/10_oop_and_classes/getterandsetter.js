class user{
    constructor(email,password){
this.email = email
this.password = password
    }
//-----------------------email getter setter----------

get email(){
    return this._email.toUpperCase()
}

set email(value){
  this._email = value
}

//--------------------Password-----------
    // get password(){
    //     return this._password.toUpperCase()
    // }
    // set password(value){
    //     this._password = value.toUpperCase()
    // }
}

const Anshu = new user("anshu@gmail.com", "123abcde")
console.log(Anshu.email);

//---------runer === node Javascriptfullcourse/10_oop_and_classes/getterandsetter.js