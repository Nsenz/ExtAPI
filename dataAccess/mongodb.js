//binding to Express
function factoryDB(model){
    async function findOne(hash){
        let results = await model.find(hash); //express stuff
        return results;
    }
    async function insert(article){
        let instance = new model(article);
        try{
            await instance.save(); //express stuff
            console.log(Date.now()+" record has been created");
        }
        catch(e){
            throw new Error('Cannot save the record');
        }
    }
    async function deleteOne(id){
        try{
            await model.deleteOne({_id:id}); //express stuff
            console.log(Date.now()+" record has been deleted");
        }
        catch(e){
            //console.log(e.message); //???? wtf
        }
    }
    return Object.freeze({
        findOne,
        insert,
        deleteOne
    });
}

module.exports = factoryDB;