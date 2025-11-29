import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaStar, FaTrophy, FaBroom, FaHeart, FaClock, FaRecycle, FaUserCircle, FaCheckCircle, FaCamera, FaRegSmile, FaUsers } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const UserProfile = () => {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.profile-header', {
        duration: 0.8,
        opacity: 0,
        scale: 0.9,
        ease: 'back.out',
      });
    },
    { scope: mainRef }
  );

  const achievements = [
    { icon: <FaStar />, label: 'Environmental Hero', points: 2500 },
    { icon: <FaTrophy />, label: 'Top Contributor', points: 1800 },
    { icon: <FaBroom />, label: 'Cleanup Master', points: 1500 },
    { icon: <FaHeart />, label: 'Green Guardian', points: 1200 },
  ];

  const stats = [
    { label: 'Cleanup Events', value: '24', icon: <FaBroom /> },
    { label: 'Hours Volunteered', value: '96', icon: <FaClock /> },
    { label: 'Waste Collected', value: '3.2T', icon: <FaRecycle /> },
    { label: 'Community Points', value: '8,945', icon: <FaStar /> },
  ];

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Profile Header */}
        <div className="profile-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">
              <FaUserCircle />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Raj Kumar</h1>
              <p className="text-lg opacity-90">Environmental Activist • Mumbai</p>
              <div className="flex gap-4 mt-3">
                <button className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Edit Profile
                </button>
                <button className="px-6 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="profile-section grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-blue-500">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <section className="profile-section mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Achievements & Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border-l-4 border-yellow-500"
              >
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{achievement.label}</h3>
                <p className="text-sm text-gray-600">{achievement.points} points</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="profile-section mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'Completed cleanup at Worli Beach', date: '2 days ago', icon: <FaCheckCircle /> },
              { action: 'Reported pollution hotspot', date: '4 days ago', icon: <FaCamera /> },
              { action: 'Reached 2,500 community points', date: '1 week ago', icon: <FaRegSmile /> },
              { action: 'Joined Marine Drive cleanup drive', date: '2 weeks ago', icon: <FaUsers /> },
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center gap-4">
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bio Section */}
        <section className="profile-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Passionate environmental activist dedicated to keeping our water bodies clean. I believe in the power
              of community action and am committed to making Mumbai a cleaner, healthier place for everyone.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserProfile;
