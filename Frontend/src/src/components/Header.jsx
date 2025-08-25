import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Menu, X, LogOut } from 'lucide-react';

const Header = ({ userType, userName, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Y4D Career Tracker</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>{userName}</span>
              <span className="text-blue-200">({userType})</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md transition-colors"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 p-2">
                <User size={20} />
                <span>{userName}</span>
                <span className="text-blue-200">({userType})</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md transition-colors"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
