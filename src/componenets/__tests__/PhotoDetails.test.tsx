import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import PhotoDetails from '../Photo/PhotoDetails';


vi.mock('../../DAL/pexels', async () => {
  const actual = await vi.importActual('../../DAL/pexels');
  return {
    ...actual,
    fetchPhotoById: vi.fn(),
  };
});


import { fetchPhotoById } from '../../DAL/pexels';


describe('PhotoDetails component', () => {
  const mockPhoto = {
    id: '123',
    alt: 'Test Photo',
    photographer: 'John Doe',
    width: 800,
    height: 600,
    src: {
      small: 'small.jpg',
      medium: 'medium.jpg',
      large: 'large.jpg',
    },
  };

  beforeEach(() => {
    (fetchPhotoById as ReturnType<typeof vi.fn>).mockResolvedValue(mockPhoto);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  function renderWithRouter(id: string) {
    return render(
      <MemoryRouter initialEntries={[`/photo/${id}`]}>
        <Routes>
          <Route path="/photo/:id" element={<PhotoDetails />} />
          <Route path="/" element={<div>Main Page</div>} />
        </Routes>
      </MemoryRouter>
    );
  }


  it('renders photo details after loading', async () => {
    renderWithRouter('123');

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /test photo/i })).toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();

    const img = screen.getByRole('img', { name: /test photo/i });
    expect(img).toHaveAttribute('src', 'medium.jpg');
    expect(img).toHaveAttribute('alt', 'Test Photo');
  });

  it('renders main page link', async () => {
    renderWithRouter('123');
    await waitFor(() => screen.getByText('John Doe'));

    const link = screen.getByRole('link', { name: /main page/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('handles fetch error gracefully', async () => {
    (fetchPhotoById as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('Failed to fetch'));

    renderWithRouter('404');

    await waitFor(() => expect(screen.queryByTestId('spinner')).not.toBeInTheDocument());

    expect(screen.queryByText(/Photographer:/)).not.toBeInTheDocument();
    expect(screen.queryByTestId('photo-image')).not.toBeInTheDocument();
  });
});
