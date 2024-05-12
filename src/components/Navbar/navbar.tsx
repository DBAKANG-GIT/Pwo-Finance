import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

// Interface for each navigation item
interface NavItem {
  text: string;
  href: string;
}

// Props for the NavList component
interface NavListProps {
  items: NavItem[];
}

// Component for rendering the navigation list
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
          <Link
            to={item.href}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {item.text}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

// Component for rendering the simple navbar
export default function NavbarSimple({ items }: NavListProps) {
  const [openNav, setOpenNav] = React.useState(false);

  // Function to handle window resize event
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full px-6 pt-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <img src={logo} alt="logo-ct" className="w-24" />
        </Link>
        <div className="hidden lg:block">
          <NavList items={items} />
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
        <NavList items={items} />
      </Collapse>
    </Navbar>
  );
}
