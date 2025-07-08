import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from './components/intro'
import Domestic from './pages/domestic';
import International from './pages/international';
import Contact from './pages/contact';
import About from './pages/about';
import TourDetails from './pages/dynamic';
import Honeymoon from './pages/Honeymoon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adventure from './pages/Adventure';
import EcoTourism from './pages/EcoTourism';
import EscortedTour from './pages/EscortedTour';
import GroupTour from './pages/GroupTour';
import LeisureTour from './pages/LeisureTour';
import Pilgrimage from './pages/Pilgrimage';
import Trekking from './pages/Trekking';
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
          <Route path="/tour/:id" element={<TourDetails/>}  />
          <Route path='/honeymoon' element={<Honeymoon/>} />
          <Route path='/adventure' element={<Adventure/>}/>
          <Route path="/eco-tourism" element={<EcoTourism />} />
          <Route path="/escorted" element={<EscortedTour />} />
          <Route path="/group-tour" element={<GroupTour />} />
          <Route path="/leisure" element={<LeisureTour />} />
          <Route path="/pilgrimage" element={<Pilgrimage/>} />
          <Route path="/trekking" element={<Trekking/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App