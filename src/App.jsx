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
    if (document.readyState === 'complete') {
      // If already loaded
      setLoading(false);
    } else {
      // Otherwise wait for load
      const handleLoad = () => {
        setLoading(false);
      };
      window.addEventListener('load', handleLoad);

      // Cleanup in case component unmounts early
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  return (
    <>

    {loading?<Loading/>:<Intro/> }
      {/* <Loading />
      <Intro /> */}
    </>
  )
}

export default App