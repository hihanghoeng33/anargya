"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div
          className={`h-0.5 w-6 bg-cyan-400 transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-0.5 rotate-45' : '-translate-y-1'
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 bg-cyan-400 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 bg-cyan-400 transition-all duration-300 ease-in-out ${
            isOpen ? '-translate-y-0.5 -rotate-45' : 'translate-y-1'
          }`}
        ></div>
      </button>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-300 md:hidden" 
          onClick={toggleMenu} 
        ></div>
      )}
      <nav
        className={`fixed top-20 right-0 h-auto w-3/4 max-w-80 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-expanded={isOpen}
      >
        <div className="flex h-full flex-col bg-gray-800 p-8 pt-8 text-blue-400">
          <Link href="#" className="mb-4 text-lg hover:bg-blue-400 hover:text-[#FFFAFF]" onClick={toggleMenu}>
            Models
          </Link>
          <Link href="#" className="mb-4 text-lg hover:bg-blue-400 hover:text-[#FFFAFF]" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link href="#" className="mb-4 text-lg hover:text-[#FFFAFF]" onClick={toggleMenu}>
            Achievements
          </Link>
          <Link href="#" className="mb-4 text-lg hover:text-[#FFFAFF]" onClick={toggleMenu}>
            Store
          </Link>
          <Link href="#" className="mb-4 text-lg hover:text-[#FFFAFF]" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;