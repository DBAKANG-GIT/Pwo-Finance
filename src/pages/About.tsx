import React from 'react';
import { Button } from '@material-tailwind/react';

const About: React.FC = () => {
  return (
    <>
      <section
        id="welcome-section"
        className="flex flex-col justify-between mt-14 mx-7 "
      >
        <h1 className="text-black text-4xl font-normal font-semibold leading-loose tracking-tight capitalize ">
          Welcome to PWO Finance
        </h1>
        <p className="text-base font-normal leading-loose text-lightGrey">
          At PWO Finance, we believe in unlocking the potential of UK property
          investments through specialized mortgage solutions. Our mission is to
          empower investors and developers with the financial resources they
          need to succeed in the competitive real estate market.
        </p>
        <Button className="mt-2 w-1/2 bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
          Get Started
        </Button>

        {/* Add your content here */}
        {/* remove the fancy stuff here for mobile  */}
      </section>
    </>
  );
};

export default About;
