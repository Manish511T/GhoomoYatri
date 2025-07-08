import React, { use, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navbar from './navbar';
import Footer from './footer';
import CallToAction from './callToAction';
import BrandLabel from './brandLabel';
import { Analytics } from "@vercel/analytics/react"

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

const domesticTours = [
    { id:'goa', name: 'Goa', tours: 19, image: 'Goa.jpg' },
    { id:'hp', name: 'Himachal Pradesh', tours: 13, image: 'Himachal-Pradesh.jpg' },
    { id:'northeast', name: 'Northeast', tours: 5, image: 'northeast-history.jpg' },
    { id:'uttrakhand', name: 'Uttarakhand', tours: 13, image: 'Uttarakhand.webp' },
    { id:'Ladakh', name: 'Ladakh', tours: 7, image: 'Pangong-Lake.jpg' },
    { id:'kashmir', name: 'Kashmir', tours: 9, image: 'Kashmir.jpg' },
    { id:'kerala', name: 'Kerala', tours: 7, image: 'kerala.webp' },
    { id:'andaman', name: 'Andaman', tours: 5, image: 'Andaman.jpg' },
    { id:'rajasthan', name: 'Rajasthan', tours: 19, image: 'Rajasthan.jpg' },
];

const tourCategories = [
    { name: "Honeymoon", img: "Honeymoon-Packages.jpg", path: "honeymoon" },
    { name: "Adventure", img: "Adventure-tour.jpg", path: "adventure" },
    { name: "Eco Tourism", img: "Eco-Tourism.jpg", path: "eco-tourism" },
    { name: "Escorted", img: "Escorted.jpg", path: "escorted" },
    { name: "Group Tour", img: "Group-Tour-Packages.jpg", path: "group-tour" },
    { name: "Leisure", img: "Leisure.jpg", path: "leisure" },
    { name: "Pilgrimage", img: "Pilgrimage-Kedarnath.jpg", path: "pilgrimage" },
    { name: "Trekking", img: "Trekking-and-backpacking.jpg", path: "trekking" }
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
                            { id: "shimla", name: "Shimla", tag: "Queen of Hills", img: "shimla.jpeg", shadow: "shadow-cyan-800" },
                            { id: "coorg", name: "Coorg", tag: "Scotland of India", img: "Coorg.jpeg", shadow: "shadow-lime-800" },
                            { id: "ladakh", name: "Ladakh", tag: "The Moonland", img: "Ladakh.jpeg", shadow: "shadow-gray-600" },
                            { id: "darjeeling", name: "Darjeeling", tag: "The land of the thunderbolt", img: "Darjeeling.jpeg", shadow: "shadow-lime-800" },
                            { id: "ooty", name: "Ooty", tag: "Queen of Hill stations", img: "Ooty.jpeg", shadow: "shadow-lime-800" },
                            { id: "manali", name: "Manali", tag: "Valley of Gods", img: "Manali.jpeg", shadow: "shadow-cyan-800" }
                        ].map((place, idx) => (
                            <Link to={`/tour/${place.id}`} key={idx}>
                                <div
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
                            </Link>
                        ))}
                    </div>
                </div>
            </div>



            {/* tour category section */}
            <div className="TourCategory relative min-h-screen w-screen flex justify-center items-center overflow-hidden bg-black">

                {/* Background Image */}
                <img
                    src="River.jpeg"
                    alt="Tour Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black opacity-40 z-0" />
                <div className="absolute top-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10" />
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10" />

                {/* Main Container */}
                <div className="relative z-20 flex flex-col items-center gap-10 w-full px-4 py-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
                        Tour Category
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                        {tourCategories.map((card, idx) => (
                            <Link to={`/${card.path}`} key={idx} aria-label={`Go to ${card.name}`}>
                                <div className="relative h-52 w-full rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={card.img}
                                        alt={card.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0  transition-all duration-300" />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <span className="text-white text-lg font-semibold bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm">
                                            {card.name}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* domestic tours */}
            <div className="domestic-tour-wrapper bg-amber-50 w-screen flex flex-col items-center py-10">
                <h1 className="text-[#1A2B48] text-5xl font-semibold mb-8">DOMESTIC</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-6xl">
                    {domesticTours.map((place, index) => (
                        <Link to={`/tour/${place.id}`}>
                        <div
                            key={index}
                            className="relative group h-64 w-full bg-blue-500 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            {/* Image with overlay */}
                            <img
                                src={place.image}
                                alt={place.name}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-30"></div>

                            {/* Centered text */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                <h2 className="text-3xl font-bold">{place.name}</h2>
                                <p className="text-sm mt-1">{place.tours} Tours</p>
                            </div>
                        </div>
                        </Link>
                    ))}
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
                                className={`group card relative h-60 w-60 rounded-full  overflow-hidden shadow-2xl shadow-black hover:${place.shadow} hover:scale-105 transform transition duration-400 ease-in-out`}
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
            <Analytics/>
            <BrandLabel />
            <CallToAction />
            <Footer />


        </>
    )
}

export default Introduction