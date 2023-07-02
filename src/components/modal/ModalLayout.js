import React from 'react';
import s from './Modal.module.css'

const ModalLayout = ({closeBtn, modalIsOpen, winner}) => {
    return (
        <>
            <div className={modalIsOpen ? `${s.modal} ${s.active}` : s.modal}>
                <div className={modalIsOpen ? `${s.modalContent} ${s.active}` : s.modalContent}>
                    <div>Победили {winner}</div>
                    <button onClick={closeBtn}>Начать заново</button>
                </div>
            </div>
        </>
    );
};

export default ModalLayout;