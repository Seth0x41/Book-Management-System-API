var express= require('express');
const router = express.Router();
var bookCtrl=require('../controller/book.controller');

router.get('/books',bookCtrl.getBookList);
router.get('/books-details/:bookId',bookCtrl.getBookDetailsList);
router.post('/add-book',bookCtrl.saveBook);
router.put('/edit-book',bookCtrl.editBook);
router.delete('/delete/:bookId',bookCtrl.deleteBook);

module.exports= router