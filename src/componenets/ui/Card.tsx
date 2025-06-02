import styled from 'styled-components';

export const Grid = styled.div`
  column-count: 1;
  column-gap: 1rem;
  padding: 1rem;

  @media (min-width: 600px) {
    column-count: 2;
  }

  @media (min-width: 900px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }
`;

export const Card = styled.div`
  break-inside: avoid;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  width: 250px;
  display: block;
  margin-bottom: 10px;
  background: #f9f9f9;
  padding:10px;
`;
