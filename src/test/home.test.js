import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

it('Should render Home title', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/WELCOME TO MATH MAGICIAN/);
  expect(headerText).toBeInTheDocument();
});

it('Should render Home body', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/Where all the magic happens!/);
  expect(headerText).toBeInTheDocument();
});