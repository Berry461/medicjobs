"use client"
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

const specialties = [
  "General Inquiry",
  "Cardiology",
  "Pediatrics",
  "Dermatology",
  "Orthopedics",
  "Neurology",
  "OB/GYN",
  "Family Medicine",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <HeroSection 
        title="Contact Our Medical Team"
        subtitle="We're here to answer your questions"
        showButtons={false}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
        imageUrl="/contact-page.jpg"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
            <p className="text-green-700">
              Your message has been received. Our team will respond within 24-48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Specialty */}
                  <div className="md:col-span-2">
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                      Specialty/Department *
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      {specialties.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Contact Info */}
        {/*<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Our Location</h3>
            <p className="text-gray-600">123 Medical Center Drive</p>
            <p className="text-gray-600">Boston, MA 02115</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Phone:</span> (555) 123-4567
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Email:</span> contact@medicareplus.com
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Hours:</span> Mon-Fri, 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>*/}
      </section>
    </div>
  );
}