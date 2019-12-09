import user from "./user";
import { get_user_messages, delete_message } from "../utilities/coetus_services";
import { Message } from "./message";

class MyMessages {
    constructor() {
        this.node = document.createElement('div');

        this.btn_get_messages = document.createElement('button');
        this.btn_get_messages.textContent = `Get messages`;

        this.msg_box = document.createElement('div');
        this.msg_box.className = 'my-msg';
        this.node.appendChild(this.btn_get_messages);

        this.btn_get_messages.addEventListener('click', () => {
            this.msg_box.innerHTML = '';
            if(!user.username) return alert('User not set!');
            delete_message();
            get_user_messages(user.username)
            .then(data => {
                data.messages.forEach(msg => {
                    let txt_msg = new Message(msg);
                    this.msg_box.appendChild(txt_msg.getNode());
                })
            });
            this.node.appendChild(this.msg_box);
        });
    }
    getNode(){
        return this.node;
    }
}

export {
    MyMessages
}