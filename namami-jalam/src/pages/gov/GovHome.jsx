import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaClipboardList, FaCheckCircle, FaExclamationTriangle, FaUsers, FaChartLine, FaCamera, FaLandmark } from 'react-icons/fa';
import reportImg from '../../assets/photos/five.jpg';

gsap.registerPlugin(useGSAP);

const GovHome = () => {
  const mainRef = useRef(null);
  const [viewReports, setViewReports] = useState(true);

  useGSAP(
    () => {
      gsap.from('.gov-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
    },
    { scope: mainRef }
  );

  const stats = [
    { label: 'Incoming Reports', value: '128', icon: <FaClipboardList /> },
    { label: 'Open Cases', value: '34', icon: <FaExclamationTriangle /> },
    { label: 'Resolved', value: '94', icon: <FaCheckCircle /> },
    { label: 'Teams', value: '12', icon: <FaUsers /> },
  ];

  const mockReports = [
    {
      id: 1,
      reporter: 'Anya Roy',
      location: 'Worli Beach',
      type: 'Plastic Waste',
      severity: 'Medium',
      image: reportImg,
      description: 'Plastic bottles and bags along the shoreline',
      status: 'Open',
    },
    {
      id: 2,
      reporter: 'Rahul Sharma',
      location: 'Mithi River',
      type: 'Industrial Waste',
      severity: 'High',
      image: reportImg,
      description: 'Oil sheen and dead fish observed',
      status: 'Under Review',
    },
  ];

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white">
      <div className="gov-header bg-linear-to-r from-blue-700 to-teal-500 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Government Dashboard</h1>
          <p className="text-lg opacity-90">Manage citizen reports, assign teams, and monitor resolution progress</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="text-3xl mb-2 text-blue-600">{s.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{s.value}</div>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Recent Reports</h2>
           
          </div>

          <div className="space-y-4">
            {mockReports.map((r) => (
              <div key={r.id} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-800">{r.location}</h3>
                    <p className="text-sm text-gray-500">{r.reporter} • {r.type} • {r.severity}</p>
                    <p className="mt-2 text-gray-700">{r.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <img src={r.image} alt="report" className="rounded-lg max-h-36 w-full object-cover" />
                  </div>
                  <div className="md:col-span-1 text-center">
                    <p className="font-semibold">Status</p>
                    <p className="mt-2 px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 font-bold">{r.status}</p>
                  </div>
                  <div className="md:col-span-1 text-right">
                    <button className="px-4 py-2 bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-lg">Assign Team</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default GovHome;
