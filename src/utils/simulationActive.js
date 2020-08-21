import createEmptyGrid from './createEmptyGrid'

export const getNeigh = (x, y, gridSize) => {
    return [
        [x -1, y -1],
        [x, y -1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
    ].filter((item) => {
        return (
            item[0] >= 0 && item[0] < gridSize && item[1] >= 0 && item[1] < gridSize
        )
    })
}

//checking live neighbors
export const liveNeigh = (grid, x, y, gridSize) => {
    return getNeigh(x, y, gridSize).filter(
        (e) => grid[e[0]][e[1]] === 1,
    ).length;
}

//next gen of grid
export const nextGen = (grid, gridSize) => {
    let newGrid = createEmptyGrid(gridSize);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const alive = liveNeigh(grid, i, j, gridSize);
            const cell = grid[i][j];
            newGrid[i][j] = alive === 3 || (alive === 2 && cell===1) ? 1 : 0;
        }
    }
    return newGrid;
}

//will generate random grid
export const randomGrid = (grid) =>
    grid.map((row) => row.map((cell) => Math.round(Math.random())));