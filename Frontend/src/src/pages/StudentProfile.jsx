import { useState } from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Star,
  Edit,
  Save,
  X
} from 'lucide-react';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Pradeep Kumar',
    email: 'pradeep.kumar@email.com',
    phone: '+91 9876543210',
    location: 'Bangalore, Karnataka',
    age: 23,
    education: 'B.Tech Computer Science',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    experience: '1 year internship at Tech Startup',
    careerGoal: 'Full Stack Developer',
    interests: ['Web Development', 'Machine Learning', 'Mobile Apps']
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const handleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <User className="text-blue-600" size={40} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-blue-100">{profile.careerGoal}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GraduationCap size={16} />
                    <span>{profile.education}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2"
            >
              {isEditing ? <Save size={16} /> : <Edit size={16} />}
              <span>{isEditing ? 'Save' : 'Edit'}</span>
            </button>
            {isEditing && (
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2 ml-2"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Information</h2>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={20} />
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span>{profile.email}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400" size={20} />
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span>{profile.phone}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="text-gray-400" size={20} />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span>{profile.location}</span>
                )}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            {isEditing && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Add new skill and press Enter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      handleChange('skills', [...profile.skills, e.target.value.trim()]);
                      e.target.value = '';
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Experience</h2>
            <div className="flex items-start space-x-3">
              <Briefcase className="text-gray-400 mt-1" size={20} />
              {isEditing ? (
                <textarea
                  value={profile.experience}
                  onChange={(e) => handleChange('experience', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              ) : (
                <span>{profile.experience}</span>
              )}
            </div>
          </div>

          {/* Career Goals */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Career Goals</h2>
            <div className="flex items-start space-x-3">
              <Star className="text-gray-400 mt-1" size={20} />
              {isEditing ? (
                <input
                  type="text"
                  value={profile.careerGoal}
                  onChange={(e) => handleChange('careerGoal', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span>{profile.careerGoal}</span>
              )}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="px-6 pb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Areas of Interest</h2>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
