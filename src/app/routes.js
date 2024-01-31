const express = require("express");
const { ADMIN } = require("~root/constants/userTypes");
const deleteBookById = require("~root/actions/books/deleteBookById/index.");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const getAllBooks = require("./controllers/books/getAllBooks");
const getBookById = require("./controllers/books/getBookById");
const getBookByTitle = require("./controllers/books/getBookByTitle");
const getBookByAuthor = require("./controllers/books/getBookByAuthor");
const getBookByGenre = require("./controllers/books/getBookByGenre");
const postBook = require("./controllers/books/postBook");
const patchBookById = require("./controllers/books/patchBookById");
const getAllReaders = require("./controllers/readers/getAllReaders");
const getReaderById = require("./controllers/readers/getReaderById");
const getUsers = require("./controllers/users/getUsers");
const postReader = require("./controllers/readers/postReader");
const patchReaderById = require("./controllers/readers/patchReaderById");
const deleteReader = require("./controllers/readers/deleteReader");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// ALL ENDPONTS WERE TESTED WITH POSTMAN AND WORKING AS EXPECTED

// books

router.get("/books", getAllBooks);

router.get("/book/:bookId", getBookById);

router.get("/book/title/:bookTitle", getBookByTitle);

router.get("/book/author/:bookAuthor", getBookByAuthor);

router.get("/book/genre/:bookGenre", getBookByGenre);

router.post("/books/post", postBook);

router.patch("/book/patch/:bookId", patchBookById);

router.delete("/book/delete/:bookId", deleteBookById);

// readers

router.get("/readers", getAllReaders);

router.get("/reader/:readerId", getReaderById);

router.post("/reader", postReader);

router.patch("/reader/p/:readerId", patchReaderById);

router.delete("/reader/d/:readerId", deleteReader);

// users

router.get("/users", getUsers);

module.exports = router;
