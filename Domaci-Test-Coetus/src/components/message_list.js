class MessageList {
  constructor() {
    this.node = document.createElement('section');
    this.node.className = 'collection col s6 offset-s3';
  }
  
  getNode() {
    return this.node;
  }

  clear_list() {
    this.node.innerHTML = '';
  }

  load_messages(messages) {
    this.clear_list();
    
    let messages_header = document.createElement('div');
    messages_header.className = 'collection-header';

    let heading = document.createElement('h4');
    heading.textContent = 'Messages';
    messages_header.appendChild(heading);

    this.node.appendChild(messages_header);

    let progress = document.createElement('div');
    progress.className = 'progress';
    let loader = document.createElement('div');
    loader.className = 'indeterminate';
    progress.appendChild(loader);
    this.node.appendChild(progress);

    messages.forEach(message => {
    let message_container = document.createElement('a');
    message_container.className = 'collection-item avatar waves-effect';

    let avatar = document.createElement('i');
    avatar.className = 'material-icons circle';
    avatar.textContent = 'person_outline';

    let txt_author = document.createElement('span');
    txt_author.className = 'title';
    txt_author.textContent = message.username;
    
    let txt_message = document.createElement('p');
    txt_message.textContent = message.message;
    
    let txt_time = document.createElement('p');
    txt_time.textContent = new Date(message.timestamp).toLocaleTimeString('sr', {hour12: true});

    message_container.appendChild(avatar);
    message_container.appendChild(txt_author);
    message_container.appendChild(txt_message);
    message_container.appendChild(txt_time);

    this.node.appendChild(message_container);
  
  });

  this.node.removeChild(progress);
  }
}

export {
  MessageList
}