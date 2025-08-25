import React, { useState } from 'react';
import usersData from '../../data/users.json';

const MentorStudents = ({ user }) => {
  // Filter only student users
  const students = usersData.filter(u => u.role === 'student');
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [programFilter, setProgramFilter] = useState('all');
  
  // Get unique programs
  const programs = [...new Set(students.map(student => student.program))];
  
  // Filter students based on search and program filter
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProgram = programFilter === 'all' || student.program === programFilter;
    
    return matchesSearch && matchesProgram;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">My Students</h2>
        
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search students"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                Program
              </label>
              <select
                id="program"
                name="program"
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
              >
                <option value="all">All Programs</option>
                {programs.map((program, index) => (
                  <option key={index} value={program}>{program}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                type="button"
                className="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Assign New Student
              </button>
            </div>
          </div>
        </div>
        
        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg font-medium">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.program}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    student.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {student.status}
                  </span>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Email:</span> {student.email}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-600 mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-700 mb-1">Overall Progress</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${Math.floor(Math.random() * 41) + 60}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-2">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded text-sm transition">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-1.5 px-3 rounded text-sm transition">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorStudents;
