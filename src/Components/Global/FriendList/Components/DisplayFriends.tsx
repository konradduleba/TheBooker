import React from 'react';
import { Link } from 'react-router-dom';
import IDisplayFriends from '../Types/IDisplayFriends';
import IRandomPerson from '../Types/IRandomPerson';

const DisplayFriends = ({ friendList }: IDisplayFriends): JSX.Element => (
    <>
        {friendList.map(({ id, name, lastname, picture, username }: IRandomPerson) => <Link to={`/app/people/${username}`} key={id}>
            <img src={picture} alt={`${name} ${lastname}`} />
            <p>{name} {lastname}</p>
        </Link>)}
    </>
);

export default DisplayFriends;