class Library {
  constructor() {
    this.books = [];
    this.patrons =[];
    this.dailyFine = .1;

  }

  chargeFines() {
    const now = new Date();

    const latePatrons = this.patrons.filter(patron =>
    (patron.currentBook !== null && patron.currentBook.dueDate < now)

    for (let patron of latePatrons) {
    const dateDiff = new Date(now - patron.currentBook.dueDate);
    const daysLate = dateDiff.getDate();
    patron.balance += this.dailyFine * daysLate;
}
);

  }

  addBook(book) {
    this.books.push(book);//this refers to this specific object fyi
  }

  addPatron(patron) {
    this.patrons.push(patron);

  }





}
