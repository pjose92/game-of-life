import React from 'react';
import styled from 'styled-components'

const GridDiv = styled.div`
    display: grid;
    background: white;
    max-width: 600px;
    margin: 0 auto;
`

const CellDiv = styled.div`
    width: 12px;
    height: 12px;
    border: solid 1px black;
`

function Grid(props) {
    const { grid, clickCell } = props;

    return (
        <GridDiv style={{ gridTemplateColumns: `repeat(${grid[0].length}, 12px)` }}>
            {grid.map((rows, rowId) =>
            rows.map((col, colId) => (
                <CellDiv
                    key={`${rowId}-${colId}`}
                    onClick={() => clickCell(rowId, colId)}
                    style={{
                        backgroundColor: grid[rowId][colId] ? "yellow" : undefined,
                    }}
                />
            ))
            )}
        </GridDiv>
    )
}

export default Grid;