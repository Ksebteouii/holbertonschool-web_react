import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright 2024 - Holberton School/)).toBeInTheDocument();
  });
});
