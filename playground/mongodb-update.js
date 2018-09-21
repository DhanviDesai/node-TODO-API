const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
var db = client.db('TodoApp');
  if(err){
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to the database');
  db.collection('Users').findOneAndUpdate({_id : new ObjectId("5ba52b4721b552a4ccc96155")},
    {
      $inc : {
        age : 1
      }
    }, {
      returnOriginal : false
    }).then((result) => {
      console.log(result);
    });
  client.close();
});
