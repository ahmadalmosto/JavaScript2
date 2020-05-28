/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  let body = document.querySelector('body')
  let ul = document.createElement('ul');
  var hobby = arr.map(function(item){
    let li = document.createElement('li');
    body.append(ul);
    ul.appendChild(li);
    li.innerHTML= item;
  return item;
 
  })
 
 return hobby;
}

 

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
console.log(createHTMLList(myHobbies));



  
 
