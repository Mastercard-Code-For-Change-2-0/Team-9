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
      {/* Main Content Grid - No educational info section for admin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Overview & Move Fast */}
        <div className="space-y-6">
          {/* Move Fast Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                MOVE FAST
              </h2>
              {/* Trigger Button and dropdowns remain unchanged */}
            </div>
            {/* No educational info or pass out year input for admin */}
          </div>
        </div>
        {/* Right Column - Grow Together (unchanged) */}
      </div>

      {/* Popup Modal */}
      {/* (unchanged) */}
    </div>
  );
};

export default AdminOverview;
