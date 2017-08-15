import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Container />, document.getElementById('container'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
