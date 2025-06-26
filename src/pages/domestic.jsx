import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

const destinations = [
  {
    id: 1,
    title: "Goa",
    subtitle: "West Coast",
    image: "Goa.jpg",
    description: "Popular for its beaches, nightlife, and Portuguese heritage.",
    rating: 5
  },
  {
    id: 2,
    title: "Manali",
    subtitle: "Himachal Pradesh",
    image: "Manali.jpeg",
    description: "A picturesque hill station known for snow-capped mountains and adventure sports.",
    rating: 5
  },
  {
    id: 3,
    title: "Kaziranga",
    subtitle: "Northeast India",
    image: "northeast-history.jpg",
    description: "A UNESCO World Heritage site famous for one-horned rhinoceroses.",
    rating: 4
  },
  {
    id: 4,
    title: "Nainital",
    subtitle: "Uttarakhand",
    image: "Uttarakhand.webp",
    description: "A beautiful lake town surrounded by hills, popular for boating and views.",
    rating: 4
  },
  {
    id: 5,
    title: "Pangong Lake",
    subtitle: "Ladakh",
    image: "Pangong-Lake.jpg",
    description: "A stunning high-altitude lake known for its color-changing waters.",
    rating: 5
  },
  {
    id: 6,
    title: "Gulmarg",
    subtitle: "Kashmir",
    image: "Kashmir.jpg",
    description: "A skiing destination and paradise for snow lovers in the Himalayas.",
    rating: 5
  },
  {
    id: 7,
    title: "Alleppey",
    subtitle: "Kerala",
    image: "kerala.webp",
    description: "Known for its serene backwaters and houseboat cruises.",
    rating: 4
  },
  {
    id: 8,
    title: "Havelock Island",
    subtitle: "Andaman",
    image: "Andaman.jpg",
    description: "Famous for white sand beaches, coral reefs, and diving spots.",
    rating: 5
  }
];

const Domestic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide every 4 seconds
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

  return (
    <>
      <Navbar />
      <div className="domestic-hero w-screen px-10 flex items-center justify-center rounded-4xl">
        <div
          className="w-full h-[90vh] mt-16 px-10 rounded-4xl shadow-2xl shadow-black  bg-cover  relative transition-all duration-700 ease-in-out  overflow-hidden "
          style={{ backgroundImage: `url(${visibleCards[0].image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Content */}
          <div className="relative z-10 h-full w-full flex items-center justify-between px-12">
            {/* Left Content */}
            <div className="text-white flex flex-col justify-center w-1/2">
              <h2 className="text-sm uppercase">Discover</h2>
              <h1 className="text-7xl font-bold">{visibleCards[0].title}</h1>
              <p className="mt-4 text-lg text-wrap">{visibleCards[0].description}</p>
              <button className="w-fit mt-10 bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-emerald-600 hover:border-2 hover:border-emerald-200 hover:text-white" >
                Explore →
              </button>
            </div>

            {/* Right Carousel Cards */}
            <div className="absolute h-fit w-fit  left-[63%] top-[50%] flex gap-[-30px] pr-4">
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
                    className={`relative w-[12vw] h-70 rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer transform ${scale} ${opacity} ${shadow}  `}
                    style={{ zIndex }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
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
    </>
  );
};

export default Domestic;
