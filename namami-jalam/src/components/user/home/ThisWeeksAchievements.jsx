import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ThisWeeksAchievements = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      });

      gsap.from('.achievement-card', {
        duration: 0.6,
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        delay: 0.2,
        ease: 'back.out',
      });
    },
    { scope: containerRef }
  );

  const achievements = [
    {
      id: 1,
      icon: '🧹',
      label: 'Areas Cleaned',
      value: 127,
      unit: 'locations',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      id: 2,
      icon: '👥',
      label: 'Active Volunteers',
      value: 3847,
      unit: 'people',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 3,
      icon: '♻️',
      label: 'Waste Collected',
      value: 2840,
      unit: 'kg',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 4,
      icon: '⭐',
      label: 'Community Rating',
      value: 48,
      unit: '%',
      color: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <div ref={containerRef} className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 This Week's Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className={`achievement-card bg-linear-to-br ${achievement.color} rounded-xl p-6 shadow-lg text-white transform hover:scale-110 transition-all duration-300 cursor-pointer relative overflow-hidden group`}
          >
            {/* Background shimmer effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="text-5xl mb-3">{achievement.icon}</div>
              <div className="text-4xl font-bold mb-1">
                <span
                  className="counter-value"
                  data-target={achievement.value}
                >
                  0
                </span>
              </div>
              <p className="text-sm font-semibold opacity-90">{achievement.unit}</p>
              <p className="text-lg font-bold mt-2">{achievement.label}</p>
            </div>

            {/* Animated border effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-purple-500">
        <p className="text-gray-700">
          <strong>🎯 Weekly Goal Progress:</strong> 78% completion - Keep pushing to reach 100%!
        </p>
      </div>
    </div>
  );
};

export default ThisWeeksAchievements;
