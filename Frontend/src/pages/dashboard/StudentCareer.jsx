import React, { useState } from 'react';

const StudentCareer = ({ user }) => {
  const [activeTab, setActiveTab] = useState('placements');

  const placements = [
    { id: 1, company: 'Tech Solutions Inc.', position: 'Frontend Developer', status: 'Applied', appliedDate: '2025-01-20', salary: '$45,000' },
    { id: 2, company: 'Digital Innovations', position: 'Full Stack Developer', status: 'Interview Scheduled', appliedDate: '2025-01-18', salary: '$50,000' },
    { id: 3, company: 'StartupXYZ', position: 'Web Developer', status: 'Offer Received', appliedDate: '2025-01-15', salary: '$42,000' }
  ];

  const internships = [
    { id: 1, company: 'WebTech Corp', position: 'Junior Developer Intern', status: 'Completed', duration: '3 months', completedDate: '2024-12-15' },
    { id: 2, company: 'Innovation Labs', position: 'Frontend Intern', status: 'Applied', duration: '6 months', appliedDate: '2025-01-22' }
  ];

  return (
    <div className="space-y-6">
      {/* Career Progress Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Career Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">1</div>
            <div className="text-sm text-gray-600">Internships Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600">Job Applications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">1</div>
            <div className="text-sm text-gray-600">Offers Received</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">65%</div>
            <div className="text-sm text-gray-600">Career Readiness</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('placements')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'placements'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Placements (4)
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'internships'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Internships (5)
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'placements' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">Job Placements</h3>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg">
                  Apply for New Job
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Salary</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {placements.map((placement) => (
                      <tr key={placement.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{placement.company}</div>
                          <div className="text-sm text-gray-500">Applied: {placement.appliedDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{placement.position}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            placement.status === 'Offer Received' ? 'bg-green-100 text-green-800' :
                            placement.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {placement.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{placement.salary}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'internships' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">Internships</h3>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg">
                  Apply for Internship
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {internships.map((internship) => (
                      <tr key={internship.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{internship.company}</div>
                          <div className="text-sm text-gray-500">
                            {internship.status === 'Completed' ? `Completed: ${internship.completedDate}` : `Applied: ${internship.appliedDate}`}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{internship.position}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{internship.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            internship.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {internship.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Email/SMS Notifications */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Notifications</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-900">Interview Invitation - Digital Innovations</div>
              <div className="text-xs text-gray-500">Email • 2 hours ago</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-900">Job Offer Received - StartupXYZ</div>
              <div className="text-xs text-gray-500">SMS • 1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCareer;