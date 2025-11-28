import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CleanupOpportunities from '../../components/user/home/CleanupOpportunities.jsx';
// import ThisWeeksAchievements from '../../components/user/home/ThisWeeksAchievements.jsx';
// import AnalyticsOverview from '../../components/user/home/AnalyticsOverview.jsx';
// import RecentPollutionReports from '../../components/user/home/RecentPollutionReports.jsx';
// import CommunityHighlights from '../../components/user/home/CommunityHighlights.jsx';
import ImageUpload from '../../components/user/home/ImageUpload.jsx';

gsap.registerPlugin(useGSAP);

const UserHome = () => {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      // Animate header entrance
      gsap.from('.user-home-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white">
      {/* Header Section */}
      <div className="user-home-header bg-linear-to-r from-blue-600 to-cyan-500 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Welcome back, Citizen</h1>
          <p className="text-lg opacity-90">
            Together we're making Mumbai cleaner and healthier, one report at a time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10">
        {/* Section 0: Image Upload */}
        <section className="home-section">
          <ImageUpload />
        </section>

        {/* Section 1: Cleanup Opportunities */}
        <section className="home-section">
          <CleanupOpportunities />
        </section>

        {/* Section 2: This Week's Achievements */}
        {/* <section className="home-section">
          <ThisWeeksAchievements />
        </section> */}

        {/* Section 3: Analytics Overview */}
        {/* <section className="home-section">
          <AnalyticsOverview />
        </section>

        {/* Section 4: Recent Pollution Reports */}
        {/* <section className="home-section">
          <RecentPollutionReports />
        </section> */}

        {/* Section 5: Community Highlights */}
        {/* <section className="home-section">
          <CommunityHighlights />
        </section> */}
      </div>

      {/* Footer Spacing */}
      <div className="py-8"></div>
    </main>
  );
};

export default UserHome;
