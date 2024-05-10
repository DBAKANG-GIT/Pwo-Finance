import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';

interface NavItem {
  text: string;
  href: string;
}

interface NavListProps {
  items: NavItem[];
}

function NavList({ items }: NavListProps) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {items.map((item) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
          key={item.text}
        >
          <a
            href={item.href}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {item.text}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  // About, Services, Contact, Blog
  const navItems = [
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Services', href: '/services' },
  ];
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 pt-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={logo} alt="logo-ct" className="w-24" />
        <div className="hidden lg:block">
          <NavList items={navItems} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList items={navItems} />
      </Collapse>
    </Navbar>
  );
}
