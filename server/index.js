const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kl5qi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



const app = express()

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello dear");
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appoinmentCollection = client.db("doctorPortals").collection("appointments");
 
  app.post('/addAppointment' , (req, res) => {
      const appointment =req.body;
      console.log(appointment)
      appoinmentCollection.insertOne(appointment)
     .then(result => {
         res.send(result.insertedCount > 0) 
     })
  })

  app.post('/appointmentByDate' , (req, res) => {
    const date =req.body;
    console.log(date.date)
    appoinmentCollection.find({date: date.date})
   .toArray((err , documents )=> {
       res.send(documents)
   })
})
});

app.listen(process.env.PORT || port);