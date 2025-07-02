import React from 'react';
import Head from './Head.jsx';

function Top({onToggle}){
  return(
    <div className="Top">
    <Head className="head" onToggle={onToggle}
    />
      <div className="intro">
        <h1>Immersive experiences that deliver</h1>
        <span></span>
      </div>
    </div>
    );
}

export default Top;
 
