"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> {/* Changed from 4 to 3 columns */}
          
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">MediCare+ Clinic</h3>
            <p className="mb-4 text-gray-300">
              Providing compassionate healthcare with cutting-edge technology since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/searchjobs" className="text-gray-400 hover:text-white transition-colors">Search Jobs</Link></li>
              <li><Link href="/clinicians" className="text-gray-400 hover:text-white transition-colors">Clinicians</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-2 text-blue-400" size={18} />
                <span className="text-gray-400">123 Medical Drive, Health City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2 text-blue-400" size={18} />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-blue-400" size={18} />
                <span className="text-gray-400">info@medicareplus.com</span>
              </li>
              <li className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Emergency Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} MediCare+ Clinic. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/hipaa-compliance" className="text-gray-400 hover:text-white transition-colors">
              HIPAA Compliance
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}