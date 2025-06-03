import { render, screen } from '@testing-library/react';
import { Grid } from '../../ui/Grid';

test('renders the grid with content', () => {
  render(<Grid>Photo Grid Content</Grid>);
  expect(screen.getByText('Photo Grid Content')).toBeInTheDocument();
});
