import React, {useEffect, useState} from 'react';
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

export default ModalContainer;