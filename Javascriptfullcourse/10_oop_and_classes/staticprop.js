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
console.log(Anshu.createId());
