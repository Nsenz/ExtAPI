const ARTICLES_FACTORY = require('./articles');
const MD5 = require('js-md5');

//define or import validators
function numberValidator(number){
    return Number(number) > 0;
}

function dateValidator(dateStart, dateEnd){
    if(dateStart>dateEnd){
        return false;
    }
    return true;
}

function typeValidator(type){
    let validTypes = ["Инцидент", "Консультация"];
    return validTypes.includes(type);
}

function generateMD5(text){
    return MD5(text);
}

function numberGenerator(){
    return Math.floor(Math.random() * 10000);
}

module.exports = ARTICLES_FACTORY({numberValidator, dateValidator, typeValidator, numberGenerator, generateMD5});