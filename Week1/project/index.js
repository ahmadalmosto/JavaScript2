// your code goes in here 
'use strict'
var quateList = [{
        quate: 'You are the shuckiest shuck faced shuck in the world!',
        author: 'James Dashner',
    },
    {
        quate: 'Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!',
        author: 'Rick Riordan',
    }, {
        quate: 'Insane means fewer cameras!',
        author: 'Ally Carter',
    },
    {
        quate: 'Im about as intimidating as a butterfly',
        author: 'Dan Howell',
    },
    {
        quate: 'All of my best friends are dead people. Someday Ive got to figure out how that happened',
        author: 'Claudia Gray',
    },
    {
        quate: 'Life would be a great deal easier if dead things had the decency to remain dead',
        author: 'Doug MacLeod'
    }
];

let newQuate = document.getElementsByClassName('newQuate');
let quate = document.getElementById('quate');
let author = document.getElementById('author');
// function to display random quate
function randomQuate(){
    let random = Math.floor(Math.random() * quateList.length);
    quate.innerHTML = quateList[random].quate;
    author.innerHTML = quateList[random].author;

};