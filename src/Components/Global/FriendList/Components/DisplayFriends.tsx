import React from 'react';
import IDisplayFriends from '../Types/IDisplayFriends';
import IRandomPerson from '../Types/IRandomPerson';

const DisplayFriends = ({ friendList }: IDisplayFriends): JSX.Element => (
    <>
        {friendList.map(({ ID, name, photo }: IRandomPerson) => <div key={`${name}${ID}`}>
            <img src={photo} alt={`${name}`} />
            <p>{name}</p>
        </div>)}
    </>
);

export default DisplayFriends;