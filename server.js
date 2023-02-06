var express=require('express');
var cors = require('cors');
var bodyParser= require('body-parser');
var storRoute = require('./route/store.route');
var bookRoute = require('./route/book.route');
var app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("ok!");
})

app.use('/api',storRoute);
app.use('/api',bookRoute);

app.listen(3000,()=>{
    console.log("[*] Server Started.")
})