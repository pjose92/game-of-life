import React from 'react';

import About from './components/About'
import Game from './components/Game'

import styled from "styled-components"

const AppContainer = styled.div`
  background: white;
`

const Title = styled.h1`
  margin: 0 auto 1.5rem;
  text-align: center;
  height: 5rem;
  padding-top: 1.5rem;
  color: black;
`;


function App() {
  return (
    <AppContainer>
        <Title>The Game of Life</Title>
          <About />
            <Game/> 
    </AppContainer>
  );
}

export default App;
