import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaMedal, FaStar } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const UserLeaderboard = () => {
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
    { rank: 1, name: 'Rajesh Kumar', points: 12500, cleanups: 48, badge: <FaMedal style={{ color: '#D4AF37' }} /> },
    { rank: 2, name: 'Priya Sharma', points: 11200, cleanups: 45, badge: <FaMedal style={{ color: '#C0C0C0' }} /> },
    { rank: 3, name: 'Vikram Singh', points: 10800, cleanups: 42, badge: <FaMedal style={{ color: '#cd7f32' }} /> },
    { rank: 4, name: 'Aisha Patel', points: 9500, cleanups: 38, badge: <FaStar /> },
    { rank: 5, name: 'Neha Gupta', points: 8900, cleanups: 35, badge: <FaStar /> },
    { rank: 6, name: 'Rahul Kapoor', points: 8200, cleanups: 32, badge: <FaStar /> },
    { rank: 7, name: 'Sneha Das', points: 7600, cleanups: 29, badge: <FaStar /> },
    { rank: 8, name: 'Rohan Patel', points: 6900, cleanups: 26, badge: <FaStar /> },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="leaderboard-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-2"><FaMedal className="inline mr-2" />Community Leaderboard</h1>
          <p className="text-lg opacity-90">Top Environmental Warriors of Mumbai</p>
        </div>

        {/* Leaderboard Table */}
        <div className="space-y-4">
          {leaderboard.map((user) => (
            <div
              key={user.rank}
              className={`leaderboard-card rounded-lg p-6 shadow-md transition-all duration-300 transform hover:scale-102 cursor-pointer ${
                user.rank <= 3
                  ? 'bg-linear-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500'
                  : 'bg-white border-l-4 border-blue-500'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Rank */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-300 w-12">{user.rank}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{user.badge}</span>
                      <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500">Rank #{user.rank}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-500">Cleanups</p>
                  <p className="text-2xl font-bold text-blue-600">{user.cleanups}</p>
                </div>

                {/* Points */}
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-500">Community Points</p>
                  <p className="text-2xl font-bold text-emerald-600">{user.points.toLocaleString()}</p>
                </div>

                {/* Progress Bar */}
                <div className="md:col-span-1">
                  <p className="text-sm text-gray-500 mb-2">Progress</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-blue-500 to-teal-500 rounded-full"
                      style={{ width: `${(user.points / 12500) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action */}
                <div className="text-right">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
                    Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Rank (if logged in) */}
        <div className="mt-12 p-6 bg-linear-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Position</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Your Rank</p>
              <p className="text-4xl font-bold text-purple-600">24</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Your Points</p>
              <p className="text-4xl font-bold text-emerald-600">4,850</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Cleanups Done</p>
              <p className="text-4xl font-bold text-blue-600">18</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Until Next Rank</p>
              <p className="text-4xl font-bold text-orange-600">+520</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserLeaderboard;
