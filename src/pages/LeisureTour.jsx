import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';

const leisureDestinations = [
    {
        title: "Backwaters of Kerala",
        description: "Unwind in tranquil houseboats, surrounded by lush paddy fields and coconut groves.",
        image: "https://i.pinimg.com/736x/c0/3c/1c/c03c1ce317c17041b7c5242976260a6c.jpg",
    },
    {
        title: "Andaman Islands",
        description: "Relax on pristine beaches, enjoy snorkeling, and sip fresh coconut water under palm trees.",
        image: "https://i.pinimg.com/736x/8b/23/ef/8b23efb01b08b92234e14b7cb00e1cfc.jpg",
    },
    {
        title: "Kumarakom Resort Stay",
        description: "Premium lakeview cottages, Ayurveda spas, and canoe rides await you.",
        image: "https://i.pinimg.com/736x/49/24/00/4924002bd2e3f6078975b4dad140c3e6.jpg",
    },
    {
        title: "Goa Retreat",
        description: "Experience a luxurious beach holiday with sunsets, seafood, and yoga mornings.",
        image: "https://i.pinimg.com/736x/56/87/69/5687697952c6e340e294eded0a199bae.jpg",
    },
    {
        title: "Coorg Coffee Estate",
        description: "Stay in a plantation villa amidst misty hills, nature trails, and local delicacies.",
        image: "https://i.pinimg.com/736x/35/10/98/351098292b3f33b873a080997158979d.jpg",
    },
    {
        title: "Pondicherry French Stay",
        description: "Colonial-style villas, French cuisine, and peaceful seafront promenades.",
        image: "https://i.pinimg.com/736x/8c/3e/3b/8c3e3b56df31804a035f3d2b9e23df0f.jpg",
    },
    {
        title: "Udaipur Luxury Break",
        description: "Enjoy lakeside palaces, boat rides, and royal hospitality.",
        image: "https://i.pinimg.com/736x/60/c8/e7/60c8e729e53317deccb80b33f81f4774.jpg",
    },
    {
        title: "Rishikesh Ganga Retreat",
        description: "Riverfront cottages with meditation, spas, and scenic views.",
        image: "https://i.pinimg.com/736x/c6/b6/84/c6b6843823993989bfd575f5689637ed.jpg",
    }
];

const LeisureTour = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-[#f0fdfa] text-gray-800">
            <Navbar/>
            {/* Hero Section */}
            <section
                className="relative mt-15 h-[480px] flex items-center justify-center text-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/leisure/hero.jpg')` }}
            >
                <div className="absolute inset-0 bg-blue-900/60" />
                <div className="z-10 px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-blue-100" data-aos="fade-down">
                        Leisure Tour Packages
                    </h1>
                    <p className="text-lg sm:text-xl mt-4 text-white" data-aos="fade-up">
                        Indulge in slow travel and rejuvenating escapes.
                    </p>
                    <Link to={'/contact'}>
                    <button
                        data-aos="zoom-in"
                        className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-lg hover:bg-blue-100"
                    >
                       Contact Us
                    </button>
                    </Link>
                </div>
            </section>

            {/* Overview */}
            <section className="py-12 px-6 sm:px-16 bg-white">
                <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-blue-600">What is Leisure Travel?</h2>
                    <p className="mt-4 text-gray-600">
                        Leisure travel focuses on relaxation and enjoyment. Perfect for couples, families, or solo travelers seeking to unwind in luxurious, peaceful surroundings.
                    </p>
                </div>
            </section>

            {/* Destination Cards */}
            <section className="py-14 px-6 sm:px-16">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-blue-600">Top Leisure Destinations</h2>
                    <p className="mt-2 text-gray-500">Peaceful stays and elegant experiences await.</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {leisureDestinations.map((place, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-blue-800">{place.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{place.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* CTA Section */}
            <section className="bg-blue-800 py-12 px-6 sm:px-20 text-white text-center" data-aos="zoom-in">
                <h2 className="text-3xl font-bold">Ready to Relax?</h2>
                <p className="mt-2 text-sm sm:text-base">Let us plan your perfect leisure getaway.</p>
                <Link to={'/contact'}>
                <button
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105 hover:shadow-lg hover:bg-blue-100"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Get in Touch
                </button>
                </Link>
            </section>
            <Footer/>
        </div>
    );
};

export default LeisureTour;
