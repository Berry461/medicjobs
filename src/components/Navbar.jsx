"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

          {/* Desktop Menu - Only render on client */}
          {isMounted && (
            <div className="hidden md:flex items-center space-x-8">
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setAboutHover(true)}
                onMouseLeave={() => setAboutHover(false)}
              >
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium flex items-center h-full"
                >
                  About Us
                  <svg 
                    className="ml-1 h-4 w-4" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                {aboutHover && (
                  <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    <Link 
                      href="/about/faq" 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm"
                    >
                      FAQs
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/searchjobs" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Search Jobs
              </Link>
              <Link href="/clinicians" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Clinicians
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium ml-4 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
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
            <Link href="/about/faq" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium ml-4 text-sm">
              - FAQs
            </Link>
            <Link href="/searchjobs" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Search Jobs
            </Link>
            <Link href="/clinicians" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Clinicians
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Blog
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md font-medium">
              Contact
            </Link>
            <Link 
              href="/contact" 
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