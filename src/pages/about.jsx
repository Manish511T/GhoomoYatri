import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BrandLabel from '../components/brandLabel';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="w-full h-[70vh] bg-[url('/about-hero.jpg')] bg-cover bg-center flex items-center justify-center relative"
        data-aos="fade"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg" data-aos="fade-up">
            Crafting unforgettable journeys with passion, precision, and personal touch.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At <strong>Ghoomo Yatri</strong>, we’re not just a travel company — we’re your companions in exploration. 
            With years of experience and love for adventure, our goal is to turn your travel dreams into reality.
            Whether it’s serene domestic destinations or exciting international escapes, we’re here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* OUR MISSION & VISION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-emerald-50 rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To create seamless, immersive, and enriching travel experiences for every explorer — through trusted service, honest guidance, and personalized care.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-yellow-50 rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be India’s most loved and reliable travel platform — inspiring people to travel more and explore the wonders of both India and the world.
            </p>
          </div>
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Travel With Us?</h2>
          <p className="text-gray-600 text-lg">
            Because we care, we plan better, and we deliver memories, not just itineraries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            ["🌍", "Wide Destination Network", "From Kashmir to Kerala, Bali to Europe — we cover it all."],
            ["🎯", "Tailored Experiences", "Custom plans crafted to your interests, pace, and budget."],
            ["🛡️", "Safe & Trusted", "Your safety is our top priority. Verified stays and guides."],
            ["📞", "24/7 Customer Support", "Always reachable before, during, and after your trip."],
            ["💰", "Transparent Pricing", "No hidden fees. Honest and competitive prices."],
            ["💼", "Experienced Team", "Travel experts who know the destinations inside out."]
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md ${i % 2 === 0 ? 'bg-white' : 'bg-emerald-50'} hover:shadow-xl transition`}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
              <p className="text-gray-600 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <BrandLabel/>

      <CallToAction />
      <Footer />
    </>
  );
};

export default AboutUs;
