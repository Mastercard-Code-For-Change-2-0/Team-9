import React, { useState, useEffect, useRef } from 'react';
import usersData from '../../data/users.json';

const AdminOverview = ({ user }) => {
  // Statistics data for overview
  const stats = {
    totalStudents: usersData.filter(u => u.role === 'student').length,
    totalMentors: usersData.filter(u => u.role === 'mentor').length,
    activePrograms: 3,
    completionRate: 78,
  };

  const [formData, setFormData] = useState({
    communicationMethod: '',
    passOutYear: '',
    mode: '',
    courseTogther: '',
    errorSms: '',
    passwordYearPlan: '',
    donateCareer: false,
    shareCareer: false,
    mentorApps: false
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showTriggerDropdown, setShowTriggerDropdown] = useState(false);
  const [showRequestUpdateDropdown, setShowRequestUpdateDropdown] = useState(false);
  const [showSyncUpdateDropdown, setShowSyncUpdateDropdown] = useState(false);
  const [activeProfileTab, setActiveProfileTab] = useState('sms');
  const [activeSocialTab, setActiveSocialTab] = useState('linkedin');
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTriggerDropdown(false);
        setShowRequestUpdateDropdown(false);
        setShowSyncUpdateDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Configuration saved successfully!');
  };

  const handleGrowTogetherSubmit = () => {
    console.log('Grow Together form submitted:', formData);
    setShowPopup(true);
  };

  const handleMessageGenerate = () => {
    console.log('Message generated');
    alert('Message generated successfully!');
  };

  const handleUpdateProfile = (tab) => {
    const customizedMessages = {
      sms: `🚀 Hi there! We're reaching out via SMS to request a periodic update on your career progress. Your journey matters to us! Please share your latest achievements and goals. Reply with your current status.`,
      whatsapp: `📱 Hello! This is a WhatsApp message requesting your periodic career update. We'd love to hear about your recent accomplishments and upcoming plans. Please share your progress with us!`,
      email: `📧 Subject: Periodic Career Update Request\n\nDear Alumni,\n\nWe hope this email finds you well. As part of our ongoing alumni engagement program, we're requesting a periodic update on your career journey. Your success stories inspire current students and help us improve our programs.\n\nPlease share:\n- Current role and company\n- Recent achievements\n- Goals for the next quarter\n- Any support you might need\n\nThank you for staying connected!`
    };

    console.log(`Update profile via ${tab}`);
    console.log('Customized message:', customizedMessages[tab]);
    alert(`✅ Periodic update request sent via ${tab.toUpperCase()}!\n\nCustomized message sent:\n"${customizedMessages[tab].substring(0, 100)}..."`);
    setShowTriggerDropdown(false);
    setShowRequestUpdateDropdown(false);
    setShowPopup(true);
  };

  const handleSyncSocialMedia = () => {
    const syncMessage = `🔄 LinkedIn Sync Update: Your profile data has been synchronized successfully. Latest information including current position, skills, and connections has been updated in our system.`;
    
    console.log('Sync with LinkedIn');
    console.log('Sync message:', syncMessage);
    alert(`✅ Synced with LinkedIn successfully!\n\nSync notification sent:\n"${syncMessage}"`);
    setShowTriggerDropdown(false);
    setShowSyncUpdateDropdown(false);
    setShowPopup(true);
  };

  return (
    <div>
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Welcome back, {user.name}!</h2>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-600">
            This is the admin dashboard for the Y4D Career Tracker platform. 
            Here you can manage users, programs, and view analytics.
          </p>
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Overview & Move Fast */}
        <div className="space-y-6">
          {/* Move Fast Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                MOVE FAST
              </h2>
              
              {/* Trigger Button */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowTriggerDropdown(!showTriggerDropdown)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium border-2 border-blue-600 transition duration-200 flex items-center"
                >
                  <span className="mr-2">⚡</span>
                  Trigger
                  <span className="ml-2">▼</span>
                </button>
                
                {/* Dropdown Menu */}
                {showTriggerDropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50">
                    {/* Main Options */}
                    <div className="p-4 space-y-3">
                      {/* Request Periodic Update Option */}
                      <div className="border-b border-gray-200 pb-3">
                        <button
                          onClick={() => {
                            setShowRequestUpdateDropdown(!showRequestUpdateDropdown);
                            setShowSyncUpdateDropdown(false);
                          }}
                          className="w-full flex items-center justify-between p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border transition duration-200"
                        >
                          <div className="flex items-center">
                            <span className="mr-3">📬</span>
                            <span className="font-semibold text-gray-800">1. Request Periodic Update</span>
                          </div>
                          <span className="text-gray-500">{showRequestUpdateDropdown ? '▲' : '▼'}</span>
                        </button>
                        
                        {/* Request Update Sub-dropdown */}
                        {showRequestUpdateDropdown && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg border">
                            <p className="text-xs text-gray-600 mb-3">Send customized messages to request updates</p>
                            <div className="space-y-2">
                              <button
                                onClick={() => handleUpdateProfile('sms')}
                                className="w-full flex items-center p-2 text-left bg-white hover:bg-blue-100 rounded border transition duration-200"
                              >
                                <span className="mr-2">📱</span>
                                <span className="text-sm font-medium">SMS</span>
                              </button>
                              <button
                                onClick={() => handleUpdateProfile('whatsapp')}
                                className="w-full flex items-center p-2 text-left bg-white hover:bg-green-100 rounded border transition duration-200"
                              >
                                <span className="mr-2">💬</span>
                                <span className="text-sm font-medium">WhatsApp</span>
                              </button>
                              <button
                                onClick={() => handleUpdateProfile('email')}
                                className="w-full flex items-center p-2 text-left bg-white hover:bg-red-100 rounded border transition duration-200"
                              >
                                <span className="mr-2">📧</span>
                                <span className="text-sm font-medium">Email</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Sync Update Option */}
                      <div>
                        <button
                          onClick={() => {
                            setShowSyncUpdateDropdown(!showSyncUpdateDropdown);
                            setShowRequestUpdateDropdown(false);
                          }}
                          className="w-full flex items-center justify-between p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border transition duration-200"
                        >
                          <div className="flex items-center">
                            <span className="mr-3">🔄</span>
                            <span className="font-semibold text-gray-800">2. Sync Update</span>
                          </div>
                          <span className="text-gray-500">{showSyncUpdateDropdown ? '▲' : '▼'}</span>
                        </button>
                        
                        {/* Sync Update Sub-dropdown */}
                        {showSyncUpdateDropdown && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg border">
                            <p className="text-xs text-gray-600 mb-3">Synchronize data from social platforms</p>
                            <button
                              onClick={handleSyncSocialMedia}
                              className="w-full flex items-center p-2 text-left bg-white hover:bg-blue-100 rounded border transition duration-200"
                            >
                              <span className="mr-2">💼</span>
                              <span className="text-sm font-medium">LinkedIn</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pass Out Year ___
                </label>
                <input
                  type="text"
                  value={formData.passOutYear}
                  onChange={(e) => handleInputChange('passOutYear', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter pass out year"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 font-bold border-2 border-blue-600 transition duration-200"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Grow Together */}
        {/* (unchanged) */}
      </div>

      {/* Popup Modal */}
      {/* (unchanged) */}
    </div>
  );
};

export default AdminOverview;
