const EXPRESS = require('express');
const ARTICLES_POST_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');
const PARSER = require('body-parser');
const JSON_PARSER = PARSER.json();

ARTICLES_POST_ROUTER.post('/', JSON_PARSER, async (req,res)=>{
    let object = new ARTICLES_MODEL({
        number: req.body.number,
        title: req.body.title,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        toDate: req.body.toDate,
        type: req.body.type,
        contents: req.body.contents,
    });
    try{
        let result = await object.save();
        res.sendStatus(201);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_POST_ROUTER;