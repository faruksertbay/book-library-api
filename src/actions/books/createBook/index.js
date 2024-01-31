const insertBook = require("./queries/insertBook");

const createBook = async ({ bookTitle, bookAuthor, bookGenre, ISBN }) => {
  const bookId = await insertBook({ bookTitle, bookAuthor, bookGenre, ISBN });
  return { bookId };
};

module.exports = createBook;
