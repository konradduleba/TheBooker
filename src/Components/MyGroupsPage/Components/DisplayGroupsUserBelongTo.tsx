import React from 'react';
import IDisplayGroups from '../Types/IDisplayGroups';

const DisplayGroupsUserBelongTo = ({ groupList }: IDisplayGroups): JSX.Element => (
    <div className='groups-container'>
        {groupList.map(({ ID, name, photo }) => <div key={`${name}${ID}`}>
            <img src={photo} alt={name} />
            <p>{name}</p>
        </div>)}
    </div>
);

export default DisplayGroupsUserBelongTo;