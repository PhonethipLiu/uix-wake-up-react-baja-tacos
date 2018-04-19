import React from 'react';
import logoPic from '../../images/Hustle-01.svg';
import LogoHeader from './logoHeader';
import './header.css';


let Header = (props) => {

    return(
      <div className="header-navbar">
          <div className="row navRow">
             <nav className="nav navHeader">
             <div className="col">
                <LogoHeader pic={logoPic}/>
             </div>
             <div className="col">
                    <h2>Hello {props.name}</h2>
             </div>
             <div className="col">
                   <h1>{props.title}</h1>
             </div>
             </nav>
          </div>
      </div>    
    );
}

export default Header;