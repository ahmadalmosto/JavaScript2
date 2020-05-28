/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */
function createBase(num) {

  return (num2) => num + num2;

}
// That will work.So you declare an addSix or addNine, and then pass them different values

const addSix = createBase(6);
console.log(addSix(9))
const addNine = createBase(9);
console.log(addNine(4));

// function createBase(num) {
//   // Put here your logic...
//   return function(){
//     num=num+9;
//     return num;
//   }
// }

// const addSix = createBase(6);

// // Put here your function calls...
// console.log(addSix());
// console.log(addSix());
// console.log(addSix());
//console.log(addSix());
