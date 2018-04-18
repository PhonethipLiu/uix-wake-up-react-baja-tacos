import React from 'react';

let Header = (props) => {

    return(
      <div className="container">
          <div className="header">
             <nav className="navHeader">
                   <h1>{props.title}</h1>
                    <h2>Hello {props.name}</h2>
             </nav>
          </div>
      </div>    
    );
}

export default Header;