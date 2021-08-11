const form = document.getElementById('booksForm');
const display = document.getElementById('display');

class Books {
  constructor() {
    this.myBooks = [];
  }

  removeBook(ev) {
    const buttonId = ev.target.id;
    this.myBooks = this.myBooks.filter(
      (y) => y !== this.myBooks[this.myBooks.findIndex(
        (x) => x.id === parseInt(buttonId, 10),
      )],
    );
    localStorage.setItem('myBooks', JSON.stringify(this.myBooks));
    this.showBooks(this.myBooks);
  }

  showBooks = (books) => {
    const listBook = books.map((b) => `<li> ${b.title} by ${b.author}<div class="submit"> <button id='${b.id}' type='button' class="removeBtn">Remove Book</button></div></li>`).join('');
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
    display.addEventListener('click', (e) => {
      if (e.target.classList.contains('removeBtn')) {
        this.removeBook(e);
      }
    });
    form.reset();
  }
}

const awesomeBook = new Books();

window.addEventListener('load', () => {
  const dataGet = localStorage.getItem('myBooks');
  const data = JSON.parse(dataGet);
  if (data) {
    awesomeBook.myBooks = data;
  }
  if (awesomeBook.myBooks.length > 0) {
    awesomeBook.showBooks(awesomeBook.myBooks);
  }

  display.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtn')) {
      awesomeBook.removeBook(e);
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  awesomeBook.addBook();
});
