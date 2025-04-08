"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Chief of Cardiology",
      content: "This clinic transformed our approach to patient care. Their innovative telemedicine platform allowed us to extend our reach to rural communities while maintaining exceptional care standards.",
      rating: 5
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Long-term Patient",
      content: "After years of chronic pain, the team here developed a personalized treatment plan that finally gave me my life back. Their holistic approach makes all the difference.",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Garcia",
      role: "New Mother",
      content: "The maternity care was exceptional from prenatal through postpartum. I felt educated, empowered, and cared for at every step of my journey.",
      rating: 4
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who've experienced our care firsthand
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-sm p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Vision for Healthcare</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Where We're Going</h4>
              <p className="text-gray-700">
                We're pioneering a future where healthcare is:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accessible to all through telemedicine expansion</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized with AI-assisted diagnostics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Preventative through advanced health monitoring</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">Why It Matters</h4>
              <p className="text-gray-700 mb-4">
                Last year alone, our initiatives resulted in:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">42%</p>
                  <p className="text-sm text-gray-600">Reduction in patient wait times</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">94%</p>
                  <p className="text-sm text-gray-600">Patient satisfaction rate</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">17</p>
                  <p className="text-sm text-gray-600">New communities served</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">5</p>
                  <p className="text-sm text-gray-600">Medical awards won</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}