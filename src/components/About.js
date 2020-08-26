import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import styled from 'styled-components'

const AboutDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem;
`

const About = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);

    return (
        <AboutDiv> 
            <div>
                <Button onClick={toggle1}>
                    The Game
                </Button>
                <Modal isOpen={isOpen1}>
                    <ModalHeader toggle={toggle1}>The Game</ModalHeader>
                    <ModalBody>
                        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns">
                            wikipedia: Conway's Game of Life
                        </a>
                        <br />
                        The Game of Life is a cellular automaton devised by Dr John Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
                    </ModalBody>
                </Modal>
            </div>

            <div>
                <Button onClick={toggle2}>
                    The Rules
                </Button>
                <Modal isOpen={isOpen2}>
                    <ModalHeader toggle={toggle2}>The Game</ModalHeader>
                    <ModalBody>
                        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns">
                            wikipedia: Conway's Game of Life
                        </a>
                        <br />
                        <ol>
                            <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                            <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                            <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                            <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                        </ol>
                    </ModalBody>
                </Modal>
            </div>

            <div>
                <Button onClick={toggle3}>
                    The Game Controls
                </Button>
                <Modal isOpen={isOpen3}>
                    <ModalHeader toggle={toggle3}>The Game</ModalHeader>
                    <ModalBody>
                        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns">
                            wikipedia: Conway's Game of Life
                        </a>
                        <br />
                        The Game of Life is a cellular automaton devised by Dr John Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
                    </ModalBody>
                </Modal>
            </div>
            
        </AboutDiv>
    )
}
export default About;