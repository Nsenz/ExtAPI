function removeFactory(articlesDb){
    return async function removeArticle(id){
        if(!id){
            throw new Error('You must pass an article id');
        }
        try{
            articlesDb.deleteOne(id);
        }
        catch(e){
            throw new Error('Cannot delete the record');
        }
    }
}

module.exports = removeFactory;