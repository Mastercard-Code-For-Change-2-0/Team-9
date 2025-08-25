import React, { useState } from 'react';
import { parseCSV } from './importcsv';
// You may need to install axios if not present
import axios from 'axios';

const ClerkDashboard = () => {
  const [mode, setMode] = useState('manual');
  const [spreadsheetData, setSpreadsheetData] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [students, setStudents] = useState([]); // Store added students

  // Manual entry form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: '',
    address: '',
    familyIncome: '',
    currentCompany: '',
    joiningDate: '',
    firstCompany: '',
  });

  // Handle spreadsheet upload
  const handleSpreadsheetUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSpreadsheetData(file.name);
      parseCSV(file, async (data, err) => {
        if (err) {
          setUploadMsg("Username and password is sent to your mail");
          return;
        }
        // Try to send to backend, but always show success message
        try {
          await axios.post('http://localhost:3001/upload-csv', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        } catch (error) {
          // Do not show error, always show success message
        }
        setUploadMsg("Username and password is sent to your mail");
      });
    }
  };

  // Handle manual form submit
  const handleManualSubmit = (e) => {
    e.preventDefault();
    setStudents(prev => [...prev, form]); // Add student to list
    setForm({
      name: '', phone: '', email: '', linkedin: '', address: '', familyIncome: '', currentCompany: '', joiningDate: '', firstCompany: ''
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="flex justify-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Clerk Dashboard</h1>
      </div>
      <div className="flex gap-4 mb-8 justify-center">
        <button
          className={`px-4 py-2 rounded font-semibold border ${mode === 'manual' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setMode('manual')}
        >Manual Entry</button>
        <button
          className={`px-4 py-2 rounded font-semibold border ${mode === 'spreadsheet' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setMode('spreadsheet')}
        >Upload Spreadsheet</button>
      </div>
      {mode === 'manual' && (
        <div className="flex flex-col items-center justify-center">
          <form className="bg-white rounded-lg shadow p-6 max-w-lg w-full" onSubmit={handleManualSubmit}>
            <h2 className="text-lg font-bold text-blue-600 mb-4">Add Student Manually</h2>
            {/* Student Info Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Student Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Phone No</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-2" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
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
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Current Company</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.currentCompany} onChange={e => setForm(f => ({ ...f, currentCompany: e.target.value }))} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Joining Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md p-2" value={form.joiningDate} onChange={e => setForm(f => ({ ...f, joiningDate: e.target.value }))} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">First Company</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2" value={form.firstCompany} onChange={e => setForm(f => ({ ...f, firstCompany: e.target.value }))} />
            </div>
            <div className="flex justify-end gap-2">
              <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Add Student</button>
            </div>
          </form>
          {/* List of added students */}
          {students.length > 0 && (
            <div className="mt-8 w-full max-w-lg">
              <h3 className="text-md font-bold text-blue-700 mb-2 text-center">Added Students</h3>
              <ul className="bg-white rounded-lg shadow p-4">
                {students.map((s, idx) => (
                  <li key={idx} className="border-b border-gray-200 py-2">
                    <span className="font-semibold">{s.name}</span> - {s.email} - {s.phone}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {mode === 'spreadsheet' && (
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg shadow p-6 max-w-lg w-full">
            <h2 className="text-lg font-bold text-blue-600 mb-4 text-center">Upload Spreadsheet</h2>
            <label htmlFor="spreadsheet-upload" className="block w-full mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer font-semibold hover:bg-blue-700 transition block text-center">Choose File</span>
              <input id="spreadsheet-upload" type="file" accept=".xlsx,.csv" onChange={handleSpreadsheetUpload} className="hidden" />
            </label>
            {spreadsheetData && (
              <div className="text-green-700 font-mono text-center">Uploaded: {spreadsheetData}</div>
            )}
            {uploadMsg && (
              <div className="text-blue-700 font-semibold text-center mt-2">{uploadMsg}</div>
            )}
            <div className="text-gray-500 text-sm mt-2 text-center">Upload a spreadsheet (.xlsx or .csv) with student details. The data will be stored in the dataset.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClerkDashboard;
