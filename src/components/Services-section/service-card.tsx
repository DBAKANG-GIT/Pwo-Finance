import { useEffect, useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import { Service } from './services';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = service.image;
  }, [service.image]);

  return (
    <div className="p-6 shadow-lg rounded-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:opacity-90">
      <div className="relative w-full h-48 lg:h-64">
        {' '}
        {/* Add a parent div with a specific width and height */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            {' '}
            {/* Center the spinner */}
            <Spinner color="light-blue" />
          </div>
        )}
        <img
          src={service.image}
          alt={service.title}
          className={`mb-4 w-full h-full object-cover rounded ${
            isLoaded ? 'visible' : 'invisible'
          }`} // Use the 'invisible' class to hide the image while it's loading
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      </div>
      <h3 className="text-xl font-semibold my-4">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};
