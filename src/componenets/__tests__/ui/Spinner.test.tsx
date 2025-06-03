import { render, screen } from '@testing-library/react';
import Spinner from '../../ui/Spinner';

describe('Spinner', () => {
  it('renders a spinner element', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toBeInTheDocument();
  });
});
