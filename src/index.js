import ReactDOM from 'react-dom/client'; 
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.css'; // for css purpose
import 'bootstrap/dist/js/bootstrap.js'; // for js purpose
import 'font-awesome/css/font-awesome.css'; // use font-awesome
import './global.css';

const divRootDOMObject = ReactDOM.createRoot(document.getElementById("root"));
divRootDOMObject.render(<AppRouter/>);