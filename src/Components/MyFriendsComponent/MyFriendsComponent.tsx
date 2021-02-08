import React from 'react';
import FriendListComponent from '../GlobalComponents/FriendListComponent/FriendListComponent';
import './MyFriendsComponent.scss';

const MyFriendsComponent = (): JSX.Element => (
    <section className='my-friends-wrapper section-component'>
        <FriendListComponent />
    </section>
);

export default MyFriendsComponent;