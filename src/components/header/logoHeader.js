import React from 'react';
import './logoHeader.css';

let LogoHeader = (props) => {
    return(
        <div className="logoHeaderDiv">
           <img className="logoHeader" src={props.pic} alt="Hustle Logo" />

        </div>
    )
}

export default LogoHeader;