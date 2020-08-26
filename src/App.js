import React from 'react';

import About from './components/About'
import Game from './components/Game'

import styled from "styled-components"

const AppContainer = styled.div`
  background: white;
`

const Title = styled.h1`
  margin: 1.5rem auto;
  text-align: center;
  height: 5rem;
  padding-top: 2rem;
  color: black;
  border: 1px solid black;
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
