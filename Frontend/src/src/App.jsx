import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import DevPanel from './components/DevPanel';
import { ToastProvider } from './components/ToastProvider';

// Pages
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import JobOpportunities from './pages/JobOpportunities';
import SkillDevelopment from './pages/SkillDevelopment';
import ProgressTracking from './pages/ProgressTracking';
import AdminDashboard from './pages/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState({
    name: 'Test User',
    email: 'test@example.com',
    role: 'student'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Bypassing authentication for testing

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const handleUserChange = (newUser) => {
    setUser(newUser);
    setIsAuthenticated(true);
  };

  // Protected Route component
  const ProtectedRoute = ({ children, requiredRole = null }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (requiredRole && user?.role !== requiredRole) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  const Layout = ({ children }) => (
    <div className="flex h-screen bg-gray-50">
      {isAuthenticated && <Sidebar user={user} />}
      <div className="flex-1 flex flex-col">
        {isAuthenticated && <Header user={user} onLogout={handleLogout} />}
        <main className="flex-1 overflow-y-auto">
          {isAuthenticated && <Breadcrumb />}
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        </main>
      </div>
      <DevPanel onUserChange={handleUserChange} currentUser={user} />
    </div>
  );

  if (!isAuthenticated) {
    return (
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Student Routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/jobs" 
              element={
                <ProtectedRoute requiredRole="student">
                  <JobOpportunities />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/skills" 
              element={
                <ProtectedRoute requiredRole="student">
                  <SkillDevelopment />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/progress" 
              element={
                <ProtectedRoute requiredRole="student">
                  <ProgressTracking />
                </ProtectedRoute>
              } 
            />

            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ToastProvider>
  );
}

export default App;
