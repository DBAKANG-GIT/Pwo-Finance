import { useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import { Service } from './services';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="p-6 shadow-lg rounded-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:opacity-90">
      {!isLoaded && <Spinner />}{' '}
      {/* Display the spinner while the image is loading */}
      <img
        src={service.image}
        alt={service.title}
        // loading="lazy"
        className="mb-4 w-full h-48 object-cover rounded"
        onLoad={() => setIsLoaded(true)} // Set isLoaded to true when the image loads
        onError={() => setIsLoaded(true)} // Set isLoaded to true when the image fails
        style={{ display: isLoaded ? 'block' : 'none' }} // Hide the image while it's loading
      />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};
