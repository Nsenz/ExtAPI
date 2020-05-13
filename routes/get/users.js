const EXPRESS = require('express');
const USERS_GET_ROUTER = EXPRESS.Router();

USERS_GET_ROUTER.get('/', (req,res)=>{
    res.send('USERS');
});

module.exports = USERS_GET_ROUTER;