import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders School dashboard heading', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders login text in App-body', () => {
    render(<App />);
    const loginText = screen.getByText(/login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  test('renders copyright text in App-footer', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`Copyright ${currentYear} - holberton School`, 'i'));
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders Holberton logo image', () => {
    render(<App />);
    const logoImage = screen.getByAltText(/holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });
}); 