import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import MentorOverview from './MentorOverview';
import MentorStudents from './MentorStudents';

const MentorDashboard = ({ user }) => {
  // Navigation items for the mentor dashboard
  const navigationItems = [
    {
      name: 'Overview',
      path: '/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      name: 'My Students',
      path: '/dashboard/students',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      name: 'Courses',
      path: '/dashboard/courses',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      name: 'Schedule',
      path: '/dashboard/schedule',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Profile',
      path: '/dashboard/profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <DashboardLayout
      user={user}
      navigationItems={navigationItems}
      title="Mentor Dashboard"
    >
      <Routes>
        <Route path="/" element={<MentorOverview user={user} />} />
        <Route path="/students" element={<MentorStudents user={user} />} />
        <Route path="/courses" element={<MentorCourses user={user} />} />
        <Route path="/schedule" element={<MentorSchedule user={user} />} />
        <Route path="/profile" element={<MentorProfile user={user} />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DashboardLayout>
  );
};

// Placeholder components for mentor routes
const MentorCourses = ({ user }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">My Courses</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="h-40 bg-indigo-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">Web Development Fundamentals</h3>
          <p className="text-sm text-gray-500 mt-1">24 students enrolled</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs font-medium text-indigo-600">8 sessions completed</span>
            <button className="bg-indigo-600 text-white text-sm py-1 px-3 rounded hover:bg-indigo-700">
              View Course
            </button>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="h-40 bg-green-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">JavaScript Advanced Concepts</h3>
          <p className="text-sm text-gray-500 mt-1">18 students enrolled</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs font-medium text-indigo-600">5 sessions completed</span>
            <button className="bg-indigo-600 text-white text-sm py-1 px-3 rounded hover:bg-indigo-700">
              View Course
            </button>
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="h-40 bg-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">Database Design</h3>
          <p className="text-sm text-gray-500 mt-1">12 students enrolled</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs font-medium text-indigo-600">3 sessions completed</span>
            <button className="bg-indigo-600 text-white text-sm py-1 px-3 rounded hover:bg-indigo-700">
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-6 text-center">
      <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm inline-flex items-center">
        Request New Course
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </div>
);

const MentorSchedule = ({ user }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">My Schedule</h2>
    
    <div className="flex justify-between items-center mb-6">
      <div className="flex space-x-4">
        <button className="px-3 py-1 rounded bg-indigo-100 text-indigo-800">Today</button>
        <button className="px-3 py-1 rounded text-gray-600 hover:bg-gray-100">Week</button>
        <button className="px-3 py-1 rounded text-gray-600 hover:bg-gray-100">Month</button>
      </div>
      <div className="flex space-x-2">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="grid grid-cols-7 text-center bg-gray-50 border-b border-gray-200">
        <div className="py-2 text-sm font-medium text-gray-500">Mon</div>
        <div className="py-2 text-sm font-medium text-gray-500">Tue</div>
        <div className="py-2 text-sm font-medium text-gray-500">Wed</div>
        <div className="py-2 text-sm font-medium text-gray-500">Thu</div>
        <div className="py-2 text-sm font-medium text-gray-500">Fri</div>
        <div className="py-2 text-sm font-medium text-gray-500">Sat</div>
        <div className="py-2 text-sm font-medium text-gray-500">Sun</div>
      </div>
      
      {/* Week calendar grid */}
      <div className="grid grid-cols-7 grid-rows-5 gap-px bg-gray-200">
        {/* Row 1 */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`row1-${i}`} className="min-h-[100px] bg-white p-1">
            <div className="text-right text-xs text-gray-500 mb-1">
              {i === 3 ? '25' : (i === 4 ? '26' : (i === 5 ? '27' : (i === 6 ? '28' : '')))}
            </div>
            {i === 3 && (
              <div className="bg-indigo-100 border-l-4 border-indigo-600 rounded p-1 text-xs">
                <p className="font-medium text-indigo-800">10:00 AM</p>
                <p className="text-indigo-800">JavaScript Class</p>
              </div>
            )}
          </div>
        ))}
        
        {/* Row 2 */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`row2-${i}`} className="min-h-[100px] bg-white p-1">
            <div className="text-right text-xs text-gray-500 mb-1">
              {i === 0 ? '29' : (i === 1 ? '30' : (i === 2 ? '31' : (i === 3 ? '1' : (i === 4 ? '2' : (i === 5 ? '3' : '4')))))}
            </div>
            {i === 1 && (
              <div className="bg-green-100 border-l-4 border-green-600 rounded p-1 text-xs">
                <p className="font-medium text-green-800">2:00 PM</p>
                <p className="text-green-800">Student Meeting</p>
              </div>
            )}
            {i === 4 && (
              <div className="bg-blue-100 border-l-4 border-blue-600 rounded p-1 text-xs">
                <p className="font-medium text-blue-800">11:00 AM</p>
                <p className="text-blue-800">Database Workshop</p>
              </div>
            )}
          </div>
        ))}
        
        {/* Rows 3-5 */}
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={`row3-5-${i}`} className="min-h-[100px] bg-white p-1">
            <div className="text-right text-xs text-gray-500 mb-1">
              {5 + i}
            </div>
            {i === 3 && (
              <div className="bg-purple-100 border-l-4 border-purple-600 rounded p-1 text-xs">
                <p className="font-medium text-purple-800">3:30 PM</p>
                <p className="text-purple-800">Project Review</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-6">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Schedule New Session
      </button>
    </div>
  </div>
);

const MentorProfile = ({ user }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className="bg-indigo-600 px-6 py-12 flex flex-col items-center">
      <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-indigo-600 mb-4">
        {user.name.split(' ').map(n => n[0]).join('')}
      </div>
      <h2 className="text-2xl font-bold text-white">{user.name}</h2>
      <p className="text-indigo-200 mt-1">Mentor - {user.program}</p>
    </div>
    
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900">@{user.username}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Program</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.program}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900">+1 (555) 123-4567</dd>
            </div>
          </dl>
          <div className="mt-6">
            <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded transition">
              Edit Profile
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-4">Availability</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Monday</span>
              <span className="text-sm font-medium text-gray-900">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Tuesday</span>
              <span className="text-sm font-medium text-gray-900">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Wednesday</span>
              <span className="text-sm font-medium text-gray-900">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Thursday</span>
              <span className="text-sm font-medium text-gray-900">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Friday</span>
              <span className="text-sm font-medium text-gray-900">9:00 AM - 3:00 PM</span>
            </div>
          </div>
          <div className="mt-6">
            <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded transition">
              Update Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MentorDashboard;
