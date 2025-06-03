import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLink } from '../../ui/AppLink';

describe('AppLink', () => {
  it('renders a link with the correct role', () => {
    render(
      <MemoryRouter>
        <AppLink to="/test">Go to Test</AppLink>
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /go to test/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
});
