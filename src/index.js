//const element = document.createElement('h1');
//element.innerText = 'Hello app Reactiva';
//const container = document.getElementById('app');

//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';



//const element = <h1> Hola mundo </h1> 

const container = document.getElementById('app');
ReactDOM.render(<Badge 
firstName = "Anastasia" 
lastName = "Balderrama" 
jobTitle = "Front Engineer"
twitter = "nastia2013"
avatar= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eUV_vvDq-3CcIAIC8mVJRnhszVphVJh4omNKp2OYSrPGtr7D&s"
/>, container);


