import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = [
  // Same as above, but add content field:
  {
    id: 1,
    title: "5 Essential Health Screenings for Adults Over 40",
    // ... other fields
    content: `<p>Regular health screenings are crucial for detecting potential...</p>`
  }
  // ... other posts
];

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.id.toString() === params.id);

  if (!post) return notFound();

  return (
    <div className="bg-white">
      <HeroSection 
        title={post.title}
        subtitle={`${post.category} • ${post.date}`}
        showButtons={false}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">About the Author</h3>
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/doctor-avatar.jpg"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Board Certified Internal Medicine Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

