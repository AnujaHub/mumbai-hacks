import React from 'react';
import { FaMapPin, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { drives } from '../../../data/drives';

const CleanupOpportunities = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Recruitment':
        return 'bg-blue-500';
      case 'Planning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Nearby Cleanup Drives</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drives.map((drive) => (
          <div
            key={drive.id}
            className="cleanup-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-600 cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {drive.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  <FaMapPin className="inline mr-1" />
                  {drive.location}
                </p>
              </div>
              <span
                className={`${getStatusColor(drive.status)} text-white px-3 py-1 rounded-full text-xs font-bold`}
              >
                {drive.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-lg" />
                  <span className="text-gray-700">
                    <strong>{drive.volunteers}</strong> volunteers
                  </span>
                </div>
                <span className="text-gray-500">
                  <FaCalendarAlt className="inline mr-1" />
                  {drive.date}
                </span>
              </div>
            </div>

            <button className="w-full py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Join Cleanup
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleanupOpportunities;
