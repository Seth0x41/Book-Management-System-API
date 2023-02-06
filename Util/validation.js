var isbnValidate = require('isbn-validate');

exports.isbnValidator =(isbn)=>{
    return isbnValidate.Validate(isbn);
}