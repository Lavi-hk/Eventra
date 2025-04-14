import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-purple-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">Email</p>
                    <a href="mailto:contact@stepahead.com" className="text-purple-600 hover:text-purple-700">
                      contact@stepahead.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">Address</p>
                    <p className="text-gray-600">
                      123 Business Avenue<br />
                      Tech District, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-gold-400 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">Live Chat</p>
                    <p className="text-gray-600">Available 24/7 for your queries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-900 mb-6">Request a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="influencer">Influencer Marketing</option>
                  <option value="legal">Legal Services</option>
                  <option value="website">Website Development</option>
                  <option value="chatbot">Chatbot Development</option>
                  <option value="digital">Digital Marketing</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
              >
                Request Free Consultation
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;