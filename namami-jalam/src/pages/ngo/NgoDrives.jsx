import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaBroom, FaMapPin, FaCalendarAlt, FaUsers, FaClipboardList } from 'react-icons/fa';
import { drives } from '../../data/drives';

gsap.registerPlugin(useGSAP);


// export const drives = [
//   {
//     id: 1,
//     name: 'Worli Beach Cleanup',
//     date: 'Dec 2, 2025',
//     time: '09:00 AM - 12:00 PM',
//     location: 'Worli Beach',
//     volunteers: '45/50',
//     status: 'Active',
//     tasks: 5,
//   },
//   {
//     id: 2,
//     name: 'Marine Drive Drive',
//     date: 'Dec 4, 2025',
//     time: '08:00 AM - 02:00 PM',
//     location: 'Marine Drive',
//     volunteers: '38/60',
//     status: 'Recruitment',
//     tasks: 8,
//   },
//   {
//     id: 3,
//     name: 'Mahim Causeway Cleanup',
//     date: 'Dec 6, 2025',
//     time: '10:00 AM - 03:00 PM',
//     location: 'Mahim Causeway',
//     volunteers: '52/75',
//     status: 'Planning',
//     tasks: 12,
//   },
// ];   `

const NgoDrives = () => {
  const mainRef = useRef(null);

  useGSAP(() => {
    gsap.from('.drives-header', {
      duration: 0.8,
      opacity: 0,
      y: -30,
      ease: 'power3.out',
    });
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="drives-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2"><FaBroom className="inline mr-2" />Cleanup Drives</h1>
            <p className="text-lg opacity-90">Manage and coordinate your cleanup initiatives</p>
          </div>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            + Schedule Drive
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {drives.map((drive) => (
            <div
              key={drive.id}
              className="drive-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-blue-500"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{drive.name}</h3>
                    <p className="text-gray-500"><FaMapPin className="inline mr-1" />{drive.location}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full font-bold text-sm ${
                      drive.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : drive.status === 'Recruitment'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {drive.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaCalendarAlt />
                    <span>{drive.date} • {drive.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaUsers />
                    <span>Volunteers: {drive.volunteers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaClipboardList />
                    <span>{drive.tasks} tasks to manage</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-lg hover:bg-blue-200 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors">
                    Edit Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default NgoDrives;
