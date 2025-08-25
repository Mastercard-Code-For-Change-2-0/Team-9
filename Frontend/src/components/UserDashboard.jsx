import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import StudentDashboard from './dashboard/StudentDashboard';
import MentorDashboard from './dashboard/MentorDashboard';
import AdminDashboard from './dashboard/AdminDashboard';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setLoading(false);
  }, []);

  // If loading, show loading indicator
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // If no user found, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Render the appropriate dashboard based on user role
  switch (user.role.toLowerCase()) {
    case 'student':
      return <StudentDashboard user={user} />;
    case 'mentor':
      return <MentorDashboard user={user} />;
    case 'admin':
      return <AdminDashboard user={user} />;
    default:
      // Fallback for unknown user roles
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold text-red-600">Invalid User Role</h1>
            <p className="mt-4 text-gray-700">
              We couldn't determine your user role. Please contact support.
            </p>
            <button
              onClick={() => {
                localStorage.removeItem('currentUser');
                window.location.href = '/login';
              }}
              className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Login
            </button>
          </div>
        </div>
      );
  }
};

export default Dashboard;