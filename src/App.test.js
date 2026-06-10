import { render, screen } from '@testing-library/react';
import App from './App';

test('renders parody link', () => {
  render(<App />);
  const linkElement = screen.getByText(/What this website is intended to be/i);
  expect(linkElement).toBeInTheDocument();
});
