const {MongoClient} = require("mongodb");
const {url} = require("../config/db.config");

const client = new MongoClient(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

let dbConnection;

module.exports = {
    connectToServer : function(callback){
        client.connect(function(err,db){

          if(err || !db){
              return callback(err);
          }  

          dbConnection = db.db("auth");
          console.log("Successfully connected to MongoDb");

          return callback();
        })
    },
    getDb : function(){
        return dbConnection;
    }
}