import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

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

class Buttons extends React.Component{
  handleSelect = (e) => {
    this.props.gridSize(e)
  }

  render() {
    return (
      <div className="center">
          <button onClick={this.props.playButton}>Play</button>
          <button onClick={this.props.pauseButton}>Pause</button>
          <button onClick={this.props.slow}>Slow</button>
          <button onClick={this.props.fast}>Fast</button>
          <button onClick={this.props.clear}>Clear</button>
          <button onClick={this.props.seed}>Seed</button>
          <DropdownButton 
            tittle="Size"
            id="dropdown-basic-button"
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