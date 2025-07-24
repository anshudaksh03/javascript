// Immediately invoked function Expression

// function chai (){
//     console.log(`DB CONNECTED`)
// }
// chai() //db connected ab run ho jaye ga

//---------------------2nd way iffe

(function chai (){
    console.log(`DB CONNECTED`)
})(); // db connected ab run ho jaye ga aur iss mai ; lagao ga jab hi code ka doosra iife chal payega nahi to nahi chala ga

//---------------------3nd way iffe

(function chai (){ // named iife hai yea name bala "chai"
    console.log(`DB CONNECTED TWO`)
})();
//---------------------4nd way iffe

( () => { // unnamed iife
    console.log(`DB CONNECTED TWO`)
})(); //agar ; yea n lagao ga to next function run nahi hoga

//---------------------5nd way iffe

( (name) => { // parametre iife 
    console.log(`DB CONNECTED TWO ${name}`)
})('Anshu')