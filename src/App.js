import React,{useState} from 'react';
import Top from './components/Top.jsx';
import Nav from './components/navbar.jsx';
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx';
import {navProvider} from "./components/navContext.js";
import "./styles/App.css";

function App() {
  const [isActive,SetisActive] = useState(false);

const toggle =()=>{
SetisActive(prev => !prev)
console.log('toggle is now :', isActive);
};
  return (
    <div className="App">
    <Nav isActive={isActive} onToggle={toggle} />
    <Top onToggle={toggle} isActive={isActive} /> 
    <Main/>
    <Footer/>
    
    </div>
  );
}

export default App;
