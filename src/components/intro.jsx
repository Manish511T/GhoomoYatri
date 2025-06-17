import React, { use, useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navbar from './navbar';
import { Timeline } from 'gsap/gsap-core';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
function Introduction() {




    useGSAP(() => {
        gsap.fromTo(".mountain-8", { y: 150 }, { y: 0, duration: 1.5 })
        gsap.fromTo(".mountain-1", { y: 100 }, { y: 0, duration: 1.5, delay: 0.5 })
        gsap.fromTo(".mountain-9", { y: 20 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-7", { y: 20 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-10", { y: 20 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-6", { y: 20 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-5", { y: 20 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-4", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-2", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-3", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-1", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-4", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-6", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
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
            { y: 0, opacity: 1, duration: 0.2, ease: "elastic.in", stagger: 0.1 })

    })

    return (
        <>
            <div className="hero-container relative h-screen w-screen overflow-hidden bg-black text-white">
                
                {/* Background Image */}
                <div className="bg-img-container h-200 w-full absolute inset-0 z-0">
                    <img src="background.png" alt="Background" className="bg-img h-full w-full" />
                </div>

                {/* Hero Elements Layer */}
                <div className="absolute inset-0 z-10">
                    {/* Fog and Mountains in order */}
                    <img src="fog_7.png" alt="" className="fog-7 absolute top-[80%] left-1/2 -translate-x-1/2 w-[10vw] z-[2]" />
                    <img src="mountain_10.png" alt="" className="mountain-10 absolute top-[30%] left-[56%] w-[40vw] z-[3]" />
                    <img src="fog_6.png" alt="" className="fog-6 absolute top-[50%] left-[45%] w-[55vw] z-[4]" />
                     <img src="fog_6.png" alt="" className="fog-6 absolute top-[70%] left-[0%] w-[55vw] z-[4]" />
                    <img src="mountain_9.png" alt="" className="mountain-9 absolute bottom-[0%] left-[12%] w-[18vw] z-[5]" />
                    <img src="mountain_8.png" alt="" className="mountain-8 absolute bottom-[0%] left-[25%] w-[45vw] z-[6]" />
                    <img src="fog_5.png" alt="" className="fog-5 absolute -bottom-[20%] left-[40%] w-[20vw] z-[7]" />
                    <img src="mountain_7.png" alt="" className="montain-7 absolute bottom-[0%] left-[55%] w-[25vw] z-[8]" />

                    {/* Centered Text */}
                    <div className="text absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] text-center">
                        <h2 className=" text-4xl font-light uppercase">Journey</h2>
                        <h1 className=" text-7xl font-bold uppercase mt-2">Begins with GhoomoYatri</h1>
                    </div>

                    <img src="mountain_6.png" alt="" className="mountain-6 absolute bottom-[0%] left-[70%] w-[15vw] z-[10]" />
                    <img src="fog_4.png" alt="" className="fog-4 absolute -bottom-[35%] left-[50%] w-[40vw] z-[11]" />
                    <img src="mountain_5.png" alt="" className="mountain-5 absolute -bottom-[10%] left-[45%] w-[25vw] z-[12]" />
                    <img src="mountain_4.png" alt="" className="mountain-4 absolute -bottom-[5%] left-[6%] w-[40vw] z-[13]" />
                    <img src="fog_3.png" alt="" className="fog-3 absolute -bottom-[25%] left-[40%] w-[50vw] z-[14]" />
                    <img src="mountain_3.png" alt="" className="mountain-3 absolute bottom-[0%] left-[80%] w-[20vw] z-[15]" />
                    <img src="fog_2.png" alt="" className="fog-2 absolute top-[80%] left-[10%] w-[40vw] z-[16]" />
                    <img src="mountain_2.png" alt="" className="mountain-2 absolute bottom-[0%] left-[60%] w-[25vw] z-[17]" />
                    <img src="mountain_1.png" alt="" className="mountain-1 absolute -bottom-[5%] -left-[6%] w-[30vw] z-[18]" />
                    <img src="sun_rays.png" alt="" className="absolute top-0 right-0 w-[35vw] z-[19]" />
                    <img src="black_shadow.png" alt="" className=" absolute bottom-0 left-0 w-full z-[20]" />
                    <img src="fog_1.png" alt="" className="fog-1 absolute -bottom-[55%] left-0 w-full z-[21]" />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black z-[22]" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-emerald-900 blur-3xl z-[23]" />

            </div>
            <Navbar/>

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
            <div className="TourCategory h-200 w-screen flex justify-center items-center relative mt-10  overflow-hidden">
                <div className="tourCategory-bg h-full w-full absolute">
                    <img className='h-full w-full' src="River.jpeg" alt="" />
                </div>
                <div className='overlay h-full w-full opacity-10 bg-black'></div>
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent  z-21 to-black" />
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-teal-950 blur-3xl z-21" />
                <div className="tourCategory-container flex flex-col justify-evenly items-center h-150 w-full gap-5">
                    <div className="boxes  h-full w-[90%] p-5 mt-5 flex flex-col justify-around items-center">
                        <h1 className='text-5xl font-extrabold mb-2.5'>Tour Category</h1>
                        <div className="inner-box h-full w-full flex flex-wrap py-5  gap-2.5 mb-2 bg-transparent justify-center items-center group">
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Honeymoon-Packages.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Honeymoon</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Adventure-tour.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Adventure</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Eco-Tourism.jpg" alt="" />
                                <div className="h-[20%] w-[60%] px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1 >Eco Tourism</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Escorted.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Escorted</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Group-Tour-Packages.jpg" alt="" />
                                <div className="h-[20%] w-[60%] px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Group Tour</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Leisure.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Leisure</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Pilgrimage-Kedarnath.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Pilgrimage</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100 hover:shadow-[0_0_30px_#00ffe7,0_0_60px_#00ffe7] cursor-pointer">
                                <img className='h-full w-full' src="Trekking-and-backpacking.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Trekking</h1></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction