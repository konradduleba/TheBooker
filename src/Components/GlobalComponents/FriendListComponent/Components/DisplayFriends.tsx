import React from 'react';
import IRandomPerson from '../Types/IRandomPerson';

const DisplayFriends = (friendList: IRandomPerson[]): JSX.Element => (
    <>
        {friendList.map(({ ID, name, photo }: IRandomPerson) => <div key={`${name}${ID}`}>
            <img src={photo} alt={`${name}`} />
            <p>{name}</p>
        </div>)}
    </>
);

export default DisplayFriends;