import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPhotoById, type PexelsPhoto } from '../../DAL/pexels';
import Spinner from '../ui/Spinner';
import { Image } from '../ui/Image';

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const MainPageLink = styled(Link)`
  display: block;
  width: 100px;
  padding: 0.5rem 1rem;
  background: #eee;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem auto;
  text-align: center;
  text-decoration: none;
  color: black;

  &:hover {
    background: #ddd;
  }
`;

const LoadingWrapper = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Meta = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #444;
  text-align: left;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.25rem 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  background: #f3f3f3;
  padding: 1rem;
  border-radius: 8px;
`;


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

  return (
    <Container>
      <MainPageLink to="/">Main Page</MainPageLink>
      {loading && (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      )}
      {!!photo && (
        <>
          <Meta>
            <h2>{photo.alt || 'Untitled Photo'}</h2>
            <p>
              <strong>Photographer:</strong> {photo.photographer}
            </p>
            <p>
              <strong>Dimensions:</strong> {photo.width} × {photo.height}
            </p>
            <p>
              <strong>ID:</strong> {photo.id}
            </p>
          </Meta>
          <ImageWrapper>
            <Image
              src={photo.src.medium}
              srcSet={`
                ${photo.src.small} 480w,
                ${photo.src.medium} 800w,
                ${photo.src.large} 1200w
              `}
              alt={photo.alt}
              loading="lazy"
            />
          </ImageWrapper>
        </>
      )}
    </Container>
  );
};

export default PhotoDetails;
