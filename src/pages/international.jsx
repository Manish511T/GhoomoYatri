import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const regions = ["All", "Europe", "Asia", "Africa", "North America", "South America", "Australia"];

const destinations = [
  {
    id: 1,
    title: "Paris",
    subtitle: "France",
    region: "Europe",
    image: "paris.jpg",
    description: "The city of lights, known for the Eiffel Tower, romance, and art museums.",
    rating: 5
  },
  {
    id: 2,
    title: "Tokyo",
    subtitle: "Japan",
    region: "Asia",
    image: "tokyo.jpg",
    description: "A vibrant city blending modern technology with traditional temples.",
    rating: 5
  },
  {
    id: 3,
    title: "Cape Town",
    subtitle: "South Africa",
    region: "Africa",
    image: "cape-town.jpg",
    description: "Known for Table Mountain, beaches, and cultural diversity.",
    rating: 4.8
  },
  {
    id: 4,
    title: "New York",
    subtitle: "USA",
    region: "North America",
    image: "New-york.jpg",
    description: "The city that never sleeps — iconic skyline, Times Square, and Central Park.",
    rating: 5
  },
  {
    id: 5,
    title: "Rio de Janeiro",
    subtitle: "Brazil",
    region: "South America",
    image: "Brazil.jpg",
    description: "Famous for Christ the Redeemer, beaches, and carnival festivals.",
    rating: 4.7
  },
  {
    id: 6,
    title: "Sydney",
    subtitle: "Australia",
    region: "Australia",
    image: "sedney.jpg",
    description: "Home to the Sydney Opera House and beautiful coastal walks.",
    rating: 4.9
  }
];

const International = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const visibleCards = [
    destinations[currentIndex % destinations.length],
    destinations[(currentIndex + 1) % destinations.length],
    destinations[(currentIndex + 2) % destinations.length]
  ];

  const filteredDestinations = selectedRegion === "All" ? destinations : destinations.filter((dest) => dest.region === selectedRegion);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    return (
      <>
        {"★".repeat(full)}
        {"☆".repeat(5 - full)}
      </>
    );
  };

  return (
    <>
      <Navbar />

      {/* === HERO SECTION === */}
      <div className="w-screen px-6 flex items-center justify-center rounded-4xl">
        <div
          className="w-full h-[90vh] mt-16 px-6 md:px-10 rounded-4xl shadow-2xl shadow-black bg-cover relative transition-all duration-700 ease-in-out overflow-hidden"
          style={{ backgroundImage: `url(${visibleCards[0].image})` }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />

          <div className="relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
            <div className="text-white flex flex-col justify-center w-full md:w-1/2">
              <h2 className="text-sm uppercase tracking-widest">Explore World</h2>
              <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">{visibleCards[0].title}</h1>
              <p className="mt-4 text-lg text-white/90 max-w-md">{visibleCards[0].description}</p>
              <button className="group w-fit mt-8 bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-blue-700 hover:text-white hover:shadow-lg transition-all duration-300">
                Book Now <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Thumbnail Slider */}
            <div className="absolute left-[60%] top-[50%] hidden md:flex gap-[-30px] pr-4">
              {visibleCards.map((item, idx) => {
                let scale = "scale-80";
                let zIndex = 10;
                let opacity = "opacity-60";
                let shadow = "shadow-2xl";

                if (idx === 0) {
                  scale = "scale-100";
                  zIndex = 30;
                  opacity = "opacity-100";
                  shadow = "shadow-2xl shadow-black drop-shadow-md";
                } else if (idx === 1) {
                  scale = "scale-90";
                  zIndex = 20;
                  opacity = "opacity-80";
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setCurrentIndex((currentIndex + idx) % destinations.length)}
                    className={`relative w-[12vw] h-70 rounded-xl overflow-hidden bg-white transition-all duration-500 cursor-pointer transform ${scale} ${opacity} ${shadow}`}
                    style={{ zIndex }}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} thumbnail`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 text-white drop-shadow">
                      <p className="text-sm">{item.subtitle}</p>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <div className="text-yellow-300">{renderStars(item.rating)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* === FILTERED DESTINATION CARDS === */}
      <section className="mt-20 px-4 md:px-20 bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-2">Explore International Tours</h2>
        <p className="text-center text-gray-600 mb-10">Handpicked destinations across the globe curated just for you.</p>

        {/* Region Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                selectedRegion === region
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.subtitle}`}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.subtitle}</p>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                <div className="mt-3 text-yellow-400 text-lg">{renderStars(item.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="mt-20 px-4 md:px-10 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Choose Our International Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { icon: "🌐", title: "Global Reach", desc: "Explore destinations across 6 continents." },
            { icon: "✈️", title: "Best Airlines", desc: "We partner with top global airlines." },
            { icon: "🏨", title: "Premium Hotels", desc: "Stays in the finest international properties." },
            { icon: "📞", title: "24/7 Global Support", desc: "Help whenever, wherever you are." },
            { icon: "🗺️", title: "Customized Itineraries", desc: "Your trip, your way." }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-emerald-50 to-emerald-200 shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
            >
              <div className="text-blue-600 text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
      <Footer />
    </>
  );
};

export default International;
