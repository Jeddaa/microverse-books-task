const container = document.querySelector('#container');
const addBtn = document.querySelector('#addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');

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
        <button class="close">Remove</button>
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
        <button class="close">Remove</button>
        <br>
        <hr>
    `;
    container.appendChild(element);
  }
  const closeBtn = document.querySelectorAll('.close');
  for(let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
        closeBtn[i].parentElement.style.display = 'none';
        closeBtn[i].parentElement.remove();
    });
}
}

function saveInfo() {
    const userInfo = JSON.stringify({
      title: title.value,
      author: author.value,
    });
    localStorage.setItem('userInfo', userInfo);
  }
  
  title.addEventListener('input', saveInfo);
  author.addEventListener('input', saveInfo);
  
  const userInfo = localStorage.getItem('userInfo');
  
  title.value = JSON.parse(userInfo)?.title ? JSON.parse(userInfo).title : '';
  author.value = JSON.parse(userInfo)?.author ? JSON.parse(userInfo).author : '';


addBtn.addEventListener('click', addBooks);
bookList(books);
