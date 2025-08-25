import React, { useState } from 'react';

const mockStudent = {
  photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  name: 'John Doe',
  contact: '+91 9123456789',
  company: 'Acme Corp',
  joiningDate: '2024-01-10',
  degree: 'Business Analyst',
  personalInfo: {
    dob: '1997-05-20',
    address: 'Delhi, India',
    email: 'john.doe@example.com',
    gender: 'Male',
    ngoId: 'Y4D67890',
  },
  firstPlacement: {
    company: 'FirstStep Ltd',
    role: 'Trainee',
    year: '2023',
  },
};

function StudentProfileMenu({ onEdit, onPassword, onDeactivate, onDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="w-12 h-12 rounded-full border-2 border-white cursor-pointer focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open profile menu"
      >
        <img src={mockStudent.photo} alt="Profile" className="w-12 h-12 rounded-full" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-56 border border-gray-200 z-10">
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-[#ef6022] font-semibold" onClick={onEdit}>Update Student Data</li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-[#ef6022] font-semibold" onClick={onPassword}>Password Management</li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-[#ef6022] font-semibold" onClick={onDeactivate}>Profile Deactivation</li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-[#ef6022] font-semibold" onClick={onDelete}>Profile Deletion</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function StudentFeedbackForm() {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md mt-8 max-w-xl mx-auto border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-[#ef6022]">Feedback for Y4D NGO</h2>
      <textarea className="w-full border border-gray-300 rounded-md p-2 mb-4" rows={4} placeholder="Share your experience..." />
      <button type="submit" className="bg-[#ef6022] text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600">Submit</button>
    </form>
  );
}

function EditPersonalInfoModal({ student, onClose, onSave }) {
  const [form, setForm] = useState({
    name: student.name,
    phone: student.contact,
    email: student.personalInfo.email,
    linkedin: '',
    address: student.personalInfo.address,
    familyIncome: '',
  });
  const [mode, setMode] = useState('manual');
  // Simulate fetch from social account
  const fetchFromSocial = () => {
    setForm(f => ({
      ...f,
      name: 'Rahul Sharma',
      phone: '+91 9876543210',
      email: 'rahul.sharma@linkedin.com',
      linkedin: 'linkedin.com/in/rahulsharma',
      address: 'Mumbai, Maharashtra',
      familyIncome: '500000',
    }));
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-[#ef6022] mb-4">Update Student Data</h2>
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded font-semibold border ${mode === 'manual' ? 'bg-[#ef6022] text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setMode('manual')}
          >Manual Entry</button>
          <button
            className={`px-4 py-2 rounded font-semibold border ${mode === 'social' ? 'bg-[#ef6022] text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => { setMode('social'); fetchFromSocial(); }}
          >Fetch from Social Account</button>
        </div>
        <form onSubmit={e => { e.preventDefault(); onSave(form); }}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Student Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Phone No</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-2" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">LinkedIn ID</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.linkedin} onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Family Income</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.familyIncome} onChange={e => setForm(f => ({ ...f, familyIncome: e.target.value }))} />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-[#ef6022] text-white font-semibold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PasswordModal({ onClose }) {
  const [password, setPassword] = useState('');
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-[#ef6022] mb-4">Change Password</h2>
        <form onSubmit={e => { e.preventDefault(); onClose(); }}>
          <input type="password" className="w-full border border-gray-300 rounded-md p-2 mb-4" value={password} onChange={e => setPassword(e.target.value)} placeholder="New Password" />
          <div className="flex justify-end gap-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-[#ef6022] text-white font-semibold">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ConfirmModal({ title, message, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-[#ef6022] mb-4">{title}</h2>
        <p className="mb-6 text-gray-700">{message}</p>
        <div className="flex justify-end gap-2">
          <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold" onClick={onClose}>Cancel</button>
          <button type="button" className="px-4 py-2 rounded bg-[#ef6022] text-white font-semibold" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

const StudentDashboard = () => {
  const [student, setStudent] = useState(mockStudent);
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDeactivate, setShowDeactivate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-6 bg-[#ef6022] text-white shadow">
        <div className="text-2xl font-bold">Y4D Career Tracker</div>
        <StudentProfileMenu
          onEdit={() => setShowEdit(true)}
          onPassword={() => setShowPassword(true)}
          onDeactivate={() => setShowDeactivate(true)}
          onDelete={() => setShowDelete(true)}
        />
      </div>

      {/* Main Dashboard */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 flex flex-col items-center">
          <img src={student.photo} alt="Profile" className="w-24 h-24 rounded-full mb-4 border-4 border-[#ef6022]" />
          <div className="text-xl font-bold text-[#ef6022]">{student.name}</div>
          <div className="text-gray-600 mb-2">{student.contact}</div>
          <div className="text-gray-700 font-semibold">{student.degree} at <span className="text-[#ef6022]">{student.company}</span></div>
          <div className="text-gray-500 text-sm mt-2">Joined: {student.joiningDate}</div>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#ef6022]">Personal Information</h2>
            <button className="text-[#ef6022] font-semibold px-3 py-1 border border-[#ef6022] rounded hover:bg-[#ef6022] hover:text-white" onClick={() => setShowEdit(true)}>Update</button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div><span className="font-semibold">Name:</span> {student.name}</div>
            <div><span className="font-semibold">Phone:</span> {student.contact}</div>
            <div><span className="font-semibold">Email:</span> {student.personalInfo.email}</div>
            <div><span className="font-semibold">LinkedIn:</span> linkedin.com/in/rahulsharma</div>
            <div><span className="font-semibold">Address:</span> {student.personalInfo.address}</div>
            <div><span className="font-semibold">Family Income:</span> 500000</div>
          </div>
        </div>
        {/* Educational Info Card */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-lg font-bold text-[#ef6022] mb-4">Educational Info</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div><span className="font-semibold">First Company Joined:</span> {student.firstPlacement.company}</div>
            <div><span className="font-semibold">Role at First Company:</span> {student.firstPlacement.role}</div>
            <div><span className="font-semibold">Year Joined:</span> {student.firstPlacement.year}</div>
            <div><span className="font-semibold">Current Company:</span> {student.company}</div>
            <div><span className="font-semibold">Current Role:</span> {student.degree}</div>
            <div><span className="font-semibold">Joining Date:</span> {student.joiningDate}</div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <StudentFeedbackForm />

      {/* Modals */}
      {showEdit && (
        <EditPersonalInfoModal
          student={student}
          onClose={() => setShowEdit(false)}
          onSave={info => { setStudent(s => ({ ...s, personalInfo: info })); setShowEdit(false); }}
        />
      )}
      {showPassword && (
        <PasswordModal onClose={() => setShowPassword(false)} />
      )}
      {showDeactivate && (
        <ConfirmModal
          title="Deactivate Profile"
          message="Are you sure you want to deactivate your profile?"
          onClose={() => setShowDeactivate(false)}
          onConfirm={() => { setShowDeactivate(false); alert('Profile deactivated!'); }}
        />
      )}
      {showDelete && (
        <ConfirmModal
          title="Delete Profile"
          message="Are you sure you want to delete your profile? This action cannot be undone."
          onClose={() => setShowDelete(false)}
          onConfirm={() => { setShowDelete(false); alert('Profile deleted!'); }}
        />
      )}
    </div>
  );
};

export default StudentDashboard;
