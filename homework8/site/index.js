
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
    $.getJSON('api/message', function (data) {
        var chat = $('.content');
        data.map(m => new Message(m.name, m.content, new Date(m.date)))
            .map(m => m.toHtml())
            .forEach(h => chat.append(h));
    });

    $('#add').click(function () {
        var name = $('.name');
        var content = $('.message');
        var tName = name.val();
        var tContent = content.val();
        if (!(tName && tContent)) {
            return alert("Поля должны быть заполнены!");
        }
        var message = new Message(tName, tContent);
        $('.content').append(message.toHtml());
        content.val('');
        $.post('api/message', message, () => { }, 'json');
    });

};

$(document).ready(main);












