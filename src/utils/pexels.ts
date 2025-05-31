// utils/pexels.ts
import { apiFetch } from './api';

export interface PexelsPhoto {
  id: number;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  src: {
    original: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

export const fetchPexelsPhotos = async (
  page: number,
  perPage: number
): Promise<PexelsPhoto[]> => {
  const res = await apiFetch(`/curated?page=${page}&per_page=${perPage}`);
  const data = await res.json();
  return data.photos as PexelsPhoto[];
};

export const fetchPhotoById = async (id: string): Promise<PexelsPhoto> => {
  const res = await apiFetch(`/photos/${id}`);
  return res.json();
};
