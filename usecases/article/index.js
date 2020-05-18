const ADD_ARTICLE = require('./add');
const REMOVE_ARTICLE = require('./remove');
const MONGO_DB = require('../../dataAccess/mongodb');
const ARTICLES_MODEL = require('../../models/articlesModel');

const addArticle = ADD_ARTICLE(MONGO_DB(ARTICLES_MODEL));
const removeArticle = REMOVE_ARTICLE(MONGO_DB(ARTICLES_MODEL));

const CRUD_SERVICE = Object.freeze({
    addArticle,
    removeArticle
});

module.exports = CRUD_SERVICE;