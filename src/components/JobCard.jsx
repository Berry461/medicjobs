import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <Link 
      href={`/jobs/${job.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
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
            <p className="text-sm text-gray-600">{job.location}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{job.description}</p>
      </div>
    </Link>
  );
}