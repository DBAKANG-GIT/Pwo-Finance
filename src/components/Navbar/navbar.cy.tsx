// FILEPATH: cypress/component/NavList.spec.js

import NavbarSimple from './navbar'; // adjust the path as needed
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavList', () => {
  const navItems = [
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Services', href: '/services' },
  ];

  beforeEach(() => {
    cy.mount(
      <Router>
        <NavbarSimple items={navItems} />
      </Router>
    );
  });

  it('renders correctly', () => {
    cy.get('ul').should('have.class', 'my-2');
  });

  it('displays the correct text for each item', () => {
    cy.viewport('macbook-16');
    navItems.forEach((item) => {
      cy.contains('li', item.text);
    });
  });
});
