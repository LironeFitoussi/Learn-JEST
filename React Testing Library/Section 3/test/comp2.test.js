import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibleComponent from './comp2';

test('can select by accessible name', () => {
    render(<AccessibleComponent />);
  
    const submit = screen.getByRole('button', { name: /submit/i });
    const cancel = screen.getByRole('button', { name: /cancel/i });
  
    expect(submit).toBeInTheDocument();
    expect(cancel).toBeInTheDocument();
});
