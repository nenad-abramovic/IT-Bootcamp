import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../assets/css/style.css';

import { Content } from "./layout/content";

const app = document.querySelector('#app');
let content = new Content();

app.appendChild(content.getNode());