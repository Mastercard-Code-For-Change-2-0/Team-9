import { useState } from 'react';
import { Settings, User, Shield, Eye, EyeOff } from 'lucide-react';

const DevPanel = ({ userType, userName, onUserChange, onToggleAuth }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [authEnabled, setAuthEnabled] = useState(false);

  const handleUserTypeChange = (newType, newName) => {
    onUserChange(newType, newName);
  };

  const toggleAuth = () => {
    setAuthEnabled(!authEnabled);
    onToggleAuth(!authEnabled);
  };

  if (process.env.NODE_ENV === 'production') {
    return null; // Hide in production
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        title="Developer Panel"
      >
        <Settings size={20} />
      </button>

      {/* Dev Panel */}
      {isVisible && (
        <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl border p-4 min-w-80">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Settings size={16} className="mr-2" />
            Developer Panel
          </h3>
          
          {/* Auth Toggle */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Authentication</span>
              <button
                onClick={toggleAuth}
                className={`flex items-center space-x-1 px-3 py-1 rounded text-xs font-medium transition-colors ${
                  authEnabled 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {authEnabled ? <Eye size={12} /> : <EyeOff size={12} />}
                <span>{authEnabled ? 'Enabled' : 'Bypassed'}</span>
              </button>
            </div>
            <p className="text-xs text-gray-600">
              {authEnabled ? 'Login required' : 'Auto-login for testing'}
            </p>
          </div>

          {/* Current User Info */}
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700 mb-2">Current User</div>
            <div className="flex items-center space-x-2 text-sm">
              <User size={14} />
              <span>{userName}</span>
              <span className="text-blue-600">({userType})</span>
            </div>
          </div>

          {/* Quick User Switch */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700 mb-2">Quick Switch</div>
            
            <button
              onClick={() => handleUserTypeChange('student', 'John Student')}
              className={`w-full text-left p-2 rounded-lg transition-colors ${
                userType === 'student' 
                  ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <User size={16} />
                <div>
                  <div className="font-medium">Student User</div>
                  <div className="text-xs text-gray-500">John Student</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleUserTypeChange('admin', 'Admin Manager')}
              className={`w-full text-left p-2 rounded-lg transition-colors ${
                userType === 'admin' 
                  ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Shield size={16} />
                <div>
                  <div className="font-medium">Admin User</div>
                  <div className="text-xs text-gray-500">Admin Manager</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleUserTypeChange('employer', 'HR Manager')}
              className={`w-full text-left p-2 rounded-lg transition-colors ${
                userType === 'employer' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <User size={16} />
                <div>
                  <div className="font-medium">Employer User</div>
                  <div className="text-xs text-gray-500">HR Manager</div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
            💡 This panel is only visible in development mode
          </div>
        </div>
      )}
    </div>
  );
};

export default DevPanel;
