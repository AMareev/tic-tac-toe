import React from 'react';
import s from './Roles.module.css'

const RolesLayout = ({onClickRole, roles}) => {
    return (
        <>
            <div className={s.header}>
                <div>Choose you role</div>
                <button
                    onClick={ () => onClickRole(roles[0])} key={roles[0]}
                >
                    {roles[0]}
                </button>
                <button onClick={ () => onClickRole(roles[1])} key={roles[1]}>{roles[1]}</button>

            </div>
        </>
    );
};

export default RolesLayout;