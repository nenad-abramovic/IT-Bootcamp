class Header {
    constructor(){
        this.node = document.createElement('header');
        let title = document.createElement('h1');
        title.innerHTML = 'Task List';
        this.node.appendChild(title);
    }
    getNode(){
        return this.node;
    }
}

export {
    Header
}