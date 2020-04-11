/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
let Body = document.querySelector('body');
let span1 = document.getElementById('nickname');
let span2 = document.getElementById('fav-food');
let span3 = document.getElementById('hometown');
let li = document.getElementsByTagName('li');
let ul = document.getElementsByTagName('ul');
let img = document.createElement('img')

li.className = 'list-item';
span1.innerHTML = 'Al-Mosto';
span2.innerHTML = 'Kubbeh';
span3.innerHTML = 'Idleb';
img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
Body.appendChild(img);