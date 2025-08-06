import React,{useState} from 'react';
import "./styles/App.css";
import "./styles/output.css";
import Header from './components/Header.jsx';
import Segment1 from './components/Segment1.jsx';
import Feature from "./components/Feature";
import Extensions from "./components/Extensions.jsx";
import FAQs from "./components/FAQs.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [nav,setCloseNav] = useState(false);
const navClass = nav ? 'h-0 w-0 opacity-0' : 'h-full w-full opacity-75 px-5 py-5  z-50';
  return (
    <div className="App">
    <Nav closeNav={() =>{
        setCloseNav(!nav);
      }}
      navClass ={navClass}
      />
    <Header openNav={() =>{
      setCloseNav(!nav);
    }}
    />
    <Segment1/>
    <Feature/>
    <Extensions/>
    <FAQs/>
    <Footer/>
    </div>
  );
}

export default App;
