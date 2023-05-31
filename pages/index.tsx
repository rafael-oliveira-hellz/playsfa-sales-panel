import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
`;

export default function Home() {
  return (
    <Card>
      <Heading>EM MANUTENÇÃO!!!</Heading>
    </Card>
  );
}
