var express = require('express');
var router = express.Router();

function onMongoResult(response) {
    return (err, result) => {
        if (err) {
            response.send(err);
        }
        else {
            response.send(result);
        }
    };
};

module.exports = function (db) {
    var messages = db.collection('messages');
    return router
        .get('/', (req, res) => messages.find({}).toArray(onMongoResult(res)))
        .post('/', (req, res) => messages.insert(req.body, onMongoResult(res)));
};