/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
   return val;
 
}
f1(x);
console.log(x);// the output here is 9 because we assign x to 9 and we console log 
// x if we console.log(f1(x)) the the x will increase by 1 and become 10

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);// the output is 10 because f2 have y as argument 
