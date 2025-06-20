const marval_heros = ["thor", "ironman", "Spiderman"]
const dc_heros = ["superman", "flash" ,"batman"]
// marval_heros.push(dc_heros)
// console.log(marval_heros)
// console.log(marval_heros[3] [1]) //flash yes string ka andar string da data hai

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros) // concat ho jayenga dono heros - [ 'thor', 'ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marval_heros,...dc_heros] // spread method

//console.log(all_new_heros) // good way to concat - [ 'thor', 'ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const anotherarray = [1, 2, 3, [4, 5, 6], 7, 8, 9,[6, 7, [4, 5]]]
const realanotherarray = anotherarray.flat(Infinity)
//console.log(realanotherarray) // ab yea ik hi arrray mai aa jayenga - out [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 4,5 ]



console.log(Array.isArray("Anshu")) // false 
console.log(Array.from("Anshu"))// agar array mai banana  ho [ 'A', 'n', 's', 'h', 'u' ]
console.log(Array.from({ name:"Anshu"})) // intresting  out - [] empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  // out - [ 100, 200, 300 ]



