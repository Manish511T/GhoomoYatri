import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const adventureDestinations = [
  {
    title: "Rishikesh, Uttarakhand",
    description: "White water rafting, cliff jumping, bungee jumping, and camping by the Ganges.",
    image: "https://i.pinimg.com/736x/61/39/ba/6139ba47fabfa33ca3cd6a65c820d2e5.jpg",
  },
  {
    title: "Manali, Himachal Pradesh",
    description: "Paragliding, skiing, river rafting, and snow adventures in the Himalayas.",
    image: "https://i.pinimg.com/736x/a3/84/84/a38484ba152f3d26ecb066978ca75597.jpg",
  },
  {
    title: "Leh-Ladakh, J&K",
    description: "Motorbike expeditions, trekking, and mountain biking across high passes.",
    image: "https://i.pinimg.com/736x/0c/1f/52/0c1f52e1412625e652a414914e32ea35.jpg",
  },
  {
    title: "Spiti Valley, Himachal Pradesh",
    description: "Fossil valley treks, high-altitude camping, and rugged biking trails.",
    image: "https://i.pinimg.com/736x/3a/d6/a3/3ad6a3a4ab20607e81e471ef062fc314.jpg",
  },
  {
    title: "Auli, Uttarakhand",
    description: "India’s premier ski destination with panoramic Himalayan views.",
    image: "https://i.pinimg.com/736x/56/70/be/5670be98e5c349395994a9e1bdeded1d.jpg",
  },
  {
    title: "Sikkim",
    description: "Trekking to Goechala, river rafting in Teesta, and mountain biking.",
    image: "https://i.pinimg.com/736x/24/c4/ed/24c4ed8f9198cd31c610b32029491441.jpg",
  },
  {
    title: "Andaman & Nicobar Islands",
    description: "Scuba diving, snorkeling, and sea kayaking in turquoise waters.",
    image: "https://i.pinimg.com/736x/f6/4c/79/f64c7982f594af78aeb38a3c97f11bc8.jpg",
  },
  {
    title: "Meghalaya",
    description: "Caving in Mawlynnong and trekking to Living Root Bridges.",
    image: "https://i.pinimg.com/736x/e0/79/28/e07928168b199a3359cb08247a9e1cc1.jpg",
  },
  {
    title: "Bir Billing, Himachal",
    description: "Asia’s top paragliding site with scenic mountain views.",
    image: "https://i.pinimg.com/736x/1e/ae/54/1eae54632bb6b1da9a65b2c3dd21f817.jpg",
  },
  {
    title: "Coorg, Karnataka",
    description: "River rafting, hiking, and ziplining through lush coffee plantations.",
    image: "https://i.pinimg.com/736x/09/a6/14/09a61438e19af3b6d6c0879207758279.jpg",
  },
];

const Adventure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 bg-white">
        <Navbar/>
      {/* Hero Section */}
      <section
        className="relative mt-15 h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/87/89/ac/8789ac2db28e0144bb0270a0ce9de633.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-400" data-aos="fade-down">
            Explore Indian Adventure
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-orange-200" data-aos="fade-up">
            From Himalayas to Islands — adrenaline awaits!
          </p>
          <Link to={'/contact'}>
          <button
            data-aos="zoom-in"
            className="mt-6 bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded text-white shadow-md"
          >
            Book Your Adventure
          </button></Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 sm:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-orange-500">Why Choose India for Adventure?</h2>
          <p className="mt-4 text-gray-600">
            India offers diverse landscapes — rivers, mountains, jungles, and oceans — making it a paradise for thrill-seekers. We’ve picked the best destinations where you can trek, dive, glide, and ride.
          </p>
        </div>
      </section>

      {/* Adventure Grid */}
      <section className="py-14 px-6 sm:px-16 bg-white">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-orange-600">Top Adventure Places in India</h2>
          <p className="mt-2 text-gray-500">Get your pulse racing at these handpicked destinations.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {adventureDestinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orange-600">{place.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-12 px-6 sm:px-20 text-white text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold">Your Adventure Starts Now!</h2>
        <p className="mt-2 text-sm sm:text-base">Let Ghoomo Yatri be your travel partner.</p>
        <Link to={'/contact'}>
        <button className="mt-4 bg-white text-orange-700 px-6 py-2 rounded shadow-md hover:bg-orange-100">
          Contact Us
        </button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Adventure;
