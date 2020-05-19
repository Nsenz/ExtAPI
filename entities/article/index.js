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
    let generator = (seed)=>{
        let value = seed;
        return function(){
            value = value * 127581275817285215%21321412;
            return value;
        }
    }
    return generator(1)();
}

module.exports = ARTICLES_FACTORY({numberValidator, dateValidator, typeValidator, numberGenerator, generateMD5});