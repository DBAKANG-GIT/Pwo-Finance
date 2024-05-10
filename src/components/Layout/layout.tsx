import NavbarSimple from '../Navbar/navbar';
import { FooterWithLogo } from '../Footer/footer';
import logo from '../../assets/logo.png';
const navItems = [
  { text: 'Blog', href: '/blog' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Services', href: '/services' },
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
      <NavbarSimple items={navItems} />
      <main>{children}</main>
      <FooterWithLogo logo={logo} items={footerItems}></FooterWithLogo>
    </>
  );
};

export default Layout;
