import React from 'react';

const StudentCourses = ({ user }) => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      progress: 75,
      image: 'https://via.placeholder.com/300x200',
      description: 'Learn the fundamentals of web development including HTML, CSS, and basic JavaScript.',
      tags: ['beginner', 'web', 'html', 'css']
    },
    {
      id: 2,
      title: 'JavaScript Advanced Concepts',
      instructor: 'Prof. Michael Smith',
      progress: 45,
      image: 'https://via.placeholder.com/300x200',
      description: 'Dive deeper into JavaScript with advanced topics like closures, prototypes, and asynchronous programming.',
      tags: ['intermediate', 'javascript', 'es6']
    },
    {
      id: 3,
      title: 'React & Redux',
      instructor: 'Emily Davis, Tech Lead',
      progress: 10,
      image: 'https://via.placeholder.com/300x200',
      description: 'Master React.js and state management with Redux to build powerful single-page applications.',
      tags: ['advanced', 'react', 'redux']
    },
    {
      id: 4,
      title: 'API Development with Node.js',
      instructor: 'Thomas Wilson',
      progress: 0,
      image: 'https://via.placeholder.com/300x200',
      description: 'Learn to build robust RESTful APIs using Node.js, Express, and MongoDB.',
      tags: ['intermediate', 'node', 'api', 'backend']
    }
  ];

  // Filter courses based on user's program
  const programCourses = courses.filter(course => {
    if (user.program === 'Web Development') {
      return ['beginner', 'intermediate', 'web', 'javascript', 'react'].some(tag => 
        course.tags.includes(tag)
      );
    } else if (user.program === 'Data Science') {
      return ['data', 'python', 'analysis'].some(tag => 
        course.tags.includes(tag)
      );
    }
    return true; // Show all courses if no specific program match
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Courses</h2>
        
        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programCourses.map(course => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-medium text-gray-800 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-3">Instructor: {course.instructor}</p>
                <p className="text-sm text-gray-600 mb-4 flex-1">{course.description}</p>
                
                <div className="mt-auto">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-gray-700">Progress</span>
                    <span className="text-xs font-medium text-gray-700">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className={`h-2 rounded-full ${
                        course.progress === 0 ? 'bg-gray-300' : 'bg-indigo-600'
                      }`}
                      style={{ width: `${course.progress}%` }} 
                    />
                  </div>
                  
                  <button className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm">
                    {course.progress === 0 ? 'Start Course' : 'Continue Learning'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended courses */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended for You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800">DevOps Fundamentals</h3>
            <p className="text-xs text-gray-500 mt-1 mb-2">Based on your interests</p>
            <button className="text-xs text-indigo-600 font-medium">View details →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800">UX/UI Design Basics</h3>
            <p className="text-xs text-gray-500 mt-1 mb-2">Popular in Web Development</p>
            <button className="text-xs text-indigo-600 font-medium">View details →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-medium text-gray-800">Mobile App Development</h3>
            <p className="text-xs text-gray-500 mt-1 mb-2">New course</p>
            <button className="text-xs text-indigo-600 font-medium">View details →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourses;
