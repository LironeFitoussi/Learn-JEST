import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoleExample from './comp1';

test('can find elements by role', () => {
    render(<RoleExample />);
  
    const roles = [
      'link',
      'button',
      'contentinfo',
      'heading',
      'banner',
      'img',
      'checkbox',
      'spinbutton',
      'radio',
      'textbox',
      'listitem',
      'list'
    ];
  
    for (let role of roles) {
      const el = screen.getByRole(role);
      expect(el).toBeInTheDocument();
    }
});
