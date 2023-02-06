exports.Book=class Book{
    constructor(bookId,bookTitle,bookISBAN,bookDescription,bookPublisher,bookAuthor,bookPages,bookStoreCode){
        this.bookId=bookId;
        this.bookTitle=bookTitle;
        this.bookISBAN=bookISBAN;
        this.bookDescription=bookDescription;
        this.bookPublisher=bookPublisher;
        this.bookAuthor=bookAuthor;
        this.bookPages=bookPages;
        this.bookStoreCode =bookStoreCode;
    }
}