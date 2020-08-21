import React from 'react';

import About from './components/About'
import Dash from './components/Dash'

import styled from "styled-components"

const AppContainer = styled.div`
  background: black;
`

const Title = styled.h1`
  margin: 0 auto 1.5rem;
  text-align: center;
  height: 5rem;
  padding-top: 1.5rem;
  color: white;
`;

const Container = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
        <Title>The Game of Life</Title>
        <Container>
          <Dash />
          <About />
        </Container>
    </AppContainer>
  );
}

export default App;
