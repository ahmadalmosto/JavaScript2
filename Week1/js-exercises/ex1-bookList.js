"use strict"
/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  for (let i = 0; i < books.length; i++) {
    books[i];
    let bookList = document.getElementById('bookList');
    let p = document.createElement('p');
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    let img = document.createElement('img');
    let h1 = document.createElement('h1');

    let book1 = books[i];
    bookList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(p);
    p.innerHTML = book1.title + '-' + book1.author;
    li.appendChild(img);
    img.src = book1.link;
    // set the style
    bookList.style.display = 'flex';
    bookList.style.flexDirection = 'row';
    bookList.style.flexWrap = 'wrap';
    img.style.width = '300px';
    img.style.height = '300px';
    li.style.listStyleType = 'none';
    li.style.color = 'white';
   // condition to choose color based on if you reade it or not
    if (book1.alreadyRead === true) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }

    console.log(ul);
  }
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    link: 'https://k.top4top.io/p_15580ke151.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    link: 'https://a.top4top.io/p_1558mbrc51.jpeg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    link: 'https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg',
  },
];

// console.log(books[1]);
// console.log(books[2]);

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
