import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

import About from "./pages/about";
import Wallet from "./pages/wallet";
import Collection from "./pages/collections";
import Partners from "./pages/partners";
import Dashboard from "./pages/dashboard";
import History from "./pages/views/history";
import Home from "./pages";
import Offer from "./pages/views/offer";
import NotFound from "./pages/NotFound";
function App() {
  const [isOpen, setIsOpen] = useState(false);

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
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/gallery" element={<Collection />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
