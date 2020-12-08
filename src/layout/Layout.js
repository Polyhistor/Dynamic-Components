import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex: wrap column;
  justify-content: center;
  align-items: center;

  border: 2px dotted #ffc600;
  padding: 2rem;
  margin-top: 1rem;
`;

export default ({ children }) => <Container>{children}</Container>;
