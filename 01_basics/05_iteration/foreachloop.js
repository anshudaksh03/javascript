//----------------------foreach loop--------------------------

const coding = ["js", "java", "python" , "Ruby" , "C++"]

//----------------way1

// coding.forEach(function (val) {
//     console.log(val)// out - js java python ruby c++
// })

//----------------way2

// coding.forEach( (item) => {
//     console.log(item) // out - js java python ruby c++
// })

//----------------way3

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)// out - js java python ruby c++

//----------------way4

// coding.forEach((item, index, arr)=> {
//     console.log(item,index,arr);
    
// })
/* out- js 0 [ 'js', 'java', 'python', 'Ruby', 'C++' ]
java 1 [ 'js', 'java', 'python', 'Ruby', 'C++' ]
python 2 [ 'js', 'java', 'python', 'Ruby', 'C++' ]
Ruby 3 [ 'js', 'java', 'python', 'Ruby', 'C++' ]
C++ 4 [ 'js', 'java', 'python', 'Ruby', 'C++' ]*/

//------------------------------ array ka andar object ki value------------------------------------------

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"

    },
    {
        languagename: "java",
        languagefilename: "java"

    },
    {
        languagename: "python",
        languagefilename: "py"

    }
]
mycoding.forEach((item)=>{
console.log(item.languagename)
})

