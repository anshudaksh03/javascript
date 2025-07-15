function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("TypeScript")

//------------------------optimized method--------------------

function addOptiLang(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLang('golang')

// Edit values

const secondlang = document.querySelector("li:nth-child(2)")
//secondlang.innerHTML = "Anshu"

//---------------good way to change--------
const newli = document.createElement('li')
newli.textContent = "Anshu"
secondlang.replaceWith(newli)

// edit -------------------------
const firstlang = document.querySelector("li:first-child")
firstlang.outerHTML = '<li>TypeScript</li>'


// remove ----------------------

const lastlang = document.querySelector('li:last-child')
lastlang.remove() 

