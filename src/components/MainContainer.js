import React, {useState} from 'react';
import MainLayout from "./MainLayout";
import CellsContainer from "./cells/CellsContainer";
import ModalContainer from "./modal/ModalContainer";

const MainContainer = () => {
    const [scoreX, setScoreX] = useState([]);
    const [scoreZ, setScoreZ] = useState([]);
    const [currentTurn, setCurrentTurn] = useState('X');
    const [winner, setWinner] = useState('');
    const cells = Array(9).fill().map(_ => '');
    const [cellsState, setCellsState] = useState(cells)

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
        // console.log(scoreZ)
        if (gamer === 'X') {
            setWinner(() => {
                if (VICTORY_NUMBERS.some((condition) =>
                    condition.every((c) =>
                        scoreX.includes(c)))) {
                    return 'Крестики'
                } else if (scoreX.length === 5) {
                    return 'Ничья'
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
                setCellsState={setCellsState}
                cells={cells}
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
                cellsState={cellsState}
                setCellsState={setCellsState}
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
