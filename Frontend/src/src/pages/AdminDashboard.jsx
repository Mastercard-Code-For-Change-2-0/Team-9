import { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Search, 
  Filter,
  Download,
  Eye,
  BarChart3,
  Calendar,
  Award,
  Briefcase
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [stats] = useState({
    totalStudents: 1247,
    activeStudents: 892,
    placedStudents: 234,
    avgSalary: '₹4.8 LPA',
    coursesCompleted: 1876,
    certificationsEarned: 445
  });

  const [studentData] = useState([
    {
      id: 1,
      name: 'Pradeep Kumar',
      course: 'Full Stack Development',
      progress: 75,
      status: 'Active',
      location: 'Bangalore',
      completedSkills: 8,
      totalSkills: 12,
      placementStatus: 'Interview Scheduled',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Anita Sharma',
      course: 'Data Science',
      progress: 90,
      status: 'Placed',
      location: 'Hyderabad',
      completedSkills: 15,
      totalSkills: 16,
      placementStatus: 'Placed at TechCorp',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Rajesh Patel',
      course: 'Digital Marketing',
      progress: 45,
      status: 'Active',
      location: 'Mumbai',
      completedSkills: 6,
      totalSkills: 14,
      placementStatus: 'Job Searching',
      lastActive: '5 hours ago'
    },
    {
      id: 4,
      name: 'Meera Singh',
      course: 'UI/UX Design',
      progress: 85,
      status: 'Active',
      location: 'Delhi',
      completedSkills: 11,
      totalSkills: 13,
      placementStatus: 'Portfolio Review',
      lastActive: '30 minutes ago'
    }
  ]);

  const [recentPlacements] = useState([
    { name: 'Anita Sharma', company: 'TechCorp', role: 'Data Analyst', salary: '₹6.5 LPA', date: '2 days ago' },
    { name: 'Vikram Reddy', company: 'StartupX', role: 'Frontend Developer', salary: '₹5.2 LPA', date: '1 week ago' },
    { name: 'Pooja Gupta', company: 'DigitalFlow', role: 'Marketing Specialist', salary: '₹4.8 LPA', date: '2 weeks ago' }
  ]);

  const filteredStudents = studentData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'active' && student.status === 'Active') ||
                         (selectedFilter === 'placed' && student.status === 'Placed');
    return matchesSearch && matchesFilter;
  });

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Placed': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2">Y4D Admin Dashboard</h1>
        <p className="text-indigo-100">Monitor student progress and track career development outcomes</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-xl font-bold text-gray-800">{stats.totalStudents}</p>
            </div>
            <Users className="text-blue-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Students</p>
              <p className="text-xl font-bold text-gray-800">{stats.activeStudents}</p>
            </div>
            <TrendingUp className="text-green-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Placed Students</p>
              <p className="text-xl font-bold text-gray-800">{stats.placedStudents}</p>
            </div>
            <Briefcase className="text-purple-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Salary</p>
              <p className="text-xl font-bold text-gray-800">{stats.avgSalary}</p>
            </div>
            <BarChart3 className="text-yellow-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Courses Completed</p>
              <p className="text-xl font-bold text-gray-800">{stats.coursesCompleted}</p>
            </div>
            <Calendar className="text-indigo-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Certifications</p>
              <p className="text-xl font-bold text-gray-800">{stats.certificationsEarned}</p>
            </div>
            <Award className="text-orange-600" size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Management */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Student Management</h2>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Students</option>
                <option value="active">Active</option>
                <option value="placed">Placed</option>
              </select>
            </div>
          </div>

          {/* Student Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Student</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Course</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Progress</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2">
                      <div>
                        <p className="font-medium text-gray-800">{student.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={12} className="mr-1" />
                          {student.location}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <p className="text-gray-800">{student.course}</p>
                      <p className="text-sm text-gray-500">{student.completedSkills}/{student.totalSkills} skills</p>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor(student.progress)}`}
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{student.placementStatus}</p>
                    </td>
                    <td className="py-3 px-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Placements */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Placements</h2>
          <div className="space-y-4">
            {recentPlacements.map((placement, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800">{placement.name}</h3>
                <p className="text-gray-600">{placement.role}</p>
                <p className="text-sm text-gray-500">{placement.company}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium text-green-600">{placement.salary}</span>
                  <span className="text-xs text-gray-500">{placement.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium">
            View All Placements
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
