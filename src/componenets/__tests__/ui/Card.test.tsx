import { render, screen } from '@testing-library/react';
import { Card } from '../../ui/Card';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });
});
