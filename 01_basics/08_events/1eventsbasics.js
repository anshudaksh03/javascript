// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// } // but this is not good way 

//attchedEvent()
//jQuery- on

// ----------------------------------------------------------------

// document.getElementById('owl').addEventListener('click', function(){
// alert("owl is now clicked")
// })

// ----------------------------------------------------------------

// document.getElementById('owl').addEventListener('click', function(e){
// console.log(e);
// }, false) 
//type, timestamp , defaultPrevented ,target, to element , srcElement , currentTarget, 
//clientX, clientY, screenY , altkey, ctrlkey , shiftkey , keycode

//-----------------------------------------------------------------------------

// document.getElementById('images').addEventListener('click', function(e){
// console.log("click inside the url");
// }, false) // bubbling hai like jab huma click kra ga to sbsa pahela "click inside the owl"
// //  isss ka bad "click inside the url"

// document.getElementById('owl').addEventListener('click', function(e){
// console.log("click inside the owl");
// }, false)

//------------------------------------------------------------

// document.getElementById('images').addEventListener('click', function (e) {
//     console.log("click inside the url");
// }, true) // bubbling hai like jab huma click kra ga to sbsa pahela "click inside the owl"
// //  isss ka bad "click inside the url"

// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log("click inside the owl");
// }, true)// iss ko capturing bolta  hai like jab huma click kra ga to sbsa pahela "click inside the url"
// //  isss ka bad "click inside the owl"

//---------------------------------agar only clicked owl pa krna hai to-------------------------

document.getElementById('images').addEventListener('click', function (e) {
    console.log("click inside the url");
}, false) 

document.getElementById('owl').addEventListener('click', function (e) {
    console.log("click inside the owl");
    e.stopPropagation()
}, false) // out-click inside the owl

//----------------------------------------------------

document.getElementById('google').addEventListener('click', function(e){
     console.log("google clicked");
    e.preventDefault()
    e.stopPropagation()

}, false) // google clicked
