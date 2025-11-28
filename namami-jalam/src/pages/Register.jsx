import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaUser, FaBuilding, FaLandmark } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const Register = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.register-card', {
        duration: 0.8,
        opacity: 0,
        scale: 0.9,
        ease: 'back.out',
      });
    },
    { scope: containerRef }
  );

  const handleDemoRegister = (userType) => {
    // For demo, just redirect to login
    navigate('/login');
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-linear-to-br from-blue-50 via-cyan-50 to-teal-50 flex items-center justify-center px-4"
    >
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-64 opacity-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-blue-600"
          ></path>
        </svg>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text mb-2">
            Namami Jalam
          </h1>
          <p className="text-gray-600">Join our mission to clean India's waters</p>
        </div>

        {/* Card */}
        <div className="register-card bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get Started</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Citizen Registration */}
            <div className="form-group border-2 border-blue-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4"><FaUser /></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Register as Citizen</h3>
              <p className="text-gray-600 text-sm mb-6">
                Report pollution, join cleanup drives, and contribute to a cleaner community
              </p>
              <button
                onClick={() => handleDemoRegister('user')}
                className="w-full py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Register as Citizen
              </button>
            </div>

            {/* NGO Registration */}
            <div className="form-group border-2 border-teal-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4"><FaBuilding /></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Register your NGO</h3>
              <p className="text-gray-600 text-sm mb-6">
                Organize cleanup drives, track impact, and coordinate with volunteers
              </p>
              <button
                onClick={() => handleDemoRegister('ngo')}
                className="w-full py-3 bg-linear-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Register your NGO
              </button>
            </div>

            {/* Government Registration */}
            <div className="form-group border-2 border-blue-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4"><FaLandmark /></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Register as Government</h3>
              <p className="text-gray-600 text-sm mb-6">
                Access reports from citizens, manage cases, and coordinate municipal teams
              </p>
              <button
                onClick={() => handleDemoRegister('gov')}
                className="w-full py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Register as Government
              </button>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-8 text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Login here
              </button>
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-blue-600 transition-colors font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
