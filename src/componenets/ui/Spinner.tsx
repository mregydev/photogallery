import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerCircle = styled.div`
  margin: 2rem auto;
  width: 32px;
  height: 32px;
  border-top: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

const Spinner: React.FC = () => {
  return (
    <Overlay>
      <SpinnerCircle />
    </Overlay>
  );
};

export default Spinner;
