import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ModalLayout from "./ModalLayout";

const ModalContainer = ({winner, setCurrentTurn, setScoreX, setScoreZ, setWinner}) => {

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
    winner: PropTypes.string,
    setCurrentTurn: PropTypes.func,
    setScoreX: PropTypes.func,
    setScoreZ: PropTypes.func,
    setWinner: PropTypes.func
};
export default ModalContainer;