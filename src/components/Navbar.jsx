import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center"> {/* Increased height to h-24 */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={logo} 
                alt="Devsprint Logo"
                className="h-16 w-auto" // Increased from h-10 to h-16
              />
            </div>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-primary font-medium border-b-2 border-primary px-1">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">Courses</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
              Sign Up
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="text-primary block px-3 py-2 font-medium">Home</a>
            <a href="#" className="text-gray-700 block px-3 py-2 font-medium">Courses</a>
            <a href="#" className="text-gray-700 block px-3 py-2 font-medium">About</a>
            <a href="#" className="text-gray-700 block px-3 py-2 font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;