import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MoreNames from './comp3';

test('shows an email and search input', () => {
    render(<MoreNames />);
  
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByRole('textbox', { name: /password/i });
  
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
});

