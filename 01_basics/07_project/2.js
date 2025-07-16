const form = document.querySelector('form')
form.addEventListener('submit', function (e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const resaults = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        resaults.innerHTML = `Please give a valid hieght ${height}`
    } else if(weight === '' || height < 0 || isNaN(weight)){
        resaults.innerHTML = `Please give a valid hieght ${weight}`
    } else {
       const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        // show the result  
        results.innerHTML = `<span>${bmi} </span>`
    }
})

