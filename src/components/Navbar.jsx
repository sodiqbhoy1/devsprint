import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
           <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Devsprint Logo"
              className="h-16 w-auto" // Adjusted size
              />
              </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <Link to="/" className="text-primary font-medium border-b-2 border-primary px-1">Home</Link>
            <Link to="/courses" className="text-gray-500 hover:text-gray-700 font-medium">Courses</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-700 font-medium">About</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700 font-medium">Contact</Link>
            <Link to="/enroll" className="ml-6 bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-red-400 transition duration-300">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link 
              to="/" 
              className="block text-primary font-semibold border-b-2 border-primary pb-1"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>


            <div className="px-0">
  <Link
    to="/enroll"
    className="w-full block bg-accent text-white py-3 rounded-md font-semibold hover:bg-orange-300 transition duration-300 text-center"
    onClick={() => setIsOpen(false)}
  >
    Enroll Now
  </Link>
</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
