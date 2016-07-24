var socketio = require('socket.io');

module.exports = function (server, db) {
    var io = socketio.listen(server);
    var messages = db.collection('messages');

    io.on('connection', function (socket) {
        console.log('Client connected');

        socket.on('disconnected', () => console.log('Client disconnected'));
        socket.on('chat message', msg => {
            messages.insert(msg, (err, result) => {
                io.emit('chat message', msg);
            });
        });

        messages.find({}).toArray((err, result) => socket.emit('chat history', result));
    });
}
