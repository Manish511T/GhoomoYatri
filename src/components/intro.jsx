import React, { use, useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import Navbar from './Navbar';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
function Introduction() {
    useGSAP(() => {
        gsap.fromTo(".mountain-8", { y: 100 }, { y: -100, duration: 1.5 })
        gsap.fromTo(".mountain-1", { y: 100 }, { y: -50, duration: 1.5, delay: 0.5 })
        gsap.fromTo(".mountain-9", { y: 20 }, { y: -200, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-7", { y: 20 }, { y: -200, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-10", { y: 20 }, { y: -250, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-6", { y: 20 }, { y: -200, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-5", { y: 20 }, { y: -150, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-4", { y: 100 }, { y: -100, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-2", { y: 100 }, { y: -100, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-3", { y: 100 }, { y: -100, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-1", { y: 100 }, { y: -100, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-4", { y: 100 }, { y: -100, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-6", { y: 100 }, { y: -100, duration: 2, delay: 0.5 })
        gsap.fromTo('.navbar-container', { y: -50 }, { y: 0, duration: 1, delay: 0.5 })
        gsap.fromTo('.text h2', { y: -200, opacity: 0.08 }, { y: 0, opacity: 1, duration: 2, delay: 1, ease: "sine.inOut" })
        gsap.fromTo('.text h1', { y: 250, opacity: 0.08 }, { y: 0, opacity: 1, duration: 2, delay: 1, ease: "sine.inOut" })


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".title-container",
                scroller: "body",
                start: "top center",
                end: "bottom center",
                markers: false,
                toggleActions: "play none none none",
            },
        });

        tl.fromTo(".card", { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2, ease:"elastic.in", stagger: 0.1 })

    })

    return (
        <>
            <div className="hero-container h-screen w-screen overflow-hidden">
                <div className="bg-img-container relative  overflow-hidden z-1">
                    <img src="background.png" alt="" className="bg-img h-500 w-screen" />
                </div>
                <div className="hero-elements relative h-full w-full">
                    <img src="fog_7.png" alt="" className="fog-7 z-2" />
                    <img src="mountain_10.png" alt="" className="mountain-10 z-3" />
                    <img src="fog_6.png" alt="" className="fog-6 z-4" />
                    <img src="mountain_9.png" alt="" className="mountain-9 z-5" />
                    <img src="mountain_8.png" alt="" className="mountain-8 z-6 fixed" />
                    <img src="fog_5.png" alt="" className="fog-5 z-7" />
                    <img src="mountain_7.png" alt="" className="mountain-7 z-8" />
                    <h1 className='text  text-white z-9 flex flex-col justify-center items-center'>
                        <h2>Journey</h2>
                        <h1>Begins with GhoomoYatri</h1>
                    </h1>
                    <img src="mountain_6.png" alt="" className="mountain-6 z-9" />
                    <img src="fog_4.png" alt="" className="fog-4 z-10" />
                    <img src="mountain_5.png" alt="" className="mountain-5 z-11" />
                    <img src="mountain_4.png" alt="" className="mountain-4 z-12" />
                    <img src="fog_3.png" alt="" className="fog-3 z-13" />
                    <img src="mountain_3.png" alt="" className="mountain-3 z-14" />
                    <img src="fog_2.png" alt="" className="fog-2 z-15" />
                    <img src="mountain_2.png" alt="" className="mountain-2 z-16" />
                    <img src="mountain_1.png" alt="" className="mountain-1 z-17" />
                    <img src="sun_rays.png" alt="" className="sun-rays z-18" />
                    <img src="black_shadow.png" alt="" className="shadow z-19" />
                    <img src="fog_1.png" alt="" className="fog-1 z-20" />
                </div>
            </div>
            <div className='navbar-container text-black h-14 w-screen bg-transparent absolute  top-0 left-0 flex justify-between items-center  mt-2 z-50'>
                <div className='navbar-item h-full w-full flex justify-evenly items-center  p-2'>
                    <div className="logo h-full w-14  flex justify-center items-center">
                        <img className='cursor-pointer' src="Logo.png" />
                    </div>
                    <div className="menu-box flex justify-between items-center w-3/6   text-sm font-semibold">
                        <div className='cursor-pointer  '>HOME</div>
                        <div className='cursor-pointer'>DOMESTIC</div>
                        <div className='cursor-pointer'>INTERNATIONAL</div>
                        <div className='cursor-pointer'>CONTACT</div>
                        <div className='group cursor-pointer'>ABOUT<i className="ri-arrow-right-up-line inline-block transition-transform duration-300 group-hover:rotate-90"></i></div>
                    </div>
                    <div>
                        <div className='h-2 p-4  flex items-center  text-sm  border   border-black rounded-4xl '>
                            <div >
                                <input type="text" placeholder='Search' className='border-none focus:outline-none ' /><i className="ri-search-line text-sm cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent  z-21 to-black" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-emerald-900 blur-3xl z-21" />
            {/* Popular places cards */}
            <div className='popular-places bg-[#000]  text-white  p-10 relative'>
                <div className="title-container h-3/12 gap-2  border-t w-full flex flex-col justify-center items-center">
                    <h1 className='text-3xl font-semibold text-emerald-500 ' >POPULAR PLACES</h1>
                    <h6 className='text-sm font-light '>Discover handpicked destinations loved by travelers around the world.</h6>
                </div>
                <div className="cards h-3/4  p-5 w-full px-10 flex justify-evenly items-center gap-5 ">
                    <div className="group card h-full w-[18%] cursor-pointer  overflow-hidden rounded-lg shadow-2xl hover:shadow-cyan-800  hover:scale-105 transform transition duration-300 ease-in-out ">
                        <img className='h-full w-full object-cover transform transition duration-800 group-hover:scale-110 ' src="shimla.jpeg" alt="" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold">Shimla</h3>
                            <p className="text-sm">Queen of Hills</p>
                        </div>
                    </div>
                    <div className="group card h-full w-[18%] cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:shadow-lime-800  hover:scale-105 transform transition duration-300 ease-in-out ">
                        <img className='h-full w-full object-cover transform transition duration-800 group-hover:scale-110 ' src="Coorg.jpeg" alt="" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold">Coorg</h3>
                            <p className="text-sm">Scotland of India</p>
                        </div>
                    </div>
                    <div className="group card h-full w-[18%] cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:shadow-gray-600  hover:scale-105 transform transition duration-300 ease-in-out ">
                        <img className='h-full w-full object-cover transform transition duration-800 group-hover:scale-110 ' src="Ladakh.jpeg" alt="" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold">Ladakh</h3>
                            <p className="text-sm">The Moonland</p>
                        </div>
                    </div>
                    <div className="group card h-full w-[18%] cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:shadow-lime-800  hover:scale-105 transform transition duration-300 ease-in-out ">
                        <img className='h-full w-full object-cover transform transition duration-800 group-hover:scale-110 ' src="Darjeeling.jpeg" alt="" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold">Darjeeling</h3>
                            <p className="text-sm">The land of the thunderbolt</p>
                        </div>
                    </div>
                    <div className="group card h-full w-[18%] cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:shadow-lime-800  hover:scale-105 transform transition duration-300 ease-in-out ">
                        <img className='h-full w-full object-cover transform transition duration-800 group-hover:scale-110 ' src="Ooty.jpeg" alt="" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold">Ooty</h3>
                            <p className="text-sm">Queen of Hill stations</p>
                        </div>
                    </div>
                    <div className="group card h-full w-[18%] cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:shadow-cyan-800  hover:scale-105 transform transition duration-300 ease-in-out ">
                        <img className='h-full w-full object-cover transform transition duration-800 group-hover:scale-110 ' src="Manali.jpeg" alt="" />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                            <h3 className="text-xl font-bold">Manali</h3>
                            <p className="text-sm">Valley of Gods</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="TourCategory h-150 w-screen flex justify-center items-center relative mt-10 overflow-hidden">
                {/* <div className='overlay h-full w-full opacity-10 bg-black'></div>
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent  z-21 to-black" />
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-teal-950 blur-3xl z-21" /> */}
                <div className="tourCategory-container flex flex-col justify-between items-center h-full w-full">
                    <div className='h-[20%] w-full flex justify-center items-center'>
                        <h1 className='text-5xl font-extrabold'>Tour Category</h1>
                    </div>
                    <div className="boxes  h-[80%] w-full">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction