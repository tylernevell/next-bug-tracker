import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Home from '../pages';

test('it should render the title', () => {
  render(<Home />);
  const linkElement = screen.getByText(/bug tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('it creates a new bug', () => {
  render(<Home />);
  const inputElement = screen.getByTestId('newBugDescription');
  userEvent;
});
