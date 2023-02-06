var express= require('express');
const router = express.Router();
var storeCtrl=require('../controller/store.controller');

router.get('/store',storeCtrl.getStoreList);
router.post('/store/add-store',storeCtrl.saveStore);
router.put('/store/edit-store',storeCtrl.editStore);
router.delete('/store/delete/:storeId',storeCtrl.deleteStore);


module.exports= router