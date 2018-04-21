import React from 'react';
import logoPic from '../../images/Hustle-01.svg';
import LogoHeader from './logoHeader';
import './header.css';


let Header = (props) => {

    return(
      <div className="header-navbar">
            <nav className="navHeader">
                <div className="row navRow align-items-end">
                    <div className="col-sm col-lg-4"> 
                    <LogoHeader pic={logoPic} className="col-sm"/>
                   </div> 
                    <div className="col-sm navName text-center align-items-end">
                        <h4>Hello {props.name}</h4>
                    </div>
                    <div className="col-sm navProfile text-center">
                        <h4>{props.title}</h4>
                    </div>
                </div>
            </nav>
      </div>    
    );
}

export default Header;