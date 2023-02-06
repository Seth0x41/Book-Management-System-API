exports.queryList={

    GET_STORE_LIST: "SELECT store_id, store_name, store_code FROM bms.store;",
    GET_BOOK_LIST: "SELECT book_id, book_title, book_description, book_author, book_publisher FROM bms.book;",
    GET_BOOK_DETAILS:`
    SELECT book_id, book_title, book_description, book_author, book_publisher, book_pages, book.store_code, store.store_name, store.store_address
	FROM bms.book 
	iNNER JOIN bms.store on book.store_code = store.store_code 
	WHERE book_id =$1;`,
    SAVE_BOOK_QUERY:"INSERT INTO bms.book( book_title, book_description, book_author, book_publisher, book_pages, store_code, created_on, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);",
    SAVE_STORE_QUERY:"INSERT INTO bms.store( store_name, store_code, store_address, created_by,created_on) VALUES ($1, $2, $3, $4, $5);",
    EDIT_BOOK_QUERY:"UPDATE bms.book SET book_title=$1, book_description=$2, book_author=$3, book_publisher=$4, book_pages=$5, store_code=$6, created_on=$7, created_by=$8 WHERE book_id=$9;",
    EDIT_STORE_QUERY:"UPDATE bms.store SET store_name=$1, store_code=$2, created_on=$3, created_by=$4, store_address=$5 WHERE store_id=$6;",
    DELETE_BOOK_QUERY:"DELETE FROM bms.book WHERE book_id=$1;",
    DELETE_STORE_QUERY:"DELETE FROM bms.store WHERE store_id=$1;"


}

