'use client';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { allBlogPosts } from '@/constants/blog';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetailPage({ params }) {
  const { id } = use(params);
  const post = allBlogPosts.find(post => post.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <HeroSection 
        title="Medical Insights Blog"
        subtitle="Expert advice and latest research"
        showButtons={false}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
        imageUrl="/blog-page.jpg"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Article Header */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {post.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <p className="text-gray-600">By {post.author} · {post.date}</p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Link */}
        <div className="flex justify-center pt-6 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}