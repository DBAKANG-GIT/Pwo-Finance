import React from 'react';
import EllipseIcon from '../Icon/EllipseIcon';

interface AboutSectionProps {
  number: string;
  title: string;
  iconColor: string;
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  number,
  title,
  content,
  iconColor,
}) => {
  const [initialSentence, ...bulletPoints] = content.split('\n');

  return (
    <div className="bg-white p-6 my-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="relative flex items-center justify-center w-20 h-20 sm:w-40 sm:h-40">
        <EllipseIcon
          color={iconColor}
          className="absolute w-full h-full fill-current"
        />
        <span className="relative z-10 text-[#343434] text-4xl font-normal font-semibold leading-none tracking-wide capitalize ">
          {number}
        </span>
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-xl text-gray-800 font-semibold">{title}</h2>
        <p className="mt-2 text-[#595959] leading-174 capitalize">
          {initialSentence}
        </p>
        <ul className="mt-2 text-[#595959] leading-174 capitalize list-disc list-inside">
          {bulletPoints.map((point, index) => (
            <li className="my-1" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
