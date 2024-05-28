import { Typography } from '@material-tailwind/react';
import { SocialLinks } from '../Social-Link/social-link';
import { Link } from 'react-router-dom';

interface FooterItem {
  text: string;
  href: string;
}

interface FooterWithLogoProps {
  logo: string;
  items: FooterItem[];
}

export function FooterWithLogo({ logo, items }: FooterWithLogoProps) {
  return (
    <footer className="w-full bg-white p-4 lg:p-8">
      <hr className="my-8 border-blue-gray-50" />

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link to="/">
          <img src={logo} alt="logo-ct" className="w-20 lg:w-24" />
        </Link>

        <ul className="flex flex-col lg:flex-row flex-wrap items-center gap-y-2 gap-x-8 lg:gap-x-12">
          {items.map((item) => (
            <li key={item.text}>
              <Link
                to={item.href}
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center">
          <SocialLinks />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Typography color="blue-gray" className="font-normal">
          &copy; PWO Finances
        </Typography>
        <Typography
          as="a"
          href="https://porfoliowebpage.netlify.app/"
          color="blue-gray"
          className="font-normal"
        >
          Website by David Akang
        </Typography>
      </div>

      <hr className="my-8 border-blue-gray-50" />
    </footer>
  );
}
