/* Initialize DB with some seed data */
USE `book_library_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Faruk", "Sertbay", "sertbay.f@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Sohret", "Sertbay","sohretsertbay@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Emine", "Sertbay" , "eminesertbay@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (4, "Ali", "Sertbay" , "alisertbay@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO books (book_title, book_author, book_genre, ISBN)
VALUES ("To Kill a Mockingbird", "Harper Lee", "Classic", "978-0061122415");

INSERT INTO books (book_title, book_author, book_genre, ISBN)
VALUES ("1984", "George Orwell", "Dystopian", "978-0451524935");

INSERT INTO books (book_title, book_author, book_genre, ISBN)
VALUES ("Pride and Prejudice", "Jane Austen", "Romance", "978-0141439518");


INSERT INTO readers (name, genre)
VALUES ("Faruk", "Mystery");
INSERT INTO readers (name, genre)
VALUES ("Emine", "History");
INSERT INTO readers (name, genre)
VALUES ("Sohret", "Science Fiction")