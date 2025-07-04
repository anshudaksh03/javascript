
 let a = 300 //------------global scope
 if (true){
      let a = 10    //--------------block scope
      const b = 20
     console.log("INNER: ", a)
 }

 console.log(a) // out INNER:  10  -- block scope and global scope
                //  300
 //console.log(b)
 //console.log(c)
 