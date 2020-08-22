import React from "react";
import {ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";

// const ControlDiv = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 20px;
//   background: white;
// `;

// const ButtonDiv = styled.div`
//   width: 35%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0 auto;
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
      <div>
        <div>
          <button onClick={this.props.playButton}>Play</button>
          <button onClick={this.props.pauseButton}>Pause</button>
          <button onClick={this.props.slowButton}>Slow</button>
          <button onClick={this.props.fastButton}>Fast</button>
          <button onClick={this.props.clearButton}>Clear</button>
          <button onClick={this.props.seedButton}>Seed</button>
          <DropdownButton 
            tittle="Size"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1" className="sizeButton"> [ 40x25 ] </Dropdown.Item>
            <Dropdown.Item eventKey="2" className="sizeButton"> [ 50x35 ] </Dropdown.Item>
            <Dropdown.Item eventKey="3" className="sizeButton"> [ 60x45 ] </Dropdown.Item>
            <Dropdown.Item eventKey="4" className="sizeButton"> [ 70x50 ] </Dropdown.Item>
          </DropdownButton>
        </div>
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