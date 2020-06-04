class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this._out = false;
    this.dueDate = null;//There is no dueDate until a book is checked out, reason why value is null;
    this.patron = null;//There is no patron until a patron signs up at the library, reason why value is null;


  }


  get out() {
    return this._out;
  }

  set out(out){
        this._out = out;

        if (out) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() + 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = null;
        }
      }
}

//Setters modify data
//Getters just return data
