import Kart from "../components/kart";
import KartContent from "../components/kartContent";

class Header {
  constructor() {
    this.node = document.createElement('header');
    this.node.id = 'page-header';

    let container = document.createElement('div');
    container.className = 'container';

    let logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = 'assets/images/logo.png';
    container.appendChild(logo);

    let navigation = document.createElement('nav');
    let ul = document.createElement('ul');

    let li = document.createElement('li');
    let menu = document.createElement('a');
    menu.href = '#menu';
    menu.textContent = 'Menu';
    li.appendChild(menu);
    ul.appendChild(li);

    li = document.createElement('li');
    let ordering = document.createElement('a');
    ordering.href = '#ordering';
    ordering.textContent = 'Ordering';
    li.appendChild(ordering);
    ul.appendChild(li);


    li = document.createElement('li');
    let contact = document.createElement('a');
    contact.href = '#contact';
    contact.textContent = 'Contact';
    li.appendChild(contact);
    ul.appendChild(li);

    navigation.appendChild(ul);
    container.appendChild(navigation);
    this.node.appendChild(container);

    container.appendChild(Kart.getNode());
    container.appendChild(KartContent.getNode());
  }
  getNode() {
    return this.node;
  }

}

export {
  Header
}