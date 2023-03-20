const container = document.querySelector('#container');
const addBtn = document.querySelector('#addBtn');

const books = [
  {
    title: 'First book',
    author: 'Author 1',
  },
  {
    title: 'Second book',
    author: 'Author 2',
  },
];

function bookList(books) {
  books.forEach((detail) => {
    const book = document.createElement('div');
    book.innerHTML = `
        <p>${detail.title}</p>
        <p>${detail.author}</p>
        <button id ="close">Remove</button>
        <br>
        <hr>
        `;
    container.appendChild(book);
  });
}

function addBooks() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  // let data = { title: title, author: author };
  // books.push(data);
  if (title != null && author != null) {
    const element = document.createElement('div');
    element.innerHTML = `
      <p>${title}</p>
        <p>${author}</p>
        <button id ="close">Remove</button>
        <br>
        <hr>
    `;
    container.appendChild(element);
    title = '';
    author = '';
  }
  title = '';
  author = '';
}

addBtn.addEventListener('click', addBooks);
bookList(books);
