import React, { useState } from 'react';

function QueryAssistant() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        alert("Query sent successfully!");
        setFormData({ name: '', email: '', message: '' });
        setShowForm(false);
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (err) {
      alert('Server error!');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl transition duration-300"
      >
        <i className="ri-message-3-line text-2xl" />
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed bottom-24 right-6 w-80 bg-white/60 backdrop-blur-xl shadow-lg rounded-xl p-5 z-50">
          <h2 className="text-lg font-semibold mb-2">Ask a Tour Query</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Your Query"
              value={formData.message}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md"
              rows={3}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Send Query
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default QueryAssistant;
