import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
      e.preventDefault();
    // Here you can integrate with an API or email service
    setSubmitted(true);
  };

  return (
      <>
      <Navbar/>
    <div className="max-w-3xl mx-auto p-8 pt-28 space-y-8">
      <h1 className="text-5xl font-extrabold text-primary">Get in Touch</h1>
      <p className="text-lg text-gray-700">
        Have questions or want to learn more? Fill out the form below or reach us directly via email or phone. We’re here to help you succeed.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-secondary">Contact Details</h2>
          <p>Email: <a href="mailto:support@devsprint.com" className="text-primary underline">support@devsprint.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-primary underline">+1 (234) 567-890</a></p>
          <p>Address: 123 Code Street, Tech City, USA</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded px-3 py-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded px-3 py-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border rounded px-3 py-2"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="p-6 bg-green-100 border border-green-400 text-green-700 rounded">
            <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
            <p>Your message has been received. We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Contact;
