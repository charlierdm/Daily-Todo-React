import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from './Header'

it('renders the header', () => {
  render(<Header />);
  expect(screen.getByText('Daily Todo List')).toBeInTheDocument();
})