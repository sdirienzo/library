let myLibrary = [];

class Book {
    title;
    author;
    pages;
    read;

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeReadStatus = () => {
        this.read === "Read" ? this.read = "Not Read" : this.read = "Read";
    }
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

function toggleReadStatus(idx) {
    myLibrary[idx].changeReadStatus();
}

function removeFromLibrary(idx) {
    myLibrary.splice(idx, 1);
}

function createTitleTd(title) {
    let titleTd = document.createElement("td");
    titleTd.innerText = title;
    titleTd.classList.add("align-middle");
    return titleTd;
}

function createAuthorTd(author) {
    let authorTd = document.createElement("td");
    authorTd.innerText = author;
    authorTd.classList.add("align-middle");
    return authorTd;
}

function createPagesTd(pages) {
    let pagesTd = document.createElement("td");
    pagesTd.innerText = pages;
    pagesTd.classList.add("align-middle");
    return pagesTd;
}

function createStatusTd(idx, read) {
    let statusTd = document.createElement("td");
    statusTd.classList.add("align-middle");

    let statusBtn = document.createElement("button");
    statusBtn.type = "button";
    statusBtn.className = "btn btn-outline-secondary";
    statusBtn.value = idx;
    statusBtn.innerText = read;
    
    statusTd.appendChild(statusBtn);
    return statusTd;
}

function createDeleteTd(idx) {
    let deleteTd = document.createElement("td");
    deleteTd.classList.add("align-middle");

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-outline-danger";
    deleteBtn.value = idx;
    deleteBtn.innerText = "Delete";
    
    deleteTd.appendChild(deleteBtn);
    return deleteTd;
}

function clearLibrary() {
    const tbody = document.querySelector("tbody");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

function populateLibrary() {
    const tbody = document.querySelector("tbody");
    myLibrary.forEach((book, idx) => {
        const tr = document.createElement("tr");

        const titleTd = createTitleTd(book.title);
        const authorTd = createAuthorTd(book.author);
        const pagesTd = createPagesTd(book.pages);
        const statusTd = createStatusTd(idx, book.read);
        const deleteTd = createDeleteTd(idx);

        tr.appendChild(titleTd);
        tr.appendChild(authorTd);
        tr.appendChild(pagesTd);
        tr.appendChild(statusTd);
        tr.appendChild(deleteTd);

        tbody.appendChild(tr);
    });
}

function clearInputFields() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputAuthor").value = "";
    document.getElementById("inputPages").value = "";
    document.getElementById("readNotRead").value = "Read";
}

const addBook = document.getElementById("addBookBtn");
addBook.addEventListener("click", function() {
    addBookToLibrary();
    clearInputFields();
    clearLibrary();
    populateLibrary();
});

const tbody = document.querySelector("tbody");
tbody.addEventListener("click", function(e) {
    if (e.target.innerText === "Read" || e.target.innerText === "Not Read") {
        toggleReadStatus(parseInt(e.target.value));
    }
    if (e.target.innerText === "Delete") {
        removeFromLibrary(parseInt(e.target.value));
    }
    clearLibrary();
    populateLibrary();
});