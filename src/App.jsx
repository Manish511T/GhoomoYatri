import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from './components/intro'
import Domestic from './pages/domestic';
import International from './pages/international';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App