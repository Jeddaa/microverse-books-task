const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookList = document.querySelector('.bookList');
const form = document.querySelector('.form');
const list = document.querySelector('.books');
const cont = document.querySelector('.contact');

class BookList {
  constructor() {
    this.books = [];
  }

  addBooks() {
    if (title.value !== '' && author.value !== '') {
      if (this.books.length > 0) {
        this.books.push({
          title: title.value,
          author: author.value,
          id: this.books[this.books.length - 1].id + 1,
        });
      } else {
        this.books.push({
          title: title.value,
          author: author.value,
          id: 1,
        });
        title.value = '';
        author.value = '';
      }

      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
      this.removeBook();
    }
  }

  removeBook() {
    this.books.forEach((book) => {
      const removebtn = document.getElementById(`close-${book.id}`);
      removebtn.addEventListener('click', () => {
        this.books = this.books.filter((item) => item.id !== book.id);

        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBooks();
        this.removeBook();
      });
    });
  }

  displayBooks() {
    let finalHtml = '';
    this.books.forEach((book) => {
      const eachHtml = `
    <div class ="list">
        <p>${book.title} by ${book.author}</p>
        <button id="close-${book.id}"> Remove </button>
      </div>
    `;
      finalHtml += eachHtml;
    });
    bookList.innerHTML = finalHtml;
  }
}

const allBooks = new BookList();
const savedBooks = localStorage.getItem('books');

if (savedBooks) {
  allBooks.books.push(...JSON.parse(savedBooks));
  allBooks.displayBooks();
  allBooks.removeBook();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  allBooks.addBooks();
});

const formNav = document.querySelector('.form-menu');
const listNav = document.querySelector('.list-menu');
const contactNav = document.querySelector('.contact-menu');

formNav.addEventListener('click', () => {
  form.classList.add('active');
  list.classList.remove('active');
  cont.classList.remove('active');
  formNav.classList.add('test');
  contactNav.classList.remove('test');
  listNav.classList.remove('test');
});

listNav.addEventListener('click', () => {
  list.classList.add('active');
  form.classList.remove('active');
  cont.classList.remove('active');
  listNav.classList.add('test');
  contactNav.classList.remove('test');
  formNav.classList.remove('test');
});

contactNav.addEventListener('click', () => {
  cont.classList.add('active');
  list.classList.remove('active');
  form.classList.remove('active');
  contactNav.classList.add('test');
  formNav.classList.remove('test');
  listNav.classList.remove('test');
});
