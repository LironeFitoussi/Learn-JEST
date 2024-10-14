import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import IconButtons from './comp4';  // Make sure this matches your actual file name

test('find svg elements', () => {
  render(<IconButtons />);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);

  const svgs = document.querySelectorAll('svg');
  expect(svgs).toHaveLength(2);

  buttons.forEach((button) => {
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});