const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)

//-----------------------------------------------------
div.setAttribute("title" , "genrated title")
div.style.backgroundColor = "red"
div.style.padding = "12px"
// div.innerHTML = "Chai aur code"
//div.textContent = " Anshu "

const addText = document.createTextNode ("Chai aur code")
div.appendChild(addText)

document.body.appendChild(div)