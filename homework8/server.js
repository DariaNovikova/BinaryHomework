var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var app = express();
var messages;

app.use(express.static('site'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log({
        method: req.method,
        body: req.body,
        url: req.url
    });
    next();
});

app.get('/api/message', (req, res) => {
    messages.find({}).toArray((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
});

app.post('/api/message', (req, res) => {
    messages.insert(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
})

mongoClient.connect('mongodb://localhost:27017/chat', (err, database) => {
    if (err) {
        console.log(err);
    }
    else {
        messages = database.collection('messages');
        console.log('Connected to MongoDB');
        app.listen(3000, () => console.log('Example app listening on port 3000!'));
    }
});
