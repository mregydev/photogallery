import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../utils/virtualization';
import { fetchPexelsPhotos, type PexelsPhoto } from '../../utils/pexels';
import ListItem from './ListItem';
import styles from './List.module.scss';
import Spinner from '../Spinner';

const BATCH_SIZE = 10;

const List: React.FC = () => {
  const [photos, setPhotos] = useState<PexelsPhoto[]>([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useIntersectionObserver(loaderRef);
  const [isLoading,setIsLoading]=useState(true)
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
    <div className={styles.grid}>
      {isLoading && (
        <h2>
          <Spinner />
        </h2>
      )}
      {photos.map((photo, index) => (
        <ListItem key={`${photo.id}-${index}`} photo={photo} />
      ))}
      <div ref={loaderRef} className={styles.loader} />
    </div>
  );
};

export default List;
