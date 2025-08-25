import React, { useState, useEffect, useRef } from 'react';
import usersData from '../../data/users.json';
import AdminGraphs from '../AdminGraphs';

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
  const [textBoxVisible, setTextBoxVisible] = useState("");
  const [smsValue, setSmsValue] = useState("");


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
    // const customizedMessages = {
    //   sms: `🚀 Hi there! We're reaching out via SMS to request a periodic update on your career progress. Your journey matters to us! Please share your latest achievements and goals. Reply with your current status.`,
    //   whatsapp: `📱 Hello! This is a WhatsApp message requesting your periodic career update. We'd love to hear about your recent accomplishments and upcoming plans. Please share your progress with us!`,
    //   email: `📧 Subject: Periodic Career Update Request\n\nDear Alumni,\n\nWe hope this email finds you well. As part of our ongoing alumni engagement program, we're requesting a periodic update on your career journey. Your success stories inspire current students and help us improve our programs.\n\nPlease share:\n- Current role and company\n- Recent achievements\n- Goals for the next quarter\n- Any support you might need\n\nThank you for staying connected!`
    // };

    // console.log(`Update profile via ${tab}`);
    // console.log('Customized message:', customizedMessages[tab]);
    // const prompt = prompt("Enter your SMS!")
    // alert(`✅ Periodic update request sent via ${tab.toUpperCase()}!\n\nCustomized message sent:\n"${customizedMessages[tab].substring(0, 100)}..."`);
    // setShowTriggerDropdown(false);
    // setShowRequestUpdateDropdown(false);
    // setShowPopup(true);
    setTextBoxVisible(tab);
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
    <div className="space-y-6 p-6">
      {/* Admin Header */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">ADMIN DASHBOARD</h1>
        </div>
      </div>

     <AdminGraphs/>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Overview & Move Fast */}
        <div className="space-y-6">
          {/* Overview Section */}
          {/* <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
              OVERVIEW
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.totalStudents}</div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{stats.totalMentors}</div>
                <div className="text-sm text-gray-600">Total Mentors</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.activePrograms}</div>
                <div className="text-sm text-gray-600">Active Programs</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">{stats.completionRate}%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div> */}

          {/* Move Fast Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                MOVE FAST
              </h2>

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

              <div>
                <input
                  type="text"
                  value={smsValue}
                  onChange={(e) => setSmsValue(e.target.value)}
                  className={`w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${!textBoxVisible && "hidden"}`}
                  placeholder={`Enter you ${textBoxVisible}`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mode ___</label>
                <select
                  value={formData.mode}
                  onChange={(e) => handleInputChange('mode', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
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
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
              GROW TOGETHER
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pass out Year ___
                </label>
                <input
                  type="text"
                  value={formData.passwordYearPlan}
                  onChange={(e) => handleInputChange('passwordYearPlan', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter password year"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Plan:</label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.donateCareer}
                        onChange={(e) => handleInputChange('donateCareer', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm">DONATE</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.shareCareer}
                        onChange={(e) => handleInputChange('shareCareer', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm">SHARE CAREER</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.mentorApps}
                        onChange={(e) => handleInputChange('mentorApps', e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm">MENTOR APPS</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleGrowTogetherSubmit}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 font-bold border-2 border-green-600 transition duration-200"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              SUMMARY
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <button
                onClick={handleMessageGenerate}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 font-bold border-2 border-purple-600 transition duration-200 mb-4"
              >
                MESSAGE GENERATE
              </button>

              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Students:</span>
                  <span>500+ Beneficiary</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Notified:</span>
                  <span>Width Made</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">For:</span>
                  <span>Career Progression</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Update:</span>
                  <span>Status Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Action Completed Successfully</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <span className="text-green-500 text-xl mr-2">✅</span>
                  <h4 className="font-semibold text-green-700">Operation Successful</h4>
                </div>
                <p className="text-green-600 text-sm">
                  Your request has been processed and executed successfully.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Next Steps:</h4>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• Notifications have been sent to relevant users</li>
                  <li>• System has been updated with latest information</li>
                  <li>• You can monitor the progress in the dashboard</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2">Summary:</h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-600 font-medium">Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Action:</span>
                    <span>Trigger Operation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  alert('Action acknowledged!');
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOverview;