import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../components/Quote';

// Test rendering Home components
it('Should renders Home title', () => {
  const { getByText } = render(<Quote />);
  const headerText = getByText(/Math Magician/);
  expect(headerText).toBeInTheDocument();
});

it('Should renders Home body', () => {
  const { getByText } = render(<Quote />);
  const headerText = getByText(/Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. –William Paul Thurston/);
  expect(headerText).toBeInTheDocument();
});