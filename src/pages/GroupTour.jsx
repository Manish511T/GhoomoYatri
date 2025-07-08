import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const groupTours = [
  {
    title: "Golden Triangle Group Tour",
    description: "Delhi, Agra, and Jaipur with shared accommodations and guided tours.",
    image: "https://i.pinimg.com/736x/95/b8/84/95b8846db9a4f038b3bbc27bf809697e.jpg",
  },
  {
    title: "North East Explorer",
    description: "Discover Shillong, Cherrapunjee, and Kaziranga with a lively group.",
    image: "https://i.pinimg.com/736x/5d/c5/62/5dc562e0fb6aee63f901346d5552c3e8.jpg",
  },
  {
    title: "Goa Group Fiesta",
    description: "Party vibes, beach fun, and nightlife with fellow travelers.",
    image: "https://i.pinimg.com/736x/99/4c/e1/994ce13253935e28d48e3e1859fdda93.jpg",
  },
  {
    title: "Ladakh Road Trip",
    description: "Join a convoy of bikers and SUV riders through the Himalayas.",
    image: "https://i.pinimg.com/736x/1f/af/58/1faf58bc086a0eed21a734ac69afa0c7.jpg",
  },
  {
    title: "South India Temple Group Tour",
    description: "Cultural journey with expert guides through Tamil Nadu temples.",
    image: "https://i.pinimg.com/736x/2b/aa/1d/2baa1d33788254b67ee920ac5176ef74.jpg",
  },
  {
    title: "Kerala Delight Tour",
    description: "Houseboats, spices, and group Ayurveda retreats.",
    image: "https://i.pinimg.com/736x/44/a2/6d/44a26d8a3d91ba856555069957233489.jpg",
  },
  {
    title: "Rajasthan Desert Group Trip",
    description: "Ride camels together and camp in the golden dunes of Jaisalmer.",
    image: "https://i.pinimg.com/736x/7c/f9/a4/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg",
  },
  {
    title: "Kashmir Valley Tour",
    description: "Explore gardens, snow, and culture with a social group.",
    image: "https://i.pinimg.com/736x/e8/a5/9a/e8a59ac7547402380ebbf01e0db771e8.jpg",
  }
];

const GroupTour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 bg-[#fef3c7]">
        <Navbar/>
      {/* Hero Section */}
      <section
        className="relative mt-15 h-[480px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/cd/07/c7/cd07c73e7c954688dcc7a359d6d6a621.jpg')` }}
      >
        <div className="absolute inset-0 bg-emerald-800/70" />
        <div className="z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-200" data-aos="fade-down">
            Group Tour Packages
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-white" data-aos="fade-up">
            Share your journey, make friends, and save more.
          </p>
          <Link to={'/contact'}>
          <button
            data-aos="zoom-in"
            className="mt-6 bg-yellow-300 hover:bg-yellow-400 px-6 py-2 rounded text-emerald-900 shadow-md"
          >
            Explore Packages
          </button>
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 sm:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-emerald-700">Why Choose a Group Tour?</h2>
          <p className="mt-4 text-gray-700">
            Group tours are perfect for those looking to travel with like-minded people while saving on costs. Enjoy guided experiences, pre-planned stays, and lively companions.
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-14 px-6 sm:px-16 bg-[#fefce8]">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-emerald-700">Popular Group Tours</h2>
          <p className="mt-2 text-gray-600">Group-friendly destinations loved by travelers.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {groupTours.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-emerald-800">{place.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-900 py-12 px-6 sm:px-20 text-white text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold">Book a Group Tour with Ease</h2>
        <p className="mt-2 text-sm sm:text-base">Save big, travel smart, and connect with travelers like you.</p>
        <Link to={'/contact'}>
        <button className="mt-4 bg-yellow-400 text-emerald-900 px-6 py-2 rounded shadow-md hover:bg-yellow-300">
          Contact Us Today
        </button></Link>
      </section>
      <Footer/>
    </div>
  );
};

export default GroupTour;
