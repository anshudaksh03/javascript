class user {
    constructor(username){
    this.username = username

    }
    logMe(){
        console.log(`username: ${this.username}`)
    }
    static createId(){
        return`123`
    }
}
const Anshu = new user("Anshu")
console.log(Anshu.createId());
