class Footer {
  constructor() {
    this.node = document.createElement('footer');
    this.node.className = 'page-footer';
    let container = document.createElement('div');
    container.className = 'container';
    let footerColumn = document.createElement('div');
    footerColumn.className = 'footer-column';

    let storeName = document.createElement('h5');
    storeName.id = 'store-name';
    storeName.textContent = 'Bootcamp pizza';
    footerColumn.appendChild(storeName);

    let address = document.createElement('address');
    address.id = 'store-address';
    let addrTxt = document.createElement('p');
    addrTxt.innerHTML = '<p>Funny street 55, East Heaven 343 <br>Long Beach Country</p>';
    addrTxt.innerHTML += 'Phone: +0123456789';
    address.appendChild(addrTxt);
    footerColumn.appendChild(address);

    let social = document.createElement('div');
    social.id = 'social';
    footerColumn.appendChild(social);
    container.appendChild(footerColumn);

    let powered = document.createElement('div');
    powered.id = 'powered';
    powered.className = 'footer-column';

    let label = document.createElement('label');
    label.textContent = 'Powered by ';
    powered.appendChild(label);

    let img = document.createElement('img');
    img.src = 'assets/images/logo_itbootcamp_trans.png';
    img.id = 'logo-itb';
    powered.appendChild(img);

    container.appendChild(powered);
    this.node.appendChild(container);
  }
  getNode() {
    return this.node;
  }
}

export {
  Footer
}