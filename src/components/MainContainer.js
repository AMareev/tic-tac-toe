import React, {useState} from 'react';
import MainLayout from "./MainLayout";
import CellsContainer from "./cells/CellsContainer";
import ModalContainer from "./modal/ModalContainer";

const MainContainer = () => {
    const [scoreX, setScoreX] = useState([]);
    const [scoreZ, setScoreZ] = useState([]);
    const [currentTurn, setCurrentTurn] = useState('X');
    const [winner, setWinner] = useState('');

    const VICTORY_NUMBERS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = (gamer) => {
        if (gamer === 'X') {
            setWinner(() => {
                if (VICTORY_NUMBERS.some((condition) =>
                    condition.every((c) =>
                        scoreX.includes(c)))) {
                    return 'Крестики'
                }
            })

        } else if (gamer === 'Z') {
            setWinner(() => {
                if (VICTORY_NUMBERS.some((condition) =>
                    condition.every((c) =>
                        scoreZ.includes(c)))) {
                    return 'Нолики'
                }
            })
        }
    }


    return (
        <>
            <ModalContainer
                setWinner={setWinner}
                winner={winner}
                setScoreX={setScoreX}
                setScoreZ={setScoreZ}
                setCurrentTurn={setCurrentTurn}

            />
            <MainLayout
                currentTurn={currentTurn}
                scoreX={scoreX}
            />
            <CellsContainer
                winner={winner}
                checkWinner={checkWinner}
                setCurrentTurn={setCurrentTurn}
                currentTurn={currentTurn}
                setScoreZ={setScoreZ}
                setScoreX={setScoreX}
            />
        </>
    );
};

export default MainContainer;