const EXPRESS = require('express');
const ARTICLES_GET_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');
const PARSER = require('body-parser');
const JSON_PARSER = PARSER.json();

ARTICLES_GET_ROUTER.get('/', JSON_PARSER, async (req,res)=>{
    try{
        console.log(Date.now()+" "+req.hostname+" is fetching...");
        let models = await ARTICLES_MODEL.find();
        res.send(models);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

ARTICLES_GET_ROUTER.get('/params', JSON_PARSER, async (req,res)=>{
    try{
        var queryParameters = req.query;
        console.log(Date.now()+" "+req.hostname+" is fetching...");
        let models = await ARTICLES_MODEL.find(queryParameters);
        res.send(models);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_GET_ROUTER;