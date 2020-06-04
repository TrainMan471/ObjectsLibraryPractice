class Patron {
  constructor(name, email, currentBook) {
      this.name = name;
      this.email = email;
      this.currentBook = null;
      this.balance = 0;

  }

  

  checkoutBook(book) {
      this.currentbook = book;
      book.out = true;
      book.patron = this;



  }

  returnBook() {
    this.currentBook = null;
    book.out = false;
    book.patron = null;


  }


}
