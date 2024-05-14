import React from 'react';
import { Button } from '@material-tailwind/react';
import AboutSection from '../components/About-section/about-section';

const About: React.FC = () => {
  return (
    <>
      <div
        id="header-container"
        className="flex flex-col md:flex-row items-start md:items-center"
      >
        <div id="header-text" className="md:w-1/2">
          {/* Text section on the left */}
          <h1 className="text-black text-4xl font-normal font-semibold leading-loose tracking-tight capitalize m-8 mb-0">
            Welcome to PWO Finance
          </h1>
        </div>

        <div id="header-paragraph-button" className="md:w-1/2 m-8">
          <p className="text-base font-normal leading-loose text-lightGrey mb-4">
            At PWO Finance, we believe in unlocking the potential of UK property
            investments through specialized mortgage solutions. Our mission is
            to empower investors and developers with the financial resources
            they need to succeed in the competitive real estate market.
          </p>
          <Button className="w-full md:w-auto bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Get Started
          </Button>
        </div>
      </div>

      <div className="hidden md:block">
        {' '}
        {/* Image section on the right */}
        <img
          src="https://s3-alpha-sig.figma.com/img/58e1/eb6c/53ec43cb22645ab8cc63a0dc55ff39ce?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qr0s4hr3Kbm18xvUgsb-eYiHt1BMQpNFt6v5U~IsxCsc~4dBbQixMSwk6kHVCetzYDd8niINSwRu592FX1vA1PnGxBTqNQgVlzSeF5NyhgP9e7TsB2-JkmtsRTSt5SzOfM1oms5jOya5ecV2VQI9z1qHokhVMobC9uhiS9Tdr5RRrqRwv4zq77XNSYFRQuxTrUpNW4r~z5wr5V4Sub-r6T0nelvG~UeA3V6HzvhlOlcZy1IcGH06yAgSqWFQuC6kW97GYzslHfwujCcfxSlwI9sUmSQPZyuh8gjrajGR3pJgi8D-Lxfci4bcDJ69Tee0fPqPomTdVHIALP7ynK00hA__"
          alt="Decorative"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <section>
        <AboutSection
          number="01"
          title="Our Story"
          iconColor="#F9A526"
          content="Founded in [year], PWO Finance has been a trusted partner for clients navigating the complexities of property financing. Our journey began with a vision to revolutionize the mortgage brokerage industry by providing tailored solutions and personalized service."
        />
        <AboutSection
          number="02"
          title="Meet Our Team"
          iconColor="#26F93B"
          content="At PWO Finance, our team is the heart of our business. Comprised of seasoned experts in the mortgage industry, each member brings a unique set of skills and experience to the table. From mortgage advisors to financial analysts, our team is dedicated to providing exceptional service and guidance every step of the way."
        />
        <AboutSection
          number="03"
          title="Our Approach"
          iconColor="#26F9BA"
          content={`We believe in simplifying the mortgage process for our clients. Our approach is straightforward:
            Timely Communication: Prompt responses and regular updates throughout the process.
            Personalized Service: Tailored support and guidance from experienced professionals.
            Comprehensive Solutions: Customized mortgage options to meet your specific needs.
            Expert Advice: Access to industry expertise for informed decision-making.`}
        />
      </section>
    </>
  );
};

export default About;
