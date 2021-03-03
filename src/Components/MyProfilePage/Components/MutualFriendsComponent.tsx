import React from 'react';
import { Link } from 'react-router-dom';
import IMutualFriendComponent from '../Types/IMutualFriendComponent';
import SectionComponent from '../../Global/Section/Section';

const MutualFriendsComponent = ({ name }: IMutualFriendComponent): JSX.Element => (
    <SectionComponent header="Mutual Friends" style={{ width: '100%' }} className='margin-between-sections'>
        <div className='mutual-friends-container'>
            <p>You have <Link to='#'>19 friends</Link> in common with {name}.</p>
        </div>
    </SectionComponent>
);

export default MutualFriendsComponent;