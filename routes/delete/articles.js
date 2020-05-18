const EXPRESS = require('express');
const ARTICLES_DELETE_ROUTER = EXPRESS.Router();
const CRUD_SERVICE = require('../../usecases/article/index');

ARTICLES_DELETE_ROUTER.delete('/:id', async (req,res)=>{
    try{
        CRUD_SERVICE.removeArticle(req.params.id);
        res.sendStatus(204);
    }
    catch(e){
        res.sendStatus(400);
    }
});

module.exports = ARTICLES_DELETE_ROUTER;