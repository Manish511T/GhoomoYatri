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
        // gsap.fromTo(".fog-6", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo('.navbar-container', { y: -50 }, { y: 0, duration: 1, delay: 0.5 })
        gsap.fromTo('.text h2', { y: -200, opacity: 0.08 }, { y: 0, opacity: 1, duration: 1.3, delay: 1, ease: "sine.in" })
        gsap.fromTo('.text h1', { y: 250, opacity: 0.08 }, { y: 0, opacity: 1, duration: 1.3, delay: 1, ease: "sine.in" })



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
            <div className="hero-container relative h-screen w-screen overflow-hidden rounded-b-2xl bg-black text-white">

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
                    <div className="text absolute w-full top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] text-center">
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
            <Navbar />

            {/* Popular places cards */}
            <div className='popular-places text-white  relative mt-5'>
                {/* Section Title */}
                <div className="title-container  w-full flex flex-col justify-center items-center">
                    <h1 className='text-3xl font-bold text-emerald-500'>POPULAR PLACES</h1>
                    <h6 className='text-sm  text-black font-light'>Discover handpicked destinations loved by travelers around the world.</h6>
                </div>

                {/* Scrollable Cards */}
                <div className="cards-container overflow-x-auto  h-full w-full mt-5">
                    <div className="cards flex gap-6 w-max px-10 flex-nowrap">
                        {[
                            { name: "Shimla", tag: "Queen of Hills", img: "shimla.jpeg", shadow: "shadow-cyan-800" },
                            { name: "Coorg", tag: "Scotland of India", img: "Coorg.jpeg", shadow: "shadow-lime-800" },
                            { name: "Ladakh", tag: "The Moonland", img: "Ladakh.jpeg", shadow: "shadow-gray-600" },
                            { name: "Darjeeling", tag: "The land of the thunderbolt", img: "Darjeeling.jpeg", shadow: "shadow-lime-800" },
                            { name: "Ooty", tag: "Queen of Hill stations", img: "Ooty.jpeg", shadow: "shadow-lime-800" },
                            { name: "Manali", tag: "Valley of Gods", img: "Manali.jpeg", shadow: "shadow-cyan-800" }
                        ].map((place, idx) => (
                            <div key={idx} className={`group card relative min-w-[250px] h-[300px] cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:${place.shadow} hover:scale-105 transform transition duration-300 ease-in-out`}>
                                <img className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' src={place.img} alt={place.name} />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                    <h3 className="text-xl font-bold">{place.name}</h3>
                                    <p className="text-sm">{place.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* tour category section */}
            <div className="TourCategory h-200 w-screen flex justify-center items-center relative   overflow-hidden">

                <div className="tourCategory-bg h-full w-full absolute">
                    <img className='h-full w-full' src="River.jpeg" alt="" />
                </div>
                <div className='overlay h-full w-full opacity-10 bg-black'></div>
                <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-t from-transparent  z-21 to-black" />
                {/* <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-teal-950 blur-3xl z-21" /> */}
                <div className="tourCategory-container flex flex-col justify-evenly items-center h-150 w-full gap-5">
                    <div className="boxes  h-full w-[90%] p-5 mt-5 flex flex-col justify-around items-center">
                        <h1 className='text-5xl font-extrabold mb-2.5'>Tour Category</h1>
                        <div className="inner-box h-full w-full flex flex-wrap py-5  gap-2.5 mb-2 bg-transparent justify-center items-center group">
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Honeymoon-Packages.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Honeymoon</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Adventure-tour.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Adventure</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Eco-Tourism.jpg" alt="" />
                                <div className="h-[20%] w-[60%] px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1 >Eco Tourism</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Escorted.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Escorted</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Group-Tour-Packages.jpg" alt="" />
                                <div className="h-[20%] w-[60%] px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Group Tour</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Leisure.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Leisure</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Pilgrimage-Kedarnath.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Pilgrimage</h1></div>
                            </div>
                            <div className="box relative h-60 w-72 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:opacity-40 hover:!opacity-100  cursor-pointer">
                                <img className='h-full w-full' src="Trekking-and-backpacking.jpg" alt="" />
                                <div className="h-[20%] w-fit px-8 font-semibold text-lg bg-black opacity-70  flex justify-center items-center border tour-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1>Trekking</h1></div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="absolute -0 bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent  z-21 to-black  " /> */}
                <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent  z-20 to-black " />
            </div>

            {/* domestic tours */}
            <div className="domestic-tour-wrapper bg-amber-50 h-190 w-screen overflow-hidden flex flex-col justify-center items-center  relative">
                <div className='w-screen flex justify-center items-center m-5'>
                    <h1 className='text-[#1A2B48] text-5xl font-semibold'>DOMESTIC</h1>
                </div>
                <div className="domestic-card-container flex flex-wrap justify-evenly items-center w-[90%] h-full  mb-10 relative overflow-y-auto p-2 gap-2">
                    <div className="card group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] '></div>
                        <img src="Goa.jpg" alt="" className=' h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Goa</h1>
                            <h7>19 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Himachal-Pradesh.jpg" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Himachal Pradesh</h1>
                            <h7>13 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="northeast-history.jpg" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Northeast</h1>
                            <h7>5 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Uttarakhand.webp" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Uttrakhand</h1>
                            <h7>13 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Pangong-Lake.jpg" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl '>Ladkh</h1>
                            <h7>7 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Kashmir.jpg" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Kashmir</h1>
                            <h7>9 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="kerala.webp" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Kerala</h1>
                            <h7>7 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Andaman.jpg" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Andaman</h1>
                            <h7>5 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Rajasthan.jpg" alt="" className='h-full w-full object-cover transform transition duration-500 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl'>Rajasthan</h1>
                            <h7>19 Tours</h7>
                        </div>
                    </div>
                </div>
                

            </div>



        </>
    )
}

export default Introduction