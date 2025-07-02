import React from 'react';
import Top from './components/Top.jsx';
import Nav from './components/navbar.jsx';
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx';
import "./styles/App.css";

function App() {
  return (
    
    <div className="App">
    <Nav/>
    <Top/>  
    <Main/>
    <Footer/>
    
    </div>
  );
}

export default App;
