const marval_heros = ["thor", "ironman", "Spiderman"]
const dc_heros = ["superman", "flash" ,"batman"]
// marval_heros.push(dc_heros)
// console.log(marval_heros)
// console.log(marval_heros[3] [1]) //flash

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros) // concat ho jayenga dono heros - [ 'thor', 'ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marval_heros,...dc_heros] // spread method

console.log(all_new_heros) // good way to concat - [ 'thor', 'ironman', 'Spiderman', 'superman', 'flash', 'batman' ]