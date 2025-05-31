import React from 'react';
import { type PexelsPhoto } from '../../utils/pexels';
import styles from './List.module.scss';
import { Link } from 'react-router-dom';


interface  ListItemProps  {
  photo: PexelsPhoto;
};

const ListItem: React.FC<ListItemProps> = ({ photo }) => {
  const aspectRatio = (photo.height / photo.width) * 100;

  return (
    <Link to={`/photo/${photo.id}`} state={{ photo }} className={styles.item}>
      <div key={photo.id} className={styles.item}>
        <div
          className={styles.placeholder}
          style={{ paddingTop: `${aspectRatio}%` }}
        >
          <img
            src={photo.src.medium}
            alt={photo.alt}
            className={styles.image}
            loading='lazy'
          />
        </div>
        <div className={styles.caption}>
          <p>{photo.photographer}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
