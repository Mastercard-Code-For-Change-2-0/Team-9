import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    {/* Header Navigation */}
  <header className="bg-white shadow-lg">
  <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Y4D</span>
              </div>
              <span className="text-gray-800 font-semibold text-xl">Career Tracking Platform</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              
              <button
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
  <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Career Tracker Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tracker</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering youth development with comprehensive career tracking, mentorship programs, and achievement monitoring for sustainable career growth.
          </p>
        </div>

        {/* Dashboard Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Recent Opportunities */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Recent Opportunities</h3>
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Software Developer</span>
                <span className="text-sm text-green-600 font-medium">New</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Data Analyst</span>
                <span className="text-sm text-blue-600 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">UX Designer</span>
                <span className="text-sm text-orange-600 font-medium">Pending</span>
              </div>
            </div>
          </div>

          {/* Active Members */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Active Members</h3>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2,847</div>
                <div className="text-gray-600">Total Enrolled</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1,923</div>
                  <div className="text-sm text-gray-600">Active</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">924</div>
                  <div className="text-sm text-gray-600">Graduated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Achievements */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Member Achievements</h3>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Certification Completed</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Job Placement Success</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Skill Development</span>
              </div>
            </div>
          </div>

          {/* Feedback */}
<div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 md:col-span-2">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold text-gray-800">Feedback</h3>
    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </div>
  </div>

  {/* Feedback Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Feedback Block 1 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow-inner">
      <div className="flex items-center mb-3">
        <span className="text-sm font-medium text-gray-700">Paramjeet Singh</span>
        <div className="ml-auto flex text-yellow-400">
          {"★".repeat(5)}
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        "Amazing platform that helped me track my progress and land my dream job!"
      </p>
    </div>

    {/* Feedback Block 2 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow-inner">
      <div className="flex items-center mb-3">
        <span className="text-sm font-medium text-gray-700">Lucky Sharma</span>
        <div className="ml-auto flex text-yellow-400">
          {"★".repeat(5)}
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        "Excellent mentorship and career guidance. Highly recommend!"
      </p>
    </div>
  </div>
</div>


      
        </div>

        {/* Call to Action */}
  <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Youth Career Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using our platform to track, support, and celebrate youth career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;