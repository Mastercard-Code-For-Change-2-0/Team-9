import React, { useState } from 'react';

const StudentCareer = ({ user }) => {
  const [activeTab, setActiveTab] = useState('placements');

  const placements = [
    { id: 1, company: 'Tech Solutions Inc.', position: 'Frontend Developer', status: 'Applied', appliedDate: '2025-01-20', salary: '₹45,000' },
    { id: 2, company: 'Digital Innovations', position: 'Full Stack Developer', status: 'Interview Scheduled', appliedDate: '2025-01-18', salary: '₹50,000' },
    { id: 3, company: 'StartupXYZ', position: 'Web Developer', status: 'Offer Received', appliedDate: '2025-01-15', salary: '₹42,000' }
  ];

  return (
    <div className="space-y-6">
      {/* Career Progress Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Career Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
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

      {/* Placements Section */}
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
              Placements (3)
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
        </div>
      </div>
    </div>
  );
};

export default StudentCareer;
