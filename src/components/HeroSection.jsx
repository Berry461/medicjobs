"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection({
  title = "Exceptional Healthcare",
  subtitle = "Compassionate medical professionals",
  showButtons = true,
  imageUrl = "/medical-team.jpg",
  imageAlt = "Healthcare professionals",
  textColor = "text-black",
  bgColor = "bg-white"
}) {
  return (
    <section className={`relative pt-16 min-h-[70vh] flex items-center overflow-hidden ${bgColor} ${textColor}`}>
      {/* Background elements - reduced size */}
      <div className="absolute inset-0 opacity-10 md:opacity-15">
        <div className="absolute top-12 left-8 w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-500 mix-blend-overlay filter blur-lg animate-float"></div>
        <div className="absolute bottom-8 right-8 w-36 h-36 md:w-56 md:h-56 rounded-full bg-purple-500 mix-blend-overlay filter blur-lg animate-float-delay"></div>
      </div>

      {/* Tighter padding container */}
      <div className="container mx-auto px-4 sm:px-6 py-8 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
          {/* Text content - reduced margins */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-1/2"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-md opacity-90">
              {subtitle}
            </p>
            
            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="/appointment"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-center transition-colors text-sm md:text-base"
                >
                  Book Appointment
                </a>
                <a
                  href="/services"
                  className="border-2 border-current px-6 py-2 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  Our Services
                </a>
              </motion.div>
            )}
          </motion.div>

          {/* Image - slightly smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}