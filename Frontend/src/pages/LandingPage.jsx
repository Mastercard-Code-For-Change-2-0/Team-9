import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import PlatformOverview from '../components/PlatformOverview';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <PlatformOverview />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
