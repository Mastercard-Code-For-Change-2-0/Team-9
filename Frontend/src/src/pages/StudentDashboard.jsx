import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Clock, 
  Award,
  Book,
  Briefcase,
  Users
} from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [progressData] = useState({
    overallProgress: 75,
    skillsCompleted: 8,
    totalSkills: 12,
    jobApplications: 15,
    interviewsScheduled: 3,
    coursesCompleted: 5,
    certificationsEarned: 2
  });

  const [recentActivities] = useState([
    { id: 1, type: 'skill', title: 'Completed React Advanced Course', date: '2 days ago', status: 'completed' },
    { id: 2, type: 'job', title: 'Applied for Frontend Developer at TechCorp', date: '3 days ago', status: 'pending' },
    { id: 3, type: 'interview', title: 'Interview scheduled with StartupX', date: '5 days ago', status: 'upcoming' },
    { id: 4, type: 'certification', title: 'AWS Cloud Practitioner Certified', date: '1 week ago', status: 'completed' }
  ]);

  const [jobRecommendations] = useState([
    {
      id: 1,
      title: 'Junior Full Stack Developer',
      company: 'TechStart Solutions',
      location: 'Bangalore',
      salary: '₹4-6 LPA',
      match: 92,
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'Digital Innovations',
      location: 'Hyderabad',
      salary: '₹5-7 LPA',
      match: 88,
      posted: '4 days ago'
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'Growth Labs',
      location: 'Mumbai',
      salary: '₹3-4 LPA',
      match: 85,
      posted: '1 week ago'
    }
  ]);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'skill': return <Book className="text-blue-500" size={20} />;
      case 'job': return <Briefcase className="text-green-500" size={20} />;
      case 'interview': return <Users className="text-purple-500" size={20} />;
      case 'certification': return <Award className="text-yellow-500" size={20} />;
      default: return <CheckCircle className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Pradeep!</h1>
        <p className="text-blue-100">Continue building your career path. You're {progressData.overallProgress}% towards your goals!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overall Progress</p>
              <p className="text-2xl font-bold text-gray-800">{progressData.overallProgress}%</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressData.overallProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Skills Mastered</p>
              <p className="text-2xl font-bold text-gray-800">{progressData.skillsCompleted}/{progressData.totalSkills}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Target className="text-green-600" size={24} />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+2 this month</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Job Applications</p>
              <p className="text-2xl font-bold text-gray-800">{progressData.jobApplications}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Briefcase className="text-purple-600" size={24} />
            </div>
          </div>
          <p className="text-sm text-purple-600 mt-2">{progressData.interviewsScheduled} interviews scheduled</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Certifications</p>
              <p className="text-2xl font-bold text-gray-800">{progressData.certificationsEarned}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Award className="text-yellow-600" size={24} />
            </div>
          </div>
          <p className="text-sm text-yellow-600 mt-2">Latest: AWS Cloud Practitioner</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                {getActivityIcon(activity.type)}
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600">{activity.date}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => navigate('/progress')}
            className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Activities
          </button>
        </div>

        {/* Job Recommendations */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Jobs</h2>
          <div className="space-y-4">
            {jobRecommendations.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{job.title}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {job.match}% match
                  </span>
                </div>
                <p className="text-gray-600 mb-1">{job.company}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{job.location} • {job.salary}</span>
                  <span>{job.posted}</span>
                </div>
                <button 
                  onClick={() => navigate('/jobs')}
                  className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          <button 
            onClick={() => navigate('/jobs')}
            className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Jobs
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => navigate('/skills')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <Book className="mx-auto mb-2 text-blue-600" size={24} />
            <span className="text-sm font-medium text-gray-700">Take Course</span>
          </button>
          <button 
            onClick={() => navigate('/jobs')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <Briefcase className="mx-auto mb-2 text-green-600" size={24} />
            <span className="text-sm font-medium text-gray-700">Search Jobs</span>
          </button>
          <button 
            onClick={() => alert('Certification portal coming soon!')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <Award className="mx-auto mb-2 text-yellow-600" size={24} />
            <span className="text-sm font-medium text-gray-700">Get Certified</span>
          </button>
          <button 
            onClick={() => alert('Networking feature coming soon!')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <Users className="mx-auto mb-2 text-purple-600" size={24} />
            <span className="text-sm font-medium text-gray-700">Network</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
