const EXPRESS = require('express');
const ARTICLES_POST_ROUTER = EXPRESS.Router();
const PARSER = require('body-parser');
const CRUD_SERVICE = require('../../usecases/article/index');
const JSON_PARSER = PARSER.json();

ARTICLES_POST_ROUTER.post('/', JSON_PARSER, async (req,res)=>{
    try{
        CRUD_SERVICE.addArticle({
            number: req.body.number,
            title: req.body.title,
            dateStart: req.body.dateStart*1000,
            dateEnd: req.body.dateEnd*1000,
            toDate: req.body.toDate*1000,
            type: req.body.type,
            contents: req.body.contents,
            hash: req.body.hash,
            creationDate: req.body.creationDate
        });
        res.sendStatus(201);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_POST_ROUTER;