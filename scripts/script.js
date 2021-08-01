let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeReadStatus = function() {
    this.read === true ? this.read = false : this.read = true;
}

function addBookToLibrary() {
    const title = document.getElementById("inputTitle").value;
    const author = document.getElementById("inputAuthor").value;
    const pages = document.getElementById("inputPages").value;
    const read = document.getElementById("readNotRead").value;

    if (title !== "" && author !== "" && pages !== "") {
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
    }
}