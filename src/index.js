import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductDetail from './components/ProductDetail';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import CRUDProduct from './components/CRUDProduct';
import { BrowserRouter as Router } from 'react-router-dom';
import Intro from './components/Intro';
import Ecommerce from './components/Ecommerce';
import Ecommerce1 from './components/Ecommerce1';
import Ecommerce2 from './components/Ecommerce2';
import Ecommerce3 from './components/Ecommerce3';
import Ecommerce4 from './components/Ecommerce4';
import Ecommerce5 from './components/Ecommerce5';
import Ecommerce6 from './components/Ecommerce6';
import ContactPage from './components/ContactPage';
import FeaturesPage1 from './components/FeaturesPage1';
import FeaturesPage2 from './components/FeaturesPage2';
import SocialPage from './components/SocialPage';
import SocialPage1 from './components/SocialPage1';
import SocialPage3 from './components/SocialPage3';
import UpdateProduct from './components/pages/UpdateProduct';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<ProductDetail />, document.getElementById('root'));
//ReactDOM.render(<SocialPage3 />, document.getElementById('root'));
//ReactDOM.render(<Router><CRUDProduct /></Router>, document.getElementById('root'));

serviceWorker.unregister();
