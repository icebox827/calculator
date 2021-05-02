import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

// Test rendering Home components
it('Should renders Home title', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/Welcome to Math Magician/);
  expect(headerText).toBeInTheDocument();
});

it('Should renders Home body', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua./);
  expect(headerText).toBeInTheDocument();
});