import React from 'react';

import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';


class BadgeNew extends React.Component {
  

  render() {
    return(
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
      <img className="img-fluid" src={header} alt="Logo"></img>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge firsName="Richard" lastName="Balderrama" twitter="sparragus" jobTitle="Front End Engineer" avatar="https://www.blogcdn.com/www.tuaw.com/media/2013/05/bill-gates-shot.jpg"/>
          </div>
        </div>
      </div>
    </div>
    ); 
}
}

export default BadgeNew;
