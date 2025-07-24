// reduce
// const mynum = [1,2,3]
// const mytotal = mynum.reduce (function (acc , currvalue){
//     console.log(`acc ${acc} and currvalue${currvalue}`);
    
//     return acc + currvalue
// }, 0)
// console.log(mytotal); // out- acc 0 and currvalue1
                       // acc 1 and currvalue2
                       // acc 3 and currvalue3
                      // 6

//-----------------------------write in arrow functionn 2nd way to write code*-------------------------
const mynum = [1,2,3]
const mytotal = mynum.reduce((acc,currvalue) => acc+currvalue , 0)
  
console.log(mytotal);  // out 6

//--------------------------------------------------------------------

 const shoppingcard = [
    {
    itemname: "js course",
    price: 29999
 },
    {
    itemname: "c++ course",
    price: 100000
 },
    {
    itemname: "PY course",
    price: 999
 },
    {
    itemname: "APP development course",
    price: 8888888
 },

]

const pricetopay = shoppingcard.reduce((acc , item) => acc + item.price , 0)

console.log(pricetopay);
