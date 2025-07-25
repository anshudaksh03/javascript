/*
const PromiseOne = new Promise(function(resolve , reject){
    //Do an async task
    //DB calls, cryptography , network

    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        
    }, 1000)
})

PromiseOne.then(function(){
    console.log("promises consumed"); // node Javascriptfullcourse/09_Api/promices/promices.js
    
})*/

//------------------------------------- promise 2nd--------------------------------------------------------------------------------
/*
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})*/

//--------------------------promise 3rd--------------------------------
/*
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Anshu", gmail:"anshukumar@gmail.com"})
    },1000)
})
promiseThree.then(function(anshu){

console.log(anshu);

})*/

//---------------------------promise 4 false---------------------------------------
/*
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Anshu", password:"123"})
        } else {
            reject('Error: something went to wrong')
        }
    }, 1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})*/ // out-{ username: 'Anshu', password: '123' }
//Anshu


//---------------------------promise 4 same 2nd copy for true---------------------------------------

/*const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Anshu", password: "123" })
        } else {
            reject('Error: something went to wrong')
        }
    }, 1000)
})

promisefour
    .then((user) => {
        console.log(user);
        return user.username

    })
    .then((username) => {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);

    }) */// out-Error: something went to wrong


    //---------------------------promise 4 same finnaly---------------------------------------

/*
    const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Anshu", password: "123" })
        } else {
            reject('Error: something went to wrong')
        }
    }, 1000)
})

promisefour
    .then((user) => {
        console.log(user);
        return user.username

    })
    .then((username) => {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);

    }) .finally(()=> console.log("the promise either resolve and reject")) */

    // out- Error: something went to wrong
    //the promise either resolve and reject



    //-----------------------Promise 5--------------------------------------------------//node Javascriptfullcourse/09_Api/promices/promices.js

