import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BaseButton } from '../BaseButton';

describe('BaseButton', () => {
  it('renders the button with the correct title', () => {
    render(<BaseButton title="Login" />);

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', async () => {
    const handleClick = jest.fn();

    render(<BaseButton title="Login" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Login' });

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
