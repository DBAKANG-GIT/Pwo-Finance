import { Typography } from '@material-tailwind/react';
import { SocialLinks } from '../Social-Link/social-link';
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
    <footer className="w-full bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />

      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-20" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {items.map((item) => (
            <li key={item.text}>
              <Typography
                as="a"
                href={item.href}
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                {item.text}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="socialAndCopyrightHolder"
        className="flex flex-col lg:flex-col gap-5 justify-between items-center"
      >
        <SocialLinks />
        <Typography
          color="blue-gray"
          className="text-center font-normal  lg:mt-0"
        >
          &copy; PWO Finances
        </Typography>
      </div>
      <hr className="my-8 border-blue-gray-50" />
    </footer>
  );
}
