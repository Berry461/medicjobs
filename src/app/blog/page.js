"use client"
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const allBlogPosts = [
  {
    id: 1,
    title: "5 Essential Health Screenings for Adults Over 40",
    excerpt: "Regular health screenings can help detect problems before symptoms appear. This article covers the crucial tests recommended for adults entering middle age, including blood pressure checks, cholesterol tests, diabetes screening, cancer screenings, and bone density scans.",
    category: "Preventive Care",
    date: "May 15, 2023",
    readTime: "4 min read",
    image: "/blog-screenings.jpg"
  },
  {
    id: 2,
    title: "Understanding the Latest Advances in Cardiac Care",
    excerpt: "Cardiology has seen remarkable advancements in recent years. Learn about innovative treatments like TAVR for valve replacement, new anticoagulants, wearable ECG monitors, and AI-assisted diagnostics that are revolutionizing heart disease management.",
    category: "Medical Research",
    date: "April 28, 2023",
    readTime: "6 min read",
    image: "/blog-cardiac.jpg"
  },
  {
    id: 3,
    title: "Nutrition Tips for a Stronger Immune System",
    excerpt: "Your diet plays a crucial role in immune function. Discover the top 10 immune-boosting foods, the importance of gut health, and simple meal planning strategies to help your body fight infections more effectively throughout the year.",
    category: "Healthy Living",
    date: "April 10, 2023",
    readTime: "5 min read",
    image: "/blog-nutrition.jpg"
  },
  {
    id: 4,
    title: "Managing Chronic Pain Naturally",
    excerpt: "Explore non-pharmaceutical approaches to chronic pain management...",
    category: "Patient Care",
    date: "March 22, 2023",
    readTime: "7 min read",
    image: "/blog-pain.jpg"
  },
  {
    id: 5,
    title: "Emotional Intelligence for Resolve Locums",
    excerpt: "The capacity to be aware of, control, and express one’s emotions...",
    category: "Patient Care",
    date: "June 12, 2023",
    readTime: "5 min read",
    image: "/blog-emotions.jpg"
  },
  {
    id: 6,
    title: "Managing Stress in Healthcare Professionals",
    excerpt: "Practical strategies for doctors and nurses to prevent burnout and maintain mental health.",
    category: "Doctor's Advice",
    date: "March 22, 2023",
    readTime: "5 min read",
    image: "/blog-stress.jpg"
  },
  {
    id: 7,
    title: "Pediatric Vaccination Schedule Updates",
    excerpt: "Latest recommendations for childhood immunizations from the CDC.",
    category: "Pediatrics",
    date: "March 15, 2023",
    readTime: "4 min read",
    image: "/blog-vaccines.jpg"
  },
  {
    id: 8,
    title: "The Gut-Brain Connection",
    excerpt: "How your digestive health affects mental wellbeing.",
    category: "Medical Research",
    date: "March 8, 2023",
    readTime: "6 min read",
    image: "/blog-gut.jpg"
  },
  {
    id: 9,
    title: "Exercise Prescription for Seniors",
    excerpt: "Tailored physical activity recommendations for older adults.",
    category: "Healthy Living",
    date: "March 1, 2023",
    readTime: "5 min read",
    image: "/blog-seniors.jpg"
  },
  {
    id: 10,
    title: "Telemedicine Best Practices",
    excerpt: "How to get the most out of your virtual healthcare visits.",
    category: "Patient Care",
    date: "February 22, 2023",
    readTime: "4 min read",
    image: "/blog-telemed.jpg"
  },
  {
    id: 11,
    title: "Understanding Health Insurance",
    excerpt: "A guide to navigating coverage options and benefits.",
    category: "Patient Resources",
    date: "February 15, 2023",
    readTime: "7 min read",
    image: "/blog-insurance.jpg"
  },
  {
    id: 12,
    title: "Seasonal Allergy Management",
    excerpt: "Evidence-based approaches to controlling allergy symptoms.",
    category: "Preventive Care",
    date: "February 8, 2023",
    readTime: "3 min read",
    image: "/blog-allergies.jpg"
  }
];

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  
    // Calculate posts for current page
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  
    return (
      <div className="bg-white">
        <HeroSection 
          title="Medical Insights Blog"
          subtitle={`Page ${currentPage} of ${totalPages}`}
          showButtons={false}
          bgColor="bg-gray-50"
          textColor="text-gray-900"
          imageUrl="/blog-page.jpg"
        />
  
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Full-width blog posts */}
          <div className="space-y-8">
            {currentPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-3 text-gray-300">|</span>
                      <span>{post.date}</span>
                      <span className="mx-3 text-gray-300">|</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Continue Reading
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Functional Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 border rounded-md ${currentPage === number ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Next
              </button>
            </nav>
          </div>
  
          {/* Newsletter Signup */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest health tips and medical news.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }