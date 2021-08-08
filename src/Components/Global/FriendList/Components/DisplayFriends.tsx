import React from 'react';
import IDisplayFriends from '../Types/IDisplayFriends';
import IRandomPerson from '../Types/IRandomPerson';

const DisplayFriends = ({ friendList }: IDisplayFriends): JSX.Element => (
    <>
        {friendList.map(({ id, name, lastname, picture, username }: IRandomPerson) => <div key={id}>
            <img src={picture} alt={`${name} ${lastname}`} />
            <p>{name} {lastname}</p>
        </div>)}
    </>
);

export default DisplayFriends;