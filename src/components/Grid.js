import React from 'react';
import Box from "../utils/useBox"
// import styled from 'styled-components'

class Grid extends React.Component{
    render() {
        const width = (this.props.cols * 16)+1;
        let rowArr = [];

        let boxClass = "";
        
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++){
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
                rowArr.push(
                    <Box
                        boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                )
            }
        }
        return (
            <div className="grid" style={{width: width}}>
                {rowArr}
            </div>
        )
    }
}

export default Grid; 