import '../assets/css/style.css';
import { getCompanyInfo } from './utilities/space-x-service';
import { Dashboard } from './layout/dashboard';

getCompanyInfo()
.then(data => {
    console.log(data);
});

const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());