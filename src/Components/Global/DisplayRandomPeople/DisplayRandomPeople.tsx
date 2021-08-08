import React from 'react';
import IDisplayRandomPeople from './Types/IDisplayRandomPeople';
import { people } from '../../../Routes/Utils/routes.json';
import { Link } from 'react-router-dom';

const DisplayRandomPeople = ({ inviteList, acceptInvite }: IDisplayRandomPeople): JSX.Element => (
    <div className='requests-container'>
        {inviteList.map(({ id, name, picture, lastname, username }) => <div key={`${name}${id}`} className='single-request'>
            <div className='credentials-container'>
                <img src={picture} alt={name} />
                <div className='credentials'>
                    <p>{name} {lastname}</p>
                    {/* {birthday && <p>{birthday}</p>}
                    {school && <p>{school}</p>} */}
                </div>
            </div>
            <div className='invite-options'>
                <Link to={`/app${people.href}/${username}`}>
                    <button className='normal-button'>View Profile</button>
                </Link>
                <button className='normal-button' onClick={() => acceptInvite(username)}>Accept Invite</button>
                <button className='normal-button'>Remove Invite</button>
            </div>
        </div>)}
    </div>
);

export default DisplayRandomPeople;