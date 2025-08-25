import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ user, navigationItems }) => {
  return (
    <div className="bg-indigo-800 text-white w-64 min-h-screen px-4 py-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center">Y4D Career Tracker</h2>
      </div>

      {/* User Profile */}
      <div className="flex flex-col items-center mb-8 pb-6 border-b border-indigo-700">
        <div className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center text-2xl font-bold mb-2">
          {user.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-indigo-300 capitalize">{user.role}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-6 border-t border-indigo-700">
        <button
          onClick={() => {
            localStorage.removeItem('currentUser');
            window.location.href = '/login';
          }}
          className="w-full flex items-center p-3 rounded-lg text-indigo-200 hover:bg-indigo-700 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm3-1a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
