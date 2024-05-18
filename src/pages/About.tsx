import React from 'react';
import { Button } from '@material-tailwind/react';
import AboutSection from '../components/About-section/about-section';
import image from '../assets/about.jpg';
const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto ">
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
              At PWO Finance, we believe in unlocking the potential of UK
              property investments through specialized mortgage solutions. Our
              mission is to empower investors and developers with the financial
              resources they need to succeed in the competitive real estate
              market.
            </p>
            <Button className="w-full md:w-auto bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Get Started
            </Button>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 gap-10">
          <section className="lg:col-span-2">
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
              content={`We believe in simplifying the mortgage process for our clients. Our approach is straightforward:Timely Communication: Prompt responses and regular updates throughout the process. Personalized Service: Tailored support and guidance from experienced professionals. Comprehensive Solutions: Customized mortgage options to meet your specific needs. Expert Advice: Access to industry expertise for informed decision-making.`}
            />
          </section>

          <div className="hidden lg:block lg:col-span-2 h-full">
            {/* Image section on the right */}
            <div className="p-6 bg-[#f3e6de] rounded-[25px] shadow-md relative overflow-hidden custom-shape">
              <img
                src={image}
                alt="Decorative"
                className="w-full h-full object-cover rounded-[20px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
