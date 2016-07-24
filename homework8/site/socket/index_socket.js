
class Message {
    constructor(name, content, date = new Date()) {
        this.name = name;
        this.content = content;
        this.date = date;
    }
    toHtml() {
        return `<p>${this.date.toISOString()} - ${this.name} : ${this.content}</p>`;
    }
}

var main = function () {

    var socket = io.connect();

    socket.on('chat history', function (data) {
        var chat = $('.content');
        data.map(m => new Message(m.name, m.content, new Date(m.date)))
            .map(m => m.toHtml())
            .forEach(h => chat.append(h));
    });

    $('#add').click(function () {
        var name = $('.name').val();
        var content = $('.message').val();
        if (!(name && content)) {
            return alert("Поля должны быть заполнены!");
        }
        var message = new Message(name, content);
        $('.message').val('');
        socket.emit('chat message', message);
    });

    socket.on('chat message', function (m) {
        var chat = $('.content');
        var message = new Message(m.name, m.content, new Date(m.date));
        chat.append(message.toHtml());
    });

};

$(document).ready(main);












