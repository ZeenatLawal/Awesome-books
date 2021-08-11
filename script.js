const form = document.getElementById('booksForm');
const display = document.getElementById('display');
const showList = document.getElementById('showList');
const showAddNew = document.getElementById('showAddNew');
const showContact = document.getElementById('showContact');
const welcome = document.getElementById('welcomeSection');
const listSection = document.getElementById('allBooks');
const addSection = document.getElementById('addBook');
const contact = document.getElementById('contact');

showList.addEventListener('click', () => {
  welcome.style.display = 'none';
  listSection.style.display ='block';
  addSection.style.display = 'none';
  contact.style.display = 'none';
});

showAddNew.addEventListener('click', () => {
  welcome.style.display = 'none';
  addSection.style.display ='block';
  listSection.style.display ='none';
  contact.style.display = 'none';
});

showContact.addEventListener('click', () => {
  welcome.style.display = 'none';
  contact.style.display ='block';
  listSection.style.display ='none';
  addSection.style.display = 'none';
});



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
    if (this.myBooks.length === 0) {
      display.innerHTML = '<li>There are no books. List is empty.</li>';
    } else {
      this.showBooks(this.myBooks);
    }
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
    if (this.myBooks.length === 0) {
      display.innerHTML = '<li>There are no books. List is empty.</li>';
    } else {
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
  if (awesomeBook.myBooks.length === 0) {
    display.innerHTML = '<li>There are no books. List is empty.</li>';
  } else {
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
