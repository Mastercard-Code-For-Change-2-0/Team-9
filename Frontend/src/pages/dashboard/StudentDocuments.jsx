// filepath: /Users/pradeepkumar/Developer/master-card/src/pages/dashboard/StudentDocuments.jsx
import React, { useState } from 'react';

const StudentDocuments = ({ user }) => {
  const [documents] = useState([
    { id: 1, name: 'Academic Certificate', type: 'Certificate', status: 'Verified', signatureRequired: false, uploadDate: '2025-01-15' },
    { id: 2, name: 'Identity Proof', type: 'ID Document', status: 'Verified', signatureRequired: true, uploadDate: '2025-01-16' },
    { id: 3, name: 'Training Completion', type: 'Certificate', status: 'Pending', signatureRequired: true, uploadDate: '2025-01-18' },
    { id: 4, name: 'Internship Agreement', type: 'Contract', status: 'Signature Pending', signatureRequired: true, uploadDate: '2025-01-20' }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">My Documents</h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg">
            Upload New Document
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Signature</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                    <div className="text-sm text-gray-500">Uploaded: {doc.uploadDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      doc.status === 'Verified' ? 'bg-green-100 text-green-800' :
                      doc.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {doc.signatureRequired ? (
                      <span className="text-blue-600 text-sm">Required</span>
                    ) : (
                      <span className="text-gray-400 text-sm">Not Required</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900">View</button>
                    {doc.signatureRequired && doc.status === 'Signature Pending' && (
                      <button className="text-green-600 hover:text-green-900">Sign</button>
                    )}
                    <button className="text-gray-600 hover:text-gray-900">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Digital Signature Status */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Digital Signature Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600">Completed Signatures</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-gray-600">Pending Signatures</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Signature Requests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDocuments;