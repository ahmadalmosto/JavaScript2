/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
// function removeDuplicates(letters) {
//   let result = [];
//   letters.filter((v, i) => {
//     if (letters.indexOf(v) === i) {
//      result.push(v);
//     }
    
//   });
//  return result;
// }

// function removeDuplicates(letters){
//   let unique=[...new Set(letters)]
//   return unique;
// }
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

///console.log(removeDuplicates(letters));
console.log(removeDuplicates(letters));



// removeDuplicates(letter);

// if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
//   console.log("Hooray!")