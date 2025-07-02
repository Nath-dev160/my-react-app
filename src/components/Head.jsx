import React, {useContext,useState} from 'react';
import {navContext} from "./navContext.js";

function Head({onToggle,isActive}){

  return(
     <div className="head">
    <div className="logo"></div>
    <div className={isActive? 'closebtn' : 'navbtn'} onClick={onToggle}></div>
    </div>
    );
};

export default Head;
