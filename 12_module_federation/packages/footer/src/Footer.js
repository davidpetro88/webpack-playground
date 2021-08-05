import React from 'react';

import {Navbar} from "reactstrap";

// CSS
import './footer.css';

const Footer = () => {
    return (
         <div>
             <Navbar color="light" light expand="md">
                 <div className="test">
                     <h1>Footer </h1>
                     <p> hello World </p>
                 </div>

             </Navbar>
         </div>
    );
}

export default Footer;
