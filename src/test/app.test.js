import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

// Test rendering Home components
it('Should renders Home title', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/Denis React Calculator/);
  expect(headerText).toBeInTheDocument();
});

it('Should renders AC', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/AC/);
  expect(headerText).toBeInTheDocument();
});

it('Should renders =', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/=/);
  expect(headerText).toBeInTheDocument();
});
