import React, { Suspense } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Intro from './components/intro';

// Lazy-loaded pages
const Domestic = React.lazy(() => import('./pages/domestic'));
const International = React.lazy(() => import('./pages/international'));
const Contact = React.lazy(() => import('./pages/contact'));
const About = React.lazy(() => import('./pages/about'));
const TourDetails = React.lazy(() => import('./pages/dynamic'));
const Honeymoon = React.lazy(() => import('./pages/Honeymoon'));
const Adventure = React.lazy(() => import('./pages/Adventure'));
const EcoTourism = React.lazy(() => import('./pages/EcoTourism'));
const EscortedTour = React.lazy(() => import('./pages/EscortedTour'));
const GroupTour = React.lazy(() => import('./pages/GroupTour'));
const LeisureTour = React.lazy(() => import('./pages/LeisureTour'));
const Pilgrimage = React.lazy(() => import('./pages/Pilgrimage'));
const Trekking = React.lazy(() => import('./pages/Trekking'));

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-white text-center text-xl p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/honeymoon" element={<Honeymoon />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/eco-tourism" element={<EcoTourism />} />
          <Route path="/escorted" element={<EscortedTour />} />
          <Route path="/group-tour" element={<GroupTour />} />
          <Route path="/leisure" element={<LeisureTour />} />
          <Route path="/pilgrimage" element={<Pilgrimage />} />
          <Route path="/trekking" element={<Trekking />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
