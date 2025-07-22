
// const sayAnshu = function () {
//     console.log("Anshu")

//     }
// setTimeout(sayAnshu, 2000)

//*---------------------------------------------

    // const changeText = function(){
    // document.querySelector('h1').innerHTML = "Best javascript series"

    // }
    // setTimeout(changeText, 2000)


    //---------------------------------------------------------

      const changeText = function(){
    document.querySelector('h1').innerHTML = "Best javascript series"

    }
    const changeme = setTimeout(changeText, 2000)

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeme)
        console.log("stopped")
    })
