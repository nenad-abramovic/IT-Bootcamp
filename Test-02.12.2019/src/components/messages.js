import { get_messages } from "../utilities/coetus_services";
import { Message } from "./message";

class Messages  {
    constructor() {
        this.node = document.createElement('messages');
        
        this.updateMessages();
        setInterval(() => {this.updateMessages()}, 2000);
    }
    getNode(){
        return this.node;
    }
    updateMessages(){
        get_messages()
        .then(data => {
            if(data.success == true) {
                this.node.innerHTML = '';
                data.data.forEach( msg => {
                    let txt_msg = new Message(msg);
                    this.node.appendChild(txt_msg.getNode());
                });
            }
        });
    }
}

export {
    Messages
}