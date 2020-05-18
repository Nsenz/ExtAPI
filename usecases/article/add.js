const CREATE_ARTICLE = require('../../entities/article/index');

function factoryAddArticle(articlesDb){
    return async function addArticle(articleInfo){
        const article = CREATE_ARTICLE(articleInfo);
        exists = await articlesDb.findOne({hash: article._hash});
        if(exists == []){
            console.log(Date.now()+' : attempt to insert an existing article');
            return exists;
        }
        if(article.isValid == false){
            throw new Error('The article is invalid');
        }
        return articlesDb.insert({
            number: article.number,
            title: article.title,
            dateStart: article.dateStart,
            dateEnd: article.dateEnd,
            toDate: article.toDate,
            type: article.type,
            contents: article.contents,
            hash: article._hash,
            creationDate: article._created
        });
    }
}

module.exports = factoryAddArticle;