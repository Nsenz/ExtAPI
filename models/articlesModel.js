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
        default: Date.now()
    },
    type: {
        type: String,
        required: true
    },
    contents: {
        type: String
    }
});

module.exports = MONGO.model('articles', ARTICLES_SCHEMA);