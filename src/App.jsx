import { React, useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from './components/intro'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function App() {


  return (
    <>
    <Intro/>
    </>
  )
}

export default App