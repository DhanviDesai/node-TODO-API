const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
var db = client.db('TodoApp');

  if(err){
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to the database');
  db.collection('Users').deleteMany({name: 'Dhanvi Desai'}).then((result) => {
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({_id : new ObjectId("5ba52b1d21b552a4ccc96151")})
    .then((result) => {
      console.log(result);
    });
  client.close();
});
