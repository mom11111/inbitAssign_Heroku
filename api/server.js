const express=require('express');
var cors = require('cors');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const auth = require('./middlewares/auth');

var corsOptions = {
    "origin": "*",
    "responseHeader": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "method": "POST, GET, PUT,PATCH, DELETE, OPTIONS",
    "maxAgeSeconds": 120
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./router/api');
app.use('/', auth, router);

mongoose.connect('mongodb+srv://nis_123:<nishant>@cluster0-zr2jc.mongodb.net/test?retryWrites=true&w=majority,(err)=>{
    if(!err)
        console.log('connection established');
    else
        console.log("there is error");
});
const port=process.env.PORT || 3000
app.listen( port, (res,err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("server is running");
    }
})
