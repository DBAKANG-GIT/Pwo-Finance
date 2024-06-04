import { ContactHeader } from '@/components/contact-details/contact-details';
import ContactForm from '@/components/contact-form/contact-form';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="py-8 bg-lightPink flex flex-col items-center justify-center px-8 lg:py-16 mx-auto text-center relative">
      <ContactHeader title="Contact Form" subtitle="Get In Touch" />
      <br />
      <div className="max-w-xl w-full">
        <ContactForm formAction="/success" />
      </div>
      <Typography
        className="font-normal text-sm md:text-lg text-gray-800 text-left mt-8 max-w-xl mx-auto"
        style={{ whiteSpace: 'pre-line' }}
      >
        To arrange a meeting with one of our expert mortgage advisers, complete
        our enquiry form and we will call you back. Please note, by submitting
        this information, you have given your agreement to receive verbal
        contact from us to discuss your mortgage requirements.
        <br />
        <br />
        You voluntarily choose to provide personal details to us when submitting
        an enquiry. Your information is confidential and held in accordance with
        the appropriate data protection requirements. Read PWO Finance's{' '}
        <Link
          className="font-normal text-sm md:text-lg text-gray-800 underline hover:text-blue-600"
          to="/privacy-policy"
        >
          privacy policy
        </Link>
        .
      </Typography>
      <div className="mt-12 text-center max-w-xl w-full">
        <hr className="my-8 border-blue-gray-50" />

        <Typography variant="h5" className="text-gray-800 mb-4">
          Or reach us directly at:
        </Typography>
        <Typography variant="h6" className="text-gray-800 mb-2">
          Phone:{' '}
          <a
            href="tel:+441234567890"
            className="underline text-blue-600 hover:text-blue-800"
          >
            +44 1234 567890
          </a>
        </Typography>
        <Typography variant="h6" className="text-gray-800">
          Email:{' '}
          <a
            href="mailto:info@pwofinance.com"
            className="underline text-blue-600 hover:text-blue-800"
          >
            info@pwofinance.com
          </a>
        </Typography>
        <hr className="my-8 border-blue-gray-50" />
      </div>
    </div>
  );
};

export default Contact;
