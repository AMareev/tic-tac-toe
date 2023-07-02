import React from 'react';
import PropTypes from 'prop-types';
import s from "./Main.module.css";

const MainLayout = ({scoreX, currentTurn}) => {

    return (
        <>
            <div className={s.header}>
                <div>
                    {scoreX.length === 0 ? 'Первыми ходят' : 'Сейчас ходят'}
                </div>
                <div className={s.turn}>{currentTurn === 'X' ? 'Крестики' : 'Нолики'}</div>
            </div>
        </>
    );
};
MainLayout.propTypes = {
  scoreX: PropTypes.array,
  currentTurn: PropTypes.string
};
export default MainLayout;