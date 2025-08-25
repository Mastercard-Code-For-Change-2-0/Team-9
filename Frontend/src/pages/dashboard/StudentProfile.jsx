import React, { useState } from 'react';

const StudentProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: '123-456-7890', // Example data
    program: user.program || '',
    bio: 'Aspiring web developer with a passion for creating user-friendly interfaces. Currently focusing on JavaScript and React development.',
    address: '123 Main Street, New York, NY 10001',
    emergencyContact: 'Jane Doe (Parent) - 123-456-7890',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would update the user data in a database
    setIsEditing(false);
    // Show success message or handle errors
  };

  return (
    <div className="space-y-6">
      {/* Profile Summary */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-indigo-600 px-6 py-12 flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-indigo-600 mb-4">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-indigo-200 mt-1">{user.program} Student</p>
        </div>
        
        <div className="px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">Profile Details</h3>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded transition"
              >
                Edit Profile
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program
                  </label>
                  <input
                    type="text"
                    name="program"
                    id="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    rows="4"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</h4>
                <p className="text-sm text-gray-900">{formData.name}</p>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</h4>
                <p className="text-sm text-gray-900">{formData.email}</p>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</h4>
                <p className="text-sm text-gray-900">{formData.phone}</p>
              </div>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Program</h4>
                <p className="text-sm text-gray-900">{formData.program}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</h4>
                <p className="text-sm text-gray-900">{formData.address}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Bio</h4>
                <p className="text-sm text-gray-900">{formData.bio}</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Emergency Contact</h4>
                <p className="text-sm text-gray-900">{formData.emergencyContact}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Skills</h3>
          <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded transition">
            Add Skill
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <div key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center">
              {skill}
              <button className="ml-2 text-indigo-600 hover:text-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <div>
              <h4 className="text-sm font-medium text-gray-800">Change Password</h4>
              <p className="text-xs text-gray-500 mt-1">Update your password regularly for security</p>
            </div>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">Change</button>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <div>
              <h4 className="text-sm font-medium text-gray-800">Two-Factor Authentication</h4>
              <p className="text-xs text-gray-500 mt-1">Add an extra layer of security to your account</p>
            </div>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">Enable</button>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <div>
              <h4 className="text-sm font-medium text-gray-800">Delete Account</h4>
              <p className="text-xs text-gray-500 mt-1">Permanently delete your account and all data</p>
            </div>
            <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
