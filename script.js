const form = document.getElementById('booksForm');
const display = document.getElementById('display');

let myBooks = [];

function showBooks(books) {
  const listBook = books.map((b) => `<li> ${b.title} by ${b.author} <button id='${b.id}' type='button' class="removeBtn">Remove Book</button></li>`).join('');
  display.innerHTML = `${listBook}`;
}

function addBook() {
  const book = {
    id: myBooks.length,
    title: document.getElementById('bookName').value,
    author: document.getElementById('authorName').value,
  };
  myBooks.push(book);
  console.log(myBooks);
  localStorage.setItem('myBooks', JSON.stringify(myBooks));
  if (myBooks.length > 0) {
    showBooks(myBooks);
  }
  form.reset();
}

window.addEventListener('load', () => {
  const dataGet = localStorage.getItem('myBooks');
  const data = JSON.parse(dataGet);
  if (data) {
    myBooks = data;
  }
  if (myBooks.length > 0) {
    showBooks(myBooks);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});