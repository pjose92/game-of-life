import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";

// const ControlDiv = styled.div`
// display: flex;
// margin: 2rem;
// justify-content: center;
// `;

// const ButtonDiv = styled.div`
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border-radius: 3px;
// `;

// const RangeDiv = styled.div`
//   margin: 1rem auto 0;
// `;

// const Controls = (props) => {
//   const {
//     isActive,
//     handlePlay,
//     handleClear,
//     handleRandom,
//     speed,
//     handleSpeed,
//     handleNext,
//   } = props;

const Button = styled.button`
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  margin: 20px;
`

const Control = styled.div`
  .dropDown {
    background: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 8px;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
    margin: 20px;
  }
`

class Buttons extends React.Component{
  handleSelect = (e) => {
    this.props.gridSize(e)
  }

  render() {
    return (
      <div className="center">
          <Button onClick={this.props.playButton}>Play</Button>
          <Button onClick={this.props.pauseButton}>Pause</Button>
          <Button onClick={this.props.slow}>Slow</Button>
          <Button onClick={this.props.fast}>Fast</Button>
          <Button onClick={this.props.clear}>Clear</Button>
          <Button onClick={this.props.seed}>Seed</Button>
          
          <DropdownButton
            className="dropDown"
            title="Grid Size"
            // id="dropdown-basic-button"
            onSelect={this.handleSelect}
          >

            
            <Dropdown.Item eventKey="1" className="sizeButton"> 15x15, </Dropdown.Item>
            <Dropdown.Item eventKey="2" className="sizeButton"> 25x25, </Dropdown.Item>
            <Dropdown.Item eventKey="3" className="sizeButton"> 40x30, </Dropdown.Item>
            <Dropdown.Item eventKey="4" className="sizeButton"> 55x40 </Dropdown.Item>
          </DropdownButton>
      </div>
      // <ControlDiv>
      //   <ButtonDiv>
      //     <Button onClick={handlePlay}>{isActive ? "Stop" : "Start"}</Button>
      //     <Button onClick={handleNext}>Next</Button>
      //     <Button onClick={handleClear}>Clear</Button>
      //     <Button onClick={handleRandom}>Random</Button>
      //   </ButtonDiv>
      //   <RangeDiv>
      //     <label for="speed">Speed</label>
      //     <input
      //       name="speed"
      //       type="range"
      //       // list="seconds"
      //       min="100"
      //       max="3000"
      //       value={speed}
      //       onChange={handleSpeed}
      //     />
      //   </RangeDiv>
      // </ControlDiv>
    )
  }
}

export default Buttons;