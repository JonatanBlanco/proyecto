// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZOOMARKET title', () => {
  render(<App />);
  const titleElement = screen.getByText(/ZOOMARKET/i); // Cambia el texto a buscar
  expect(titleElement).toBeInTheDocument();
});