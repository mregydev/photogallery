import React from 'react';
import { type PexelsPhoto } from '../../DAL/pexels';
import { Card } from '../ui/Card';
import { AppLink } from '../ui/AppLink';
import {Image} from '../ui/Image';
import styled from 'styled-components';

export interface ListItemProps {
  photo: PexelsPhoto;
}

const Caption = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #444;
  
`;

const ListItem: React.FC<ListItemProps> = ({ photo }) => {
  return (
    <AppLink to={`/photo/${photo.id}`} state={{ photo }}>
      <Card>
        <Image
          src={photo.src.medium}
          alt={photo.alt}
          width={250}
          height={300}
          loading='lazy'
        />
        <Caption>
          <p>{photo.photographer}</p>
        </Caption>
      </Card>
    </AppLink>
  );
};

export default ListItem;
