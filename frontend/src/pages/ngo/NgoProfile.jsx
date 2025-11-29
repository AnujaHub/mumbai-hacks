import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaUsers, FaBroom, FaRecycle, FaMap, FaBuilding, FaUser, FaStar, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const NgoProfile = () => {
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

  const stats = [
    { label: 'Active Volunteers', value: '847', icon: <FaUsers /> },
    { label: 'Cleanup Drives', value: '58', icon: <FaBroom /> },
    { label: 'Waste Collected', value: '125T', icon: <FaRecycle /> },
    { label: 'Cities Covered', value: '4', icon: <FaMap /> },
  ];

  const team = [
    { name: 'Priya Sharma', role: 'Coordinator', status: 'Active' },
    { name: 'Vikram Singh', role: 'Field Manager', status: 'Active' },
    { name: 'Aisha Patel', role: 'Community Lead', status: 'Active' },
  ];

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Profile Header */}
        <div className="profile-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">
              <FaBuilding />
            </div>
            <div>
              <h1 className="text-black-30 font-bold mb-2">Mumbai Cleanup NGO</h1>
              <p className="text-lg opacity-90">Environmental Organization • Established 2020</p>
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
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-teal-500">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Organization Info */}
        <section className="profile-section mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Organization</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a dedicated environmental organization committed to preserving and cleaning India's water bodies.
              Our mission is to mobilize communities, coordinate cleanup efforts, and create lasting environmental change.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Founded</p>
                <p className="font-bold text-gray-800">2020</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Volunteers</p>
                <p className="font-bold text-gray-800">847</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Verified By</p>
                <p className="font-bold text-gray-800">NGO Board</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                  <p className="font-bold text-yellow-500"><FaStar className="inline mr-2" />4.9/5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="profile-section mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Team Members</h2>
          <div className="space-y-3">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                    <FaUser />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="profile-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl"><FaEnvelope /></span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">ngo@namami.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl"><FaPhone /></span>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-gray-800">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl"><FaMapPin /></span>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NgoProfile;
