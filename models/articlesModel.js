const MONGO = require('mongoose');

const ARTICLES_SCHEMA = MONGO.Schema({
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dateStart: {
        type: Date,
        default: Date.now()
    },
    dateEnd: {
        type: Date,
        default: Date.now()
    },
    toDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    type: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    hash:{
        type: String,
        required: true
    },
    creationDate:{
        type: Date,
        required: true
    }
});

module.exports = MONGO.model('articlesv1', ARTICLES_SCHEMA);