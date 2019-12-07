class KartContent {
  constructor() {
    this.node = document.createElement('div');
    this.node.className = 'cart-pop';

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.textContent = 'Item';
    tr.appendChild(th);

    th = document.createElement('th');
    th.textContent = 'Size';
    tr.appendChild(th);

    th = document.createElement('th');
    th.align = 'right';
    th.textContent = 'Price';
    tr.appendChild(th);

    thead.appendChild(tr);
    table.appendChild(thead);

    this.tbody = document.createElement('tbody');
    this.tbody.id = 'order-content';
    table.appendChild(this.tbody);

    let tfoot = document.createElement('tfoot');
    tr = document.createElement('tr');
    let td = document.createElement('td');
    td.align = 'right';
    td.colSpan = '3';
    td.textContent = 'TOTAL: ';
    this.orderSum = 0;
    this.orderSumTxt = document.createElement('strong');
    this.orderSumTxt.id = 'order-sum';
    this.orderSumTxt.textContent = `${this.orderSum} $`;
    td.appendChild(this.orderSumTxt);
    tr.appendChild(td);
    tfoot.appendChild(tr);
    table.appendChild(tfoot);
    this.node.appendChild(table);
  }

  getNode() {
    return this.node;
  }
  updateNode(pizzaNode) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.textContent = pizzaNode.pizza.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = pizzaNode.selectSize.value;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = `${pizzaNode.price} $`;
    tr.appendChild(td);

    this.tbody.appendChild(tr);

    this.orderSum += pizzaNode.price;
    this.orderSumTxt.textContent = `${this.orderSum} $`;
  }
  toggleVisibility() {
    if (this.node.style.display != 'none')
      this.node.style.display = 'none';
    else
      this.node.style.display = 'block';
  }
}

export default new KartContent()