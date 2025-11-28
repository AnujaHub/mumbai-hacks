import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

// User Pages
import UserHome from './pages/user/UserHome.jsx';
import UserProfile from './pages/user/UserProfile.jsx';
import UserLeaderboard from './pages/user/UserLeaderboard.jsx';
import UserCommunity from './pages/user/UserCommunity.jsx';
import UserReport from './pages/user/UserReport.jsx';

// NGO Pages
import NgoHome from './pages/ngo/NgoHome.jsx';
import NgoProfile from './pages/ngo/NgoProfile.jsx';
import NgoCommunity from './pages/ngo/NgoCommunity.jsx';
import NgoDrives from './pages/ngo/NgoDrives.jsx';

// Government Pages
import GovProfile from './pages/gov/GovProfile.jsx';
import GovHome from './pages/gov/GovHome.jsx';
import GovReports from './pages/gov/GovReports.jsx';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const App = () => {
  const location = useLocation();
  const userType = localStorage.getItem('userType');

  // Check if user is logged in and trying to access landing/login/register
  useEffect(() => {
    if (userType && (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register')) {
      // Redirect logged-in users away from public pages
      if (userType === 'user') {
        window.location.href = '/user/home';
      } else if (userType === 'ngo') {
        window.location.href = '/ngo/home';
      }
    }
  }, [userType, location.pathname]);

  return (
    <div className="w-screen min-h-screen bg-white relative">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes */}
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/leaderboard" element={<UserLeaderboard />} />
        <Route path="/user/community" element={<UserCommunity />} />
        <Route path="/user/report" element={<UserReport />} />

        {/* NGO Routes */}
        <Route path="/ngo/home" element={<NgoHome />} />
        <Route path="/ngo/profile" element={<NgoProfile />} />

        <Route path="/ngo/community" element={<NgoCommunity />} />
        <Route path="/ngo/drives" element={<NgoDrives />} />

        {/* Government Routes */}
        <Route path="/gov/home" element={<GovHome />} />
        <Route path="/gov/profile" element={<GovProfile />} />
        <Route path="/gov/reports" element={<GovReports />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
