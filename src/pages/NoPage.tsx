import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'; // Example icon import

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-lightPink flex flex-col items-center justify-center min-h-screen text-center">
      <ExclamationCircleIcon className="h-24 w-24 text-gray-800 mb-4" />
      <Typography
        variant="h1"
        className="text-6xl font-bold text-gray-800 mb-4"
      >
        404
      </Typography>
      <Typography
        variant="h2"
        className="text-4xl font-semibold text-gray-800 mb-4"
      >
        Page Not Found
      </Typography>
      <Typography className="font-normal text-lg text-gray-800 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Button
        className="w-full md:w-auto bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        onClick={() => navigate('/', { replace: true })}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
