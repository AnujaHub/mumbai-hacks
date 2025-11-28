import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaMedal, FaStar } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const NgoLeaderboard = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.leaderboard-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const leaderboard = [
    { rank: 1, name: 'Mumbai Cleanup NGO', drives: 58, volunteers: 847, waste: 125, badge: <FaMedal style={{ color: '#D4AF37' }} /> },
    { rank: 2, name: 'Ocean Guardians', drives: 52, volunteers: 724, waste: 98, badge: <FaMedal style={{ color: '#C0C0C0' }} /> },
    { rank: 3, name: 'Environmental Force', drives: 48, volunteers: 612, waste: 85, badge: <FaMedal style={{ color: '#cd7f32' }} /> },
    { rank: 4, name: 'Clean Waters Initiative', drives: 42, volunteers: 531, waste: 72, badge: <FaStar /> },
    { rank: 5, name: 'Green Planet Alliance', drives: 38, volunteers: 456, waste: 61, badge: <FaStar /> },
    { rank: 6, name: 'River Rescue Corps', drives: 35, volunteers: 389, waste: 52, badge: <FaStar /> },
    { rank: 7, name: 'Eco Warriors United', drives: 31, volunteers: 312, waste: 42, badge: <FaStar /> },
    { rank: 8, name: 'Beach Cleanup Coalition', drives: 28, volunteers: 251, waste: 35, badge: <FaStar /> },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="leaderboard-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-2"><FaMedal className="inline mr-2" />NGO Leaderboard</h1>
          <p className="text-lg opacity-90">Top Environmental Organizations</p>
        </div>

        {/* Leaderboard Table */}
        <div className="space-y-4">
          {leaderboard.map((ngo) => (
            <div
              key={ngo.rank}
              className={`leaderboard-card rounded-lg p-6 shadow-md transition-all duration-300 transform hover:scale-102 cursor-pointer ${
                ngo.rank <= 3
                  ? 'bg-linear-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500'
                  : 'bg-white border-l-4 border-blue-500'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                {/* Rank & Name */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-300 w-12">{ngo.rank}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{ngo.badge}</span>
                      <h3 className="text-lg font-bold text-gray-800">{ngo.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500">Rank #{ngo.rank}</p>
                  </div>
                </div>

                {/* Drives */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">Drives</p>
                  <p className="text-2xl font-bold text-blue-600">{ngo.drives}</p>
                </div>

                {/* Volunteers */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">Volunteers</p>
                  <p className="text-2xl font-bold text-emerald-600">{ngo.volunteers}</p>
                </div>

                {/* Waste Collected */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">Waste (Tons)</p>
                  <p className="text-2xl font-bold text-purple-600">{ngo.waste}T</p>
                </div>

                {/* Progress */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">Impact</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-blue-500 to-teal-500 rounded-full"
                      style={{ width: `${(ngo.drives / 58) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action */}
                <div className="text-right">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Organization Stats */}
        <div className="mt-12 p-6 bg-linear-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Organization Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Your Rank</p>
              <p className="text-4xl font-bold text-purple-600">1</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Cleanup Drives</p>
              <p className="text-4xl font-bold text-blue-600">58</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Active Volunteers</p>
              <p className="text-4xl font-bold text-emerald-600">847</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Waste Collected</p>
              <p className="text-4xl font-bold text-purple-600">125T</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Impact Score</p>
              <p className="text-4xl font-bold text-orange-600">94%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NgoLeaderboard;
