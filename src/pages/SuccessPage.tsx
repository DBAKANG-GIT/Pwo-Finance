import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-lightPink flex flex-col items-center justify-center min-h-screen text-center">
      <div className="max-w-xl w-full">
        <Typography
          variant="h2"
          className="text-4xl font-semibold text-gray-800 mb-4"
        >
          Thank You!
        </Typography>
        <Typography className="font-normal text-lg text-gray-800 mb-8">
          Your enquiry has been successfully submitted. Our team will get back
          to you soon.
        </Typography>
        <Button
          className="w-full md:w-auto bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
