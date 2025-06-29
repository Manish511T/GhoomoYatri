import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';

// Define regions
const regions = ["All", "North India", "South India", "East India", "West India", "North-East India"];

// Destination data
const destinations = [
  {
    id: 1,
    title: "Goa",
    subtitle: "West Coast",
    region: "West India",
    image: "Goa.jpg",
    description: "Popular for its beaches, nightlife, and Portuguese heritage.",
    rating: 5
  },
  {
    id: 2,
    title: "Manali",
    subtitle: "Himachal Pradesh",
    region: "North India",
    image: "Manali.jpeg",
    description: "A picturesque hill station known for snow-capped mountains and adventure sports.",
    rating: 5
  },
  {
    id: 3,
    title: "Kaziranga",
    subtitle: "Assam",
    region: "North-East India",
    image: "northeast-history.jpg",
    description: "A UNESCO World Heritage site famous for one-horned rhinoceroses.",
    rating: 4
  },
  {
    id: 4,
    title: "Nainital",
    subtitle: "Uttarakhand",
    region: "North India",
    image: "Uttarakhand.webp",
    description: "A beautiful lake town surrounded by hills, popular for boating and views.",
    rating: 4
  },
  {
    id: 5,
    title: "Pangong Lake",
    subtitle: "Ladakh",
    region: "North India",
    image: "Pangong-Lake.jpg",
    description: "A stunning high-altitude lake known for its color-changing waters.",
    rating: 5
  },
  {
    id: 6,
    title: "Gulmarg",
    subtitle: "Kashmir",
    region: "North India",
    image: "Kashmir.jpg",
    description: "A skiing destination and paradise for snow lovers in the Himalayas.",
    rating: 5
  },
  {
    id: 7,
    title: "Alleppey",
    subtitle: "Kerala",
    region: "South India",
    image: "kerala.webp",
    description: "Known for its serene backwaters and houseboat cruises.",
    rating: 4
  },
  {
    id: 8,
    title: "Havelock Island",
    subtitle: "Andaman",
    region: "South India",
    image: "Andaman.jpg",
    description: "Famous for white sand beaches, coral reefs, and diving spots.",
    rating: 5
  },
  {
    id: 9,
    title: "Darjeeling",
    subtitle: "West Bengal",
    region: "East India",
    image: "Darjeeling.jpeg",
    description: "A scenic hill station famous for tea gardens and views of Kanchenjunga.",
    rating: 5
  },
  {
    id: 10,
    title: "Konark Sun Temple",
    subtitle: "Odisha",
    region: "East India",
    image: "sun-temple.jpg",
    description: "A UNESCO World Heritage Site known for its chariot-shaped temple dedicated to the Sun God.",
    rating: 5
  },
  {
    id: 11,
    title: "Bodh Gaya",
    subtitle: "Bihar",
    region: "East India",
    image: "gaya.jpg",
    description: "A sacred Buddhist site where Lord Buddha attained enlightenment.",
    rating: 4.8
  },
  {
    id: 12,
    title: "Chilika Lake",
    subtitle: "Odisha",
    region: "East India",
    image: "chilika-lake.jpg",
    description: "Asia's largest brackish water lagoon famous for birdwatching and dolphins.",
    rating: 4.7
  },
  {
    id: 13,
    title: "Sundarbans",
    subtitle: "West Bengal",
    region: "East India",
    image: "sundarban.jpg",
    description: "World's largest mangrove forest and home to the Royal Bengal Tiger.",
    rating: 4.9
  },
  {
    id: 14,
    title: "Kaziranga National Park",
    subtitle: "Assam",
    region: "North-East India",
    image: "kaziranga-national-park.jpg",
    description: "A UNESCO World Heritage Site known for the one-horned rhinoceros.",
    rating: 5
  },
  {
    id: 15,
    title: "Tawang Monastery",
    subtitle: "Arunachal Pradesh",
    region: "North-East India",
    image: "Tawang-Monastery.jpg",
    description: "India's largest monastery, nestled in the eastern Himalayas.",
    rating: 4.8
  },
  {
    id: 16,
    title: "Living Root Bridges",
    subtitle: "Meghalaya",
    region: "North-East India",
    image: "Living-Root-Bridges.jpg",
    description: "Ingenious natural bridges created from living tree roots in Cherrapunji.",
    rating: 4.9
  },
  {
    id: 17,
    title: "Loktak Lake",
    subtitle: "Manipur",
    region: "North-East India",
    image: "Loktak-Lake.jpg",
    description: "The largest freshwater lake in northeast India with floating islands.",
    rating: 4.7
  },
  {
    id: 18,
    title: "Ziro Valley",
    subtitle: "Arunachal Pradesh",
    region: "North-East India",
    image: "Ziro-Valley.jpg",
    description: "A picturesque valley known for the Ziro Music Festival and lush paddy fields.",
    rating: 4.9
  }

];

