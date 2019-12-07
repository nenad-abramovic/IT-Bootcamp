class InputForm {
  constructor() {
    this.node = document.createElement('div');
    this.node.className = 'card-panel col s6 offset-s3 valign-wrapper';
    this.input_value = '';

    this.container = document.createElement('div');
    this.container.className = 'input-field col s9';

    this.txt_input = document.createElement('input');
    this.txt_input.type = 'text';
    this.txt_input.addEventListener('change', () => {
      this.input_value = this.txt_input.value;
    });

    this.label = document.createElement('label');
    this.label.textContent= 'Username';
    
    this.btn_container = document.createElement('div');
    this.btn_container.className = 'valign-wrapper col s6';

    this.btn_add = document.createElement('button');
    this.btn_add.className = 'waves-effect waves-light btn';

    this.btn_icon = document.createElement('i');
    this.btn_icon.className = 'material-icons right';
    
    this.container.appendChild(this.txt_input);
    this.container.appendChild(this.label);
    this.node.appendChild(this.container);
    this.btn_add.appendChild(this.btn_icon);
    this.btn_container.appendChild(this.btn_add);
    this.node.appendChild(this.btn_container);
  }

  getNode() {
    return this.node;
  }

  set_btn_on_click(on_click){
    this.btn_add.addEventListener('click', on_click);
  }

  set_appearance(placeholder, btn_text, icon){
    this.label.textContent = placeholder;
    this.textNode = document.createTextNode(btn_text);
    this.textNode.textContent = btn_text;
    this.btn_add.appendChild(this.textNode);
    this.btn_icon.textContent = icon;
  }
}

export {
  InputForm
}