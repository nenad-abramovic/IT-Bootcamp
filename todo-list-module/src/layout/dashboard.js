import { Header } from "./header";
import { Main } from "./main";

class Dashboard {
    constructor() {
        this.header = new Header();
        this.main = new Main();
        this.node = document.createElement('dashboard');
        this.node.appendChild(this.header.getNode());
        this.node.appendChild(this.main.getNode());
    }
    getNode() {
        return this.node;
    }
}

export {
    Dashboard
}