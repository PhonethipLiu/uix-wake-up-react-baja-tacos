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
                <div className="col navName text-right">
                    <h4>Hello {props.name}</h4>
                </div>
                <div className="col navProfile text-center">
                    <h4>{props.title}</h4>
                </div>
                </nav>
            </div>
        
      </div>    
    );
}

export default Header;