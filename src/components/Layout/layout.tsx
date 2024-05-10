import NavbarSimple from '../Navbar/navbar';
import { FooterWithLogo } from '../Footer/footer';
import logo from '../../assets/PWO_logo.jpg';
const navbarItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/service' },
  { text: 'Contact', href: '/contact-us' },
  { text: 'Blog', href: '/blog' },

  // ... other items
];

const footerItems = [
  {
    text: 'About',
    href: '/about',
  },
  { text: 'Privacy Notice', href: '/privacy' },
  { text: 'Contact', href: '/contact-us' },
];

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  // useDocumentTitle(title);

  return (
    <>
      <NavbarSimple items={navbarItems} />
      {/* <main>{children}</main> */}
      {/* <FooterWithLogo logo={logo} items={footerItems}></FooterWithLogo> */}
    </>
  );
};

export default Layout;
