
var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility')
exports.getStoreList=async (req,res)=>{

    try{
        var storeListQuery = queries.queryList.GET_STORE_LIST;
        var result = await dbConnection.dbQuery(storeListQuery);
        return res.status(200).send(JSON.stringify(result.rows));

    }catch(err){
        console.log("Error - "+ err);
        return res.status(500).send({error : "Faild to list store."});
    }
}
exports.saveStore=async (req,res)=>{
    try{
    var createdBy=req.body.createdBy
    var createdOn=new Date();
    var storeName = req.body.storeName
    var storeAdress = req.body.storeAdress
    if (!storeName || !storeAdress){
        return res.status(500).send({error : "Store Name or Address can not be empty!"});

    }
    let storeCode = util.generateStoreCode()
    values=[storeName,storeCode,storeAdress,createdBy,createdOn];
    var saveStoreQuery = queries.queryList.SAVE_STORE_QUERY;
    await dbConnection.dbQuery(saveStoreQuery,values);
    return res.status(200).send("Store Created!");

}catch(err){
    console.log("Error - "+ err);
    return res.status(500).send({error : "Something wrong!"});
}
}

exports.editStore=async (req,res)=>{
    try{
    var createdBy=req.body.createdBy
    var createdOn=new Date();
    var storeName = req.body.storeName
    var storeAdress = req.body.storeAdress
    var storeId=req.body.storeId
    if (!storeId||!storeName || !storeAdress){
        return res.status(500).send({error : "Store Name, Address and ID can not be empty!"});

    }
    let storeCode = util.generateStoreCode()
    values=[storeName,storeCode,createdOn,createdBy,storeAdress,storeId];
    var editStoreQuery = queries.queryList.EDIT_STORE_QUERY;
    await dbConnection.dbQuery(editStoreQuery,values);
    return res.status(200).send("Store Edited!");

}catch(err){
    console.log("Error - "+ err);
    return res.status(500).send({error : "Something wrong!"});
}
}

exports.deleteStore = async (req,res)=>{
    try{

        let storeId= req.params.storeId;
        
        if(!storeId){
            return res.status(500).send({error : "Please add store id"});
    
        }
        let DeleteQuery=queries.queryList.DELETE_STORE_QUERY;
        await dbConnection.dbQuery(DeleteQuery,[storeId]);
        return res.status(200).send("Store Deleted!");
    
    
    }catch(err){
        console.log("Error - "+ err);
        return res.status(500).send({error : "Something wrong!"});
    }
    }