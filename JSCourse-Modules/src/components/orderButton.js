import Kart from "./kart";
import kartContent from "./kartContent";

class OrderButton {
  constructor() {
    this.node = document.createElement('button');
    this.node.className = 'order-btn';
    this.node.textContent = 'Order';
  }
  getNode() {
    return this.node;
  }
  onClick(pizzaNode) {
    this.node.addEventListener('click', () => {
      Kart.updateCounter();
      kartContent.updateNode(pizzaNode);
    });
  }

}

export {
  OrderButton
}