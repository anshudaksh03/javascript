const myArr = []
//%DebugPrint(myArr)

// 1- continious  2- Holey
// 1-Continous---------------------

// 1- SMI (Small Integer)
// 2-PAcked element
// Double ( float, string , function )

// 2- Holey-------------------
// 1- SMI (Small Integer)
// 2-PAcked element
// Double ( float, string , function )

//----------------------------------

const arrTwo = [1,2,3,4,5,6]//Packed smi Elements

arrTwo.push(6.0) // packed double element

arrTwo.push('7')// packed element

arrTwo[10] = 11 // holey elements
console.log(arrTwo);//[ 1, 2, 3, 4, 5, 6, 6, '7', <2 empty items>, 11 ]
console.log(arrTwo.length);//11
console.log(arrTwo[9]);//undefined

// bound check
//hasOwnproperty(arrTwo,9)
//hasOwnproperty(arrTwo.prototype, 10)
//hasOwnproperty(arrTwo,Object.prototype, 10)

//holey are very expensive in js

const arrThree = [1,2,3,4,5,6]
console.log(arrThree);

//SMI>DOUBLE>PACKED
//Hole_SMI> HOLE_DOUBLE > HOLE_PACKED

const arrFour = new Array(3)
//just 3 holes . Holey_smi_elements
arrFour[0] = '1' // holey_elements
arrFour[1] = '2' // holey_elements
arrFour[2] = '3' // holey_elements

const arrFive = []
arrFive.push('1')//PACKED_ELEMENTS
arrFive.push('2')//PACKED_ELEMENTS
arrFive.push('3')//PACKED_ELEMENTS


const arrSix = [1,2,3,4,5,6]

arrSix.push(Infinity)

// for, for-of , foreach 


