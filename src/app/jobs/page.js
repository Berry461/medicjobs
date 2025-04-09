'use client';
import { useState } from 'react';
import { specialties, locations, dummyJobs } from '../../constants/jobs';
import JobSearchForm from '../../components/JobSearchForm';
import JobCard from '../../components/JobCard';
import HeroSection from '../../components/HeroSection';

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
        imageUrl="/jobs-page.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <JobSearchForm
          searchParams={searchParams}
          specialties={specialties}
          locations={locations}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
          </h2>

          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
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