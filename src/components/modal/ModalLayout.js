import React from 'react';
import PropTypes from 'prop-types';
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
ModalLayout.propTypes = {
    closeBtn: PropTypes.func,
    modalIsOpen: PropTypes.bool,
    winner: PropTypes.string
}
export default ModalLayout;