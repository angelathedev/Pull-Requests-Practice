function findAuthorById(authors, id) {
  for(let i = 0; i < authors.length; i++){
    if(authors[i].id === id){
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  return books.find((book) => book.id === id, {});
}

function partitionBooksByBorrowedStatus(books) {
  let booksNotReturned = [];
  let booksReturned = [];
  for(let i = 0; i < books.length; i++){
    let borrowed = books[i].borrows
    if(borrowed[0].returned === false){
      booksNotReturned.push(books[i]);
  }
  else if(borrowed[0].returned === true){
    booksReturned.push(books[i]);
  }
  }
  let bookStatus = [booksNotReturned, booksReturned];
  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
