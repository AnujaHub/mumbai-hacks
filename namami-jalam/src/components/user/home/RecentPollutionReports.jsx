import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GiWaterDrop } from 'react-icons/gi';
import { FaIndustry, FaTrash, FaRecycle, FaLeaf, FaExclamationTriangle, FaHourglassHalf, FaCalendarAlt, FaArrowUp, FaCheckCircle, FaMapPin, FaUser, FaClock } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const RecentPollutionReports = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      });

      gsap.from('.report-item', {
        duration: 0.6,
        opacity: 0,
        x: -30,
        stagger: 0.15,
        delay: 0.2,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  const reports = [
    {
      id: 1,
      location: 'Colaba Causeway',
      severity: 'Critical',
      pollutionScore: 92,
      reportedBy: 'Priya M.',
      timestamp: '2 hours ago',
      image: <GiWaterDrop />,
      status: 'Alert Sent',
      description: 'High plastic waste accumulation',
    },
    {
      id: 2,
      location: 'Andheri East',
      severity: 'High',
      pollutionScore: 78,
      reportedBy: 'Rahul K.',
      timestamp: '4 hours ago',
      image: <FaIndustry />,
      status: 'In Progress',
      description: 'Industrial waste near residential area',
    },
    {
      id: 3,
      location: 'Bandra Promenade',
      severity: 'Medium',
      pollutionScore: 62,
      reportedBy: 'Aisha P.',
      timestamp: '6 hours ago',
      image: <FaTrash />,
      status: 'Scheduled',
      description: 'Scattered waste and litter',
    },
    {
      id: 4,
      location: 'Thane East Lake',
      severity: 'High',
      pollutionScore: 81,
      reportedBy: 'Vikram S.',
      timestamp: '8 hours ago',
      image: <FaRecycle />,
      status: 'Escalated',
      description: 'Water pollution detected',
    },
    {
      id: 5,
      location: 'Chembur Garden',
      severity: 'Low',
      pollutionScore: 45,
      reportedBy: 'Neha G.',
      timestamp: '12 hours ago',
      image: <FaLeaf />,
      status: 'Resolved',
      description: 'Minor debris cleanup',
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Alert Sent':
        return <FaExclamationTriangle />;
      case 'In Progress':
        return <FaHourglassHalf />;
      case 'Scheduled':
        return <FaCalendarAlt />;
      case 'Escalated':
        return <FaArrowUp />;
      case 'Resolved':
        return <FaCheckCircle />;
      default:
        return <FaMapPin />;
    }
  };

  return (
    <div ref={containerRef} className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800"><FaExclamationTriangle className="inline mr-2 text-red-600" />Recent Pollution Reports</h2>
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
          Report Now
        </button>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="report-item bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-red-500 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-4 flex-1">
                <div className="text-3xl">{report.image}</div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                      {report.location}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{report.description}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span><FaUser className="inline mr-1" />Reported by {report.reportedBy}</span>
                    <span><FaClock className="inline mr-1" />{report.timestamp}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">{report.pollutionScore}%</p>
                  <p className="text-xs text-gray-500">Pollution</p>
                </div>

                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <span className="text-lg">{getStatusIcon(report.status)}</span>
                  <span className="text-xs font-semibold text-gray-700">{report.status}</span>
                </div>
              </div>
            </div>

            {/* Pollution Progress Bar */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-red-500 to-orange-400 rounded-full"
                  style={{ width: `${report.pollutionScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 font-semibold">
          View All Reports
        </button>
      </div>
    </div>
  );
};

export default RecentPollutionReports;
