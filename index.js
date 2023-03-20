const container = document.querySelector('#container');

const books = [
    {
        title: 'First book',
        author: 'Author 1'
    }, {
        title: 'Second book',
        author: 'Author 2'
    }
]

function bookList(books) {
    books.forEach(detail => {
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

bookList(books);