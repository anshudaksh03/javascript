class user {
    constructor(username){
    this.username = username

    }
    logMe(){
        console.log(`username: ${this.username}`)
    }
    static createId(){ // static lagana sa uss method ya property ko rok data hai pjir koi use accees n kr sakta
        return`123`
    }
}
const Anshu = new user("Anshu")
//console.log(Anshu.createId());

//---------------------same but check------------ 


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new teacher("iphone","i@phone.com")
//iphone.logMe()
console.log(iphone.createId()) // hum na static createid kr di to wo ab huma kise ka bhe access nahi lana da raha hai