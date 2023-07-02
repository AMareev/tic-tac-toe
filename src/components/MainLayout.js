import React from 'react';

const MainLayout = ({ scoreX, scoreZ, winnerName, currentTurn }) => {
    return (
        <>
            <div>Текущий ход {currentTurn}</div>
            <div>scoreX = {scoreX}</div>
            <div>scoreZ = {scoreZ}</div>
            <div>Пам пам{winnerName ? `Победили ${winnerName}` : ''}</div>
        </>
    );
};

export default MainLayout;