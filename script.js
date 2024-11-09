let addBookButton = document.querySelector(".add-book-button");
let form = document.querySelector(".popup-form-div");
let blur = document.querySelector(".form-blur-div");
let _form = document.querySelector(".popup-form");
let booksGrid = document.querySelector(".books-div .books-grid");

addBookButton.addEventListener("click", function () {
    form.classList.remove("hide");
    blur.classList.remove("hide");
})

blur.addEventListener("click", function () {
    form.classList.add("hide");
    blur.classList.add("hide");
})

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Create a FormData object from the form
    const formData = new FormData(event.target);

    // Convert FormData to an object or access individual fields
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    books.push(new Book(formValues["book-title"], formValues["book-author"], 
        formValues["book-release-year"], formValues["book-genre"]));

    form.classList.add("hide");
    blur.classList.add("hide");
    
    booksGrid.innerHTML = "";
    drawBookGrid(books);
})

let books = [];

function Book(title, author, releaseYear, genre) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.genre = genre;
}

function drawBookGrid(books) {
    for(let i = 0; i<books.length; i++) {
        booksGrid.appendChild(createBookCard(books[i]));
    }
}

function createBookCard(book) {
    let cardGridContainer = document.createElement("div");
    cardGridContainer.classList.add("card-grid-container");
    cardGridContainer.style.display = "flex";
    cardGridContainer.style.flexDirection = "column";
    cardGridContainer.style.alignItems = "center";
    cardGridContainer.style.justifyContent = "center";
    cardGridContainer.style.backgroundColor = "white";
    cardGridContainer.style.height = "512px";
    cardGridContainer.style.width = "256px";
    cardGridContainer.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.style.display = "flex";
    bookCard.style["flex-direction"] = "column";
    bookCard.style.flex = 1;

    let bookCoverContainer = document.createElement("div");
    bookCoverContainer.classList.add("book-cover-container");
    bookCoverContainer.style.display = "flex";
    bookCoverContainer.style.flexDirection = "column";
    bookCoverContainer.style.flex = 2;
    bookCoverContainer.style.maxWidth = "100%";
    bookCoverContainer.style.maxHeight = "75%";
    bookCoverContainer.style.backgroundColor = "blue";
    
    let bookCover = document.createElement("img");
    bookCover.src = "./img/book_cover.jpg";
    bookCover.classList.add("book-cover-image");
    bookCover.style["object-fit"] = "fit";
    bookCover.style.width = "256px";
    bookCover.style.height = "352px";
    
    let bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");
    bookDetails.style.flex = 1;
    bookDetails.style.padding = "8px";
    let bookDetailsTitle = document.createElement("p");
    bookDetailsTitle.classList.add("book-details-title");
    bookDetailsTitle.textContent = book.title;
    bookDetailsTitle.style.fontSize = "32px";
    bookDetailsTitle.style.marginBottom = "8px";
    bookDetailsTitle.style.fontFamily = "'EB Garamond', serif";
    bookDetails.appendChild(bookDetailsTitle);
    let bookDetailsOther = document.createElement("p");
    bookDetailsOther.classList.add("book-details-other");
    bookDetailsOther.textContent = book.author + " • " + book.genre + " • " + book.releaseYear;
    bookDetailsOther.style.fontSize = "24px";
    bookDetailsOther.style.color = "grey";
    bookDetailsOther.style.fontFamily = "'EB Garamond', serif";
    bookDetails.appendChild(bookDetailsOther);

    bookCoverContainer.appendChild(bookCover)
    bookCard.appendChild(bookCoverContainer);
    bookCard.appendChild(bookDetails);
    cardGridContainer.appendChild(bookCard);
    return cardGridContainer;
}