import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: '2,500+',
      label: 'Youth Beneficiaries Tracked',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '85%',
      label: 'Job Placement Success Rate',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: '95%',
      label: 'Data Accuracy Improvement',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: '50+',
      label: 'Partner Organizations',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transforming Youth Career Tracking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform has revolutionized how Y4D tracks and supports the career development 
            of skilled youth, delivering measurable impact across communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Impact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Real Impact, Real Results</h3>
              <p className="text-blue-100 mb-6">
                Our comprehensive tracking system has helped Y4D demonstrate concrete 
                outcomes to stakeholders, secure additional funding, and most importantly, 
                ensure no skilled youth is left behind in their career journey.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">18 months</div>
                  <div className="text-sm text-blue-200">Average tracking period</div>
                </div>
                <div className="w-px h-12 bg-blue-400"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-sm text-blue-200">Retention rate</div>
                </div>
                <div className="w-px h-12 bg-blue-400"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-sm text-blue-200">User satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Career Growth Tracking</span>
                    <div className="w-24 h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Skills Development</span>
                    <div className="w-24 h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Program Effectiveness</span>
                    <div className="w-24 h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
