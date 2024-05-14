import Hero from './hero';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Hero component', () => {
  it('renders the title, subtitle,  and button text', () => {
    const props = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      buttonText: 'Test Button',
      image: '',
    };
    cy.mount(
      <Router>
        <Hero
          title={props.title}
          subtitle={props.subtitle}
          buttonText={props.buttonText}
          image=""
        />
      </Router>
    );
    cy.get('h1').should('contain', props.title);
    cy.get('p').should('contain', props.subtitle);
    cy.get('a').should('contain', props.buttonText);
  });
});
