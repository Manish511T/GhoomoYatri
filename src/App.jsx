import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from './components/intro'
import Loading from './components/loading';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (or wait for real resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate 2s load

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {loading?<Loading />:<Intro /> }
      {/* <Loading />
      <Intro /> */}
    </>
  )
}

export default App