const form = document.getElementById('booksForm');
let myBooks = [];

function addBook() {
  const book = {
    id: myBooks.length,
    title: document.getElementById('bookName').value,
    author: document.getElementById('authorName').value,
  };
  myBooks.push(book);
  console.log(myBooks);
  localStorage.setItem('myBooks', JSON.stringify(myBooks));
  form.reset();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});