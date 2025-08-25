import React from 'react';

const StudentOverview = ({ user }) => {
  // Sample data for the overview page
  const courseProgress = [
    { name: 'Web Development Fundamentals', progress: 75, status: 'In Progress' },
    { name: 'JavaScript Advanced Concepts', progress: 45, status: 'In Progress' },
    { name: 'React & Redux', progress: 10, status: 'Just Started' }
  ];

  const upcomingEvents = [
    { title: 'Career Workshop: Resume Building', date: '2025-08-28', time: '14:00 - 16:00' },
    { title: 'Tech Talk: Future of Web Development', date: '2025-09-02', time: '11:00 - 12:00' },
    { title: 'Mentoring Session: JavaScript', date: '2025-09-05', time: '15:00 - 16:00' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Welcome back, {user.name}!</h2>
            <span className="bg-indigo-800 text-indigo-200 py-1 px-3 rounded-full text-sm">
              {user.program}
            </span>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-600 mb-4">
            Continue where you left off and keep track of your progress in the {user.program} program.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Program completion</p>
              <div className="flex items-center mt-1">
                <div className="w-48 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: '42%' }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">42%</span>
              </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition">
              Resume Learning
            </button>
          </div>
        </div>
      </div>

      {/* Course Progress & Upcoming Events in 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Progress */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">Course Progress</h3>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-6">
              {courseProgress.map((course, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">{course.name}</h4>
                      <span className="text-xs text-gray-500">{course.status}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium mt-2">
                View All Courses →
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">Upcoming Events</h3>
          </div>
          <div className="px-6 py-4">
            <ul className="divide-y divide-gray-200">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="py-3 first:pt-0 last:pb-0">
                  <h4 className="text-sm font-medium text-gray-800">{event.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-xs text-gray-500">{event.time}</p>
                </li>
              ))}
            </ul>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium mt-4">
              View All Events →
            </button>
          </div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Skills Overview</h3>
        </div>
        <div className="px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            Add New Skills →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
