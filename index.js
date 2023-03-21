const title = document.querySelector('.title');
const author = document.querySelector('.author');
const bookList = document.querySelector('.bookList');
const form = document.querySelector('.form');

let books = [];
const savedBooks = localStorage.getItem('books');

function saveBooks() {
  let finalHtml = '';
  books.forEach((book) => {
    const eachHtml = `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button id="close-${book.id}"> Remove </button>
      </div>
      <hr>
    `;
    finalHtml += eachHtml;
  });
  bookList.innerHTML = finalHtml;
}

function removeBook() {
  books.forEach((book) => {
    const removebtn = document.getElementById(`close-${book.id}`);
    removebtn.addEventListener('click', () => {
      books = books.filter((item) => item.id !== book.id);

      localStorage.setItem('book', JSON.stringify(books));
      saveBooks();
      removeBook();
    });
  });
}

if (savedBooks) {
  books.push(...JSON.parse(savedBooks));
  saveBooks();
  removeBook();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value !== 0 && author.value !== 0) {
    if (books.length > 0) {
      books.push({
        title: title.value,
        author: author.value,
        id: books[books.length - 1].id + 1,
      });
    } else {
      books.push({
        title: title.value,
        author: author.value,
        id: 1,
      });
      title.value = '';
      author.value = '';
    }

    localStorage.setItem('books', JSON.stringify(books));
    saveBooks();
    removeBook();
  }
});
