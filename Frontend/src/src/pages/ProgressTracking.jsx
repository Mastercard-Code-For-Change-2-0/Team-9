import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar,
  Download,
  Filter,
  Building,
  GraduationCap,
  Target
} from 'lucide-react';

const ProgressTracking = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const [progressStats] = useState({
    totalStudents: 1247,
    activeStudents: 892,
    completedPrograms: 234,
    avgCompletionTime: '8.5 months',
    placementRate: 78,
    avgSalaryIncrease: 145
  });

  const [skillsProgress] = useState([
    { skill: 'JavaScript', enrolled: 450, completed: 387, inProgress: 63, avgScore: 85 },
    { skill: 'React', enrolled: 380, completed: 295, inProgress: 85, avgScore: 82 },
    { skill: 'Python', enrolled: 320, completed: 267, inProgress: 53, avgScore: 88 },
    { skill: 'UI/UX Design', enrolled: 285, completed: 198, inProgress: 87, avgScore: 79 },
    { skill: 'Digital Marketing', enrolled: 245, completed: 189, inProgress: 56, avgScore: 83 },
    { skill: 'Data Science', enrolled: 195, completed: 134, inProgress: 61, avgScore: 86 }
  ]);

  const [geographicData] = useState([
    { location: 'Bangalore', students: 325, placements: 267, avgSalary: '₹5.2 LPA' },
    { location: 'Hyderabad', students: 287, placements: 223, avgSalary: '₹4.8 LPA' },
    { location: 'Mumbai', students: 245, placements: 189, avgSalary: '₹5.5 LPA' },
    { location: 'Delhi NCR', students: 198, placements: 145, avgSalary: '₹5.1 LPA' },
    { location: 'Pune', students: 156, placements: 121, avgSalary: '₹4.7 LPA' },
    { location: 'Chennai', students: 134, placements: 98, avgSalary: '₹4.5 LPA' }
  ]);

  const [monthlyData] = useState([
    { month: 'Jan', enrollments: 89, completions: 45, placements: 23 },
    { month: 'Feb', enrollments: 156, completions: 78, placements: 34 },
    { month: 'Mar', enrollments: 134, completions: 89, placements: 45 },
    { month: 'Apr', enrollments: 198, completions: 123, placements: 67 },
    { month: 'May', enrollments: 167, completions: 145, placements: 78 },
    { month: 'Jun', enrollments: 189, completions: 167, placements: 89 }
  ]);

  const [impactMetrics] = useState([
    {
      category: 'Career Advancement',
      metrics: [
        { name: 'Job Placement Rate', value: '78%', trend: '+12%' },
        { name: 'Salary Increase', value: '145%', trend: '+23%' },
        { name: 'Career Change Success', value: '65%', trend: '+8%' }
      ]
    },
    {
      category: 'Skill Development',
      metrics: [
        { name: 'Course Completion Rate', value: '89%', trend: '+5%' },
        { name: 'Skill Assessment Score', value: '84/100', trend: '+7%' },
        { name: 'Certification Success', value: '92%', trend: '+3%' }
      ]
    },
    {
      category: 'Engagement',
      metrics: [
        { name: 'Program Retention', value: '91%', trend: '+4%' },
        { name: 'Active Learning Hours', value: '156 hrs', trend: '+15%' },
        { name: 'Peer Interaction', value: '73%', trend: '+9%' }
      ]
    }
  ]);

  const getCompletionRate = (skill) => {
    return Math.round((skill.completed / skill.enrolled) * 100);
  };

  const getPlacementRate = (location) => {
    return Math.round((location.placements / location.students) * 100);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Progress Tracking & Impact Assessment</h1>
          <p className="text-gray-600">Monitor long-term career development outcomes and program effectiveness</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
            <option value="all">All Time</option>
          </select>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">{progressStats.totalStudents}</p>
            </div>
            <Users className="text-blue-600" size={24} />
          </div>
          <p className="text-sm text-green-600 mt-2">+12% from last period</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Students</p>
              <p className="text-2xl font-bold text-gray-800">{progressStats.activeStudents}</p>
            </div>
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <p className="text-sm text-green-600 mt-2">91% retention rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed Programs</p>
              <p className="text-2xl font-bold text-gray-800">{progressStats.completedPrograms}</p>
            </div>
            <GraduationCap className="text-purple-600" size={24} />
          </div>
          <p className="text-sm text-purple-600 mt-2">89% completion rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Completion Time</p>
              <p className="text-2xl font-bold text-gray-800">{progressStats.avgCompletionTime}</p>
            </div>
            <Calendar className="text-orange-600" size={24} />
          </div>
          <p className="text-sm text-orange-600 mt-2">-15% from target</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Placement Rate</p>
              <p className="text-2xl font-bold text-gray-800">{progressStats.placementRate}%</p>
            </div>
            <Building className="text-indigo-600" size={24} />
          </div>
          <p className="text-sm text-indigo-600 mt-2">+8% from last period</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Salary Increase</p>
              <p className="text-2xl font-bold text-gray-800">{progressStats.avgSalaryIncrease}%</p>
            </div>
            <Target className="text-green-600" size={24} />
          </div>
          <p className="text-sm text-green-600 mt-2">Exceeds industry avg</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Progress */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills Training Progress</h2>
          <div className="space-y-4">
            {skillsProgress.map((skill, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{skill.skill}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{skill.completed}/{skill.enrolled} completed</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {skill.avgScore}/100
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${getCompletionRate(skill)}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {getCompletionRate(skill)}%
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{skill.completed} completed</span>
                  <span>{skill.inProgress} in progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Geographic Impact</h2>
          <div className="space-y-4">
            {geographicData.map((location, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-gray-400" size={16} />
                    <h3 className="font-medium text-gray-800">{location.location}</h3>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {getPlacementRate(location)}% placed
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Students</p>
                    <p className="font-semibold">{location.students}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Placements</p>
                    <p className="font-semibold text-green-600">{location.placements}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Avg Salary</p>
                    <p className="font-semibold">{location.avgSalary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Long-term Impact Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactMetrics.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 border-b pb-2">{category.category}</h3>
              <div className="space-y-3">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">{metric.name}</p>
                      <p className="text-lg font-semibold text-gray-800">{metric.value}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {monthlyData.map((data, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-3">{data.month}</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-600">Enrollments</p>
                  <p className="text-lg font-semibold text-blue-600">{data.enrollments}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Completions</p>
                  <p className="text-lg font-semibold text-green-600">{data.completions}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Placements</p>
                  <p className="text-lg font-semibold text-purple-600">{data.placements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
