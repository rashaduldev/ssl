import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import CommonNav from './CommonNav';

// eslint-disable-next-line react/prop-types
const BottomNavbar = ({ isHidden }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full bg-transparent py-4 z-10 transition-opacity duration-300 ${
        isHidden ? 'navbar-slide-up' : 'relative'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to={'/'}>
          <div>
            <img className="w-16 h-14 ml-10" src="https://i.ibb.co.com/n8mynVc/logo.jpg" alt="Logo" />
            <p className="text-sm italic pt-1 font-bold">100% Export Oriented</p>
          </div>
        </NavLink>
        
        {/* Menu Icon */}
        <div className="md:hidden">
          <CiMenuFries
            size={24}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Static Navigation Links */}
        <ul className="md:flex space-x-6 hidden md:block text-gray-800">
        <CommonNav/>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start bg-white p-4 space-y-2 text-gray-800 md:hidden">
          <CommonNav/>
        </ul>
      )}
    </nav>
  );
};

export default BottomNavbar;
