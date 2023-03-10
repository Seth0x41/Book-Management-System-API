
var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var validation = require('../Util/validation')
exports.getBookList=async (req,res)=>{
try{
    var bookListQuery = queries.queryList.GET_BOOK_LIST;
    var result = await dbConnection.dbQuery(bookListQuery);
    return res.status(200).send(JSON.stringify(result.rows));

}catch(err){
    console.log("Error - "+ err);
    return res.status(500).send({error : "Faild to list Books."});
}

}
exports.getBookDetailsList=async (req,res)=>{
    try{
        var bookId = req.params.bookId;
        var bookListQuery = queries.queryList.GET_BOOK_DETAILS;
        var result = await dbConnection.dbQuery(bookListQuery,[bookId]);
        return res.status(200).send(JSON.stringify(result.rows[0]));
    
    }catch(err){
        console.log("Error - "+ err);
        return res.status(500).send({error : "Faild to list Books."});
    }
    
    }

exports.saveBook = async (req,res)=>{
try{
    var created_by=req.body.createdBy
    let created_on = new Date();
    let bookTitle = req.body.bookTitle;
    let bookDescription = req.body.bookDescription;
    let bookPublisher = req.body.bookPublisher;
    let bookAuthor = req.body.bookAuthor;
    let bookPages = req.body.bookPages;
    let bookStoreCode = req.body.bookStoreCode;
    let bookIsban = req.body.bookIsban;
    if(validation.isbnValidator(bookIsban) == false){ return res.status(500).send({error : "invalid isban!"}); }

    var isStoreCodeExist = queries.queryList.IS_STORE_EXIST;
    var result = await dbConnection.dbQuery(isStoreCodeExist,[bookStoreCode]);
    var exists = result.rows[0].exists;
     if(exists == false){ return res.status(500).send({error : "Store Code Doesn't exist"}); }

    if(!bookTitle || !bookAuthor || !bookPublisher ||!bookStoreCode){
        return res.status(500).send({error : "Please Fill All Required Objects!"});

    }
    values=[bookTitle,bookDescription,bookAuthor,bookPublisher,bookPages,bookStoreCode,created_on,created_by,bookIsban]
    let saveQueries=queries.queryList.SAVE_BOOK_QUERY;
    await dbConnection.dbQuery(saveQueries,values);
    return res.status(200).send("Book added!");


}catch(err){
    console.log("Error - "+ err);
    return res.status(500).send({error : "Something wrong!"}); }}

    
exports.editBook = async (req,res)=>{
    try{
        var created_by=req.body.createdBy
        let created_on = new Date();
        let bookId= req.body.bookId;
        let bookTitle = req.body.bookTitle;
        let bookDescription = req.body.bookDescription;
        let bookPublisher = req.body.bookPublisher;
        let bookAuthor = req.body.bookAuthor;
        let bookPages = req.body.bookPages;
        let bookStoreCode = req.body.bookStoreCode;
        let bookIsban = req.body.bookIsban;
        if(validation.isbnValidator(bookIsban) == false){ return res.status(500).send({error : "invalid isban!"}); }
        var isStoreCodeExist = queries.queryList.IS_STORE_EXIST;
        var result = await dbConnection.dbQuery(isStoreCodeExist,[bookStoreCode]);
        var exists = result.rows[0].exists;
         if(exists == false){ return res.status(500).send({error : "Store Code Doesn't exist"}); }
        if(!bookId||!bookTitle || !bookAuthor || !bookPublisher ||!bookStoreCode){
            return res.status(500).send({error : "Please Fill All Required Objects!"});
    
        }
        values=[bookTitle,bookDescription,bookAuthor,bookPublisher,bookPages,bookStoreCode,created_on,created_by,bookIsban,bookId]
        let EditQuery=queries.queryList.EDIT_BOOK_QUERY;
        await dbConnection.dbQuery(EditQuery,values);
        return res.status(200).send("Book Updated!");
    
    
    }catch(err){
        console.log("Error - "+ err);
        return res.status(500).send({error : "Something wrong!"});
    }
    }

    exports.deleteBook = async (req,res)=>{
        try{

            let bookId= req.params.bookId;
            
            if(!bookId){
                return res.status(500).send({error : "Please add book id"});
        
            }
            let DeleteQuery=queries.queryList.DELETE_BOOK_QUERY;
            await dbConnection.dbQuery(DeleteQuery,[bookId]);
            return res.status(200).send("Book Deleted!");
        
        
        }catch(err){
            console.log("Error - "+ err);
            return res.status(500).send({error : "Something wrong!"});
        }
        }