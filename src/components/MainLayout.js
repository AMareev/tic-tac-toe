import React from 'react';
import s from "./Main.module.css";

const MainLayout = ({scoreX, scoreZ, winnerName, currentTurn}) => {

    console.log(scoreX)
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

export default MainLayout;