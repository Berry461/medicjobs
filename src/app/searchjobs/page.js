"use client"
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

const specialties = [
  "Cardiology",
  "Dermatology",
  "Emergency Medicine",
  "Family Medicine",
  "Gastroenterology",
  "Neurology",
  "Obstetrics/Gynecology",
  "Oncology",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Surgery"
];

const locations = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA"
];

const dummyJobs = [
  {
    id: 1,
    title: "Cardiologist",
    specialty: "Cardiology",
    location: "New York, NY",
    type: "Full-time",
    salary: "$300,000 - $400,000",
    remote: false,
    description: "Seeking board-certified cardiologist for busy metropolitan hospital. Must have 3+ years experience in interventional cardiology."
  },
  {
    id: 2,
    title: "Pediatric Nurse Practitioner",
    specialty: "Pediatrics",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$110,000 - $130,000",
    remote: false,
    description: "Outpatient pediatric clinic seeking NP with 2+ years pediatric experience. Bilingual Spanish preferred."
  },
  {
    id: 3,
    title: "Telepsychiatry Physician",
    specialty: "Psychiatry",
    location: "Remote",
    type: "Contract",
    salary: "$200 - $250/hr",
    remote: true,
    description: "100% remote psychiatry position serving patients via telehealth platform. Must be licensed in multiple states."
  },
  {
    id: 4,
    title: "Emergency Medicine Physician",
    specialty: "Emergency Medicine",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$350,000+",
    remote: false,
    description: "Level II trauma center seeking BC/BE EM physicians. 12-hour shifts with flexible scheduling."
  },
  {
    id: 5,
    title: "Medical Coding Specialist",
    specialty: "Administrative",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $75,000",
    remote: true,
    description: "Remote position for certified medical coder with 3+ years experience in multi-specialty coding."
  }
];

export default function JobSearchPage() {
  const [searchParams, setSearchParams] = useState({
    keywords: "",
    specialty: "",
    location: "",
    remoteOnly: false
  });

  const [filteredJobs, setFilteredJobs] = useState(dummyJobs);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = dummyJobs.filter(job => {
      const matchesKeywords = job.title.toLowerCase().includes(searchParams.keywords.toLowerCase()) || 
                            job.description.toLowerCase().includes(searchParams.keywords.toLowerCase());
      const matchesSpecialty = !searchParams.specialty || job.specialty === searchParams.specialty;
      const matchesLocation = !searchParams.location || job.location === searchParams.location;
      const matchesRemote = !searchParams.remoteOnly || job.remote === true;
      
      return matchesKeywords && matchesSpecialty && matchesLocation && matchesRemote;
    });
    setFilteredJobs(results);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white">
      <HeroSection 
        title="Healthcare Career Opportunities"
        subtitle="Find your perfect medical position"
        showButtons={false}
        bgColor="bg-gray-50"
        textColor="text-gray-900"
        imageUrl="/search-jobs.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Jobs</h2>
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Keywords */}
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                  Keywords
                </label>
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  value={searchParams.keywords}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Job title or description"
                />
              </div>

              {/* Specialty */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                  Specialty
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  value={searchParams.specialty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Specialties</option>
                  {specialties.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                  <option value="Remote">Remote Only</option>
                </select>
              </div>

              {/* Remote Checkbox */}
              <div className="flex items-end">
                <div className="flex items-center h-10">
                  <input
                    id="remoteOnly"
                    name="remoteOnly"
                    type="checkbox"
                    checked={searchParams.remoteOnly}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remoteOnly" className="ml-2 block text-sm text-gray-700">
                    Remote Jobs Only
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search Jobs
              </button>
            </div>
          </form>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
          </h2>

          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {job.specialty}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {job.type}
                        </span>
                        {job.remote && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Remote
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <p className="text-lg font-semibold text-gray-900">{job.salary}</p>
                      <p className="text-sm text-gray-600 mt-1">{job.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{job.description}</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}