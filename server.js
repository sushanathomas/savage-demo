require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient


let db, collection;

const url = process.env.MONGODB_URI
const dbName = "savage-demo"; //This is the mongo URL - this is the url that in the mongodb atlas website

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      throw error;
    }
    db = client.db(dbName);
    console.log("Connected to `" + dbName + "`!");
  });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public')) // What ever that you put public, is in this folder and goes live. Like css, html, js-file.
app.get('/', (req, res) => {
  db.collection('messages').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', { messages: result })
  })
})

app.post('/messages', (req, res) => {
  db.collection('messages').insertOne({ name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown: 0 }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/messages', (req, res) => {
  // The browser tells us which button was clicked; the server chooses the change.
  const direction = req.body.direction
  if (direction !== 'up' && direction !== 'down') {
    return res.status(400).json({ error: 'Choose up or down' })
  }
  const change = direction === 'up' ? 1 : -1

  db.collection('messages')
    .findOneAndUpdate({ name: req.body.name, msg: req.body.msg }, {
      // Update the saved count directly, instead of trusting a browser's count.
      $inc: { thumbUp: change }
    }, {
      sort: { _id: -1 },
      returnOriginal: false
    }, (err, result) => {
      if (err) return res.status(500).json({ error: 'Could not update the message' })
      if (!result.value) return res.status(404).json({ error: 'Message not found' })
      res.json(result)
    })
})

app.delete('/messages', (req, res) => {
  db.collection('messages').findOneAndDelete({ name: req.body.name, msg: req.body.msg }, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
