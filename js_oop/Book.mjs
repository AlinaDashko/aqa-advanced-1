export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle === 'string') {
            this._title = newTitle;
        } else {
            console.error('Title value should be a string.');
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string') {
            this._author = newAuthor;
        } else {
            console.error('Author value should be a string.');
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear >= 1800) {
            this._year = newYear;
        } else {
            console.error('Year value should be greater or equal 1800.');
        }
    }

    printInfo() {
        console.log(`Title: ${this._title}`);
        console.log(`Author: ${this._author}`);
        console.log(`Year: ${this._year}`);
    }
    static findOldestBook(books) {
        if (!books.length) {
            return null;
        }

        return [...books].sort((a, b) => a.year - b.year)[0];
    }
}