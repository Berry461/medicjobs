'use client';

export default function JobSearchForm({ 
  searchParams, 
  specialties, 
  locations, 
  onInputChange, 
  onSearch 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Jobs</h2>
      <form onSubmit={onSearch}>
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
                onChange={onInputChange}
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
  );
}