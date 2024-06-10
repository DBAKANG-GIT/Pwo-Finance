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
          target="_blank"
          rel="noopener noreferrer"
        >
          Website by David Akang
        </Typography>
        <hr className="my-8 border-blue-gray-50" />

        {Caveat()}
      </div>

      <hr className="my-8 border-blue-gray-50" />
    </footer>
  );

  function Caveat() {
    return (
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Investing in real estate carries risks, and there is a possibility of
          losing money and other assets. If you have any uncertainties regarding
          property investments or unregulated mortgages offered by us, we
          strongly advise you to seek guidance from a regulated professional who
          specializes in providing advice on such services.
        </p>
      </div>
    );
  }
}
