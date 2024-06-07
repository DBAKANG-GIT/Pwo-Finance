import React from 'react';
import { Link } from 'react-router-dom';
interface HeroProps {
  title: string;
  subtitle: string;
  video: string; // Add a new prop for the image
  buttonText: string;
  buttonHref: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  video,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={video}
          autoPlay
          poster="https://d3epydxhc58hrf.cloudfront.net/Hero-Page.webp"
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full"
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">{title} </h1>
        <p className="text-lg text-gray-300 mb-8">{subtitle} </p>
        <Link
          to={buttonHref}
          className="bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... py-2 px-6 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          {buttonText}{' '}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
