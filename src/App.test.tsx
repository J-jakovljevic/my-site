import { render, screen } from '@testing-library/react';
import App from './App';

it('renders heading', () => {
  render(<App />);
  const text = screen.getByText(/Hello World!/i);
  expect(text).toBeTruthy();
});
