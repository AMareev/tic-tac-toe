import React, {useState, useEffect} from 'react';
import CellsLayout from "./CellsLayout";
const CellsContainer = ({ setScoreZ, setScoreX, currentTurn, setCurrentTurn,
                             setWinner, checkWinner, winner}) => {


    const cells = Array(9).fill().map(_ => '');
    const [cellsState, setCellsState] = useState(cells)


    const onCLickCell = (index) => {
            setCellsState((prevState) => {
                prevState[index] = currentTurn;
                return [...prevState]
            });

        currentTurn === 'X' ?  setScoreX((old) => [...old, index]) : setScoreZ((old) => [...old, index]);

        setCurrentTurn((prevTurn) => prevTurn === 'X' ? '0' : 'X')
    }



    useEffect(() => {
        const xCount = cellsState.filter((item) => item === 'X').length
        const zCount = cellsState.filter((item) => item === '0').length

        if (xCount >=3 && currentTurn === '0') checkWinner('X');
        if (zCount >=3 && currentTurn === 'X') checkWinner('Z');

    }, [cellsState])


    return (
        <>
            <CellsLayout
                currentTurn = {currentTurn}
                cellsState={cellsState}
                onCLickCell={onCLickCell}
            />
        </>
    );
};

export default CellsContainer;