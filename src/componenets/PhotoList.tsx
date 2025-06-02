import React, { useEffect, useRef, useState } from 'react';
import { Grid } from './ui/Card';
import Spinner from './ui/Spinner';
import { fetchPexelsPhotos, type PexelsPhoto } from '../utils/pexels';
import ListItem from './PhotoListItem';
import { useIntersectionObserver } from '../utils/virtualization';
import styled from 'styled-components';

const Loader = styled.div`
  height: 1px;
`;

const BATCH_SIZE = 10;

const PhotoList: React.FC = () => {
  const [photos, setPhotos] = useState<PexelsPhoto[]>([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useIntersectionObserver(loaderRef);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isIntersecting) {
      setPage((prev) => prev + 1);
      setIsLoading(true);
    }
  }, [isIntersecting]);

  useEffect(() => {
    const loadPhotos = async () => {
      const newPhotos = await fetchPexelsPhotos(page, BATCH_SIZE);
      setIsLoading(false);
      setPhotos((prev) => [...prev, ...newPhotos]);
    };

    loadPhotos();
  }, [page]);

  return (
    <Grid>
      {isLoading && <Spinner />}
      {photos.map((photo, index) => (
        <ListItem key={`${photo.id}-${index}`} photo={photo} />
      ))}
      <Loader ref={loaderRef} />
    </Grid>
  );
};

export default PhotoList;
