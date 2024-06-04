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
        To arrange a meeting with one of our expert mortgage advisers complete
        our enquiry form and we will call you back. Please note, by submitting
        this information you have given your agreement to receive verbal contact
        from us to discuss your mortgage requirements.
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
    </div>
  );
};

export default Contact;
