import { send_message } from "../utilities/coetus_services";
import user from "./user";

class MessageInput {
    constructor() {
        this.node = document.createElement('div');

        this.txt_message = document.createElement('input');
        this.txt_message.type = 'text';
        this.txt_message.placeholder = 'Enter message...';

        this.node.appendChild(this.txt_message);

        this.btn_send_message = document.createElement('button');
        this.btn_send_message.textContent = 'Send';

        this.node.appendChild(this.btn_send_message);
    }
    getNode() {
        return this.node;
    }
    btn_send_on_click(on_click) {
        this.btn_send_message.addEventListener('click', on_click);
    }
}

export {
    MessageInput
}