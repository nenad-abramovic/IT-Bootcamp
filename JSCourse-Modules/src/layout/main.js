import { PizzaNode } from "../components/pizzaNode";

let pizzas = [
  {
    name: 'Margarita',
    desc: 'Tomato and mozzarella',
    imgUrl: 'assets/images/photos/margarita.png',
    sizes: ['XL', 'L', 'M', 'S'],
    price: {
      S: 8,
      M: 10,
      L: 20,
      XL: 25
    }
  },
  {
    name: 'Capricciosa',
    desc: 'Tomato, mozzarella, olives, ham, boiled egg',
    imgUrl: 'assets/images/photos/caprcciosa.png',
    sizes: ['XL', 'L', 'M', 'S'],
    price: {
      S: 10,
      M: 12,
      L: 18,
      XL: 24
    }
  },
  {
    name: 'Quattro stagioni',
    desc: 'Tomato, mozzarella, mushrooms, artichokes',
    imgUrl: 'assets/images/photos/4stagione.png',
    sizes: ['XL', 'L', 'M', 'S'],
    price: {
      S: 6,
      M: 10,
      L: 14,
      XL: 22
    }
  },
  {
    name: 'Diavola',
    desc: 'Tomato, mozzarella, onion, chili pepper',
    imgUrl: 'assets/images/photos/diavola.png',
    sizes: ['XL', 'L', 'M', 'S'],
    price: {
      S: 12,
      M: 15,
      L: 19,
      XL: 27
    }
  },
  {
    name: 'Pascolo',
    desc: 'Mozzarella, stracchino, prosciutto, rocket',
    imgUrl: 'assets/images/photos/pascolo.png',
    sizes: ['XL', 'L', 'M', 'S'],
    price: {
      S: 9,
      M: 12,
      L: 15,
      XL: 23
    }
  },
  {
    name: 'Giardiniera',
    desc: 'Mozzarella, courgettes, aubergines, peppers',
    imgUrl: 'assets/images/photos/giardiniera.png',
    sizes: ['XL', 'L', 'M', 'S'],
    price: {
      S: 11,
      M: 13,
      L: 17,
      XL: 26
    }
  }
]


class Main {
  constructor() {
    this.node = document.createElement('main');

    let section = document.createElement('section');
    section.id = 'banner';
    let orderTitle = document.createElement('h2');
    orderTitle.innerHTML = 'Order <br> now!';
    section.appendChild(orderTitle);
    this.node.appendChild(section);

    let container = document.createElement('div');
    container.className = 'container';

    let menu = document.createElement('section');
    menu.id = 'menu';

    let row = document.createElement('div');
    row.className = 'row';

    pizzas.forEach(element => {
      let pizzaNode = new PizzaNode(element);
      let elemDiv = document.createElement('div');
      elemDiv.className = 'col l-4of12';
      elemDiv.appendChild(pizzaNode.getNode());
      row.appendChild(elemDiv);
    });

    menu.appendChild(row);
    container.appendChild(menu);
    this.node.appendChild(container);

    let article = document.createElement('article');

    let app = document.createElement('div');
    app.id = 'app';
    article.appendChild(app);

    let howToTitle = document.createElement('h3');
    howToTitle.textContent = 'How to order?';
    article.appendChild(howToTitle);

    let howToTxt = document.createElement('p');
    howToTxt.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum venenatis massa,imperdiet venenatis lacus hendrerit ultrices.Curabitur vitae ante a velit sodales tincidunt.Aenean rhoncus lacinia massa at interdum.'
    article.appendChild(howToTxt);

    let payTitle = document.createElement('h3');
    payTitle.textContent = 'Payment';
    article.appendChild(payTitle);

    let payTxt = document.createElement('p');
    payTxt.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras interdum venenatis massa, imperdiet venenatis lacus hendrerit ultrices.Curabitur vitae ante a velit sodales tincidunt.Aenean rhoncus lacinia massa at interdum.';
    article.appendChild(payTxt);

    container.appendChild(article);
  }
  getNode() {
    return this.node;
  }
}

export {
  Main
}
