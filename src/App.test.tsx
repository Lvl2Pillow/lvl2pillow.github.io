import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the header', () => {
    render(<App />);
    expect(screen.getByText(/Get started/i)).toBeInTheDocument();
  });

  it('increments counter on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent(/count is 1/i);
  });
});
