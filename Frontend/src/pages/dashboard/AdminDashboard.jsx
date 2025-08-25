import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import AdminOverview from './AdminOverview';
import AdminUsers from './AdminUsers';

const AdminDashboard = ({ user }) => {
  // Navigation items for the admin dashboard
  const navigationItems = [
    {
      name: 'Overview',
      path: '/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      name: 'Users',
      path: '/dashboard/users',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      name: 'Programs',
      path: '/dashboard/programs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    {
      name: 'Reports',
      path: '/dashboard/reports',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Settings',
      path: '/dashboard/settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <DashboardLayout
      user={user}
      navigationItems={navigationItems}
      title="Admin Dashboard"
    >
      <Routes>
        <Route path="/" element={<AdminOverview user={user} />} />
        <Route path="/users" element={<AdminUsers user={user} />} />
        <Route path="/programs" element={<ProgramsManagement user={user} />} />
        <Route path="/reports" element={<ReportsPage user={user} />} />
        <Route path="/settings" element={<SettingsPage user={user} />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DashboardLayout>
  );
};

// Placeholder components for admin routes
const ProgramsManagement = ({ user }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Programs Management</h2>
    <p className="text-gray-600">This is where you can manage all the programs for Y4D Career Tracker.</p>
    
    <div className="mt-6 border-t border-gray-200 pt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">Active Programs</h3>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-4 rounded-md text-sm">
          Add Program
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Web Development</td>
              <td className="px-6 py-4 whitespace-nowrap">24</td>
              <td className="px-6 py-4 whitespace-nowrap">12 weeks</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 space-x-2">
                <button>Edit</button>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Data Science</td>
              <td className="px-6 py-4 whitespace-nowrap">18</td>
              <td className="px-6 py-4 whitespace-nowrap">16 weeks</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 space-x-2">
                <button>Edit</button>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Digital Design</td>
              <td className="px-6 py-4 whitespace-nowrap">12</td>
              <td className="px-6 py-4 whitespace-nowrap">10 weeks</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Upcoming
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 space-x-2">
                <button>Edit</button>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ReportsPage = ({ user }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Reports</h2>
    <p className="text-gray-600 mb-6">View and generate reports on student progress and program effectiveness.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-800 mb-2">Student Progress Report</h3>
        <p className="text-sm text-gray-600 mb-4">Track individual student progress across programs</p>
        <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded">
          Generate Report
        </button>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-800 mb-2">Program Effectiveness</h3>
        <p className="text-sm text-gray-600 mb-4">Evaluate program outcomes and student satisfaction</p>
        <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded">
          Generate Report
        </button>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-800 mb-2">Employment Outcomes</h3>
        <p className="text-sm text-gray-600 mb-4">Track post-program employment and career trajectories</p>
        <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded">
          Generate Report
        </button>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-800 mb-2">Skills Gap Analysis</h3>
        <p className="text-sm text-gray-600 mb-4">Identify common skill gaps among students</p>
        <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded">
          Generate Report
        </button>
      </div>
    </div>
    
    <div className="border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Reports</h3>
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-800">Q2 Student Progress Summary</p>
            <p className="text-xs text-gray-500">Generated on August 15, 2025</p>
          </div>
          <button className="text-sm text-indigo-600">Download</button>
        </li>
        <li className="py-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-800">Web Development Program Analysis</p>
            <p className="text-xs text-gray-500">Generated on July 30, 2025</p>
          </div>
          <button className="text-sm text-indigo-600">Download</button>
        </li>
        <li className="py-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-800">Annual Employment Outcomes</p>
            <p className="text-xs text-gray-500">Generated on June 12, 2025</p>
          </div>
          <button className="text-sm text-indigo-600">Download</button>
        </li>
      </ul>
    </div>
  </div>
);

const SettingsPage = ({ user }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">System Settings</h2>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">General Settings</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div>
              <p className="text-sm font-medium text-gray-800">System Notifications</p>
              <p className="text-xs text-gray-500">Enable email notifications for system events</p>
            </div>
            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-indigo-600">
              <input type="checkbox" className="sr-only" defaultChecked />
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out"></span>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div>
              <p className="text-sm font-medium text-gray-800">Maintenance Mode</p>
              <p className="text-xs text-gray-500">Put the system in maintenance mode</p>
            </div>
            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-gray-300">
              <input type="checkbox" className="sr-only" />
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out"></span>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-3">
            <div>
              <p className="text-sm font-medium text-gray-800">Student Self-Registration</p>
              <p className="text-xs text-gray-500">Allow students to register their own accounts</p>
            </div>
            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-indigo-600">
              <input type="checkbox" className="sr-only" defaultChecked />
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-3">Security Settings</h3>
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div>
            <label htmlFor="password-policy" className="block text-sm font-medium text-gray-700 mb-1">
              Password Policy
            </label>
            <select
              id="password-policy"
              name="password-policy"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>High (12+ chars, special chars, numbers)</option>
              <option>Medium (8+ chars, special chars)</option>
              <option>Basic (8+ chars)</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="session-timeout" className="block text-sm font-medium text-gray-700 mb-1">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              id="session-timeout"
              name="session-timeout"
              defaultValue="30"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="force-2fa"
              name="force-2fa"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="force-2fa" className="ml-2 block text-sm text-gray-700">
              Enforce Two-Factor Authentication for all administrators
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
          Save Settings
        </button>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
