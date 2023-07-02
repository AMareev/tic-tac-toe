import React from 'react';
import s from './Cells.module.css';

const CellsLayout = ({cellsState, onCLickCell}) => {

    return (
        <>
            <div className={s.cellContainer}>

                {cellsState.map((text,index) =>
                    <div className={s.cells}
                            onClick={() => onCLickCell(index)}
                            key={index}
                            id={s[index+1]}
                    >
                        {text}
                    </div>
                )}

            </div>
        </>
    );
};

export default CellsLayout;