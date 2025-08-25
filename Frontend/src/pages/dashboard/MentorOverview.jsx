import React, { useState } from 'react';
import usersData from '../../data/users.json';

const MentorOverview = ({ user }) => {
  // Filter students (in a real app, this would be the students assigned to this mentor)
  const students = usersData.filter(u => u.role === 'student').slice(0, 3);
  
  // Sample upcoming sessions
  const upcomingSessions = [
    { title: 'JavaScript Basics Q&A', date: '2025-08-27', time: '10:00 - 11:30 AM', students: 12 },
    { title: 'Career Guidance Session', date: '2025-08-28', time: '2:00 - 3:00 PM', students: 1 },
    { title: 'Project Review: E-commerce App', date: '2025-08-30', time: '11:00 AM - 12:00 PM', students: 4 }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Welcome back, {user.name}!</h2>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-600 mb-4">
            You have {upcomingSessions.length} upcoming sessions scheduled for this week.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">This month's progress</p>
              <div className="flex items-center mt-1">
                <div className="w-48 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">75%</span>
              </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Students Mentored</h3>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Sessions This Month</h3>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm">Completion Rate</h3>
              <p className="text-2xl font-bold text-gray-900">92%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions and Students */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">Upcoming Sessions</h3>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {upcomingSessions.map((session, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">{session.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(session.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-xs text-gray-500">{session.time}</p>
                      <p className="text-xs text-gray-500 mt-1">{session.students} student{session.students !== 1 ? 's' : ''}</p>
                    </div>
                    <div>
                      <button className="text-xs bg-indigo-100 text-indigo-800 py-1 px-2 rounded hover:bg-indigo-200">
                        Details
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View All Sessions →
            </button>
          </div>
        </div>

        {/* Students Needing Attention */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">Students Needing Attention</h3>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {students.map((student, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium mr-3">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">{student.name}</h4>
                        <p className="text-xs text-gray-500">{student.program}</p>
                      </div>
                    </div>
                    <button className="text-xs bg-indigo-600 text-white py-1 px-2 rounded hover:bg-indigo-700">
                      Contact
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-800 font-medium">{40 + index * 10}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-indigo-600 h-1.5 rounded-full" 
                        style={{ width: `${40 + index * 10}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-red-600 mt-2">
                      {index === 0 ? 'Missed last session' : (index === 1 ? 'Assignment overdue' : 'Progress stalled')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View All Students →
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
        </div>
        <div className="p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-3 first:pt-0">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    You completed a session with <span className="font-medium">John Doe</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Today, 11:30 AM</p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">Sarah Wilson</span> left a comment on her assignment
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Yesterday, 4:45 PM</p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    You scheduled a new session for <span className="font-medium">JavaScript Basics Q&A</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Aug 24, 2025</p>
                </div>
              </div>
            </li>
          </ul>
          <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            View All Activity →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorOverview;
