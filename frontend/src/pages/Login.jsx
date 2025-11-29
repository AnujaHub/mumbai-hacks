import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaWater, FaUser, FaBuilding, FaLandmark } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const Login = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [error, setError] = useState('');

  useGSAP(
    () => {
      gsap.from('.login-card', {
        duration: 0.8,
        opacity: 0,
        scale: 0.9,
        ease: 'back.out',
      });
    },
    { scope: containerRef }
  );

  // Dummy credentials
  const dummyCredentials = {
    user: { email: 'user@namami.com', password: 'user123' },
    ngo: { email: 'ngo@namami.com', password: 'ngo123' },
    gov: { email: 'gov@namami.com', password: 'gov123' },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const credentials = dummyCredentials[userType];

    if (email === credentials.email && password === credentials.password) {
      // Store user session
      localStorage.setItem('userType', userType);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', userType === 'user' ? 'Raj Kumar' : 'Mumbai Cleanup NGO');

      // Navigate based on user type with replace to prevent back navigation
      setTimeout(() => {
        if (userType === 'user') {
          navigate('/user/home', { replace: true });
        } else if (userType === 'ngo') {
          navigate('/ngo/home', { replace: true });
        } else if (userType === 'gov') {
          navigate('/gov/home', { replace: true });
        }
      }, 300);
    } else {
      setError('Invalid email or password');
    }
  };

  const fillDemoCredentials = () => {
    const credentials = dummyCredentials[userType];
    setEmail(credentials.email);
    setPassword(credentials.password);
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

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text mb-2">
            Namami Jalam
          </h1>
          <p className="text-gray-600">Clean waters, Cleaner communities</p>
        </div>

        {/* Card */}
        <div className="login-card bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
          {/* User Type Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => {
                setUserType('user');
                setError('');
              }}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                userType === 'user'
                  ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FaUser className="inline mr-2" />Citizen
            </button>
            <button
              onClick={() => {
                setUserType('ngo');
                setError('');
              }}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                userType === 'ngo'
                  ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FaBuilding className="inline mr-2" />NGO
            </button>
            <button
              onClick={() => {
                setUserType('gov');
                setError('');
              }}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                userType === 'gov'
                  ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FaLandmark className="inline mr-2" />Government
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="form-group bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700 text-sm font-semibold">{error}</p>
              </div>
            )}

            {/* Email */}
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                placeholder="Enter your password"
              />
            </div>

            {/* Demo Credentials Hint */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-blue-700 text-xs font-semibold mb-2">Demo Credentials:</p>
              <p className="text-blue-600 text-xs">
                {userType === 'user'
                  ? 'user@namami.com / user123'
                  : userType === 'ngo'
                  ? 'ngo@namami.com / ngo123'
                  : 'gov@namami.com / gov123'}
              </p>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Auto-fill
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-blue-600 to-teal-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Register here
              </button>
            </p>
          </div>
        </div>

        {/* Landing Link */}
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

export default Login;
