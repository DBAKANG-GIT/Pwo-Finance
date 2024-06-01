import React from 'react';
import OurServices from '../components/Services-section/our-services-section';
import CallToAction from '@/components/call-to-action/call-to-action';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightPink mx-auto  px-4">
      <OurServices />
      <CallToAction />
      {/* Add your content here */}
    </div>
  );
};

export default Services;
