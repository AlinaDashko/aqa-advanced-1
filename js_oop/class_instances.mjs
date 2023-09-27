import {Book} from "./Book.mjs";
import {EBook} from "./EBook.mjs";

const book1 = new Book("Flowers for Algernon", "Daniel Keyes", 1959);
const book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book3 = new Book("Wuthering Heights", "Emily Brontë", 1847);

book1.title = 123;
book2.author = 123;
book3.year = 1779;

book1.printInfo();
console.log("---------------------------");
book2.printInfo();
console.log("---------------------------");
book3.printInfo();
console.log("---------------------------");

const ebook = new EBook("Norwegian Wood", "Haruki Murakami", 1987, 'EPUB');

ebook.title = 123;
ebook.author = 123;
ebook.year = 1779;
ebook.fileFormat = 123;

ebook.printInfo();
console.log("---------------------------");

const oldestBook = Book.findOldestBook([book1, book2, book3, ebook]);
console.log('The oldest book:');
oldestBook.printInfo();
console.log("---------------------------");