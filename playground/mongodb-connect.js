const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
var db = client.db('TodoApp');

  if(err){
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to the database');

// db.collection('Todos').insertOne({
//     text : 'Something to do',
//     completed: false
//   },(err,result) =>{
//     if(err){
//       return console.log('Unable to add the data',err);
//     }
//     console.log(JSON.stringify(result.ops, undefined,2));
//   });

db.collection('Users').insertOne({
  name: 'Dhanvi Desai',
  age: 19,
  location: 'India'
},(err,result) => {
  if(err){
    return console.log('Unable to add data');
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

  client.close();
});
