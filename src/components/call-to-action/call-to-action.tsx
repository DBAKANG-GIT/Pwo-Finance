import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export function CallToAction() {
  const navigate = useNavigate();
  return (
    <div className="py-12 text-center w-full">
      <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
      <p className="text-gray-700 mb-6">
        Contact us today to discuss your property financing needs and discover
        how we can help you achieve your investment goals.
      </p>
      <Button
        className="bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        onClick={() => navigate('/contact-us')}
      >
        Contact Us
      </Button>
    </div>
  );
}

export default CallToAction;
