import { set_user } from "../utilities/coetus_services";
import user from "./user";

class UserInput {
    constructor() {
        this.node = document.createElement('div');

        this.txt_username = document.createElement('input');
        this.txt_username.type = 'text';
        this.txt_username.placeholder = 'Enter username...';
        this.txt_username.addEventListener('keyup', (e) => {
            if(e.keyCode == 13){
                user.username = this.txt_username.value;
            }
        })

        this.node.appendChild(this.txt_username);

        this.btn_set_user = document.createElement('button');
        this.btn_set_user.textContent = 'Set User';
        this.btn_set_user.addEventListener('click', ()=> {
            user.username = this.txt_username.value;
            if(user.username.trim() == '')
            return alert('Username can\'t be empty');
        });

        this.node.appendChild(this.btn_set_user);

    }
    getNode() {
        return this.node;
    }
}

export {
    UserInput
}