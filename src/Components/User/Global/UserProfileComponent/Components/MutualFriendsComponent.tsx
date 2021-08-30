import React from 'react';
import IMutualFriendComponent from '../Types/IMutualFriendComponent';
import SectionComponent from '../../../../Global/Section/Section';

const MutualFriendsComponent = ({ accountInfo, mutualFriendsNumber }: IMutualFriendComponent): JSX.Element => {
    const { name } = accountInfo;

    return (
        <SectionComponent header="Mutual Friends" style={{ width: '100%' }} className='margin-between-sections'>
            <div className='mutual-friends-container'>
                <p>You have <strong>{mutualFriendsNumber} {mutualFriendsNumber === 1 ? 'friend' : 'friends'}</strong> in common with {name}.</p>
            </div>
        </SectionComponent>
    );
}

export default MutualFriendsComponent;