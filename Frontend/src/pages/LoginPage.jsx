import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../data/users.json';

const LoginPage = () => {
  const [userType, setUserType] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      // Find user with matching username/email and password
      const user = usersData.find(
        (u) => (u.username === username || u.email === username) && u.password === password
      );

      if (user) {
        // Check if user type matches (case insensitive)
        if (user.role.toLowerCase() === userType.toLowerCase()) {
          // Store user data in localStorage
          localStorage.setItem('currentUser', JSON.stringify(user));
          navigate('/dashboard');
        } else {
          setError(`Invalid user type. This account is for ${user.role}s, but you selected ${userType}.`);
        }
      } else {
        setError('Invalid username/email or password');
      }
      setLoading(false);
    }, 1000);
  };

  const handleDemoLogin = (demoUser) => {
    setUsername(demoUser.username);
    setPassword(demoUser.password);
    // Auto-set user type based on demo user
    const foundUser = usersData.find(u => u.username === demoUser.username);
    if (foundUser) {
      setUserType(foundUser.role.toLowerCase());
    }
  };

  const demoUsers = [
    { username: 'Param', password: 'pass123', name: 'Param (Student)' },
    { username: 'Ajay', password: 'pass123', name: 'Ajay (Student)' },
    { username: 'admin', password: 'admin123', name: 'Admin' },
    // { username: 'mike_johnson', password: 'password321', name: 'Mike (Mentor)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Y4D Career Tracker
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to track your career progress
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                User Type
              </label>
              <div className="mt-1">
                <select
                  id="userType"
                  name="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="student">Student</option>
                  <option value="mentor">clerk</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username or Email
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your username or email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
                onClick={(e) => e.preventDefault()}
              >
                Forgot your password?
              </a>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Sign up here
                </a>
              </span>
            </div>
          </form>

          {/* Demo Users Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Try demo accounts</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {demoUsers.map((user, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDemoLogin(user)}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-200"
                >
                  {user.name}
                </button>
              ))}
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>Click on demo accounts to auto-fill credentials</p>
            </div>
          </div>
        </div>

        {/* Problem Statement Reference */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Career Tracking Platform for Skilled Youth
          </h3>
          <p className="text-sm text-gray-600">
            Built to address Y4D's need for tracking beneficiary progress and impact assessment
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;