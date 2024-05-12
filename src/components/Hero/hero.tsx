import React from 'react';
interface HeroProps {
  title: string;
  subtitle: string;
  image: string; // Add a new prop for the image
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, buttonText }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">{title} </h1>
        <p className="text-lg text-gray-300 mb-8">{subtitle} </p>
        <a
          href="#"
          className="bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... py-2 px-6 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          {buttonText}{' '}
        </a>
      </div>
    </div>
  );
};

export default Hero;
