/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    //  alert(a);
    console.log(a)
  };
})();

x();
// the output will be 12 because the scoop , if didnt find a
// inside inner function it will look for it in outer function
