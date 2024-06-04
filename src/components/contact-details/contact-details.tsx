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
    </section>
  );
}
