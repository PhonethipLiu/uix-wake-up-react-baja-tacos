import React from 'react';

let LogoHeader = (props) => {
    return(
        <div className="logoHeaderDiv">
           <img src={props.pic} alt="Hustle Logo" />

        </div>
    )
}

export default LogoHeader;