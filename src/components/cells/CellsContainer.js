import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CellsLayout from "./CellsLayout";


const CellsContainer = (
    {
        setScoreZ,
        setScoreX,
        currentTurn,
        setCurrentTurn,
        checkWinner,
        setCellsState,
        cellsState
    }
) => {


    const onCLickCell = (index) => {
        setCellsState((prevState) => {
            prevState[index] = currentTurn;
            return [...prevState]
        });
        currentTurn === 'X' && setScoreX((old) => [...old, index])
        currentTurn === '0' && setScoreZ((old) => [...old, index])

        setCurrentTurn((prevTurn) => prevTurn === 'X' ? '0' : 'X')
    }


    useEffect(() => {
        const xCount = cellsState.filter((item) => item === 'X').length
        const zCount = cellsState.filter((item) => item === '0').length

        if (xCount < 3 && zCount < 3) return;

        currentTurn === '0' && checkWinner('X');
        currentTurn === 'X' && checkWinner('Z');



    }, [cellsState, checkWinner, currentTurn])


    return (
        <>
            <CellsLayout
                currentTurn={currentTurn}
                cellsState={cellsState}
                onCLickCell={onCLickCell}
            />
        </>
    );
};
CellsContainer.propTypes = {
    cellsState: PropTypes.array,
    setCellsState: PropTypes.func,
    setScoreZ: PropTypes.func,
    setScoreX: PropTypes.func,
    currentTurn: PropTypes.string,
    setCurrentTurn: PropTypes.func,
    checkWinner: PropTypes.func,
};
export default CellsContainer;
