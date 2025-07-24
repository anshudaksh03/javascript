// const sayDate = function(){
//     console.log("Anshu", Date.now())
// }
// setInterval(sayDate, 1000)

//------------------------------------------------------------


  let intervalId; // Global scope

const sayDate = function() {
  console.log("Anshu", Date.now());
};

document.querySelector('#start').addEventListener('click', function() {
  if (!intervalId) { // Prevent multiple intervals
    intervalId = setInterval(sayDate, 1000);
    console.log("Started");
  }
});

document.querySelector('#stop').addEventListener('click', function() {
  clearInterval(intervalId);
  intervalId = null; // Reset so start can work again
  console.log("Stopped");
});


//---------------------------------------------------------------------------