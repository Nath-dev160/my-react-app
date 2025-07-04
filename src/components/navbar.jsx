import React from 'react';
import Head from './Head.jsx';

function Nav({isActive,onToggle}){
  return(
      <div className={isActive ? 'navActive' : 'Nav'}>
      <Head onToggle={onToggle} isActive={isActive} className="head"/>
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
