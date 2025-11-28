import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaCamera, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';
import reportImg from '../../assets/photos/five.jpg';

gsap.registerPlugin(useGSAP);

const GovReports = () => {
  const mainRef = useRef(null);
  const [reports] = useState([
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
  ]);

  useGSAP(
    () => {
      gsap.from('.gov-reports-header', { duration: 0.6, opacity: 0, y: -20, ease: 'power3.out' });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gov-reports-header bg-linear-to-r from-blue-700 to-teal-500 text-white rounded-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold">Incoming Reports</h1>
          <p className="text-sm opacity-90">Citizen-submitted pollution reports for review and action</p>
        </div>

        <div className="space-y-4">
          {reports.map((r) => (
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
      </div>
    </main>
  );
};

export default GovReports;
