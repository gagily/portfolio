import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/portfolio logo/i)
  expect(logoElement).toBeInTheDocument();
});
