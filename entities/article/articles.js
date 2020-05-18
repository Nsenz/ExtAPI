function articlesFactory({numberValidator, dateValidator, typeValidator, numberGenerator, generateMD5}){
    return function makeArticle({
        number,
        title,
        dateStart = Date.now(),
        dateEnd,
        toDate,
        type,
        contents,
        _validated = false,
        _hash,
        _created = Date.now()
    } = {}){
        if(!numberValidator(number)){
            number = numberGenerator();
        }
        if(!dateValidator(dateStart, dateEnd)){
            throw new Error('The dates are invalid');
        }
        if(!typeValidator(type)){
            throw new Error('The type is invalid');
        }
        _validated = true;
        _hash = generateMD5(String(number)+title+type+contents);
        return Object.freeze({
            number,
            title,
            dateStart,
            dateEnd,
            toDate,
            type,
            contents,
            _hash,
            _validated,
            _created
        });
    }
}

module.exports = articlesFactory;