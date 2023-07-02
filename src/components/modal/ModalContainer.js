import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ModalLayout from "./ModalLayout";

const ModalContainer = (
    {
        winner,
        setCurrentTurn,
        setScoreX,
        setScoreZ,
        setWinner,
        setCellsState, cells
    }
) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const closeBtn = () => {
        setCurrentTurn(() => 'X');
        setScoreZ(() => []);
        setScoreX(() => []);
        setWinner(() => '');
        setCellsState(() => cells)
        closeModal()
    }

    useEffect(() => {
        if (winner) openModal();

    }, [winner])

    return (
        <>
            {modalIsOpen &&
                <ModalLayout
                    winner={winner}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    closeBtn={closeBtn}
                />
            }

        </>
    );
};
ModalContainer.propTypes = {
    setCellsState: PropTypes.func,
    cells: PropTypes.array,
    winner: PropTypes.string,
    setCurrentTurn: PropTypes.func,
    setScoreX: PropTypes.func,
    setScoreZ: PropTypes.func,
    setWinner: PropTypes.func
};
export default ModalContainer;
