import React from 'react';

const StudentOverview = ({ user }) => {
  // Entity status data
  const entityStatus = {
    documents: { total: 8, verified: 6, pending: 2 },
    signatures: { total: 5, completed: 4, pending: 1 },
    placements: { active: 1, completed: 0, applied: 3 },
    internships: { active: 0, completed: 1, applied: 2 },
    notifications: { email: 12, sms: 3, unread: 5 }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Welcome back, {user.name}!</h2>
            <span className="bg-indigo-800 text-indigo-200 py-1 px-3 rounded-full text-sm">
              {user.status === 'active' ? 'Student' : 'Alumni'}
            </span>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-600">
            Track your documents, career progress, and stay updated with notifications.
          </p>
        </div>
      </div>

      {/* Entity Status Grid - Core 6 entities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* (1) Documents */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Documents</h3>
              <p className="text-2xl font-bold text-gray-900">{entityStatus.documents.total}</p>
              <p className="text-xs text-gray-500">{entityStatus.documents.verified} verified</p>
            </div>
          </div>
        </div>

        {/* (2) Digital Signatures */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Digital Signatures</h3>
              <p className="text-2xl font-bold text-gray-900">{entityStatus.signatures.total}</p>
              <p className="text-xs text-gray-500">{entityStatus.signatures.completed} completed</p>
            </div>
          </div>
        </div>

        {/* (4) Placements */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Placements</h3>
              <p className="text-2xl font-bold text-gray-900">{entityStatus.placements.active}</p>
              <p className="text-xs text-gray-500">{entityStatus.placements.applied} applications</p>
            </div>
          </div>
        </div>


        {/* (6) Career Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Career Progress</h3>
              <p className="text-2xl font-bold text-gray-900">65%</p>
              <p className="text-xs text-gray-500">Overall completion</p>
            </div>
          </div>
        </div>
      </div>

     

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Upload Document</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Sign Document</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H6a2 2 0 00-2-2V4m16 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Apply for Job</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;