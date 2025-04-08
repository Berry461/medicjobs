"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Exceptional <span className="text-blue-600">Healthcare</span> For Your Family
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Trusted by thousands of patients for comprehensive medical care with compassion and cutting-edge technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/appointment"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Book an Appointment
              </a>
              <a
                href="/services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:w-1/2 relative w-full h-64 sm:h-80 md:h-96"
          >
            <Image
              src="/doctor-patient.jpg" // Replace with your medical image
              alt="Doctor consulting with patient"
              fill
              className="object-contain rounded-lg shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative element */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-lg bg-blue-100"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}