import React from 'react';
import Head from './Head.jsx';

function Nav(){
  return(
    <div className="Nav">
    <Head/>
    <ul>
  <li> <a href="#">About</a> </li>
  <li> <a href="#">Careers</a> </li>
  <li> <a href="#">Events</a> </li>
  <li> <a href="#">Products</a> </li>
  <li> <a href="#">Support</a> </li>  
    </ul>
    </div>
    )
}

export default Nav;
