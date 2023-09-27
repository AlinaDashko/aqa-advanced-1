import {Book} from "./Book.mjs";
export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFileFormat) {
        if (typeof newFileFormat === 'string') {
            this._fileFormat = newFileFormat;
        } else {
            console.error('New file value should be a string.')
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`File format: ${this._fileFormat}`);
    }

    static createEBookFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}