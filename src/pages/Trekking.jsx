import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const trekkingDestinations = [
  {
    name: 'Roopkund Trek, Uttarakhand',
    description: 'Famous for its mysterious skeletal lake and breathtaking Himalayan scenery.',
    image: 'https://i.pinimg.com/736x/2a/cd/49/2acd49b32d66824b692bbafb187c3896.jpg',
  },
  {
    name: 'Valley of Flowers, Uttarakhand',
    description: 'A UNESCO World Heritage Site known for its colorful alpine blooms and meadows.',
    image: 'https://i.pinimg.com/736x/03/ca/81/03ca81fb9752be9f178b07c2ff127851.jpg',
  },
  {
    name: 'Kedarkantha Trek, Uttarakhand',
    description: 'A classic winter trek with stunning snow-capped peaks and pine forests.',
    image: 'https://i.pinimg.com/736x/ec/8b/b8/ec8bb8c602b51b3a479b07c038f74b20.jpg',
  },
  {
    name: 'Hampta Pass, Himachal Pradesh',
    description: 'A dramatic crossover from lush valleys of Kullu to barren Spiti landscapes.',
    image: 'https://i.pinimg.com/736x/a6/b1/ce/a6b1cea3ba015379f809745539cd0937.jpg',
  },
  {
    name: 'Sandakphu Trek, West Bengal',
    description: 'Panoramic views of four of the five highest peaks including Mt. Everest and Kanchenjunga.',
    image: 'https://i.pinimg.com/736x/c0/e2/01/c0e201515a4a87647c400e5e1ccff39f.jpg',
  },
  {
    name: 'Tarsar Marsar Trek, Kashmir',
    description: 'Twin alpine lakes nestled in the Kashmir valley, offering serene beauty.',
    image: 'https://i.pinimg.com/736x/ef/14/30/ef1430c776a79226ba8ccaa1b49fff7d.jpg',
  },
  {
    name: 'Dzongri Trek, Sikkim',
    description: 'Gateway to Goecha La, Dzongri offers stunning vistas of the eastern Himalayas.',
    image: 'https://i.pinimg.com/736x/3f/b1/21/3fb121294d0785b75d878cef6d76c9c7.jpg',
  },
  {
    name: 'Rajmachi Fort Trek, Maharashtra',
    description: 'A scenic trek through Sahyadris ending at a historic fort near Lonavala.',
    image: 'https://i.pinimg.com/736x/7e/4f/ab/7e4fabfd5feb69d0e48d062e8c6c0d5e.jpg',
  },
  {
    name: 'Kalsubai Peak, Maharashtra',
    description: 'The highest peak of Maharashtra, perfect for weekend trekking.',
    image: 'https://i.pinimg.com/736x/5e/64/70/5e64702b5b0085155792445c67fd71c9.jpg',
  },
  {
    name: 'Chembra Peak, Kerala',
    description: 'Known for its heart-shaped lake and lush green Western Ghats trails.',
    image: 'https://i.pinimg.com/736x/22/2c/f9/222cf95743fe7d73f4fd85cba9b4681a.jpg',
  },
];

const Trekking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white text-gray-800">
        <Navbar/>
      {/* Hero Section */}
      <div className="relative mt-15 h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/0c/52/ae/0c52ae9947137589b5574a0a515bc451.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Trekking Adventures in India</h1>
          <p className="mt-3 text-base sm:text-lg max-w-2xl">
            Conquer peaks, discover hidden trails, and experience the ultimate adrenaline rush.
          </p>
          <Link to={'/contact'}>
          <button className="mt-5 px-6 py-2 rounded-full bg-green-400 hover:bg-green-300 text-black font-semibold shadow-lg transition">
            Explore Treks
          </button>
          </Link>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-10 px-4 sm:px-12">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10" data-aos="fade-up">Top Trekking Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trekkingDestinations.map((place, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={`${place.image}`} alt={place.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700">{place.name}</h3>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-green-600 py-10 text-white" data-aos="zoom-in">
        <h2 className="text-2xl font-bold">Ready to Challenge the Mountains?</h2>
        <p className="mt-2 text-sm sm:text-base">Let us craft your next trekking adventure with expert guides and top safety standards.</p>
        <Link to={'/contact'}>
        <button className="mt-4 px-6 py-2 rounded-full bg-white text-green-700 font-semibold hover:bg-green-100 transition">
          Plan Your Trek Now
        </button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Trekking;
