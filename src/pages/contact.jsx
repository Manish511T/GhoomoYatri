import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import BrandLabel from '../components/brandLabel';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ghoomoyatri-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Server error! Please try again later.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-20 py-20 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Our Company</h1>
        <p className="text-center text-gray-600 mb-12">
          Reach out to us with your questions, feedback, or partnership inquiries. Our team is here to help you.
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us
          </button>

          {submitted && (
            <p className="mt-4 text-green-600 text-sm">
              Thank you for getting in touch! We'll respond to your message as soon as possible.
            </p>
          )}
        </form>

        {/* Company Contact Details */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company Details</h2>
          <p className="text-gray-600">Ghoomo Yatri Pvt. Ltd.</p>
          <p className="text-gray-600">Shop No. 5, Awana Market, Sector-18, Noida, Uttar Pradesh 201301, India</p>
          <p className="text-gray-600">Phone: +91 7065163364</p>
          <p className="text-gray-600">Email: Info@ghoomoyatri.com</p>
        </div>
      </div>
      <BrandLabel/>
      <CallToAction />
      <Footer />
    </>
  );
};

export default ContactUs;
