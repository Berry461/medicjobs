/*"use client"
import React from 'react'

const Navbar = () => {

   const [isClicked, setIsClicked] = React.useState(false);

   const toggleNavbar = () => {
      setIsClicked(!isClicked);
   }
  return (
    <>
    <nav className="bg-yellow-600">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
               <div className="flex-shrink-0">
                   <a href="/" className="text-white">
                      Logo
                   </a>
               </div>
            </div>
            <div className="hidden md:block">
               <div className="ml-4 flex items-center space-x-4">
                  <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                     About
                  </a>
                  <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                     Search Jobs
                  </a>
                  <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                     Clinicians
                  </a>
                  <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                     Blog
                  </a>
                  <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                     Contact
                  </a>
               </div>
            </div>
            <div className="md:hidden flex items-center">
               <button
               className="inline-flex items-center justify-center p-2 rounded-md text-white
               hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
               onClick={toggleNavbar}
               >
               {isClicked ? (
                  <svg
                 className="h-6 w-6"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"
                  />
                  </svg>
               ) : (
                  <svg
                     className="h-6 w-6"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M4 6h16M4 12h16m-7 6h7"
                  />
                  </svg>
               )}
               </button>
            </div>
         </div>    
         {isClicked && (
            <div className="md:hidden">
               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                     About
                  </a>
                  <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                     Search Jobs
                  </a>
                  <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                     Clinicians
                  </a>
                  <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                     Blog
                  </a>
                  <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                     Contact
                  </a>
               </div>
            </div>
         )}   
       </div>
    </nav>
    </>
  )
}

export default Navbar*/
"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MediCare<span className="text-green-600">+</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Search Jobs
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Clinicians
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Contact
            </Link>
            <Link 
              href="/appointment" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium ml-4 transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              About Us
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Search Jobs
            </Link>
            <Link href="/doctors" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Clinicians
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Blog
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Contact
            </Link>
            <Link 
              href="/appointment" 
              className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium mt-2 text-center transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}