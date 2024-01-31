const handleAPIError = require("~root/utils/handleAPIError");
const fetchBookByAuthor = require("~root/actions/books/fetchBookByAuthor");

const getBookByAuthor = async (req, res) => {
  const { bookAuthor } = req.params;

  try {
    const { bookTitle } = await fetchBookByAuthor({ bookAuthor });
    res.status(201).send({
      bookTitle
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBookByAuthor;
