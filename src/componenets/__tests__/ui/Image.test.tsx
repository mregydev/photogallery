import { render, screen } from '@testing-library/react';
import { Image } from '../../ui/Image';

test('renders image with correct alt text and src', () => {
  render(<Image src="https://example.com/photo.jpg" alt="Sample Photo" />);
  
  const img = screen.getByAltText('Sample Photo');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg');
});
