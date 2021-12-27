import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import  Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/index';
import Dropdown from './components/Dropdown';
import About from './pages/about';
import Wallet from './pages/wallet';
import Collection from './pages/collection';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (

    <>
    
    <BrowserRouter>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} /> 
      <Routes>
        <Route
           exact path="/"
          element={<Home/>}
         />
         <Route
           path="/about"
          element={<About/>}
         />
         <Route
           path="/wallet"
          element={<Wallet/>}
         />
         <Route
           path="/collection"
          element={<Collection/>}
         />
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  );
  
}
export default App;