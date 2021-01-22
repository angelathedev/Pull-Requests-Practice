const { partitionBooksByBorrowedStatus } = require("./books");

function findAccountById(accounts, id) {
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].id === id)
    return accounts[i];
    }
  }

function sortAccountsByLastName(accounts) {
  return accounts.sort((authorA, authorB) => (authorA.name.last > authorB.name.last ? 1 : -1));
}

function numberOfBorrows(account, books) {
  let borrowedBooks = 0;
  const accountId = account.id;
  for(let i = 0; i < books.length; i++){
    let borrowed = books[i].borrows
   for(let item in borrowed){
     const book = borrowed[item];
     const id = book.id;
    if(accountId === id){
      borrowedBooks ++;
    }
}
}
return borrowedBooks;
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
