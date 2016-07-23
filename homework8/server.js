var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var messages = [{
    name:'jeka', content:'jjjjjbhvhgcvmhgcgfm', date: new Date()
}];

app.use(express.static('site'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    console.log({
        method: req.method,
        body: req.body,
        url: req.url
    });
    next();
});

app.get('/api/message', (req, res) => {
    res.json(messages);
});

app.post('/api/message', (req, res) => {
    messages.push(req.body);
    res.end();
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});