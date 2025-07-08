import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const escortedDestinations = [
  {
    title: "Golden Triangle (Delhi-Agra-Jaipur)",
    description: "A perfect escorted experience of India’s history, architecture, and culture.",
    image: "https://i.pinimg.com/736x/95/b8/84/95b8846db9a4f038b3bbc27bf809697e.jpg",
  },
  {
    title: "Rajasthan Royal Tour",
    description: "Discover forts, palaces, and heritage with a well-curated guide and team.",
    image: "https://i.pinimg.com/736x/cb/ea/bf/cbeabf309a64272d9f1dd69bc0356d50.jpg",
  },
  {
    title: "Kerala Backwaters",
    description: "Fully escorted journey through canals, houseboats, and wellness retreats.",
    image: "https://i.pinimg.com/736x/c0/3c/1c/c03c1ce317c17041b7c5242976260a6c.jpg",
  },
  {
    title: "Himalayan Discovery",
    description: "Explore Shimla, Manali, Dharamshala with planned activities and hotel stays.",
    image: "https://i.pinimg.com/736x/fd/73/f0/fd73f046d74449331e70ac7531a752b7.jpg",
  },
  {
    title: "South India Temple Trail",
    description: "From Madurai to Rameshwaram—immerse in guided spiritual journeys.",
    image: "https://i.pinimg.com/736x/c4/3c/f3/c43cf3c0524db7981625ac7b33320a61.jpg",
  },
  {
    title: "Ladakh Monastery Tour",
    description: "Experience culture, festivals, and hidden monasteries—guided by locals.",
    image: "https://i.pinimg.com/736x/e9/9d/f2/e99df2ed573a51b7b4bb61f89739348e.jpg",
  },
  {
    title: "Kashmir Beauty Tour",
    description: "Guided experiences in Srinagar, Gulmarg, Pahalgam with houseboat stays.",
    image: "https://i.pinimg.com/736x/83/ec/eb/83ecebeca34eb649aee0b1026d714046.jpg",
  },
  {
    title: "Wildlife Trail (MP)",
    description: "A safe and curated wildlife tour covering Kanha, Pench and Bandhavgarh.",
    image: "https://i.pinimg.com/736x/49/19/bd/4919bdf3a0ead1ccca39470bc4c92b94.jpg",
  }
];

const EscortedTour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 bg-[#fef9c3]">
        <Navbar/>
      {/* Hero Section */}
      <section
        className="relative mt-15 h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/ae/5a/0b/ae5a0b1a85eb97b85509233c96325982.jpg')` }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300" data-aos="fade-down">
            Escorted Tours in India
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-white" data-aos="fade-up">
            Travel confidently with planned itineraries and expert guides.
          </p>
          <Link to={'/contact'}>
          <button
            data-aos="zoom-in"
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded text-blue-900 shadow-md"
          >
            Start Your Journey
          </button>
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 sm:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-800">What is an Escorted Tour?</h2>
          <p className="mt-4 text-gray-700">
            Escorted tours offer structured travel experiences with pre-arranged transportation, lodging, guides,
            and activities. Ideal for comfort-seekers or first-time travelers.
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-14 px-6 sm:px-16 bg-[#fefce8]">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-700">Top Escorted Tours</h2>
          <p className="mt-2 text-gray-600">Explore India with expert-led, hassle-free journeys.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {escortedDestinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800">{place.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-12 px-6 sm:px-20 text-white text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold">Book an All-Inclusive Escorted Tour</h2>
        <p className="mt-2 text-sm sm:text-base">Professional guides, safe travel, and curated experiences—every step of the way.</p>
        <Link to = {'/contact'}>
        <button className="mt-4 bg-yellow-400 text-blue-900 px-6 py-2 rounded shadow-md hover:bg-yellow-300">
          Get a Free Quote
        </button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default EscortedTour;
