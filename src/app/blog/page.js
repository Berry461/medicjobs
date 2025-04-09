'use client';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';
import { allBlogPosts } from '@/constants/blog';

const POSTS_PER_PAGE = 4;

export default function BlogListingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  
  const currentPosts = allBlogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 5; // Maximum pages to show in pagination
    
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
    
    return visiblePages;
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
                    priority={currentPage === 1 && post.id === currentPosts[0].id}
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
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                  >
                    Continue Reading
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div className="mt-12 flex items-center justify-between">
          <div>
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Previous
            </button>
          </div>
          
          <div className="hidden sm:flex items-center space-x-1">
            {getVisiblePages().map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 flex items-center justify-center border rounded-md ${currentPage === number ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                {number}
              </button>
            ))}
            
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className="px-2">...</span>
            )}
            
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button
                onClick={() => paginate(totalPages)}
                className={`w-10 h-10 flex items-center justify-center border rounded-md ${currentPage === totalPages ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                {totalPages}
              </button>
            )}
          </div>
          
          <div>
            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Mobile Pagination (simple version) */}
        <div className="mt-6 sm:hidden flex items-center justify-center space-x-2">
          <button 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            Previous
          </button>
          
          <span className="text-gray-700">
            {currentPage} of {totalPages}
          </span>
          
          <button 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}