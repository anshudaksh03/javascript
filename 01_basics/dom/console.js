// search console DOM practices

title.innerText
'Dom leaarning on chai and code'
title.textContent
'Dom leaarning on chai and code  text text'
title.innerHTML
'Dom leaarning on chai and code <span style="display: none;"> text text</span>'
document.getElementsByClassName('heading')
HTMLCollection[h1#title.heading, title: h1#title.heading]
document.querySelector'h1'

// querrry selectors

const myH1 = document.querySelectorAll('h1')
undefined
myH1[0].style.color = 'green'
'green'

// uaseing for each loop  to change color

document.querySelectorAll('li')
NodeList(3)[li, li, li]
const templilist = document.querySelectorAll('li')
undefined
templilist
NodeList(3)[li, li, li]
templilist.forEach(function (l) {
    l.style.backgroundColor = 'green'
})

//convert in array

tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const myConvertedArray = Array.from(tempClassList)
undefined
myConvertedArray

