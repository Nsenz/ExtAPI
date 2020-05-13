const EXPRESS = require('express');
const ARTICLES_DELETE_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');

ARTICLES_DELETE_ROUTER.delete('/:id', async (req,res)=>{
    try{
        await ARTICLES_MODEL.deleteOne({_id:req.params.id});
        res.sendStatus(204);
    }
    catch(e){
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_DELETE_ROUTER;