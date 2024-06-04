import NavbarSimple from '../Navbar/navbar';
import { FooterWithLogo } from '../Footer/footer';
import logo from '../../assets/logo.png';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useEffect } from 'react';
const navItems = [
  { text: 'About', href: '/about-us' },
  { text: 'Services', href: '/services' },
  { text: 'Contact', href: '/contact-us' },
];

const footerItems = [
  {
    text: 'About',
    href: '/about-us',
  },
  { text: 'Privacy Notice', href: '/privacy-policy' },
  { text: 'Contact', href: '/contact-us' },
];

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  useDocumentTitle({ title });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title]);
  return (
    <>
      <NavbarSimple items={navItems} />
      <main>{children}</main>
      <FooterWithLogo logo={logo} items={footerItems}></FooterWithLogo>
    </>
  );
};

export default Layout;
