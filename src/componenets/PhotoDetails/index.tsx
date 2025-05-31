import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPhotoById, type PexelsPhoto } from '../../utils/pexels';
import Spinner from '../Spinner';
import styles from './PhotoDetails.module.scss';

const PhotoDetails: React.FC = () => {
  const { id } = useParams();
  

  const [photo, setPhoto] = useState<PexelsPhoto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhoto = async () => {
      if (!id) return;

      try {
        const photoData = await fetchPhotoById(id);
        setPhoto(photoData);
      } catch (err) {
        console.error('Failed to fetch photo:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPhoto();
  }, [id]);

  if (loading) return <Spinner />;
  if (!photo) return <div className={styles.error}>Photo not found</div>;

  return (
    <div className={styles.details}>
      <Link to={"/"} className={styles.mainPageLink}>Main Page</Link>

      <div className={styles.imageWrapper}>
        <img src={photo.src.large} alt={photo.alt} className={styles.image} />
      </div>

      <div className={styles.meta}>
        <h2>{photo.alt || 'Untitled Photo'}</h2>
        <p><strong>Photographer:</strong> {photo.photographer}</p>
        <p><strong>Dimensions:</strong> {photo.width} × {photo.height}</p>
        <p><strong>ID:</strong> {photo.id}</p>
      </div>
    </div>
  );
};

export default PhotoDetails;
