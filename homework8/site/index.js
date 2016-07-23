
class Message {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.date = new Date();
    }
    toHtml() {
        return `<p id="${this.id}">${this.date.toISOString()} - ${this.name} : ${this.content}</p>`;
    }
}

var main = function () {
    var i = 0;

    $('#add').click(function () {
        var name = $('.name');
        var content = $('.message');
        var tName = name.val();
        var tContent = content.val();
        if (!(tName && tContent)) {
            return alert("Поля должны быть заполнены!");
        }

        var message = new Message(i++, tName, tContent);
        $('.content').append(message.toHtml());
        content.val('');
    });

};

$(document).ready(main);












