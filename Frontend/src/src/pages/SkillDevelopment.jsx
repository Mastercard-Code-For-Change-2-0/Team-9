import { useState } from 'react';
import { 
  Book, 
  Clock, 
  Users, 
  Star, 
  Award, 
  PlayCircle,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const SkillDevelopment = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [skillCategories] = useState([
    { id: 'all', name: 'All Courses', count: 45 },
    { id: 'programming', name: 'Programming', count: 15 },
    { id: 'design', name: 'Design', count: 8 },
    { id: 'marketing', name: 'Marketing', count: 7 },
    { id: 'data', name: 'Data Science', count: 10 },
    { id: 'business', name: 'Business', count: 5 }
  ]);

  const [courses] = useState([
    {
      id: 1,
      title: 'Complete React Development',
      category: 'programming',
      instructor: 'John Smith',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 2547,
      price: 'Free',
      progress: 65,
      isEnrolled: true,
      image: '/api/placeholder/300/200',
      description: 'Master React from basics to advanced concepts including hooks, context, and state management.',
      modules: [
        { name: 'React Fundamentals', completed: true },
        { name: 'State Management', completed: true },
        { name: 'React Router', completed: false },
        { name: 'Advanced Patterns', completed: false }
      ]
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      category: 'design',
      instructor: 'Sarah Johnson',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.7,
      students: 1823,
      price: '₹2,999',
      progress: 0,
      isEnrolled: false,
      image: '/api/placeholder/300/200',
      description: 'Learn the principles of user experience and interface design with hands-on projects.',
      modules: [
        { name: 'Design Thinking', completed: false },
        { name: 'Wireframing', completed: false },
        { name: 'Prototyping', completed: false },
        { name: 'User Testing', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      category: 'marketing',
      instructor: 'Mike Davis',
      duration: '10 weeks',
      level: 'Beginner',
      rating: 4.6,
      students: 3201,
      price: 'Free',
      progress: 30,
      isEnrolled: true,
      image: '/api/placeholder/300/200',
      description: 'Comprehensive course covering SEO, social media marketing, and digital advertising.',
      modules: [
        { name: 'SEO Basics', completed: true },
        { name: 'Social Media Marketing', completed: false },
        { name: 'Google Ads', completed: false },
        { name: 'Analytics', completed: false }
      ]
    },
    {
      id: 4,
      title: 'Python for Data Science',
      category: 'data',
      instructor: 'Dr. Anna Chen',
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.9,
      students: 4156,
      price: '₹4,999',
      progress: 0,
      isEnrolled: false,
      image: '/api/placeholder/300/200',
      description: 'Learn Python programming specifically for data analysis, visualization, and machine learning.',
      modules: [
        { name: 'Python Basics', completed: false },
        { name: 'Data Analysis with Pandas', completed: false },
        { name: 'Data Visualization', completed: false },
        { name: 'Machine Learning', completed: false }
      ]
    },
    {
      id: 5,
      title: 'Node.js Backend Development',
      category: 'programming',
      instructor: 'Alex Rodriguez',
      duration: '9 weeks',
      level: 'Advanced',
      rating: 4.8,
      students: 1967,
      price: '₹3,999',
      progress: 0,
      isEnrolled: false,
      image: '/api/placeholder/300/200',
      description: 'Build scalable backend applications with Node.js, Express, and database integration.',
      modules: [
        { name: 'Node.js Fundamentals', completed: false },
        { name: 'Express Framework', completed: false },
        { name: 'Database Integration', completed: false },
        { name: 'API Security', completed: false }
      ]
    },
    {
      id: 6,
      title: 'Business Strategy Essentials',
      category: 'business',
      instructor: 'Lisa Thompson',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.5,
      students: 892,
      price: 'Free',
      progress: 0,
      isEnrolled: false,
      image: '/api/placeholder/300/200',
      description: 'Understand core business concepts including strategy, operations, and leadership.',
      modules: [
        { name: 'Strategic Planning', completed: false },
        { name: 'Market Analysis', completed: false },
        { name: 'Financial Basics', completed: false },
        { name: 'Leadership Skills', completed: false }
      ]
    }
  ]);

  const [myProgress] = useState({
    totalCourses: 12,
    completedCourses: 3,
    inProgressCourses: 2,
    totalHours: 156,
    certificationsEarned: 3
  });

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Skill Development</h1>
        <p className="text-gray-600">Enhance your skills with curated courses and earn certifications</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Learning Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{myProgress.completedCourses}</div>
            <div className="text-purple-100 text-sm">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{myProgress.inProgressCourses}</div>
            <div className="text-purple-100 text-sm">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{myProgress.totalHours}</div>
            <div className="text-purple-100 text-sm">Hours Learned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{myProgress.certificationsEarned}</div>
            <div className="text-purple-100 text-sm">Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{Math.round((myProgress.completedCourses / myProgress.totalCourses) * 100)}%</div>
            <div className="text-purple-100 text-sm">Completion Rate</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Category Filter */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
            <div className="space-y-2">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Listings */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Course Image */}
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <Book className="text-white" size={48} />
                </div>

                <div className="p-6">
                  {/* Course Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>
                      <p className="text-gray-600 text-sm">by {course.instructor}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500" fill="currentColor" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Progress Bar (if enrolled) */}
                  {course.isEnrolled && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-gray-800">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Course Description */}
                  <p className="text-gray-700 text-sm mb-4">{course.description}</p>

                  {/* Modules Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Course Modules</h4>
                    <div className="space-y-1">
                      {course.modules.slice(0, 3).map((module, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {module.completed ? (
                            <CheckCircle className="text-green-500" size={14} />
                          ) : (
                            <PlayCircle className="text-gray-400" size={14} />
                          )}
                          <span className={module.completed ? 'text-gray-600 line-through' : 'text-gray-700'}>
                            {module.name}
                          </span>
                        </div>
                      ))}
                      {course.modules.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{course.modules.length - 3} more modules
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-800">
                      {course.price}
                    </div>
                    <div className="flex space-x-2">
                      {course.isEnrolled ? (
                        <button 
                          onClick={() => alert(`Continuing ${course.title}...`)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                        >
                          <PlayCircle size={16} />
                          <span>Continue</span>
                        </button>
                      ) : (
                        <>
                          <button 
                            onClick={() => alert(`Previewing ${course.title}...`)}
                            className="border border-blue-600 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            Preview
                          </button>
                          <button 
                            onClick={() => alert(`Enrolling in ${course.title}...`)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Enroll
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Book className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDevelopment;
