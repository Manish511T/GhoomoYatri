import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ecoDestinations = [
  {
    title: "Wayanad, Kerala",
    description: "Dense forests, spice plantations, and responsible tribal tourism in the Western Ghats.",
    image: "https://i.pinimg.com/736x/12/a9/3a/12a93a4b44eeb4662313bccf40f794e5.jpg",
  },
  {
    title: "Kanha National Park, MP",
    description: "Sustainable jungle safaris and local tribal cultural experiences.",
    image: "https://i.pinimg.com/736x/18/1f/54/181f5420e6e9bfaa837fab476cc5f77a.jpg",
  },
  {
    title: "Sundarbans, West Bengal",
    description: "Explore mangrove forests and learn about tiger conservation efforts.",
    image: "https://i.pinimg.com/736x/80/18/c9/8018c9b7675b9a6cc414780a6f010aa9.jpg",
  },
  {
    title: "Coorg, Karnataka",
    description: "Eco-lodges in coffee plantations and bird watching experiences.",
    image: "https://i.pinimg.com/736x/65/0b/79/650b79cb12bad0a58a341223e43af5aa.jpg",
  },
  {
    title: "Mawlynnong, Meghalaya",
    description: "Asia’s cleanest village with community-led eco initiatives.",
    image: "https://i.pinimg.com/736x/80/78/19/8078197a844f093fcfb58f329cee52f3.jpg",
  },
  {
    title: "Thenmala, Kerala",
    description: "India’s first planned eco-tourism destination with nature trails & bio-reserves.",
    image: "https://i.pinimg.com/736x/44/61/a6/4461a623d57bbebdce6729d66c6763e3.jpg",
  },
  {
    title: "Spiti Valley, Himachal Pradesh",
    description: "Solar villages, eco-homestays and zero waste travel culture.",
    image: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg",
  },
  {
    title: "Valparai, Tamil Nadu",
    description: "Elephant corridors, tea gardens and low-impact tourism models.",
    image: "https://i.pinimg.com/736x/81/4d/f9/814df9875a8d1f1812d5c8fa8179e733.jpg",
  },
];

const EcoTourism = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 bg-[#fefce8]">
        <Navbar/>
      {/* Hero Section */}
      <section
        className="relative mt-15 h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/e5/93/d6/e593d6a514a43cc255001dcd25cbecb2.jpg')` }}
      >
        <div className="absolute inset-0 bg-green-900/60" />
        <div className="z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-300" data-aos="fade-down">
            Explore Eco-Tourism in India
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-green-100" data-aos="fade-up">
            Travel responsibly, explore naturally.
          </p>
          <Link to={'/contact'}>
          <button
            data-aos="zoom-in"
            className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white shadow-md"
          >
            Plan My Eco Trip
          </button></Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 sm:px-16">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-700">Why Choose Eco-Tourism?</h2>
          <p className="mt-4 text-gray-700">
            Eco-tourism encourages travel that helps preserve nature, culture, and promotes sustainability.
            From rainforests to solar-powered villages, India has it all.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-14 px-6 sm:px-16">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-600">Top Eco-Friendly Destinations</h2>
          <p className="mt-2 text-gray-600">Discover places that live in harmony with nature.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ecoDestinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-600">{place.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-12 px-6 sm:px-20 text-white text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold">Be a Responsible Traveler</h2>
        <p className="mt-2 text-sm sm:text-base">Support communities and protect the planet while exploring.</p>
        <Link to={'/contact'}>
        <button className="mt-4 bg-white text-green-700 px-6 py-2 rounded shadow-md hover:bg-green-100">
          Contact Us
        </button></Link>
      </section>
      <Footer/>
    </div>
  );
};

export default EcoTourism;
