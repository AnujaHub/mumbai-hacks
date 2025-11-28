import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const AnalyticsOverview = () => {
  const containerRef = useRef(null);
  const barsRef = useRef([]);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      });

      gsap.from('.chart-bar', {
        duration: 0.8,
        scaleY: 0,
        transformOrigin: 'bottom',
        stagger: 0.1,
        delay: 0.3,
        ease: 'back.out',
      });

      gsap.from('.stat-item', {
        duration: 0.6,
        opacity: 0,
        x: -20,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  const chartData = [
    { month: 'Jan', pollution: 85, volunteers: 120, areas: 45 },
    { month: 'Feb', pollution: 78, volunteers: 145, areas: 52 },
    { month: 'Mar', pollution: 72, volunteers: 168, areas: 60 },
    { month: 'Apr', pollution: 65, volunteers: 192, areas: 71 },
    { month: 'May', pollution: 58, volunteers: 215, areas: 85 },
    { month: 'Jun', pollution: 48, volunteers: 247, areas: 98 },
  ];

  const maxValue = 250;

  const stats = [
    { label: 'Avg. Pollution Score', value: '65%', change: '-12%', positive: true },
    { label: 'Areas Monitored', value: '412', change: '+34', positive: true },
    { label: 'Active Users', value: '8,234', change: '+18%', positive: true },
    { label: 'Pending Alerts', value: '23', change: '+5', positive: false },
  ];

  return (
    <div ref={containerRef} className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">📈 Analytics Overview</h2>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-item bg-white rounded-lg p-4 shadow-md border-t-4 border-indigo-500"
          >
            <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
              <span
                className={`text-sm font-bold ${
                  stat.positive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.positive ? '↓' : '↑'} {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-6">6-Month Trend Analysis</h3>

        <div className="flex items-end justify-around h-64 gap-4">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full flex items-end justify-center gap-1 h-48">
                {/* Pollution Bar */}
                <div className="flex flex-col items-center flex-1">
                  <div
                    className="chart-bar w-full bg-linear-to-t from-red-500 to-orange-400 rounded-t-lg hover:from-red-600 hover:to-orange-500 transition-all duration-300 shadow-lg"
                    style={{
                      height: `${(data.pollution / maxValue) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Volunteers Bar */}
                <div className="flex flex-col items-center flex-1">
                  <div
                    className="chart-bar w-full bg-linear-to-t from-blue-500 to-cyan-400 rounded-t-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg"
                    style={{
                      height: `${(data.volunteers / maxValue) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Areas Bar */}
                <div className="flex flex-col items-center flex-1">
                  <div
                    className="chart-bar w-full bg-linear-to-t from-green-500 to-emerald-400 rounded-t-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-lg"
                    style={{
                      height: `${(data.areas / maxValue) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <span className="text-xs font-semibold text-gray-600 mt-2">{data.month}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-linear-to-r from-red-500 to-orange-400"></div>
            <span className="text-sm text-gray-700">Pollution Level</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-400"></div>
            <span className="text-sm text-gray-700">Active Volunteers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-linear-to-r from-green-500 to-emerald-400"></div>
            <span className="text-sm text-gray-700">Areas Cleaned</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
