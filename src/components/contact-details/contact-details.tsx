import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface ContactHeaderProps {
  title: string;
  subtitle: string;
}

export function ContactHeader({ title, subtitle }: ContactHeaderProps) {
  return (
    <section id="contact-header">
      <Typography
        variant="h5"
        color="blue-gray"
        className="mb-4 text-base lg:text-2xl"
      >
        {title}
      </Typography>
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-4 !text-3xl lg:!text-5xl"
      >
        {subtitle}
      </Typography>

      <Typography
        className="font-normal !text-sm md:!text-lg mx-auto max-w-3xl !text-gray-500 text-left"
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
          className="font-normal !text-sm md:!text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500 text-left underline hover:text-blue-400"
          to="/privacy-policy"
        >
          privacy policy
        </Link>
      </Typography>
    </section>
  );
}
