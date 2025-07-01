import React, { use, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navbar from './navbar';
import Footer from './footer';
import CallToAction from './callToAction';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);


const cards = [
    { name: "Dubai", img: "Dubai.jpg", shadow: "shadow-cyan-800" },
    { name: "Indonesia", img: "Indonesia.jpg", shadow: "shadow-lime-800" },
    { name: "Mauritius", img: "Mauritius.jpg", shadow: "shadow-gray-600" },
    { name: "Singapore", img: "Singapore.jpg", shadow: "shadow-lime-800" },
    { name: "Sri-Lanka", img: "Sri-Lanka.jpg", shadow: "shadow-lime-800" },
    { name: "Thailand", img: "thailand.jpg", shadow: "shadow-cyan-800" },
    { name: "Vietnam", img: "Vietnam.jpg", shadow: "shadow-cyan-800" }
];

function Introduction() {

    const cardsRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".mountain-8", { y: 150 }, { y: 0, duration: 1.5 })
        gsap.fromTo(".mountain-1", { y: 200 }, { y: 0, duration: 1.5, delay: 0.5 })
        gsap.fromTo(".mountain-9", { y: 200 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-7", { y: 200 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-10", { y: 200 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-6", { y: 200 }, { y: 0, duration: 1.5, delay: 0.3 })
        gsap.fromTo(".mountain-5", { y: 200 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-4", { y: 200 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-2", { y: 200 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".mountain-3", { y: 200 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-1", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
        gsap.fromTo(".fog-4", { y: 100 }, { y: 0, duration: 2, delay: 0.5 })
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

        //international tour
        const cardsEl = cardsRef.current;
        const cardWidth = cardsEl.scrollWidth / 2;

        const loop = gsap.to(cardsEl, {
            x: `-=${cardWidth}px`,
            duration: 20,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % cardWidth) // loop after reaching half
            }
        });

        return () => loop.kill();

    })



    return (
        <>
            <Navbar />
            <div className="hero-container relative h-screen w-screen overflow-hidden rounded-b-2xl bg-black text-white">

                {/* Background Image */}
                <div className="bg-img-container  h-full w-full absolute inset-0 z-0">
                    <img src="background1.png" alt="Background" className="bg-img h-full w-full object-cover" />
                </div>

                {/* Hero Elements Layer */}
                <div className="absolute h-full w-full inset-0 z-10">
                    {/* Fog and Mountains in order */}
                    <img src="fog_7.png" alt="" className="fog-7 absolute top-[80%] left-1/2 -translate-x-1/2 w-[10vw] z-[2]" />
                    <img src="mountain_10.png" alt="" className="mountain-10 absolute bottom-[0] left-[56%] w-[50vw] z-[3]" />
                    <img src="fog_6.png" alt="" className="fog-6 absolute bottom-[10%] left-[45%] w-[55vw] z-[4]" />
                    <img src="fog_6.png" alt="" className="fog-6 absolute bottom-[5%] left-[0%] w-[55vw] z-[4]" />
                    <img src="mountain_9.png" alt="" className="mountain-9 absolute bottom-[0%] left-[12%] w-[18vw] z-[5]" />
                    <img src="mountain_8.png" alt="" className="mountain-8 absolute bottom-[0%] left-[25%] w-[45vw] z-[6]" />
                    <img src="fog_5.png" alt="" className="fog-5 absolute -bottom-[20%] left-[40%] w-[20vw] z-[7]" />
                    <img src="mountain_7.png" alt="" className="mountain-7 absolute bottom-[0%] left-[55%] w-[25vw] z-[8]" />

                    {/* Centered Text */}
                    <div className="text absolute w-full top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] text-center">
                        <h2 className=" text-4xl font-semibold uppercase">Journey</h2>
                        <h1 className=" text-7xl font-extrabold uppercase mt-2">Begins with GhoomoYatri</h1>
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

            {/* Popular places cards */}
            <div className="popular-places text-white relative mt-5 w-full">
                {/* Section Title */}
                <div className="title-container text-center w-full flex flex-col justify-center items-center px-4 sm:px-10">
                    <h1 className="text-xl sm:text-3xl font-bold text-emerald-500">POPULAR PLACES</h1>
                    <h6 className="text-xs sm:text-sm text-black font-light mt-1 sm:mt-2">
                        Discover handpicked destinations loved by travelers around the world.
                    </h6>
                </div>

                {/* Scrollable Cards */}
                <div className="cards-container overflow-x-auto h-full w-full mt-4 sm:mt-6 scroll-smooth scroll-px-4 snap-x snap-mandatory">
                    <div className="cards flex gap-4 sm:gap-6 w-max px-4 sm:px-10">
                        {[
                            { name: "Shimla", tag: "Queen of Hills", img: "shimla.jpeg", shadow: "shadow-cyan-800" },
                            { name: "Coorg", tag: "Scotland of India", img: "Coorg.jpeg", shadow: "shadow-lime-800" },
                            { name: "Ladakh", tag: "The Moonland", img: "Ladakh.jpeg", shadow: "shadow-gray-600" },
                            { name: "Darjeeling", tag: "The land of the thunderbolt", img: "Darjeeling.jpeg", shadow: "shadow-lime-800" },
                            { name: "Ooty", tag: "Queen of Hill stations", img: "Ooty.jpeg", shadow: "shadow-lime-800" },
                            { name: "Manali", tag: "Valley of Gods", img: "Manali.jpeg", shadow: "shadow-cyan-800" }
                        ].map((place, idx) => (
                            <div
                                
                                key={idx}
                                className={`group card relative min-w-[180px] sm:min-w-[250px] h-[260px] sm:h-[300px] snap-start cursor-pointer overflow-hidden rounded-lg shadow-2xl hover:${place.shadow} hover:scale-105 transform transition duration-300 ease-in-out`}
                            >
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={place.img}
                                    alt={place.name}
                                    
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4 text-white">
                                    <h3 className="text-base sm:text-lg font-bold">{place.name}</h3>
                                    <p className="text-xs sm:text-sm">{place.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* tour category section */}
            <div className="TourCategory min-h-screen w-screen flex justify-center items-center relative overflow-hidden">
                {/* Background Image */}
                <div className="tourCategory-bg h-full w-full absolute">
                    <img className="h-full w-full object-cover" src="River.jpeg" alt="" />
                </div>

                {/* Dark Overlay */}
                <div className="overlay h-full w-full opacity-10 bg-black absolute top-0 left-0"></div>
                <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-t from-transparent to-black z-21" />

                {/* Main Container */}
                <div className="tourCategory-container  flex flex-col justify-evenly items-center h-150 w-full gap-5 relative z-10">
                    <div className="boxes h-full w-[90%]  p-5 mt-5 flex flex-col justify-around items-center">
                        <h1 className="text-5xl font-extrabold mb-2.5 text-white text-center">Tour Category</h1>

                        {/* CARD GRID */}
                        <div className="inner-box  h-full w-full  flex flex-wrap justify-center items-center gap-4 py-5 ">
                            {[
                                { name: "Honeymoon", img: "Honeymoon-Packages.jpg" },
                                { name: "Adventure", img: "Adventure-tour.jpg" },
                                { name: "Eco Tourism", img: "Eco-Tourism.jpg" },
                                { name: "Escorted", img: "Escorted.jpg" },
                                { name: "Group Tour", img: "Group-Tour-Packages.jpg" },
                                { name: "Leisure", img: "Leisure.jpg" },
                                { name: "Pilgrimage", img: "Pilgrimage-Kedarnath.jpg" },
                                { name: "Trekking", img: "Trekking-and-backpacking.jpg" }
                            ].map((card, idx) => (
                                <div
                                    key={idx}
                                    className="group/card relative h-52 w-72 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
                                >
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                        src={card.img}
                                        alt={card.name}
                                    />
                                    <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 px-6 py-2 text-white font-semibold text-lg rounded">
                                        {card.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-black z-20" />
            </div>

            {/* domestic tours */}
            <div className="domestic-tour-wrapper bg-amber-50 h-190 w-screen overflow-hidden flex flex-col justify-center items-center  relative">
                <div className='w-screen flex justify-center items-center m-5'>
                    <h1 className='text-[#1A2B48] text-5xl font-semibold'>DOMESTIC</h1>
                </div>
                <div className="domestic-card-container flex flex-wrap justify-evenly items-center w-[90%] h-full  mb-10 relative overflow-y-auto p-2 gap-2">
                    <div className="card group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] '></div>
                        <img src="Goa.jpg" alt="" className=' h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Goa</h1>
                            <h7>19 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Himachal-Pradesh.jpg" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Himachal Pradesh</h1>
                            <h7>13 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="northeast-history.jpg" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Northeast</h1>
                            <h7>5 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Uttarakhand.webp" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Uttrakhand</h1>
                            <h7>13 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Pangong-Lake.jpg" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl '>Ladkh</h1>
                            <h7>7 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Kashmir.jpg" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Kashmir</h1>
                            <h7>9 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="kerala.webp" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Kerala</h1>
                            <h7>7 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Andaman.jpg" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl  '>Andaman</h1>
                            <h7>5 Tours</h7>
                        </div>
                    </div>
                    <div className="card  group hover:scale-105 transform transition duration-300 ease-in-out h-50 w-90 bg-blue-500 rounded-2xl  overflow-hidden relative">
                        <div className='absolute w-full h-full bg-black opacity-20 left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'></div>
                        <img src="Rajasthan.jpg" alt="" className='h-full w-full object-cover transform transition duration-1000 group-hover:scale-110' />
                        <div className='absolute w-full flex flex-col justify-center items-center left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
                            <h1 className='text-4xl'>Rajasthan</h1>
                            <h7>19 Tours</h7>
                        </div>
                    </div>
                </div>


            </div>

            {/* International tour */}
            <div className="international-tour-wrapper h-100 w-screen flex flex-col justify-center items-center">
                <div className='w-screen flex justify-center items-center m-5 '>
                    <h1 className='text-[#1A2B48] text-5xl font-semibold'>INTERNATIONAL</h1>
                </div>
                <div className="cards-container overflow-hidden h-full w-full mt-5 relative">
                    <div
                        ref={cardsRef}
                        className="cards flex gap-6 h-full w-max py-2 px-10 flex-nowrap"
                    >
                        {[...cards, ...cards].map((place, idx) => (
                            <div
                                key={idx}
                                className={`group card relative h-60 w-60 rounded-full cursor-pointer overflow-hidden shadow-2xl shadow-black hover:${place.shadow} hover:scale-105 transform transition duration-400 ease-in-out`}
                            >
                                <img
                                    className="h-full w-full object-cover transform transition duration-500 group-hover:scale-110"
                                    src={place.img}
                                    alt={place.name}
                                />
                                <div className="absolute top-[50%] left-[50%] w-full transform -translate-x-[50%] -translate-y-[50%] p-4 text-white text-center">
                                    <h3 className="text-2xl font-bold">{place.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CallToAction />
            <Footer />


        </>
    )
}

export default Introduction