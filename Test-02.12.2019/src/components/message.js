class Message {
    constructor(message) {
        this.node = document.createElement('div');
        this.message = message;
        this.txt_message = document.createElement('span');
        this.txt_date = document.createElement('span');
        this.txt_author = document.createElement('span');
        this.message_item = document.createElement('div');

        this.txt_message.className = 'txt-msg';
        this.txt_date.className = 'txt-date';
        this.txt_author.className = 'txt-author';

        this.txt_message.textContent = this.message.message;
        this.txt_date.textContent = new Date(this.message.timestamp).toLocaleTimeString('sr-cyrl', {hour12: true});
        this.txt_author.textContent =`Author: ${this.message.username}`;

        this.message_item.className = 'msg-item';

        this.message_item.appendChild(this.txt_author);
        this.message_item.appendChild(this.txt_message);
        this.message_item.appendChild(this.txt_date);

        this.node.appendChild(this.message_item);
    }
    getNode() {
        return this.node;
    }
}

export {
    Message
}