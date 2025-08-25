import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    'dashboard': 'Dashboard',
    'profile': 'My Profile',
    'jobs': 'Job Opportunities',
    'skills': 'Skill Development',
    'progress': 'Progress Tracking',
    'admin': 'Admin',
    'students': 'Student Management',
    'reports': 'Reports',
    'settings': 'Settings'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
            <Home size={16} />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <li key={name} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-2" />
              {isLast ? (
                <span className="text-gray-900 font-medium">{displayName}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
