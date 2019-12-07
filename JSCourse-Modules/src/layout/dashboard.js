import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

class Dashboard {
  constructor() {
    this.node = document.createElement('div');
    this.node.className = 'wrapper';

    let header = new Header();
    this.node.appendChild(header.getNode());

    let main = new Main();
    this.node.appendChild(main.getNode());

    let footer = new Footer();
    this.node.appendChild(footer.getNode());


  }
  getNode() {
    return this.node;
  }
}

export {
  Dashboard
}