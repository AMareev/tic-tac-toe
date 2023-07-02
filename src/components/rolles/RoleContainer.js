import React from 'react';
import RolesLayout from "./RolesLayout";

const RoleContainer = ({ setCurrentTurn}) => {
    const roles = ['X', '0'];

    const onClickRole = (r) => {
        setCurrentTurn(() =>  r )
    }

    return (
        <>
            <RolesLayout
            roles = {roles}
            onClickRole = {onClickRole}
            />
        </>
    );
};

export default RoleContainer;