import React from 'react';
import Grid from './Grid'
import Buttons from './Controls'

import './game.css'

class Game extends React.Component {
    constructor() {
        super();
        //setting the default of speed, rows and cols when first opening page
        //speed is set to 1 sec 
        this.speed = 100;
        //row and cols are set to 10x10 
        this.rows = 10;
        this.cols = 10;
        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    //when selecting box this happens
    // selects box on row or col 
    selectBox = (row, col) => {
        let gridCop = arrayClone(this.state.gridFull);
        gridCop[row][col] = !gridCop[row][col];
        this.setState({
            gridFull: gridCop
        })
    }

    //random boxes "cells" on grid 
    seed = () => {
        let gridCop = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                if(!gridCop[i][j]){
                    if ( Math.floor(Math.random() * 3) === 1){
                        gridCop[i][j] = true;
                    }
                }
                else {
                    gridCop[i][j] = false;
                }
            }
        }
        this.setState({
            gridFull: gridCop,
            generation: 0
        });
        clearInterval(this.intervalId)
    }

    playButton = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed);
    }

    pauseButton = () => {
        clearInterval(this.intervalId)
    }

    slow = () => {
        this.speed = 400;
        this.playButton();
    }

    fast = () => {
        this.speed = 100;
        this.playButton();
    }

    // resets/clears grid and generation count
    clear = () => {
        let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        this.setState({
            gridFull: grid,
            generation: 0
        })
        clearInterval(this.intervalId)
    }

    // setting different grid size options
    gridSize = (size) => {
        switch (size){
            case "1":
                this.cols = 15;
                this.rows = 15;
                break;
            case "2":
                this.cols = 25;
                this.rows = 25;
                break;
            case "3":
                this.cols = 40;
                this.rows = 30;
                break;
            default:
                this.cols = 55;
                this.rows = 40
        }
        this.clear();
    }

    //without this play won't work. 
    // this is setting for cells to start generating
    play = () => {
        let a = this.state.gridFull;
        let a2 = arrayClone(this.state.gridFull);

        for (let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                let count = 0

                if (i > 0) if (a[i - 1][j]) count++;
                if (i > 0 && j > 0) if (a[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (a[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (a[i][j + 1]) count++;
                if (j > 0) if (a[i][j - 1]) count++;
                if (i < this.rows - 1) if (a[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (a[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && j < this.cols - 1) if (a[i + 1][j + 1]) count++;
                
                if (a[i][j] && (count < 2 || count > 3)) a2[i][j] = false;
                if (!a[i][j] && count === 3) a2[i][j] = true;
            }
        }
        this.setState({
            gridFull: a2,
            generation: this.state.generation + 1
        })
    }
    render() {
        return (
            <div>
                <Buttons 
                    playButton = {this.playButton}
                    pauseButton = {this.pauseButton}
                    slow = {this.slow}
                    fast = {this.fast}
                    clear = {this.clear}
                    seed = {this.seed}
                    gridSize = {this.gridSize}
                />
                <Grid 
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        )
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

export default Game;