import styled from "styled-components";

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