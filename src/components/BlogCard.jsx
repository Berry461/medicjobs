import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
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
  );
}