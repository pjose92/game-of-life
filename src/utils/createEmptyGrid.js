const createEmptyGrid = (gridSize) => {
    const grid = [];
    for (let i = 0; i < gridSize; i++) {
        const col = [];
        for(let j = 0; j < gridSize; j++) {
            col.push(0);
        }
        grid.push(col);
    }
    return grid;
}

export default createEmptyGrid;