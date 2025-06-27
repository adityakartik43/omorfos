import React from 'react';
import { FaFacebook, FaPhoneAlt , FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-600">Omorfos Group</h2>
          <p className="text-sm mt-2 text-gray-500">
            Inspiring beauty and innovation across the globe.  
          </p>
        </div>

        {/* Social Media */}
        <div className='md:items-end md:text-end  items-center text-end flex flex-col text-gray-900'>
          <h3 className="text-lg font-semibold mb-2 text-gray-500">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-red-600 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPhoneAlt /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Omorfos Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
