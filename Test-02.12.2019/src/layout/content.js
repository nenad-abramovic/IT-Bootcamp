import { UserInput } from "../components/user_input";
import { Messages } from "../components/messages";
import { MessageInput } from "../components/message_input";
import { send_message } from "../utilities/coetus_services";
import user from "../components/user";
import { MyMessages } from "../components/my_messages";

class Content {
    constructor() {
        this.node = document.createElement('main');

        let user_input = new UserInput();
        let messages = new Messages();
        let message_input = new MessageInput();
        let my_messages = new MyMessages();

        message_input.btn_send_on_click(() => {
            if(message_input.txt_message.value.trim() == '')
            return alert('Message can\'t be empty!');
            send_message(user.username, message_input.txt_message.value)
            .then(response => {
                if(response.success == true) {
                    messages.updateMessages();
                }
            })

        });

        this.node.appendChild(user_input.getNode());
        this.node.appendChild(messages.getNode());
        this.node.appendChild(message_input.getNode());
        this.node.appendChild(my_messages.getNode());
    }
    getNode() {
        return this.node;
    }
}

export {
    Content
}