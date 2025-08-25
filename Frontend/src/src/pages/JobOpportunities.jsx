import { useState } from 'react';
import { useToast } from '../components/ToastProvider';
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Bookmark,
  Search,
  Filter,
  Star,
  Building,
  X
} from 'lucide-react';

const JobOpportunities = () => {
  const { addToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [salaryFilter, setSalaryFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobListings] = useState([
    {
      id: 1,
      title: 'Junior Full Stack Developer',
      company: 'TechStart Solutions',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      salary: '₹4-6 LPA',
      experience: '0-2 years',
      postedDate: '2 days ago',
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
      description: 'Join our dynamic team as a Junior Full Stack Developer. Work on exciting projects and grow your skills in modern web technologies.',
      requirements: ['Bachelor\'s degree in Computer Science or related field', 'Knowledge of React and Node.js', 'Good problem-solving skills'],
      match: 92,
      saved: false,
      applied: false
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'Digital Innovations',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      salary: '₹5-7 LPA',
      experience: '1-3 years',
      postedDate: '4 days ago',
      skills: ['React', 'Redux', 'TypeScript', 'CSS'],
      description: 'We are looking for a passionate React Developer to join our frontend team and build amazing user experiences.',
      requirements: ['2+ years of React experience', 'Strong knowledge of TypeScript', 'Experience with state management'],
      match: 88,
      saved: true,
      applied: false
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'Growth Labs',
      location: 'Mumbai, Maharashtra',
      type: 'Internship',
      salary: '₹15,000-25,000/month',
      experience: '0-1 years',
      postedDate: '1 week ago',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      description: 'Great opportunity for freshers to start their career in frontend development with mentorship and real-world projects.',
      requirements: ['Basic knowledge of HTML, CSS, JavaScript', 'Eagerness to learn', 'Good communication skills'],
      match: 85,
      saved: false,
      applied: true
    },
    {
      id: 4,
      title: 'Python Developer',
      company: 'DataTech Corp',
      location: 'Delhi, NCR',
      type: 'Full-time',
      salary: '₹6-8 LPA',
      experience: '2-4 years',
      postedDate: '3 days ago',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      description: 'Join our backend team to build scalable applications and work with cutting-edge technologies.',
      requirements: ['Strong Python programming skills', 'Experience with Django framework', 'Database design knowledge'],
      match: 78,
      saved: false,
      applied: false
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      company: 'Creative Studios',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      salary: '₹4-6 LPA',
      experience: '1-3 years',
      postedDate: '5 days ago',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      description: 'Design beautiful and intuitive user interfaces for web and mobile applications.',
      requirements: ['Portfolio showcasing UI/UX projects', 'Proficiency in design tools', 'Understanding of user-centered design'],
      match: 82,
      saved: true,
      applied: false
    }
  ]);

  const [savedJobs, setSavedJobs] = useState(jobListings.filter(job => job.saved).map(job => job.id));
  const [appliedJobs, setAppliedJobs] = useState(jobListings.filter(job => job.applied).map(job => job.id));

  const handleSaveJob = (jobId) => {
    const job = jobListings.find(j => j.id === jobId);
    const isSaved = savedJobs.includes(jobId);
    
    setSavedJobs(prev => 
      isSaved 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
    
    addToast(
      isSaved ? `Removed ${job.title} from saved jobs` : `Saved ${job.title} for later`,
      isSaved ? 'info' : 'success'
    );
  };

  const handleApplyJob = (jobId) => {
    const job = jobListings.find(j => j.id === jobId);
    setAppliedJobs(prev => [...prev, jobId]);
    addToast(`Application submitted for ${job.title}!`, 'success');
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = locationFilter === 'all' || job.location.includes(locationFilter);
    const matchesSalary = salaryFilter === 'all' || 
      (salaryFilter === 'entry' && job.salary.includes('3') || job.salary.includes('4')) ||
      (salaryFilter === 'mid' && (job.salary.includes('5') || job.salary.includes('6'))) ||
      (salaryFilter === 'senior' && (job.salary.includes('7') || job.salary.includes('8')));

    return matchesSearch && matchesLocation && matchesSalary;
  });

  const getMatchColor = (match) => {
    if (match >= 90) return 'bg-green-100 text-green-800';
    if (match >= 80) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Job Opportunities</h1>
        <p className="text-gray-600">Discover career opportunities that match your skills and aspirations</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="all">All Locations</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={salaryFilter}
              onChange={(e) => setSalaryFilter(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="all">All Salaries</option>
              <option value="entry">₹3-4 LPA</option>
              <option value="mid">₹5-6 LPA</option>
              <option value="senior">₹7+ LPA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMatchColor(job.match)}`}>
                    {job.match}% match
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Building size={16} />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{job.postedDate}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="bg-gray-100 px-2 py-1 rounded">{job.type}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2 ml-4">
                <button
                  onClick={() => handleSaveJob(job.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    savedJobs.includes(job.id) 
                      ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark size={20} fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <strong>Requirements:</strong> {job.requirements.slice(0, 2).join(', ')}
                {job.requirements.length > 2 && '...'}
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Details
                </button>
                {appliedJobs.includes(job.id) ? (
                  <button 
                    disabled
                    className="px-4 py-2 bg-green-100 text-green-600 rounded-lg cursor-not-allowed"
                  >
                    Applied
                  </button>
                ) : (
                  <button
                    onClick={() => handleApplyJob(job.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No jobs found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedJob.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Building size={16} />
                      <span>{selectedJob.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{selectedJob.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Salary</h3>
                  <p className="text-lg text-blue-600">{selectedJob.salary}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
                  <p className="text-lg text-gray-700">{selectedJob.experience}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Job Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(selectedJob.match)}`}>
                    {selectedJob.match}% match
                  </span>
                  <span className="text-sm text-gray-500">Posted {selectedJob.postedDate}</span>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleSaveJob(selectedJob.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      savedJobs.includes(selectedJob.id)
                        ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {savedJobs.includes(selectedJob.id) ? 'Saved' : 'Save Job'}
                  </button>
                  {appliedJobs.includes(selectedJob.id) ? (
                    <button 
                      disabled
                      className="px-6 py-2 bg-green-100 text-green-600 rounded-lg cursor-not-allowed"
                    >
                      Applied
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleApplyJob(selectedJob.id);
                        setSelectedJob(null);
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobOpportunities;
