const form = document.getElementById('booksForm');
const display = document.getElementById('display');

// let myBooks = [];

// function showBooks(books) {
//   const listBook = books.map((b) => `<li> ${b.title} by ${b.author} <button id='${b.id}' type='button' class="removeBtn">Remove Book</button></li>`).join('');
//   display.innerHTML = `${listBook}`;
// }

// function removeBook(ev) {
//   const buttonId = ev.target.id;
//   myBooks = myBooks.filter(
//     (y) => y !== myBooks[myBooks.findIndex(
//      (x) => x.id === parseInt(buttonId, 10),
//     )],
//   );
//   localStorage.setItem('myBooks', JSON.stringify(myBooks));
//   showBooks(myBooks);
// }

// function addBook() {
//   const book = {
//     id: myBooks.length,
//     title: document.getElementById('bookName').value,
//     author: document.getElementById('authorName').value,
//   };
//   myBooks.push(book);
//   localStorage.setItem('myBooks', JSON.stringify(myBooks));
//   if (myBooks.length > 0) {
//     showBooks(myBooks);
//   }
//   display.addEventListener('click', (e) => {
//     if (e.target.classList.contains('removeBtn')) {
//       removeBook(e);
//     }
//   });
//   form.reset();
// }


class Books {
  constructor() {
    this.myBooks = [];
  }

 showBooks(books) {
  const listBook = books.map((b) => `<li> ${b.title} by ${b.author} <button id='${b.id}' type='button' class="removeBtn">Remove Book</button></li>`).join('');
  display.innerHTML = `${listBook}`;
}

  addBook() {
  const book = {
    id: this.myBooks.length,
    title: document.getElementById('bookName').value,
    author: document.getElementById('authorName').value,
  };
  this.myBooks.push(book);
  localStorage.setItem('myBooks', JSON.stringify(this.myBooks));
  if (this.myBooks.length > 0) {
   this.showBooks(this.myBooks);
  }
  // display.addEventListener('click', (e) => {
  //   if (e.target.classList.contains('removeBtn')) {
  //     removeBook(e);
  //   }
  // });
  form.reset();
}

}

const awesomeBook = new Books();

// window.addEventListener('load', () => {
//   const dataGet = localStorage.getItem('myBooks');
//   const data = JSON.parse(dataGet);
//   if (data) {
//     myBooks = data;
//   }
//   if (myBooks.length > 0) {
//     showBooks(myBooks);
//   }

//   display.addEventListener('click', (e) => {
//     if (e.target.classList.contains('removeBtn')) {
//       removeBook(e);
//     }
//   });
// });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  awesomeBook.addBook();
});
