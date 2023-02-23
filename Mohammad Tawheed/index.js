// Express
const express = require('express');
// Mongodb
const mongodb = require('mongodb');
// Mongodb Client
const { MongoClient } = require("mongodb");

// Express initialization in app variable
const app = express();
// Declare port variable having value 3000
const port = 3000;

// Mongodb Altas Database connection link
const myLink =
  "mongodb+srv://tawheed:tawheed@cluster0.hcibapc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(myLink);

async function run() {

    console.log('/lessons or /orders');
  try {
    const database = client.db('myDatabase');

    //  /lesson json response
    app.get('/lessons', (req, res) => {
      client.connect(err => {
        const database = client.db('myDatabase');
        const lessons = database.collection('lessons');
        lessons.find({}).toArray((error, lessonDocuments) => {
          if (error) {
            res.status(500).send(error);
          } else {
            res.send(lessonDocuments);
          }
          client.close();
        });
      });
    });

    //  /orders json response
    app.get('/orders', (req, res) => {
      client.connect(err => {
        const database = client.db('myDatabase');
        const lessons = database.collection('orders');
        lessons.find({}).toArray((error, lessonDocuments) => {
          if (error) {
            res.status(500).send(error);
          } else {
            res.send(lessonDocuments);
          }
          client.close();
        });
      });
    });


app.use(function(request, response){
  response.status(404).send("Enter /lessons for lessons  or /orders for orders");

});

//running the server
app.listen(3000, () => {
console.log('App listening on port 3000');
console.log('Go to this link:');
console.log('http://localhost:3000/lessons or /orders');
});


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





