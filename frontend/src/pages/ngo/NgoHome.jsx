import React, { useRef, useState } from 'react';
import five from "../../assets/photos/five.jpg";
import six from "../../assets/photos/six.jpg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaBroom, FaUsers, FaRecycle, FaStar, FaBuilding, FaCalendarAlt, FaCamera, FaChartBar } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const NgoHome = () => {
  const mainRef = useRef(null);
const [viewReports, setViewReports] = useState(false);

const mockReports = [
  {
    id: 1,
    user: 'Anya Roy',
    location: 'Worli',
    pollutionType: 'Plastic Waste',
    severity: 'Medium',
    image: five,
    description: 'Plastic bottles scattered around the beach.',
  },
  {
    id: 2,
    user: 'Rahul Sharma',
    location: 'Dadar',
    pollutionType: 'Water Pollution',
    severity: 'High',
    image: six,
    description: 'Water visibly contaminated with oil.',
  },
];

  useGSAP(
    () => {
      gsap.from('.ngo-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
    },
    { scope: mainRef }
  );

  const stats = [
    { label: 'Cleanup Drives', value: '24', icon: <FaBroom />, color: 'from-blue-400 to-cyan-500' },
    { label: 'Volunteers', value: '1,247', icon: <FaUsers />, color: 'from-emerald-400 to-teal-500' },
    { label: 'Waste Collected', value: '12.5T', icon: <FaRecycle />, color: 'from-purple-400 to-pink-500' },
    { label: 'Impact Score', value: '94%', icon: <FaStar />, color: 'from-orange-400 to-red-500' },
  ];

  const recentDrives = [
    {
      id: 1,
      name: 'Worli Beach Cleanup',
      date: 'Dec 2, 2025',
      volunteers: 45,
      status: 'Completed',
      wasteCollected: '850 kg',
    },
    {
      id: 2,
      name: 'Marine Drive Cleanup',
      date: 'Dec 4, 2025',
      volunteers: 38,
      status: 'Ongoing',
      wasteCollected: '620 kg',
    },
    {
      id: 3,
      name: 'Mahim Causeway Cleanup',
      date: 'Dec 6, 2025',
      volunteers: 52,
      status: 'Scheduled',
      wasteCollected: '1,200 kg',
    },
  ];




  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white">
      {/* Header */}
      <div className="ngo-header bg-linear-to-r from-blue-600 to-teal-500 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Welcome, NGO Dashboard</h1>
          <p className="text-lg opacity-90">
            Organize, track, and amplify your environmental impact
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10">
        {/* Stats Grid */}
        <section className="ngo-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Impact Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-linear-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Drives */}
        <section className="ngo-section">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Recent Cleanup Drives</h2>
        

          </div>

          <div className="space-y-4">
            {recentDrives.map((drive) => (
              <div
                key={drive.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{drive.name}</h3>
                    <p className="text-sm text-gray-500"><FaCalendarAlt className="inline mr-1" />{drive.date}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{drive.volunteers}</p>
                    <p className="text-sm text-gray-500">Volunteers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-emerald-600">{drive.wasteCollected}</p>
                    <p className="text-sm text-gray-500">Waste</p>
                  </div>
                  <div className="text-center">
                    <span
                      className={`px-4 py-2 rounded-full font-bold text-sm ${
                        drive.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : drive.status === 'Ongoing'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {drive.status}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="ngo-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
                onClick={() => setViewReports(!viewReports)}
                className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300 hover:border-blue-500 transition-all duration-300 cursor-pointer group"
                    >
             <div className="text-4xl mb-4"><FaCamera /></div>
             <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 mb-2">
              View Reports
            </h3>
             <p className="text-gray-600">See pollution reports submitted by users</p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-emerald-300 hover:border-emerald-500 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4"><FaChartBar /></div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 mb-2">
                Analytics
              </h3>
              <p className="text-gray-600">View impact metrics and environmental reports</p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl mb-4"><FaUsers /></div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 mb-2">
                Team Management
              </h3>
              <p className="text-gray-600">Manage volunteers and coordinate teams</p>
            </div>
          </div>
        </section>

        {viewReports && (
  <section className="ngo-section mt-8">
    <h2 className="text-3xl font-bold mb-6">User Reports</h2>
    <div className="space-y-4">
      {mockReports.map((report) => (
        <div key={report.id} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
          <h3 className="font-bold text-lg">{report.user}</h3>
          <p className="text-sm text-gray-500">{report.location} | {report.pollutionType} | {report.severity}</p>
          <img src={report.image} alt="report" className="mt-2 max-h-48 rounded-lg" />
          <p className="mt-2 text-gray-700">{report.description}</p>
        </div>
      ))}
    </div>
  </section>
)}

        </div>
      <div className="py-8"></div>
    </main>
  );
};

export default NgoHome;
