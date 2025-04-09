'use client';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { use } from 'react';
import { dummyJobs } from '@/constants/jobs';
import ApplicationForm from '@/components/ApplicationForm';

export default function JobDetailPage({ params }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const { id } = use(params);
  const job = dummyJobs.find(job => job.id === Number(id));

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-8 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          ← Back to Jobs
        </button>

        {/* Job Header Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{job.specialty}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
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
            <div className="mt-4 md:mt-0">
              {job.startDate && (
                <p className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-md">
                  Start Date: {job.startDate}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Job Details Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Description Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <div className="prose max-w-none text-gray-700">
                {job.detailedDescription}
              </div>
            </section>

            {/* Requirements Section */}
            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(job.requirements).map(([category, items]) => (
                  <div key={category} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <ul className="space-y-2 list-disc pl-5 text-gray-700">
                      {items.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Position Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type:</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                {job.schedule && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium">{job.schedule}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Application CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-medium text-gray-900">Ready to apply?</h3>
                <p className="text-gray-600 mt-1">Submit your application for this position</p>
              </div>
              <button
                onClick={() => setShowApplicationForm(true)}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      </div>

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