const EXPRESS = require('express');
const ARTICLES_PATCH_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');
const PARSER = require('body-parser');
const JSON_PARSER = PARSER.json();

ARTICLES_PATCH_ROUTER.patch('/:id',JSON_PARSER, async (req, res)=>{
    try{
        let updated = await ARTICLES_MODEL
        .updateOne({_id:req.params.id},{
            $set:{
                title: req.body.title
            }
        });
        res.send(updated);
    }
    catch(e){
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_PATCH_ROUTER;