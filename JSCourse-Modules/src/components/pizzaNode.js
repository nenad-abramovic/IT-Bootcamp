import { OrderButton } from "./orderButton";

class PizzaNode {
    constructor(pizza) {
        this.pizza = pizza;
        this.price = 0;
        this.node = document.createElement('div');
        this.node.className = 'item';

        let tmp = document.createElement('div');
        tmp.className = 'item-img';

        let img = document.createElement('img');
        img.src = pizza.imgUrl;
        img.alt = pizza.name + '-img';
        tmp.appendChild(img);

        this.node.appendChild(tmp);

        let title = document.createElement('h5');
        title.className = 'item-title';
        title.textContent = pizza.name;
        this.node.appendChild(title);

        let desc = document.createElement('p');
        desc.className = 'item-description';
        desc.textContent = pizza.desc;
        this.node.appendChild(desc);

        this.footer = document.createElement('div');
        this.footer.className = 'item-footer';
        this.str = document.createElement('strong');
        this.footer.appendChild(this.str);

        this.selectSize = document.createElement('select');
        this.selectSize.className = 'size';
        this.selectSize.id = pizza.name;
        this.selectSize.addEventListener('change', () => {
            this.price = this.pizza.price[this.selectSize.value];
            this.str.textContent = `${this.price} $`;
        });

        pizza.sizes.forEach(size => {
            let tmp = document.createElement('option');
            tmp.value = size;
            tmp.textContent = size;
            this.selectSize.appendChild(tmp);
        })

        this.str.textContent = `${this.pizza.price[this.selectSize.value]} $`;
        this.price = this.pizza.price[this.selectSize.value];

        this.footer.appendChild(this.selectSize);

        this.orderBtn = new OrderButton();
        this.orderBtn.onClick(this);
        this.footer.appendChild(this.orderBtn.getNode());

        this.node.appendChild(this.footer);
    }

    getNode() {
        return this.node;
    }

    handleChange() {
        this.price = this.pizza.price[this.selectSize.value];
        this.str.textContent = `${this.price} $`;
    }
}

export {
    PizzaNode
}