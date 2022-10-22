const {MongoClient} = require('mongodb')
let dbConnection
module.exports = {
    connectToDb: (cd)=>{
        MongoClient.connect('mongodb://localhost:27017/ToDoList')
        .then(client =>{
            dbConnection =  client.db()
            return cd()
        })
        .catch(err =>{
            console.log(err);
            return cd(err)
        })
    },
    getData: ()=> dbConnection
}