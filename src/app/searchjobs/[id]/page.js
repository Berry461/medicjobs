'use client';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { dummyJobs } from '@/constants/jobs';
import ApplicationForm from '@/components/ApplicationForm';
import HeroSection from '@/components/HeroSection';

export default function JobDetailPage({ params }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const job = dummyJobs.find(job => job.id === Number(params.id));

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-white">
      <HeroSection 
        title={job.title}
        subtitle={`${job.type} Position in ${job.location}`}
        showButtons={false}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Job Header */}
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {job.specialty}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {job.type}
              </span>
              {job.remote && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Remote
                </span>
              )}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {job.location}
              </span>
            </div>
          </div>

          {/* Job Content */}
          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Job Description</h2>
              <p className="mt-4 text-gray-700 whitespace-pre-line">{job.detailedDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Requirements</h2>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {Object.entries(job.requirements).map(([category, items]) => (
                  <div key={category} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {job.benefits && job.benefits.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-900">Benefits</h2>
                <ul className="mt-4 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-disc pl-5 text-gray-700">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Application CTA */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowApplicationForm(true)}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationForm 
          job={job}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
}
