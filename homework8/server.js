var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var logging = require('./utils/logging.js');
var messageRouter = require('./routes/messages.js');

mongoClient.connect('mongodb://localhost:27017/chat', (err, database) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to MongoDB');
        
        var app = express();
        app.use(express.static('site'));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(logging);
        app.use('/api/message', messageRouter(database));
        app.listen(3000, () => console.log('Example app listening on port 3000!'));
    }
});
