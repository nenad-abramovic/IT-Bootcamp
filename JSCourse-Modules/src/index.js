import { PizzaNode } from './components/pizzaNode';
import { Dashboard } from './layout/dashboard';

const body = document.querySelector('body');
let dashboard = new Dashboard();
body.appendChild(dashboard.getNode());
