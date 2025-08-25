import React, { useState, useRef, useEffect } from 'react';

// Modal for updating student data
function EditStudentModal({ student, onClose, onSave }) {
  const [form, setForm] = useState({
    name: student.name || '',
    phone: student.phone || '',
    email: student.email || '',
    linkedin: student.linkedin || '',
    address: student.address || '',
    familyIncome: student.familyIncome || '',
    currentCompany: student.currentCompany || '',
    joiningDate: student.joiningDate || '',
    firstCompany: student.firstCompany || '',
  });
  const [mode, setMode] = useState('manual');
  // Simulate fetch from social account
  const fetchFromSocial = () => {
    setForm({
      name: 'Rahul Sharma',
      phone: '+91 9876543210',
      email: 'rahul.sharma@linkedin.com',
      linkedin: 'linkedin.com/in/rahulsharma',
      address: 'Mumbai, Maharashtra',
      familyIncome: '500000',
      currentCompany: 'Acme Corp',
      joiningDate: '2024-01-10',
      firstCompany: 'FirstStep Ltd',
    });
  };
  return (
  <div className="fixed inset-0 bg-blue-100 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Update Student Data</h2>
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded font-semibold border ${mode === 'manual' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setMode('manual')}
          >Manual Entry</button>
          <button
            className={`px-4 py-2 rounded font-semibold border ${mode === 'social' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => { setMode('social'); fetchFromSocial(); }}
          >Fetch from Social Account</button>
        </div>
        <div className="mb-4 text-center text-sm text-gray-500">Choose an option above to update your profile data.</div>
        <form onSubmit={e => { e.preventDefault(); onSave(form); }}>
          {mode === 'social' && (
            <div className="mb-4 text-gray-600 text-sm font-mono bg-gray-100 rounded p-2">
              You preferred Linkedin and this is your fetched data
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Student Name</label>
            <input type="text" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Phone No</label>
            <input type="text" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">LinkedIn ID</label>
            <input type="text" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.linkedin} onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <input type="text" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Family Income</label>
            <input type="text" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.familyIncome} onChange={e => setForm(f => ({ ...f, familyIncome: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Current Company</label>
            <input type="text" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.currentCompany} onChange={e => setForm(f => ({ ...f, currentCompany: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Joining Date</label>
            <input type="date" className={`w-full border border-gray-300 rounded-md p-2 ${mode === 'social' ? 'bg-gray-200 text-gray-700 font-mono' : ''}`} value={form.joiningDate} onChange={e => setForm(f => ({ ...f, joiningDate: e.target.value }))} disabled={mode === 'social'} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">First Company</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.firstCompany} onChange={e => setForm(f => ({ ...f, firstCompany: e.target.value }))} />
          </div>
          {(mode === 'manual' || mode === 'social') && (
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" required className="mr-2" />
              <label htmlFor="terms" className="text-gray-700 text-sm">I agree to the <span className="underline">Terms and Conditions</span></label>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Educational Info Card
function EducationalInfoCard({ info }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mt-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold text-blue-600 mb-4">Educational Info</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div><span className="font-semibold">First Company Joined:</span> {info.firstCompany}</div>
        <div><span className="font-semibold">Current Company:</span> {info.currentCompany}</div>
        <div><span className="font-semibold">Joining Date:</span> {info.joiningDate}</div>
      </div>
    </div>
  );
}

function PasswordModal({ onClose }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // TODO: handle password change logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-100 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">New Password</label>
            <input type="password" className="w-full border border-gray-300 rounded-md p-2" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Re-enter New Password</label>
            <input type="password" className="w-full border border-gray-300 rounded-md p-2" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          </div>
          {error && <div className="mb-2 text-red-600 text-sm">{error}</div>}
          <div className="flex justify-end gap-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ConfirmModal({ title, message, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-blue-100 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
        <p className="mb-6 text-gray-700">{message}</p>
        <div className="flex justify-end gap-2">
          <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold" onClick={onClose}>Cancel</button>
          <button type="button" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

const DashboardHeader = ({ title, user, onEdit, onPassword, onDeactivate, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDeactivate, setShowDeactivate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [student, setStudent] = useState({
  name: user.name,
  phone: '+91 9123456789',
  email: user.email,
  linkedin: '',
  address: 'Delhi, India',
  familyIncome: '',
  currentCompany: 'Acme Corp',
  joiningDate: '2024-01-10',
  firstCompany: 'FirstStep Ltd',
  });
  const [eduInfo, setEduInfo] = useState({
    firstCompany: 'FirstStep Ltd',
    firstRole: 'Trainee',
    firstYear: '2023',
    currentCompany: 'Acme Corp',
    currentRole: 'Business Analyst',
    joiningDate: '2024-01-10',
  });

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="mr-3 text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <div className="relative" ref={menuRef}>
              <button
                className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium focus:outline-none border-2 border-white shadow cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open profile menu"
              >
                {user.name.split(' ').map(n => n[0]).join('')}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-56 border border-gray-200 z-10">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-blue-600 font-semibold" onClick={() => { setMenuOpen(false); setShowEdit(true); }}>Update Student Data</li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-blue-600 font-semibold" onClick={() => { setMenuOpen(false); setShowPassword(true); }}>Password Management</li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-blue-600 font-semibold" onClick={() => { setMenuOpen(false); setShowDeactivate(true); }}>Profile Deactivation</li>
                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-blue-600 font-semibold" onClick={() => { setMenuOpen(false); setShowDelete(true); }}>Profile Deletion</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Update Student Data Modal */}
      {showEdit && (
        <EditStudentModal
          student={student}
          onClose={() => setShowEdit(false)}
          onSave={info => { setStudent(info); setShowEdit(false); }}
        />
      )}
      {/* Password Management Modal */}
      {showPassword && (
        <PasswordModal onClose={() => setShowPassword(false)} />
      )}
      {/* Profile Deactivation Modal */}
      {showDeactivate && (
        <ConfirmModal
          title="Deactivate Profile"
          message="Are you sure you want to deactivate your account?"
          onClose={() => setShowDeactivate(false)}
          onConfirm={() => { setShowDeactivate(false); onDeactivate && onDeactivate(); }}
        />
      )}
      {/* Profile Deletion Modal */}
      {showDelete && (
        <ConfirmModal
          title="Delete Profile"
          message="Are you sure you want to delete your account? This action cannot be undone."
          onClose={() => setShowDelete(false)}
          onConfirm={() => { setShowDelete(false); onDelete && onDelete(); }}
        />
      )}
      {/* Educational Info Card */}
      <EducationalInfoCard info={eduInfo} />
    </div>
  );
};

export default DashboardHeader;
