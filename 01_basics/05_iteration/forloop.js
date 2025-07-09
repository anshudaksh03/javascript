// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }  // for loop structure

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
    
}// out - 0123456789

//-----------------------------------------------------------
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element)
    
// }// out - 012345678910

// //-----------------------------------------------------------
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
    
// }// out - 012345678910  // run- node 01_basics/05_iteration/forloop.js 

// for (let i = 0; i <= 10; i++) {
//-----------------------------------------------------------
//     const element = i;
//     console.log(element)
//     if(element == 5){
// console.log("5 is best number")
//     }
//     console.log(element)
    
// }//1 2 3 4 5is the best number 6 7 8 9 10

//-----------------------------------------------------------

// for (let i = 0; i <= 10; i++) {
//    console.log(`outer loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
// console.log(`inner loop value ${j} and inner loop is ${i}`)
        
//     }
// }

//----------------------------------------------------------- table prit

// for (let i = 0; i <= 10; i++) {
//    console.log(`outer loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//  console.log( i +  '*' + j + '=' + i * j)       
//     }
// } // 1 to 10 tables

//-----------------------------------------------------------  array

// let myarray = ["flashman", " Batman" , "superman"]
// console.log(myarray.length) // 3
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
    
// } // flashman,batman,superman


// //------------------------------------------------------------------------ break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         break
//     }
//    console.log(`Value of i is ${i}`)
    
// }

//------------------------------------------------------------------------ break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue
    }
   console.log(`Value of i is ${i}`)
    
}

