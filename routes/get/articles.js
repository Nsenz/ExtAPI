const EXPRESS = require('express');
const ARTICLES_GET_ROUTER = EXPRESS.Router();
const ARTICLES_MODEL = require('../../models/articlesModel');

ARTICLES_GET_ROUTER.get('/', async (req,res)=>{
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

ARTICLES_GET_ROUTER.get('/params', paginatedRequest(ARTICLES_MODEL,true), async (req,res)=>{
    try{
        res.send(res.paginated);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

ARTICLES_GET_ROUTER.get('/limits', paginatedRequest(ARTICLES_MODEL,false), async (req,res)=>{
    try{
        res.send(res.paginated);
    }
    catch(e){
        console.error(e);
        res.sendStatus(400);
    }
});

function paginatedRequest(model, withParameters){
    return async (req,res,next)=>{
        let queryParameters = req.query;
        if (queryParameters.page <= 0){
            queryParameters.page = 1;
        }
        console.log(queryParameters);
        let limit = Number(queryParameters.limit) || 999999999999;
        delete queryParameters.limit;
        let start = (Number(queryParameters.page)-1)*limit || 0;
        delete queryParameters.start;
        delete queryParameters.page;
        console.log(Date.now()+" "+req.hostname+" is fetching with parameters...");
        try{
            if(withParameters){
                let models = await model.find(queryParameters)
                .skip(start).limit(limit);
                res.paginated = models;
            }else{
                let models = await model.find()
                .skip(start).limit(limit);
                res.paginated = models;
            }
            next();
        }
        catch(e){
            console.log(e.message);
        }
    }
}

module.exports = ARTICLES_GET_ROUTER;