import React, { useState } from "react";
import produce from 'immer';
import Grid from "./Grid";
import Controls from "./Controls";

import createEmptyGrid from '../utils/createEmptyGrid';
import {nextGen, randomGrid} from '../utils/simulationActive'

import styled from 'styled-components';

const GenP = styled.p`
    text-align: center;
    font-size: 2rem;
    margin: 1rem;
`

const gridSize = 50;

function Dashboard(props) {
    const [grid, setGrid] = useState(() => createEmptyGrid(gridSize));
    const [generation, setGeneration] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [speed, setSpeed] = useState(1000);

    const handleCellClick = (row, col) => {
        const newGrid = produce(grid, (gridCopy) => {
            gridCopy[row][col] = grid[row][col] ? 0 : 1;
        });
        if(!isActive) {
            setGrid(newGrid);
        }
    }

    //handlers
    const handlePlay = () => {
        setIsActive(!isActive);
    };

    const handleClear = () => {
        setGrid(createEmptyGrid(gridSize));
        setGeneration(0)
    };

    const handleRandom = () => {
        setGrid(randomGrid);
    }

    const handleSpeed = (e) => {
        setSpeed(e.target.value);
    };

    const handleNext = () => {
        const updateGrid = nextGen(grid, gridSize);
        setGrid(updateGrid);
        setGeneration(generation + 1);
    }

    // interval 

  return (
    <div>
      <Controls
        isActive={isActive}
        handlePlay={handlePlay}
        handleClear={handleClear}
        handleRandom={handleRandom}
        speed={speed}
        handleSpeed={handleSpeed}
        handleNext={handleNext}
      />
      <GenP>Generation: {generation}</GenP>
      <Grid grid={grid} handleCellClick={handleCellClick} />

    </div>
  );
}

export default Dashboard;