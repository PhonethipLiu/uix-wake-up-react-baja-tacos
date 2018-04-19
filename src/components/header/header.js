import React from 'react';
import logoPic from '../../images/Hustle-01.svg';
import LogoHeader from './logoHeader';


let Header = (props) => {

    return(
      <div className="container">
          <div className="header">
             <nav className="navHeader">
             <LogoHeader pic={logoPic}/>
                   <h1>{props.title}</h1>
                    <h2>Hello {props.name}</h2>

             </nav>
          </div>
      </div>    
    );
}

export default Header;