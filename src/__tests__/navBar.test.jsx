import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Nav/navBar';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );

    expect(screen.getByAltText('less than Icon')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Crypto Info')).toBeInTheDocument();
    expect(screen.getByAltText('Mic Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Setting Icon')).toBeInTheDocument();
    
  });

});