const Domestic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("All");

  // Auto-change background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    destinations[currentIndex % destinations.length],
    destinations[(currentIndex + 1) % destinations.length],
    destinations[(currentIndex + 2) % destinations.length]
  ];

  const filteredDestinations =
    selectedRegion === "All"
      ? destinations
      : destinations.filter((dest) => dest.region === selectedRegion);

  return (
    <>
      <Navbar />

      {/* === HERO SECTION (unchanged) === */}
      <div className="domestic-hero w-screen px-10 flex items-center justify-center rounded-4xl">
        <div
          className="w-full h-[90vh] mt-16 px-10 rounded-4xl shadow-2xl shadow-black bg-cover relative transition-all duration-700 ease-in-out overflow-hidden"
          style={{ backgroundImage: `url(${visibleCards[0].image})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          <div className="relative z-10 h-full w-full flex items-center justify-between px-12">
            <div className="text-white flex flex-col justify-center w-1/2">
              <h2 className="text-sm uppercase">Discover</h2>
              <h1 className="text-7xl font-bold">{visibleCards[0].title}</h1>
              <p className="mt-4 text-lg text-wrap">{visibleCards[0].description}</p>
              <button className="w-fit mt-10 bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-emerald-600 hover:border-2 hover:border-emerald-200 hover:text-white">
                Explore →
              </button>
            </div>

            <div className="absolute h-fit w-fit left-[63%] top-[50%] flex gap-[-30px] pr-4">
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
                    className={`relative w-[12vw] h-70 rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer transform ${scale} ${opacity} ${shadow}`}
                    style={{ zIndex }}
                  >
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <div className="absolute bottom-2 left-2 text-white drop-shadow">
                      <p className="text-sm">{item.subtitle}</p>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <div className="flex text-yellow-300">
                        {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* === REGION FILTERED CARDS GRID === */}
      <div className="mt-20 px-20">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border ${selectedRegion === region
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-emerald-50"
                }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid of filtered destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
            >
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.subtitle}</p>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                <div className="mt-3 text-yellow-400 text-lg">
                  {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* === WHY CHOOSE US SECTION === */}
      <div className="mt-20 px-10 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Our Domestic Tours</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {/* 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-emerald-600 text-4xl mb-3">✔️</div>
            <h3 className="text-lg font-semibold text-gray-800">Budget-Friendly</h3>
            <p className="text-sm text-gray-500 mt-1">Affordable packages without compromising quality.</p>
          </div>

          {/* 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-emerald-600 text-4xl mb-3">✔️</div>
            <h3 className="text-lg font-semibold text-gray-800">Handpicked Hotels</h3>
            <p className="text-sm text-gray-500 mt-1">Comfortable stays at top-rated properties.</p>
          </div>

          {/* 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-emerald-600 text-4xl mb-3">✔️</div>
            <h3 className="text-lg font-semibold text-gray-800">24x7 Support</h3>
            <p className="text-sm text-gray-500 mt-1">Always there to assist you throughout your trip.</p>
          </div>

          {/* 4 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-emerald-600 text-4xl mb-3">✔️</div>
            <h3 className="text-lg font-semibold text-gray-800">Local Guides</h3>
            <p className="text-sm text-gray-500 mt-1">Explore with experienced local tour experts.</p>
          </div>

          {/* 5 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
            <div className="text-emerald-600 text-4xl mb-3">✔️</div>
            <h3 className="text-lg font-semibold text-gray-800">Custom Itineraries</h3>
            <p className="text-sm text-gray-500 mt-1">Personalized plans that suit your preferences.</p>
          </div>
        </div>
      </div>
      {/* call to action*/}
      <CallToAction />
      {/* === FOOTER (unchanged) === */}
      <Footer/>

    </>
  );
};

export default Domestic;
