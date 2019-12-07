import kartContent from "./kartContent";

class Kart {
  constructor() {
    this.node = document.createElement('div');
    this.node.id = 'cart';
    this.node.className = 'cart';

    let a = document.createElement('a');
    a.href = '#';

    this.counter = 0;
    this.badge = document.createElement('span');
    this.badge.className = 'badge';
    this.badge.id = 'counter';
    this.badge.textContent = this.counter;
    a.appendChild(this.badge);

    let basketImg = document.createElement('img');
    basketImg.src = "assets/images/icons/basket.png";
    basketImg.alt = "Shopping basket";
    a.appendChild(basketImg);

    this.node.appendChild(a);

    this.node.addEventListener('click', () => {
      kartContent.toggleVisibility();
    });
  }
  getNode() {
    return this.node;
  }
  updateCounter() {
    this.badge.textContent = ++this.counter;
  }
}

export default new Kart()