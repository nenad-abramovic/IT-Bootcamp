import { Header } from "./header";
import { Content } from "./content";

class Dashboard {
    constructor() {
        this.node = document.createElement('dashboard');

        let header = new Header();
        let content = new Content();

        this.node.appendChild(header.getNode());
        this.node.appendChild(content.getNode());

    }
    getNode() {
        return this.node;
    }
}

export {
    Dashboard
}