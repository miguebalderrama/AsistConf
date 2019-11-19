//const element = document.createElement('h1');
//element.innerText = 'Hello app Reactiva';
//const container = document.getElementById('app');

//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';



//const element = <h1> Hola mundo </h1> 

const container = document.getElementById('app');
ReactDOM.render(<BadgeNew />, container);


