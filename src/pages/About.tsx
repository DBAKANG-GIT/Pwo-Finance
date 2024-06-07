import React from 'react';
import { Button } from '@material-tailwind/react';
import AboutSection from '../components/About-section/about-section';
import { useNavigate } from 'react-router-dom';
import Reviews from '../components/Review-section/reviews';
import CallToAction from '@/components/call-to-action/call-to-action';
const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-lightPink min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div
          id="header-container"
          className="flex flex-col md:flex-row items-start md:items-center mb-8"
        >
          <div id="header-text" className="md:w-1/2">
            {/* Text section on the left */}
            <h1 className="text-black text-4xl font-normal font-semibold leading-loose tracking-tight capitalize mb-4">
              Welcome to PWO Finance
            </h1>
          </div>

          <div id="header-paragraph-button" className="md:w-1/2">
            <p className="text-base font-normal leading-loose text-lightGrey mb-4">
              Unlock the potential of UK property investments with our
              specialized mortgage solutions.
            </p>
            <Button
              className="w-full md:w-auto bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              onClick={() => navigate('/contact-us')}
            >
              Get In Contact
            </Button>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 gap-6">
          <section className="lg:col-span-2 mb-8 lg:mb-0">
            <AboutSection
              number="01"
              title="Our Story"
              iconColor="#F9A526"
              content="Founded in 2019, PWO Finance has been a trusted partner in property financing. Our vision is to revolutionize the mortgage industry with tailored solutions and personalized service."
            />
            <AboutSection
              number="02"
              title="Meet Our Team"
              iconColor="#26F93B"
              content="Our expert team, from advisors to analysts, is dedicated to providing exceptional service and guidance."
            />
            <AboutSection
              number="03"
              title="Our Approach"
              iconColor="#26F9BA"
              content="We believe in timely communication, personalized service, comprehensive solutions, and expert advice."
            />
            <AboutSection
              number="04"
              title="Complex Mortgages"
              iconColor="#F92672"
              content="We offer specialized loans to help investors and developers finance property investments and projects. These include bridging finance, development finance, commercial finance, and property portfolio financing. Complex mortgages come with higher risks and fees, so expert guidance is essential."
            />
            <AboutSection
              number="05"
              title="Our Specialties"
              iconColor="#F9C526"
              content="At PWO Finance, we specialize in property financing, bridging finance, development finance, commercial mortgages, buy-to-let properties, and infrastructure development."
            />
          </section>

          <div className="lg:col-span-2 h-full">
            {/* Image section on the right */}
            <div className="p-6 bg-[#f3e6de] rounded-[25px] shadow-md relative overflow-hidden custom-shape">
              <img
                src="https://d3epydxhc58hrf.cloudfront.net/shard.webp"
                alt="Cityscape"
                className="w-full h-full object-cover rounded-[20px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* Google Reviews Section */}
        <Reviews />

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
};

export default About;
