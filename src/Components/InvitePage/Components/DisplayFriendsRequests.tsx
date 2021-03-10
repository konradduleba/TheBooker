import React from 'react';
import IDisplayFriendsRequests from '../Types/IDisplayFriendsRequests';
import { people } from '../../../Utils/routes.json';
import { Link } from 'react-router-dom';

const DisplayFriendsRequests = ({ inviteList }: IDisplayFriendsRequests): JSX.Element => (
    <div className='requests-container'>
        {inviteList.map(({ id, name, photo, birthday, school }) => <div key={`${name}${id}`} className='single-request'>
            <div className='credentials-container'>
                <img src={photo} alt={name} />
                <div className='credentials'>
                    <p>{name}</p>
                    {birthday && <p>{birthday}</p>}
                    {school && <p>{school}</p>}
                </div>
            </div>
            <div className='invite-options'>
                <Link to={`/app${people.href}/${id}`}>
                    <button className='normal-button'>View Profile</button>
                </Link>
                <button className='normal-button'>Accept Invite</button>
                <button className='normal-button'>Remove Invite</button>
            </div>
        </div>)}
    </div>
);

export default DisplayFriendsRequests;