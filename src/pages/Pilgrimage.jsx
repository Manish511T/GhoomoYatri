import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const pilgrimageDestinations = [
  {
    name: 'Kedarnath, Uttarakhand',
    description: 'One of the holiest Hindu temples dedicated to Lord Shiva, located in the Himalayas.',
    image: 'https://i.pinimg.com/736x/d0/ff/80/d0ff8035f5260b0a1e852af7b4d26795.jpg',
  },
  {
    name: 'Vaishno Devi, Jammu',
    description: 'A sacred cave temple dedicated to Goddess Vaishnavi, visited by millions every year.',
    image: 'https://i.pinimg.com/736x/80/87/f0/8087f069ca7d5c5a489f09a2bf3b7226.jpg',
  },
  {
    name: 'Tirupati, Andhra Pradesh',
    description: 'Home to the famous Lord Venkateswara Temple, a major pilgrimage for Hindus.',
    image: 'https://i.pinimg.com/736x/c6/de/8f/c6de8f07abf9b4504f5ac49b57842249.jpg',
  },
  {
    name: 'Shirdi, Maharashtra',
    description: 'The holy town of Sai Baba, attracting devotees from all over the world.',
    image: 'https://i.pinimg.com/736x/c8/f9/fb/c8f9fbaf0ea270cb93e78f3476740031.jpg',
  },
  {
    name: 'Bodh Gaya, Bihar',
    description: 'The place where Lord Buddha attained enlightenment under the Bodhi tree.',
    image: 'https://i.pinimg.com/736x/4c/97/75/4c9775eec94ddfd241fbc64543530227.jpg',
  },
  {
    name: 'Golden Temple, Amritsar',
    description: 'The holiest Sikh Gurdwara, known for its spiritual peace and free community kitchen.',
    image: 'https://i.pinimg.com/736x/63/44/e7/6344e70fa3a4e0919ffffef0e0eb5c7e.jpg',
  },
  {
    name: 'Dwarka, Gujarat',
    description: 'An ancient city associated with Lord Krishna, one of the Char Dham pilgrimage sites.',
    image: 'https://i.pinimg.com/736x/9b/2a/5d/9b2a5d7a877c87f6d6ef49b3e60ca1b6.jpg',
  },
  {
    name: 'Rameswaram, Tamil Nadu',
    description: 'Part of the Char Dham, it’s believed Lord Rama built a bridge to Lanka from here.',
    image: 'https://i.pinimg.com/736x/13/28/12/132812cf75d85c47897d79e74696d69a.jpg',
  },
];

const Pilgrimage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white text-gray-800">
        <Navbar/>
      {/* Header Section */}
      <div className="relative mt-15 h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/0e/2e/7a/0e2e7a2adca6a4444bdd04ffb35a86b0.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Pilgrimage Tours in India</h1>
          <p className="mt-3 text-base sm:text-lg">A soulful journey through India’s spiritual heartlands</p>
          <Link to={'/contact'}>
          <button className="mt-5 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow-lg transition">
            Start Your Spiritual Trip
          </button>
          </Link>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-10 px-4 sm:px-12">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-10" data-aos="fade-up">Top Pilgrimage Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilgrimageDestinations.map((place, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={`${place.image}`} alt={place.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-yellow-700">{place.name}</h3>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-yellow-500 py-10 text-white" data-aos="zoom-in">
        <h2 className="text-2xl font-bold">Let us guide your spiritual journey</h2>
        <p className="mt-2 text-sm sm:text-base">We curate authentic and peaceful religious experiences</p>
        <Link to={'/contact'}>
        <button className="mt-4 px-6 py-2 rounded-full bg-white text-yellow-700 font-semibold hover:bg-yellow-100 transition">
          Contact Us for Pilgrimage Packages
        </button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Pilgrimage;
