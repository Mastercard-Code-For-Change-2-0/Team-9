import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Book, BarChart3, Users, Settings } from 'lucide-react';

const Sidebar = ({ userType }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getMenuItems = () => {
    if (userType === 'admin') {
      return [
        { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/admin/dashboard' },
        { id: 'students', label: 'Student Management', icon: Users, path: '/admin/students' },
        { id: 'progress', label: 'Progress Tracking', icon: BarChart3, path: '/admin/progress' },
        { id: 'reports', label: 'Reports', icon: BarChart3, path: '/admin/reports' },
        { id: 'settings', label: 'Settings', icon: Settings, path: '/admin/settings' }
      ];
    } else {
      return [
        { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
        { id: 'profile', label: 'My Profile', icon: User, path: '/profile' },
        { id: 'jobs', label: 'Job Opportunities', icon: Briefcase, path: '/jobs' },
        { id: 'skills', label: 'Skill Development', icon: Book, path: '/skills' },
        { id: 'progress', label: 'My Progress', icon: BarChart3, path: '/progress' }
      ];
    }
  };

  const menuItems = getMenuItems();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`bg-white shadow-lg h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full text-left text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.path);
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                isActive ? 'bg-blue-100 border-r-4 border-blue-600 text-blue-600' : 'text-gray-700'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
