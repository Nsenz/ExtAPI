const EXPRESS = require('express');
const MONGO = require('mongoose');
const SERVER = EXPRESS();
const CORS = require('cors');

const ARTICLES_GET_ROUTER = require('./routes/get/articles');
const ARTICLES_POST_ROUTER = require('./routes/post/articles');
const ARTICLES_DELETE_ROUTER = require('./routes/delete/articles');
const ARTICLES_PATCH_ROUTER = require('./routes/patch/articles');
const USERS_GET_ROUTER = require('./routes/get/users');

const PORT = process.env.PORT || 3000;
const MONGO_CONNCTION = 'mongodb://localhost:27017/catalogue';

SERVER.use(CORS());
SERVER.use('/articles', ARTICLES_GET_ROUTER); //(1. /; 2./params?[params]);
SERVER.use('/users', USERS_GET_ROUTER);
SERVER.use('/post/article', ARTICLES_POST_ROUTER); // :id
SERVER.use('/delete/article', ARTICLES_DELETE_ROUTER); // :id
SERVER.use('/update/article', ARTICLES_PATCH_ROUTER); // :id

SERVER.listen(PORT, ()=>{
    try{
        console.info(Date.now()+': Server is running...')
        MONGO.connect(MONGO_CONNCTION, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
            console.info(Date.now()+': Mongo is up...');
        });
    }
    catch(e){
        console.error(e);
    }
});