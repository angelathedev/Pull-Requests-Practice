function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let booksBorrowed = 0;
  for(let i = 0; i < books.length; i++){
    let borrowed = books[i].borrows
   for(let item in borrowed){
     const book = borrowed[item];
     const status = book.returned;
     if(status === false){
       booksBorrowed++;
     }
    }
  }
  return booksBorrowed;
}

function getMostCommonGenres(books) {
  

}

function getMostPopularBooks(books) {
  let popularBooks = [];
  let booksBorrowed = 0;
  for(let i = 0; i < books.length; i++){
    let borrowed = books[i].borrows;
    booksBorrowed = borrowed.length;
    let borrowing = {name: `${books[i].title}`, count: booksBorrowed}
    popularBooks.push(borrowing);
  }
  const result = popularBooks.sort((bookA, bookB) => bookB.count - bookA.count);
  let newResult = result.slice(0, 5);
  return newResult;
}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
