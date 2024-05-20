import React from 'react';
import Hero from '../components/Hero/hero';
// import image from '../assets/Hero-Page.jpeg';

const Home: React.FC = () => {
  return (
    <>
      <Hero
        video={import.meta.env.VITE_HOME_VIDEO_URL}
        title="Unlock Your Property Potential with Expert Complex Mortgages"
        subtitle="Tailored Solutions for Property Investors and Developers"
        buttonText="Get Started"
        buttonHref="/about"
      />
    </>
  );
};

export default Home;
