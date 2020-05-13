const EXPRESS = require('express');
const ARTICLES_GET_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');
const PARSER = require('body-parser');
const JSON_PARSER = PARSER.json();

ARTICLES_GET_ROUTER.get('/', JSON_PARSER, async (req,res)=>{
    try{
        let models = await ARTICLES_MODEL.find();
        res.send(models);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

ARTICLES_GET_ROUTER.get('/:id', JSON_PARSER, async (req,res)=>{
    try{
        let models = await ARTICLES_MODEL.findById(req.params.id);
        res.send(models);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_GET_ROUTER;