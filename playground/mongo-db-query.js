const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
var db = client.db('TodoApp');

  if(err){
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to the database');
  db.collection('Users').find({name : 'Dhanvi Desai'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch data');
  });
  //client.close();
});
