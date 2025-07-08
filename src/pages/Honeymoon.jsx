import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const destinations = [
  {
    title: "Maldives",
    description: "Crystal-clear waters, overwater villas, and ultimate privacy for couples.",
    image: "https://i.pinimg.com/736x/92/b1/79/92b1791393625bbb8f4d16d9a64c7873.jpg",
  },
  {
    title: "Santorini, Greece",
    description: "Whitewashed buildings, blue domes, and breathtaking sunsets.",
    image: "https://i.pinimg.com/736x/ad/1d/67/ad1d671fe1b22caeb004bcc6035e323b.jpg",
  },
  {
    title: "Bali, Indonesia",
    description: "Tropical vibes with luxurious resorts and cultural charm.",
    image: "https://i.pinimg.com/736x/0b/40/7f/0b407f324f3948b4b5878e834d4839a2.jpg",
  },
  {
    title: "Udaipur, India",
    description: "Regal palaces, lakeside hotels, and royal romantic ambiance.",
    image: "https://i.pinimg.com/736x/c2/96/ab/c296ab3c7ba4123b0d7cb990261e9df1.jpg",
  },
  {
    title: "Manali, India",
    description: "Snow-covered peaks, cozy cottages, and adventure for two.",
    image: "https://i.pinimg.com/736x/43/40/cc/4340ccb7173d3a79dc3a7e1bcd87ef07.jpg",
  },
  {
    title: "Kerala Backwaters, India",
    description: "Romantic houseboats, lush greenery, and peaceful canals.",
    image: "https://i.pinimg.com/736x/c0/3c/1c/c03c1ce317c17041b7c5242976260a6c.jpg",
  },
  {
    title: "Paris, France",
    description: "City of love with charming streets, Eiffel Tower, and candlelight dinners.",
    image: "https://i.pinimg.com/736x/2f/27/08/2f27088cf1149c60b423bb3836c5534c.jpg",
  },
  {
    title: "Andaman & Nicobar, India",
    description: "Serene islands, white sands, turquoise waters, and scuba diving.",
    image: "https://i.pinimg.com/736x/8b/23/ef/8b23efb01b08b92234e14b7cb00e1cfc.jpg",
  },
  {
    title: "Switzerland",
    description: "Alpine villages, snowy landscapes, and luxury chalets in the Alps.",
    image: "https://i.pinimg.com/736x/3f/1c/40/3f1c40814bf52911db54268ac1142167.jpg",
  }
];


const Honeymoon = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 bg-white">
        <Navbar/>

      {/* Hero Section */}
      <section
        className="relative mt-15 h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/14/c4/52/14c45290c87b9c4dc253537f89978417.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold" data-aos="fade-down">
            Plan Your Dream Honeymoon
          </h1>
          <p className="text-lg sm:text-xl mt-4" data-aos="fade-up">
            Discover romantic destinations, unforgettable memories await.
          </p>
          <Link to={'/contact'}>
          <button
            data-aos="zoom-in"
            className="mt-6 bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded text-white shadow-md"
          >
            Book Now
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 sm:px-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-pink-600">Why Honeymoon with Us?</h2>
          <p className="mt-4 text-gray-600">
            At Ghoomo Yatri, we curate perfect romantic getaways that blend luxury, adventure,
            and relaxation. Whether it's a beachside retreat, a royal palace escape, or a mountain hideaway,
            we help you begin your journey of togetherness with unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="bg-white py-14 px-6 sm:px-16">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-pink-600">Top Romantic Destinations</h2>
          <p className="mt-2 text-gray-600">
            Discover hand-picked places for your perfect honeymoon escape.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-700">{dest.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-12 px-6 sm:px-20 text-white text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold">Ready to Begin Your Forever?</h2>
        <p className="mt-2 text-sm sm:text-base">Let us help you plan the perfect honeymoon experience.</p>
        <Link to={'/contact'}>
        <button className="mt-4 bg-white text-pink-700 px-6 py-2 rounded shadow-md hover:bg-pink-100">
          Contact Us
        </button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Honeymoon;
