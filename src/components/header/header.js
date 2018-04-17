import React, { Component } from 'react';

let Header = (props) => {

    return(
      <div className="container">
          <div className="header">
             <nav className="navHeader">
                   <h1>{props.title}</h1>
             </nav>
          </div>
      </div>    
    );
}

export default Header;