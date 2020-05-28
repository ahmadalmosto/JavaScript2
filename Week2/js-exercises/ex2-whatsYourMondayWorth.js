/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */
function dayWorth(mondayTasks, hourlyRate) {
  let result = 0;
  // put your code in here, the function does returns a euro formatted string
  const durationTime = mondayTasks.reduce(function(total,task){
    
   // let itemDuration = item.duration;
   return result+=task.duration;
  //  console.log(result);
  },0);
  let hour = result / 60;
  let lastbill = hour*hourlyRate;
  //lastbill.toPrecision(2);
  return  '€'+lastbill.toFixed(1) ;

}

const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))
console.log(dayWorth(mondayTasks, 15))