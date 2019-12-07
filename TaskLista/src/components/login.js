class Login {
    constructor() {
        this.node = document.createElement('div');
        
        this.username = document.createElement('input');
        this.username.type = 'text';
        this.username.placeholder = 'Your name';
        this.node.appendChild(this.username);

        this.btnAdd = document.createElement('button');
        this.btnAdd.textContent = 'Login';
        this.btnAdd.id='btn-add';
        this.node.appendChild(this.btnAdd);
    }
    getNode(){
        return this.node;
    }
    btnSetEventOnClick(onClick) {
        this.btnAdd.addEventListener('click', onClick);
    }
}

export {
    Login
}