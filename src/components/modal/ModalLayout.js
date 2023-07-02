import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css'

const ModalLayout = ({closeBtn, modalIsOpen, winner}) => {
    return (
        <>
            <div className={s.modal}>
                <div className={s.modalContent}>
                    <div>{winner === 'Ничья' ? winner : `Победили ${winner}`}</div>
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
