/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

function collectiveAge(people) {
  // return the sum of age for all the people
  

}
collectiveAge();
const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];
let result = 0;

// function collectiveMembers(hackYourFutureMembers) {
// hackYourFutureMembers.reduce(function (total, num) {
//     result += num.age;
//   //
// },0)
// return result;
// }
//setTimeout(collectiveMembers, 2000);
function collectiveMembers(hackYourFutureMembers){
 const members= hackYourFutureMembers.map(function (member){
   result += member.age;
  })
  return result;
}
//console.log(collectiveMembers(hackYourFutureMembers));
console.log("The collective age of the HYF team is: " + collectiveMembers(hackYourFutureMembers));