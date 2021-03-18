import React from 'react';
import IDisplayGroups from '../Types/IDisplayGroups';
import { groupProfile } from '../../../Utils/routes.json';
import { Link } from 'react-router-dom';

const DisplayGroupsUserBelongTo = ({ groupList }: IDisplayGroups): JSX.Element => (
    <div className='groups-container'>
        {groupList.map(({ id, name, photo }) =>
            <Link key={`${name}${id}`} to={`/app${groupProfile.href}/${id}`}>
                <div>
                    <img src={photo} alt={name} />
                    <p>{name}</p>
                </div>
            </Link>)}
    </div>
);

export default DisplayGroupsUserBelongTo;