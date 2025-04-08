"use client"
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance providers including Medicare, Blue Cross Blue Shield, Aetna, and UnitedHealthcare. Please contact our billing department to verify your specific coverage."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule appointments through our online patient portal, by calling our office during business hours, or by using the 'Book Appointment' button on our website. New patients typically need to complete registration forms before their first visit."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your insurance card, photo ID, a list of current medications (including dosages), any relevant medical records, and a completed patient registration form (available on our website)."
    },
    {
      question: "Do you offer telemedicine services?",
      answer: "Yes, we provide secure video consultations for many types of visits. Some conditions may require an in-person follow-up. Telehealth appointments can be scheduled through our patient portal."
    },
    {
      question: "What are your COVID-19 safety protocols?",
      answer: "We follow CDC guidelines including enhanced cleaning procedures, optional mask requirements in clinical areas, and social distancing in waiting rooms. Telehealth options remain available for appropriate cases."
    },
    {
      question: "How do I get prescription refills?",
      answer: "Prescription refill requests should be made through your pharmacy or via our patient portal. Please allow 48 hours for processing. Controlled substances require an office visit for refills."
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our practice"
        showButtons={false}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
        imageUrl="/faq-page.jpg"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center w-full px-6 py-4 text-left ${activeIndex === index ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 transition-colors`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <svg 
                  className={`h-5 w-5 text-blue-600 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div 
                id={`faq-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
              >
                <div className="prose prose-sm text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Our team is happy to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}