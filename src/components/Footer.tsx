import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gold-400">Eventra</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming businesses with innovative solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-gold-400">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-gold-400">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-gold-400">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-gold-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold-400 mr-2" />
                <a href="mailto:contact@stepahead.com" className="text-gray-300 hover:text-gold-400">
                  contact@stepahead.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-400 mr-2" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold-400">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-400 mr-2 mt-1" />
                <span className="text-gray-300">
                  123 Business Avenue<br />
                  Tech District, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Eventra. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-gold-400">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-gold-400">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-gold-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;