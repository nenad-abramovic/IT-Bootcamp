import { InputForm } from "../components/input_form";
import user from "../components/user";
import { MessageList } from "../components/message_list";
import { get_all_messages, send_message, get_user_messages } from "../utilities/coetus_services";

class Content {
  constructor() {
    this.node = document.createElement('main');
    this.node.className = 'row';

    let heading = document.createElement('h1');
    heading.className = 'center-align';
    heading.textContent = 'Coetus';
    this.node.appendChild(heading);

    let user_input = new InputForm();
    user_input.set_appearance('Username', 'Set User', 'person');
    user_input.set_btn_on_click(() => {
      let input = user_input.input_value.trim();
      if(input== '') {
        return alert('Invalid username!');
      }
      user.username = input;
    });

    this.node.appendChild(user_input.getNode());

    let all_messages = new MessageList();
    
    get_all_messages()
        .then(messages => {
          all_messages.load_messages(messages);
          all_messages.scrollTop = all_messages.scrollHeight;
    });
    
    setInterval(() => {
      get_all_messages()
        .then(messages => {
          all_messages.load_messages(messages);
        });
    }, 2000);

    this.node.appendChild(all_messages.getNode());

    let message_input = new InputForm();
    message_input.set_appearance('Message', 'Send', 'send');
    message_input.set_btn_on_click(() => {
      if(user.username == '') {
        return alert('First log in!');
      }
      
      send_message(user.username, message_input.input_value)
      .then(() => {
        get_all_messages(messages => {
          all_messages.load_messages(messages)
          .then(() => 
          all_messages.scrollTop = all_messages.scrollHeight
          );
        });
      });
    });

    this.node.appendChild(message_input.getNode());

    let container = document.createElement('div');
    container.className = 'col s6 offset-s3';

    let btn_get_user_messages = document.createElement('button');
    btn_get_user_messages.className = 'waves-effect waves-light btn col s4 offset-s4';

    container.appendChild(btn_get_user_messages);
    btn_get_user_messages.textContent = 'Get messages';

    this.node.appendChild(container);

    let user_messages = new MessageList();

    
    btn_get_user_messages.addEventListener('click', () => {
      if(user.username == ''){
        return alert('First log in!');
      }
      get_user_messages(user.username)
      .then(messages => {
        user_messages.load_messages(messages);
      });
    });

    this.node.appendChild(user_messages.getNode());
  }
  getNode() {
    return this.node;
  }
}

export {
  Content
}