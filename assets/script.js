function getBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => displayBooks(data))
    .catch((error) => console.log("Errore nella richiesta:", error));
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ``;

  books.forEach((book) => {
    const card = `
    <div class="col-md-3">
    <div class="card mb-4">
    <img src="${book.img}" class="card-img-top" alt="${book.title}">
    <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">Prezzo: ${book.price}$</p>
    <button class="btn btn-danger scarta" data-book-id="${book._id}">Scarta</button>
    
    </div>
    </div>
    </div>`;
    bookList.innerHTML += card;
    // console.log(card);
  });

  const scartaButtons = document.querySelectorAll(".scarta");
  scartaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const removeCard = document.querySelector(".col-md-3");
      removeCard.remove();
    });
  });
}
getBooks();
