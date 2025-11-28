import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaTrophy, FaUsers, FaHeart, FaStar, FaMedal, FaUserCircle } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const CommunityHighlights = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      });

      gsap.from('.highlight-card', {
        duration: 0.6,
        opacity: 0,
        rotateY: -20,
        stagger: 0.12,
        delay: 0.2,
        ease: 'back.out',
      });

      gsap.from('.member-avatar', {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        delay: 0.4,
        ease: 'back.out',
      });
    },
    { scope: containerRef }
  );

  const highlights = [
    {
      id: 1,
      type: 'achievement',
      title: 'Cleanup Champion',
      description: 'Rajesh K. completed 50 cleanup missions!',
      icon: <FaTrophy />,
      color: 'from-yellow-400 to-orange-500',
      badge: '50x',
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Environmental Hero',
      description: 'Team Mumbai collected 5 tons of waste',
      icon: <FaHeart />,
      color: 'from-emerald-400 to-teal-500',
      badge: '5T',
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Community Pulse',
      description: 'Over 10K community members engaged this month',
      icon: <FaUsers />,
      color: 'from-blue-400 to-cyan-500',
      badge: '10K+',
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Rising Star',
      description: 'Priya joined today and already helped 3 areas',
      icon: <FaStar />,
      color: 'from-purple-400 to-pink-500',
      badge: '3',
    },
  ];

  const topContributors = [
    { name: 'Rajesh K.', contributions: 248, avatar: <FaUserCircle />, rank: 1 },
    { name: 'Priya M.', contributions: 187, avatar: <FaUserCircle />, rank: 2 },
    { name: 'Vikram S.', contributions: 156, avatar: <FaUserCircle />, rank: 3 },
    { name: 'Aisha P.', contributions: 142, avatar: <FaUserCircle />, rank: 4 },
    { name: 'Neha G.', contributions: 128, avatar: <FaUserCircle />, rank: 5 },
    { name: 'Rahul K.', contributions: 115, avatar: <FaUserCircle />, rank: 6 },
  ];

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Achievements Grid */}
      <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6"><FaStar className="inline mr-2 text-yellow-500" />Community Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className={`highlight-card bg-linear-to-br ${highlight.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group cursor-pointer`}
            >
              {/* Background animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{highlight.icon}</div>
                  <span className="bg-white bg-opacity-30 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {highlight.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                <p className="text-sm opacity-90">{highlight.description}</p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 transform group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white to-transparent opacity-30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Contributors */}
      <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6"><FaStar className="inline mr-2 text-yellow-400" />Top Contributors This Month</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {topContributors.map((contributor) => (
            <div
              key={contributor.rank}
              className="member-avatar bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:scale-110 relative group cursor-pointer"
            >
              <div className="relative mb-3 flex justify-center">
                <div className="text-4xl">{contributor.avatar}</div>
                {contributor.rank <= 3 && (
                  <div className="absolute -top-1 -right-1 bg-yellow-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    <FaMedal />
                  </div>
                )}
              </div>

              <h3 className="font-bold text-gray-800 text-sm mb-1">{contributor.name}</h3>
              <p className="text-lg font-bold text-indigo-600">{contributor.contributions}</p>
              <p className="text-xs text-gray-500">contributions</p>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-linear-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 shadow-lg text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to Make an Impact?</h3>
        <p className="mb-6 text-lg opacity-90">
          Join thousands of community members making Mumbai cleaner, one cleanup at a time
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-teal-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Upload Pollution Report
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
            Join a Cleanup Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityHighlights;
