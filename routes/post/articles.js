const EXPRESS = require('express');
const ARTICLES_POST_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');
const PARSER = require('body-parser');
const JSON_PARSER = PARSER.json();

ARTICLES_POST_ROUTER.post('/', JSON_PARSER, async (req,res)=>{
    let object = new ARTICLES_MODEL({
        number: req.body.number,
        title: req.body.title,
        dateStart: req.body.dateStart*1000,
        dateEnd: req.body.dateEnd*1000,
        toDate: req.body.toDate*1000,
        type: req.body.type,
        contents: req.body.contents,
    });
    try{
        let result = await object.save();
        res.sendStatus(201);
        console.log(Date.now()+`: record has been created`);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_POST_ROUTER;